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

      try {
        await db.insert(skillset).values({name,expertise,stars,year_experiance });
        return { success: true };
      } catch (error) {
        console.error(error);
        return { success: false, error: 'Failed to insert record' };
      }
    },
  };