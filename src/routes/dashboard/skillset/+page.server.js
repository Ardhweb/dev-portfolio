import { db } from "$lib/server/db/index.js";
import { skillset } from "../../../../drizzle/schema/schema.js";

export async function load() {
    const skillsData = await db.select().from(skillset);
    console.log("Loaded Skillset:", skillsData); // Debugging
    return { skillsData };  // Pass 'skills' into the Svelte component
}

export const actions = {
    default: async ({ request }) => {
      const formData = await request.formData();
      const name = formData.get('skillname');
      const expertise = formData.get('expertise');
      const stars = formData.get('stars');
      const year_experiance = formData.get('year_experiance')
       // Check if 'stars' is a valid number between 1 and 5
    if (stars < 1 || stars > 5) {
      return { success: false, error: 'Stars must be between 1 and 5', status: 400 };
    }

      try {
        await db.insert(skillset).values({name,expertise,stars,year_experiance });
        return { success: true };
      } catch (error) {
        console.error(error);
        return { success: false, error: 'Failed to insert record' };
      }
    },
  };