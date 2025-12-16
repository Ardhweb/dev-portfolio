// import { db } from "$lib/server/db/index.js";
// import { skillset } from "../../../../drizzle/schema/schema.js";

// export async function load() {
//   const skillsData = await db.select().from(skillset);
//   console.log("Loaded Skillset:", skillsData);
//   return { skillsData };  // Pass 'skills' into the Svelte component
// }

// export const actions = {
//   default: async ({ request }) => {
//     const formData = await request.formData();
//     const name = formData.get('skillname');
//     const expertise = formData.get('expertise');
//     const stars = formData.get('stars');
//     const year_experiance = formData.get('year_experiance');

//     // Check if 'stars' is a valid number between 1 and 5
//     if (stars < 1 || stars > 5) {
//       return { success: false, error: 'Stars must be between 1 and 5', status: 400 };
//     }

//     try {
//       // Insert into the database
//       await db.insert(skillset).values({ name, expertise, stars, year_experiance });

//       // After inserting, fetch the updated skills data
//       const updatedSkillsData = await db.select().from(skillset);
      
//       return {message:"Form is Submitted",
//         success: true,
//         skillsData: updatedSkillsData, // Return the updated data
//       };
      
//     } catch (error) {
//       console.error(error);
//       return { success: false, error: 'Failed to insert record' };
//     }
//   },
// };

import { db } from '$lib/server/db/index.js';
import { skillset } from '../../../../drizzle/schema/schema.js';

export async function load() {
  const skillsData = await db.select().from(skillset);
  return { skillsData };
}

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const is_primary_str = formData.get('is_primary');
    
    // Convert 'is_primary' string to boolean (true or false)
    const is_primary = is_primary_str === "true"; // If "t

    await db.insert(skillset).values({
      name: formData.get('skillname'),
      expertise: formData.get('expertise'),
      stars: Number(formData.get('stars')),
      year_experiance: Number(formData.get('year_experiance')),
      is_primary
    });

    return { success: true };
  }
};
