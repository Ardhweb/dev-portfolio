import { j as json } from "../../../../chunks/index2.js";
import { d as db } from "../../../../chunks/index.js";
import { p as project } from "../../../../chunks/schema.js";
import { asc, gt } from "drizzle-orm";
async function GET({ url }) {
  try {
    const lastfetchproId = Math.floor(Number(url.searchParams.get("lastfetchproId"))) || 0;
    const allProjectIds = await db.select({ id: project.id }).from(project).orderBy(asc(project.id));
    const totalProjects = allProjectIds.length;
    const cutoffIndex = Math.max(0, totalProjects - 3);
    const offsetId = allProjectIds[cutoffIndex]?.id;
    const moreProjects = await db.select().from(project).where(
      gt(project.id, lastfetchproId)
      // Fetch newer projects // Ensure we stop at offsetId
    ).orderBy(asc(project.id)).limit(3);
    if (moreProjects.some((project2) => project2.id === offsetId)) {
      return json({ success: true, moreProjects: [] });
    }
    return json({ success: true, moreProjects, offsetId });
  } catch (error) {
    console.error("Error fetching data:", error);
    return json({ success: false, error: error.message });
  }
}
export {
  GET
};
