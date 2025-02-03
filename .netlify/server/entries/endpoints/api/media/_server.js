import { j as json } from "../../../../chunks/index2.js";
import { d as db } from "../../../../chunks/index.js";
import { m as media } from "../../../../chunks/schema.js";
async function POST({ request }) {
  try {
    const { type_naming, returning_url, project_id } = await request.json();
    const media_creation = await db.insert(media).values({
      type: type_naming,
      url: returning_url,
      location: "2",
      related_project: project_id
    });
    return json({ success: true, media_creation });
  } catch (error) {
    console.error(error);
    return json({ success: false, error: "Failed to create media." }, { status: 500 });
  }
}
export {
  POST
};
