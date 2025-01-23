import { json } from '@sveltejs/kit';
import { db } from '$lib/server/db/index.js';
import { project } from './drizzle/schema/schema.js';

export async function GET() {
    try {
        // Fetch data from the database
        const Projects = await db
            .select()
            .from(project);

        // Return JSON response
        return json({ success: true, Projects });
    } catch (error) {
        console.error('Error fetching data:', error);
        return json({ success: false, error: error.message });
    }
}
