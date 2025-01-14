import { json } from '@sveltejs/kit';
import { db } from '$lib/server/db/index.js';
import { project } from './drizzle/schema/schema.js';
import { gt } from "drizzle-orm";
import { sql } from 'drizzle-orm';
export async function GET({ url }) {
    try {
        // Retrieve the last fetched project ID from query params
        const lastfetchproId = parseInt(url.searchParams.get('lastfetchproId') || '0', 10);

        // Fetch data from the database
        const moreProjects = await db
            .select()
            .from(project)
            .where(gt(project.id, lastfetchproId))
            .limit(3);

        return json({ success: true, moreProjects });
    } catch (error) {
        console.error('Error fetching data:', error);
        return json({ success: false, error: error.message });
    }
}
