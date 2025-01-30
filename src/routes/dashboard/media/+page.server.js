import { db } from "$lib/server/db/index.js";
import { project, media } from "./drizzle/schema/schema.js";
import { eq } from "drizzle-orm";
export async function load() {
    const projects = await db.select().from(project)

    return { projects};

}
export const actions = {
    createMedia: async ({ request }) => {
        const formData = await request.formData();
        const type_naming = formData.get('type_naming');
        const returning_url = formData.get('returning_url');
        let project_id = formData.get('project_id');
        let passing_project_id = Number(project_id); // or you can use +project_id
        // console.log(project_id, typeof project_id);

    //    //Update project thumbnail
       await db.update(project)
       .set({img:returning_url,})
       .where(eq(project.id, passing_project_id));


        await db.insert(media).values({
            type: type_naming,
            url: returning_url,
            location: "2",
            related_project: project_id,
        });
        return { success: true };
    },
};