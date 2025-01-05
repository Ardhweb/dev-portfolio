import { db } from "/src/lib/server/db/index";
import { users } from "../../../../lib/auth/models/users.js";
import { validatePassword } from "../../../../lib/auth/utils/hash.js";
import { generateToken } from "../../../../lib/auth/utils/jwt.js";

export async function POST({ request }) {
  const { username, password } = await request.json();

  try {
    const user = await db.select().from(users).where({ username }).get();

    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
    }

    const isPasswordValid = await validatePassword(password, user.password);

    if (!isPasswordValid) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
    }

    const token = generateToken({ id: user.id, username: user.username });

    return new Response(JSON.stringify({ token }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
