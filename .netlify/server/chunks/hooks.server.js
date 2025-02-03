import { r as redirect } from "./index2.js";
import { b as base, a as building, p as private_env } from "./internal.js";
import { skipCSRFCheck, setEnvDefaults as setEnvDefaults$1, createActionURL, Auth, raw, isAuthAction } from "@auth/core";
import { B as BROWSER } from "./index3.js";
import { parse } from "set-cookie-parser";
import "@auth/core/errors";
import CredentialsProvider from "@auth/core/providers/credentials";
import "@auth/drizzle-adapter";
import { eq } from "drizzle-orm";
import { u as users } from "./users.js";
import { d as db } from "./index.js";
import * as dotenv from "dotenv";
const dev = BROWSER;
function setEnvDefaults(envObject, config) {
  config.trustHost ??= dev;
  config.basePath = `${base}/auth`;
  config.skipCSRFCheck = skipCSRFCheck;
  if (building)
    return;
  setEnvDefaults$1(envObject, config);
}
async function signIn$1(provider, options = {}, authorizationParams, config, event) {
  const { request, url: { protocol } } = event;
  const headers = new Headers(request.headers);
  const { redirect: shouldRedirect = true, redirectTo, ...rest } = options instanceof FormData ? Object.fromEntries(options) : options;
  const callbackUrl = redirectTo?.toString() ?? headers.get("Referer") ?? "/";
  const signInURL = createActionURL("signin", protocol, headers, private_env, config);
  if (!provider) {
    signInURL.searchParams.append("callbackUrl", callbackUrl);
    if (shouldRedirect)
      redirect(302, signInURL.toString());
    return signInURL.toString();
  }
  let url = `${signInURL}/${provider}?${new URLSearchParams(authorizationParams)}`;
  let foundProvider = {};
  for (const providerConfig of config.providers) {
    const { options: options2, ...defaults } = typeof providerConfig === "function" ? providerConfig() : providerConfig;
    const id = options2?.id ?? defaults.id;
    if (id === provider) {
      foundProvider = {
        id,
        type: options2?.type ?? defaults.type
      };
      break;
    }
  }
  if (!foundProvider.id) {
    const url2 = `${signInURL}?${new URLSearchParams({ callbackUrl })}`;
    if (shouldRedirect)
      redirect(302, url2);
    return url2;
  }
  if (foundProvider.type === "credentials") {
    url = url.replace("signin", "callback");
  }
  headers.set("Content-Type", "application/x-www-form-urlencoded");
  const body = new URLSearchParams({ ...rest, callbackUrl });
  const req = new Request(url, { method: "POST", headers, body });
  const res = await Auth(req, { ...config, raw });
  for (const c of res?.cookies ?? []) {
    event.cookies.set(c.name, c.value, { path: "/", ...c.options });
  }
  if (shouldRedirect) {
    return redirect(302, res.redirect);
  }
  return res.redirect;
}
async function signOut$1(options, config, event) {
  const { request, url: { protocol } } = event;
  const headers = new Headers(request.headers);
  headers.set("Content-Type", "application/x-www-form-urlencoded");
  const url = createActionURL("signout", protocol, headers, private_env, config);
  const callbackUrl = options?.redirectTo ?? headers.get("Referer") ?? "/";
  const body = new URLSearchParams({ callbackUrl });
  const req = new Request(url, { method: "POST", headers, body });
  const res = await Auth(req, { ...config, raw });
  for (const c of res?.cookies ?? [])
    event.cookies.set(c.name, c.value, { path: "/", ...c.options });
  if (options?.redirect ?? true)
    return redirect(302, res.redirect);
  return res;
}
async function auth(event, config) {
  setEnvDefaults(private_env, config);
  config.trustHost ??= true;
  const { request: req, url: { protocol } } = event;
  const sessionUrl = createActionURL("session", protocol, req.headers, private_env, config);
  const request = new Request(sessionUrl, {
    headers: { cookie: req.headers.get("cookie") ?? "" }
  });
  const response = await Auth(request, config);
  const authCookies = parse(response.headers.getSetCookie());
  for (const cookie of authCookies) {
    const { name, value, ...options } = cookie;
    event.cookies.set(name, value, { path: "/", ...options });
  }
  const { status = 200 } = response;
  const data = await response.json();
  if (!data || !Object.keys(data).length)
    return null;
  if (status === 200)
    return data;
  throw new Error(data.message);
}
const authorizationParamsPrefix = "authorizationParams-";
function SvelteKitAuth(config) {
  return {
    signIn: async (event) => {
      if (building)
        return;
      const { request } = event;
      const _config = typeof config === "object" ? config : await config(event);
      setEnvDefaults(private_env, _config);
      const formData = await request.formData();
      const { providerId: provider, ...options } = Object.fromEntries(formData);
      const authorizationParams = {};
      const _options = {};
      for (const key in options) {
        if (key.startsWith(authorizationParamsPrefix)) {
          authorizationParams[key.slice(authorizationParamsPrefix.length)] = options[key];
        } else {
          _options[key] = options[key];
        }
      }
      await signIn$1(provider, _options, authorizationParams, _config, event);
    },
    signOut: async (event) => {
      if (building)
        return;
      const _config = typeof config === "object" ? config : await config(event);
      setEnvDefaults(private_env, _config);
      const options = Object.fromEntries(await event.request.formData());
      await signOut$1(options, _config, event);
    },
    async handle({ event, resolve }) {
      if (building) {
        event.locals.auth ??= async () => null;
        event.locals.getSession ??= event.locals.auth;
        return resolve(event);
      }
      const _config = typeof config === "object" ? config : await config(event);
      setEnvDefaults(private_env, _config);
      const { url, request } = event;
      event.locals.auth ??= () => auth(event, _config);
      event.locals.getSession ??= event.locals.auth;
      const action = url.pathname.slice(
        // @ts-expect-error - basePath is defined in setEnvDefaults
        _config.basePath.length + 1
      ).split("/")[0];
      if (isAuthAction(action) && url.pathname.startsWith(_config.basePath + "/")) {
        return Auth(request, _config);
      }
      return resolve(event);
    }
  };
}
dotenv.config({ path: ".env" });
process.env.baseUrl;
const { handle, signIn, signOut } = SvelteKitAuth(async (event) => {
  const authOptions = {
    // adapter: DrizzleAdapter(db), // Use Drizzle's SQLite adapter
    providers: [
      // Credentials Provider
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "Username", type: "text" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
          const { username, password } = credentials;
          const user = await db.select().from(users).where(eq(users.username, username)).get();
          if (user) {
            return { id: user.id, name: user.name };
          }
          throw new Error("Invalid username or password");
        }
      })
    ],
    secret: process.env.AUTH_SECRET,
    trustHost: true,
    pages: {
      signIn: "/accounts/auth/login"
      // Custom sign-in page route
    },
    callbacks: {
      // Triggered after a successful sign-in
      async signIn({ user }) {
        console.log("User signed in:", user);
        return true;
      },
      // Customize the session object returned to the client
      async session({ session, user, token }) {
        if (user) {
          session.user = {
            id: user.id,
            name: user.name
          };
        }
        session.access_token = token.accessToken;
        return session;
      },
      // Redirect after sign-in
      async redirect({ url, baseUrl }) {
        return url.startsWith(baseUrl) ? url : `${baseUrl}/accounts/dashboard/profile`;
      }
    }
  };
  return authOptions;
});
export {
  handle
};
