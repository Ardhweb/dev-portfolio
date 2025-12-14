// src/routes/projects/[projectId]/+page.server.js (assuming a path like this)

import { project } from "../../../../../../drizzle/schema/schema.js";
import { db } from "$lib/server/db/index.js";
import { eq } from "drizzle-orm"; // Import eq for the update where clause

// Load function to fetch the project details from the database
export async function load({ params }) {
  // 👇 Corrected: Get the projectId from the URL params object
  const { projectId } = params;

  if (!projectId) {
    // Should theoretically not happen if route is configured correctly, but good for safety
    return { status: 400, error: "Project ID is missing from URL" };
  }

  try {
    // Fetch the project data from the database using the projectId
    const projectData = await db
      .select()
      .from(project)
      .where(eq(project.id, projectId))
      .limit(1); // If no project is found, return an error

    if (projectData.length === 0) {
      return { status: 404, error: "Project not found" };
    } // Return the project data to be used in the form
    // The project object will be available in the Svelte component as 'data.project'

    return { project: projectData[0] };
  } catch (error) {
    console.error(error);
    return { status: 500, error: "Failed to load project" };
  }
}

// Action to handle form submission and project update
export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const projectId = formData.get("projectId"); // Get projectId from the form
    const projectname = formData.get("projectname");
    const description = formData.get("description");
    const usedlanguage = formData.get("usedlanguage");
    const start_at = formData.get("start_at");
    const end_at = formData.get("end_at");
    const status = formData.get("status");
    const live_url = formData.get("live_url"); // Note: form uses 'live_url', action uses 'liveurl'
    const type = formData.get("type");
    // These should ideally come from the form or be looked up, but keeping your original constants
    const primarycategory = 200;
    const secondarycategory = 454;
    const git_url = formData.get("git_url");

    // Ensure projectId is provided
    if (!projectId) {
      return { success: false, error: "Project ID is required" };
    }

    try {
      // You can skip the 'existingProject' check if you are confident about the route/form flow.
      // Drizzle's `update...where` will just affect 0 rows if the project doesn't exist.

      // Update the project in the database
      await db
        .update(project)
        .set({
          projectname,
          description,
          usedlanguage,
          // start_at: start_at ? new Date(start_at) : null, // Convert string to Date for Drizzle
          // end_at: end_at ? new Date(end_at) : null, // Convert string to Date for Drizzle
          start_at, // Convert string to Date for Drizzle
          end_at,
          live_url,
          status,
          primarycategory,
          secondarycategory,
          type,
          git_url,
        })
        .where(eq(project.id, projectId)); // Update the specific project by ID
      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false, error: "Failed to update project" };
    }
  },
};
