import { db } from '$lib/server/db/index.js';
import { project } from '../../../../drizzle/schema/schema.js';
import { json } from '@sveltejs/kit';
import { eq } from "drizzle-orm";
export async function DELETE({  url }) {
    try {
        // Get the object ID from the URL params
        const id  = Math.floor(Number(url.searchParams.get('Id'))) || 0;

        // Ensure id is valid
        if (!id) {
            return json({ success: false, message: 'ID parameter is missing' });
        }

        // Perform the deletion with Drizzle ORM
        const result = await db.delete(project).where(eq(project.id, id));

        // Check if any row was deleted
        if (result.count === 0) {
            return json({ success: false, message: 'Item not found' });
        }

        // Return success response
        return json({ success: true, message: 'Item deleted successfully' });
    } catch (error) {
        console.error('Error deleting item:', error);
        return json({ success: false, error: error.message });
    }
}
