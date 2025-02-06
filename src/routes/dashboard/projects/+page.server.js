import { db } from "$lib/server/db/index.js";
import { project} from "../../../../drizzle/schema/schema.js";

export async function load() {
    const projects = await db.select().from(project);
    console.log("Loaded Projects:", projects); // Debugging
    return { projects };
}

