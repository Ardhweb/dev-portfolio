import { json } from '@sveltejs/kit';
import { db } from '$lib/server/db/index.js';
import { project } from './drizzle/schema/schema.js';
import { gt, lt, asc } from "drizzle-orm";
import { sql } from 'drizzle-orm';
// export async function GET({ url }) {
//     try {
//         // Retrieve the last fetched project ID from query params
//         const lastfetchproId = parseInt(url.searchParams.get('lastfetchproId') || '0', 10);


//         const allProjectIds = await db
//             .select({ id: project.id })
//             .from(project)
//             .orderBy(asc(project.id)); // Adjust ordering based on your use case

//         // Step 2: Find the ID to use as the offset
//         const totalProjects = allProjectIds.length;
//         const cutoffIndex = Math.max(0, totalProjects - 3); // Fourth last ID index
//         const offsetId = allProjectIds[cutoffIndex]?.id; // Get the fourth-last ID

//         // Fetch data from the database
//         const moreProjects = await db
//             .select()
//             .from(project)
//             .where(gt(project.id, lastfetchproId), lt(project.id, offsetId))
//             .limit(3);
//         // Ensures offset doesn't go negative



//         return json({ success: true, moreProjects });
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         return json({ success: false, error: error.message });
//     }
// }
export async function GET({ url }) {
    try {
        // Retrieve the last fetched project ID from query params
        const lastfetchproId = parseInt(url.searchParams.get('lastfetchproId') || '0', 10);

        // Fetch all project IDs
        const allProjectIds = await db
            .select({ id: project.id })
            .from(project)
            .orderBy(asc(project.id));

        const totalProjects = allProjectIds.length;
        const cutoffIndex = Math.max(0, totalProjects - 3); // Fourth last ID index
        const offsetId = allProjectIds[cutoffIndex]?.id; // Get the fourth-last ID

        // Fetch data while ensuring projects beyond offsetId are excluded
        const moreProjects = await db
            .select()
            .from(project)
            .where(
                gt(project.id, lastfetchproId), // Fetch newer projects // Ensure we stop at offsetId
            )
            .orderBy(asc(project.id)) // Ensure consistent ordering
            .limit(3); // Fetch only 3 projects at a time
         // Check if we fetched a project with the same id as offsetId
         if (moreProjects.some(project => project.id === offsetId)) {
            return json({ success: true, moreProjects: [] }); // Return empty list if offsetId is found
        }

        return json({ success: true, moreProjects ,offsetId});
    } catch (error) {
        console.error('Error fetching data:', error);
        return json({ success: false, error: error.message });
    }
}
