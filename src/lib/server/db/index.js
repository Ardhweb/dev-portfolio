
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { env } from '$env/dynamic/private';
import { users } from "../../../../drizzle/schema/schema.js";

// Ensure DATABASE_URL is set in the environment
if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
console.log(env.DATABASE_URL);

// Create the database client and initialize Drizzle ORM
const client = createClient({ url: env.DATABASE_URL });
export const db = drizzle(client);

//npx drizzle-kit migrate --dialect=postgresql --url=postgresql://user:password@host:port/dbname
