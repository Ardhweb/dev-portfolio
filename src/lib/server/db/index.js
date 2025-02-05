
// import { drizzle } from 'drizzle-orm/libsql';
// import { createClient } from '@libsql/client';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });


// Create the database client and initialize Drizzle ORM
// const client = createClient({ url: process.env.DATABASE_URL });
// export const db = drizzle(client);

//npx drizzle-kit migrate --dialect=postgresql --url=postgresql://user:password@host:port/dbname


import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from '../../../../drizzle/schema/schema.js';

const client = createClient({
  url: process.env.DATABASE_URL, // Use Turso database URL
  authToken: process.env.DATABASE_AUTH_TOKEN, // Use Turso auth token
});

export const db = drizzle(client,{schema});
