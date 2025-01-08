import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config({
  path: '.env.local',
});
import { drizzle } from 'drizzle-orm/libsql';

// You can specify any property from the libsql connection options
const db = drizzle({ connection: { url: process.env.DB_FILE_NAME }});
export default defineConfig({
  schema: './drizzle/schema/schema.js',
  driver:'libsql',
  out: "./drizzle/migrations", 
  dbCredentials: {
    url: 'file:sqlitedb.db',
    database: 'file:sqlitedb.db',
  }, 
  dialect: 'sqlite'
});
//npx drizzle-kit generate:sqlite
