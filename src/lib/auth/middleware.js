// import { verifyToken } from "./utils/jwt";

// export const authenticate = async (event) => {
//   const authHeader = event.request.headers.get("Authorization");
//   const token = authHeader?.split(" ")[1];

//   if (!token) {
//     throw new Error("Token not provided");
//   }

//   try {
//     const user = verifyToken(token); // Validate the JWT token
//     return user; // Return the decoded user info
//   } catch {
//     throw new Error("Invalid or expired token");
//   }
// };

import { SvelteKitAuth } from "@auth/sveltekit";
import CredentialsProvider from "@auth/core/providers/credentials";
import { eq,sql } from 'drizzle-orm';
import { db } from "../../lib/server/db/index.js";
import { users } from "../../lib/auth/models/users.js";
import { validatePassword } from "../../lib/auth/utils/hash.js";


export const authenticate = SvelteKitAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { username, password } = credentials;

        try {
          // Retrieve the user from the database
          // const user = await db.select().from(users).where({ username }).get();
          const user = await db.select().from(users).where(eq(users.username, username));
          if (!user) {
            throw new Error("User not found");
          }

          // Validate password
          const isValid = await validatePassword(password, user.password);
          if (!isValid) {
            throw new Error("Invalid username or password");
          }

          // Return the user object to include in the session
          return { id: user.id, username: user.username };
        } catch (error) {
          console.error("Authorization error:", error.message);
          return null;
        }
      },
    }),
  ],
  secret: process.env.AUTH_SECRET || "8b0c44007872304390e56c3f03fbd56ca5bb198d964f8c221171da94229dae7e", // Use environment variables in production
  session: {
    strategy: "jwt",
  },
});

// export const handle = authenticate.handle;
