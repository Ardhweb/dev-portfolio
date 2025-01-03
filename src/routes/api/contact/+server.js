
import { sqliteTable, integer, text} from 'drizzle-orm/sqlite-core';
import { db } from "/src/lib/server/db/index";

const contactTable = sqliteTable('contact', {
  name: text('name').notNull(),
  email: text('email').notNull(),
  message: text('message').notNull(),
});

export async function POST({ request }) {
  const { name, email, message } = await request.json();

  try {
    await db.insert(contactTable).values({ name, email, message });
    return new Response('Message saved successfully', { status: 200 });
  } catch (error) {
    console.error('Error saving message:', error);
    return new Response('Failed to save message', { status: 500 });
  }
}
