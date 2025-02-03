import { sqliteTable, text } from "drizzle-orm/sqlite-core";
const users = sqliteTable("users", {
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
export {
  users as u
};
