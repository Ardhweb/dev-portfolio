import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });
const client = createClient({ url: process.env.DATABASE_URL });
const db = drizzle(client);
export {
  db as d
};
