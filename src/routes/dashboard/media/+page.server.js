import {db} from "$lib/server/db/index.js";
import {project,media} from "./drizzle/schema/schema.js";
export async function load() {
    const projects = await db.select().from(project)
    return {projects,};

}

export const actions = {
    createMedia: async ({ request }) => {
        const formData = await request.formData();
        const type_naming = formData.get('type_naming');
        const returning_url = formData.get('returning_url');
        const project_id = formData.get('project_id');

        await db.insert(media).values({
            type: type_naming,
            url: returning_url,
            location: "2",
            related_project: project_id,
        });

        return { success: true };
    },
};