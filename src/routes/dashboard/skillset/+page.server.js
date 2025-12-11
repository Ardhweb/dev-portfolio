import { db } from "$lib/server/db/index.js";
import { skillset } from "../../../../drizzle/schema/schema.js";

// export async function load() {
//     const skillset = await db.select().from(skillset);
//     console.log("Loaded Skillset:", skillset); // Debugging
//     return { skillset };
// }


// export const actions = {
//     default: async ({ request }) => {
//       const formData = await request.formData();
//       const projectname = formData.get('projectname');
//       const description = formData.get('description');

//       try {
//         await db.insert(skillset).values({projectname , description });
//         return { success: true };
//       } catch (error) {
//         console.error(error);
//         return { success: false, error: 'Failed to insert record' };
//       }
//     },
//   };