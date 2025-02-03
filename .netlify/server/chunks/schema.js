import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
sqliteTable("users", {
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
sqliteTable("session", {
  id: text("id").primaryKey().default("AUTOINCREMENT"),
  // userId: text('user_id').notNull().references(() => user.id),
  userId: text("user_id").notNull(),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull()
});
sqliteTable("primarycategories", {
  id: text("id").primaryKey().default("AUTOINCREMENT"),
  categoryname: text("categoryname").notNull()
});
sqliteTable("secondcategories", {
  id: text("id").primaryKey().default("AUTOINCREMENT"),
  categoryname: text("categoryname").notNull()
});
sqliteTable("skillset", {
  id: text("id").primaryKey().default("AUTOINCREMENT"),
  name: text("name").notNull(),
  expertise: text("expertise").notNull(),
  stars: integer("stars"),
  year_experiance: integer("year_experiance")
});
sqliteTable("project_types", {
  id: text("id").primaryKey().default("AUTOINCREMENT"),
  name: text("name").notNull()
});
const project = sqliteTable("project", {
  id: integer("id").primaryKey(),
  projectname: text("projectname").notNull(),
  description: text("description"),
  usedlanguage: text("usedlanguage"),
  start_at: text("start_at"),
  end_at: text("end_at"),
  status: text("status"),
  live_url: text("live_url"),
  primarycategory: integer("primarycategory").notNull(),
  secondarycategory: integer("secondarycategory").notNull(),
  type: text("type").notNull(),
  // Dropdown-like predefined options
  img: text("img")
});
const media = sqliteTable("media", {
  id: integer("id").primaryKey(),
  type: text("type").notNull(),
  url: text("url").notNull(),
  location: text("location"),
  related_project: integer("related_project").references(() => project.id)
});
sqliteTable("seo_dat", {
  id: integer("id").primaryKey(),
  seoitems: text("seoitems")
});
export {
  media as m,
  project as p
};
