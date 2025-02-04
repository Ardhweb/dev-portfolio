import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import fs from 'fs';
import path from 'path';
import * as dotenv from 'dotenv';

// Load environment variables from .env file if necessary
dotenv.config({ path: '.env' });

// Define the path to the SQLite database in the project root
const localDbPath = path.resolve('sqlitedb.db');  // Your local SQLite file path
const tmpDbPath = '/tmp/sqlitedb.db';  // Path in the Netlify function's writable /tmp directory

// Copy the database to the /tmp directory if it doesn't exist
if (!fs.existsSync(tmpDbPath)) {
  if (fs.existsSync(localDbPath)) {
    fs.copyFileSync(localDbPath, tmpDbPath);
  } else {
    throw new Error('SQLite database file not found at the specified path.');
  }
}

// Create the SQLite client and initialize Drizzle ORM
const client = createClient({
  url: `file:${tmpDbPath}`,  // Prefix with "file:" for SQLite
});

const db = drizzle(client);

// Netlify function handler
export const handler = async (event, context) => {
  try {
    // Example query: Retrieve all users from your SQLite database
    const users = await db.select().from('users');  // Change to your actual table name

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Data fetched successfully', users }),
    };
  } catch (error) {
    console.error('Error fetching data from database:', error);  // Log the error for debugging
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
