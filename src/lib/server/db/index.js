// import { drizzle } from 'drizzle-orm/libsql';
// import { createClient } from '@libsql/client';
// import { env } from '$env/dynamic/private';
// if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
// console.log(env.DATABASE_URL)
// const client = createClient({ url: env.DATABASE_URL });
// export const db = drizzle(client);

// //Test
// import { users } from "./schema";
// const result = db.select().from(users).all()
// console.log(result);  // Log the users data to the console

import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { env } from '$env/dynamic/private';
import { users } from "./schema";

// Ensure DATABASE_URL is set in the environment
if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
console.log(env.DATABASE_URL);

// Create the database client and initialize Drizzle ORM
const client = createClient({ url: env.DATABASE_URL });
export const db = drizzle(client);

// // Test function to fetch all users
// async function fetchUsers() {
//   try {
//     const result = await db.select().from(users).all();  // Await the result of the query
//     console.log(result);  // Log the users data to the console
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }

// fetchUsers();  // Call the function to execute the query and log results
