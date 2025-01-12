import {db} from "$lib/server/db/index.js";
import {project} from "./drizzle/schema/schema.js";
export async function load() {
  // Fetch users from the database
  const projects = await db.select().from(project).all()

  return {
    projects, // Return users to this specific page
  };
}
