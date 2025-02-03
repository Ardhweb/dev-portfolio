import { d as db } from "../../../../../chunks/index.js";
import { u as users } from "../../../../../chunks/users.js";
import bcrypt from "bcrypt";
const saltRounds = 10;
const hashPassword = async (password) => {
  return await bcrypt.hash(password, saltRounds);
};
async function POST({ request }) {
  const { name, email, username, password } = await request.json();
  try {
    const hashedPassword = await hashPassword(password);
    await db.insert(users).values({ name, email, username, password: hashedPassword });
    return new Response(JSON.stringify({ message: "User registered successfully" }), {
      status: 201
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
export {
  POST
};
