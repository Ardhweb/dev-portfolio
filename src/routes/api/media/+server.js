// src/routes/api/create-media/+server.js
import { json } from '@sveltejs/kit';
import {db} from "$lib/server/db/index.js";
import {media} from "../../../../drizzle/schema/schema.js";

export async function POST({ request }) {
    try {
        const { type_naming, returning_url, project_id } = await request.json();

        // Call the function to create the media entry
        const media_creation = await db.insert(media).values({
            type: type_naming,
            url: returning_url,
            location: "2",
            related_project: project_id,
        });

        return json({ success: true, media_creation });
    } catch (error) {
        console.error(error);
        return json({ success: false, error: 'Failed to create media.' }, { status: 500 });
    }
}
