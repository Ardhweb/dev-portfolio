import { db } from "$lib/server/db/index.js";
import { project } from "./drizzle/schema/schema.js";
import { gt, desc, asc, sql } from "drizzle-orm";
import { json } from '@sveltejs/kit';
export async function load() {
    const limit = 3; // Number of items to fetch at a time
    const projects = await db
        .select()
        .from(project)
        .orderBy(desc(project.id)) // Sorting by ID in descending order
        .limit(3);

    const total_projects = await db.select().from(project);
    const len_total_proj = total_projects.length;
    console.log('Total_projects:', total_projects.length);
    const first_project_id = total_projects && total_projects.length > 0 ? total_projects[0].id : null;
    console.log(first_project_id)


    return {
        projects,
        len_total_proj,
        first_project_id 


    };
}

