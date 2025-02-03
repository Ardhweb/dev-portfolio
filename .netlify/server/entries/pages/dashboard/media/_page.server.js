import { d as db } from "../../../../chunks/index.js";
import { p as project, m as media } from "../../../../chunks/schema.js";
import { eq } from "drizzle-orm";
async function load() {
  const projects = await db.select().from(project);
  return { projects };
}
const actions = {
  createMedia: async ({ request }) => {
    const formData = await request.formData();
    const type_naming = formData.get("type_naming");
    const returning_url = formData.get("returning_url");
    let project_id = formData.get("project_id");
    let passing_project_id = Number(project_id);
    await db.update(project).set({ img: returning_url }).where(eq(project.id, passing_project_id));
    await db.insert(media).values({
      type: type_naming,
      url: returning_url,
      location: "2",
      related_project: project_id
    });
    return { success: true };
  }
};
export {
  actions,
  load
};
