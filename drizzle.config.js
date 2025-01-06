import { defineConfig } from 'drizzle-kit';
if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

export default defineConfig({
  schema: './src/lib/server/db/schema.js',
  driver:'libsql',
  out: "./drizzle/migrations", 

  dbCredentials: {
    // url: process.env.DATABASE_URL
    url: 'sqlite:./sqlite.db',
  },
  migrations: {
    table: 'journal', 
    schema: 'drizzle', 
  },
  

  verbose: true,
  strict: true,
  dialect: 'sqlite'
});

