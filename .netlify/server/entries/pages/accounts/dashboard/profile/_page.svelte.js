import { r as rest_props, f as fallback, i as spread_attributes, a as attr, j as ensure_array_like, d as slot, c as bind_props, p as pop, e as escape_html, k as sanitize_props, b as push, s as store_get, u as unsubscribe_stores } from "../../../../../chunks/index3.js";
import "../../../../../chunks/client.js";
import { p as page } from "../../../../../chunks/stores.js";
function SignIn($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "className",
    "provider",
    "signInPage",
    "options",
    "authorizationParams"
  ]);
  push();
  let className = fallback($$props["className"], "");
  let provider = fallback($$props["provider"], "");
  let signInPage = fallback($$props["signInPage"], "signin");
  let options = fallback($$props["options"], () => void 0, true);
  let authorizationParams = fallback($$props["authorizationParams"], () => void 0, true);
  const callbackUrl = options instanceof FormData ? options.get("redirectTo") : options?.redirectTo;
  const redirect = options instanceof FormData ? options.get("redirect") : options?.redirectTo;
  const authorizationParamsInputs = authorizationParams ? typeof authorizationParams === "string" && authorizationParams ? new URLSearchParams(authorizationParams) : authorizationParams : void 0;
  $$payload.out += `<form${spread_attributes({
    method: "POST",
    action: `/${signInPage}`,
    class: `signInButton ${className}`,
    ...$$restProps
  })}><input type="hidden" name="providerId"${attr("value", provider)}> `;
  if (callbackUrl) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<input type="hidden" name="callbackUrl"${attr("value", callbackUrl)}>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (redirect) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<input type="hidden" name="redirect"${attr("value", redirect)}>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (authorizationParamsInputs) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(Object.entries(authorizationParamsInputs));
    $$payload.out += `<!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let [key, value] = each_array[$$index];
      $$payload.out += `<input type="hidden"${attr("name", `authorizationParams-${key}`)}${attr("value", value)}>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (provider === "credentials") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "credentials", {}, null);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (provider === "email" || provider === "sendgrid" || provider === "resend") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "email", {}, () => {
      $$payload.out += `<label class="section-header"${attr("for", `input-email-for-${provider}-provider`)}>Email</label> <input id="input-email-for-email-provider" type="email" name="email" placeholder="email@example.com" required>`;
    });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <button type="submit"><!---->`;
  slot($$payload, $$props, "submitButton", {}, () => {
    $$payload.out += `Signin${escape_html(provider ? ` with ${provider}` : "")}`;
  });
  $$payload.out += `<!----></button></form>`;
  bind_props($$props, {
    className,
    provider,
    signInPage,
    options,
    authorizationParams
  });
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<div class="min-h-screen flex items-center justify-center bg-gray-100"><div class="bg-white shadow-md rounded-lg p-6 w-full max-w-md"><h1>SvelteKit Auth Example</h1> `;
  if (store_get($$store_subs ??= {}, "$page", page).data.session) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<span class="signedInText"><small>Signed in as</small><br> <strong>${escape_html(store_get($$store_subs ??= {}, "$page", page).data.session.user?.name ?? "User")}</strong></span> <button class="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded">Sign out</button>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<span class="notSignedInText">You are not signed in</span> `;
    SignIn($$payload, {
      $$slots: {
        submitButton: ($$payload2) => {
          $$payload2.out += `<div slot="submitButton" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign in</div>`;
        }
      }
    });
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]--></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
