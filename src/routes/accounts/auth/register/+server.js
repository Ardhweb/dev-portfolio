import { db } from "/src/lib/server/db/index";
import { users } from "../../../../lib/auth/models/users.js";
import { hashPassword } from "../../../../lib/auth/utils/hash.js";

export async function POST({ request }) {
  const { name, email,username, password } = await request.json();

  try {
    const hashedPassword = await hashPassword(password);
    await db.insert(users).values({name,email, username, password: hashedPassword });

    return new Response(JSON.stringify({ message: "User registered successfully" }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
