import { db } from "../../../../lib/server/db/index";
import { eq,sql } from 'drizzle-orm';
import { users } from "../../../../lib/auth/models/users.js";
import { validatePassword } from "../../../../lib/auth/utils/hash.js";
import { generateToken } from "../../../../lib/auth/utils/jwt.js";

export const POST = async ({ request }) => {
  const { username, password } = await request.json();

  try {
    if (!username || !password) {
      return new Response(
        JSON.stringify({ error: "Username and password are required" }),
        { status: 400 }
      );
    }

    // Retrieve the user from the database
    const usernameString = username.toString();
    // const user = await db
    //   .select()
    //   .from(users)
    //   .where({ usernameString })
    //   .get();
    const user = await db.select().from(users).where(eq(users.username, usernameString));
    console.log(user)

    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }

    if (user) {
      return new Response(JSON.stringify({ response: "User found" }), {
        status: 200,
      });
    }

    // Validate the password
    const isPasswordValid = await validatePassword(password, user.password);
    
    if (!isPasswordValid) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), {
        status: 401,
      });
    }

    // Generate a JWT token
    const token = generateToken({ id: user.id, username: user.username });

    return new Response(JSON.stringify({ token }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};