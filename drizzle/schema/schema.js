import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';


export const users = sqliteTable("users", {
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    username: text("username").notNull().unique(),
    password: text("password").notNull(),
  });
  
export const session = sqliteTable("session", {
    id: text('id').primaryKey(),
    // userId: text('user_id').notNull().references(() => user.id),
    userId: text('user_id').notNull(),
    expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull()
});


