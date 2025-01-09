
import { SvelteKitAuth } from "@auth/sveltekit";
import CredentialsProvider from "@auth/sveltekit/providers/credentials";
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { eq,sql } from 'drizzle-orm';
import { users } from "../../lib/auth/models/users.js";
import { db } from "../server/db/index.js";

// Establish SQLite connection for Drizzle
let baseUr = "http://localhost:5173"

export const { handle, signIn, signOut } = SvelteKitAuth(async (event) => {
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

          // Validate credentials against your database
          const user = await db.select().from(users).where(eq(users.username, username)).get();

           // Validate the user
           if (user) {
            return { id: user.id, name: user.name };
          }
          throw new Error("Invalid username or password");
          
        }
      })
    ],
    secret:import.meta.env.AUTH_SECRET,
    trustHost: true,
    pages: {
      signIn: "/accounts/auth/login", // Custom sign-in page route
    },
    callbacks: {
      // Triggered after a successful sign-in
      async signIn({ user }) {
        console.log("User signed in:", user);
        return true; // Continue with the sign-in
      },
      // Customize the session object returned to the client
      async session({ session, user, token }) {
        if (user) {
          session.user = {
            id: user.id,
            name: user.name,
          };
        }
        session.access_token = token.accessToken
        return session
        
      },
      // Redirect after sign-in
      async redirect({ url, baseUrl }) {
        return url.startsWith(baseUrl) ? url : `${baseUrl}/accounts/dashboard/profile`;
      },
      
    },
  };

  return authOptions;
});
