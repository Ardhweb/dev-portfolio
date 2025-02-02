
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });


// Create the database client and initialize Drizzle ORM
const client = createClient({ url: process.env.DATABASE_URL });
export const db = drizzle(client);

//npx drizzle-kit migrate --dialect=postgresql --url=postgresql://user:password@host:port/dbname
