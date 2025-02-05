import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';
// dotenv.config({
//   path: '.env.local',
// });
dotenv.config({
  path: '.env',
});
console.log(process.env.DATABASE_URL)
import { drizzle } from 'drizzle-orm/libsql';
// You can specify any property from the libsql connection options
// const db = drizzle({ connection: { url: process.env.DB_FILE_NAME }});
// const db = drizzle({ connection: { url: process.env.DATABASE_URL }});
console.log( process.env.DATABASE_URL)
console.log(process.env.DATABASE_AUTH_TOKEN)
export default defineConfig({
  schema: '../dev-portfolio/drizzle/schema/schema.js',
  // driver:'libsql', # for local database file
  driver:'turso',
  out: "./drizzle/migrations", 
  // dbCredentials: {
  //   url: 'file:sqlitedb.db',
  //   database: 'file:sqlitedb.db',
  // }, 
   dialect: 'sqlite',
  dbCredentials: {
    url: process.env.DATABASE_URL, // Use Turso database URL
    authToken: process.env.DATABASE_AUTH_TOKEN, // Use Turso auth token
    
  }, 
  // dialect: 'turso'
});
//npx drizzle-kit generate:sqlite
