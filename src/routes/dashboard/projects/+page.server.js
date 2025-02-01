import {db} from '$lib/server/db/index.js';
import {project} from '../../../../drizzle/schema/schema.js'
export const actions = {
    default: async ({ request }) => {
      const formData = await request.formData();
      const projectname = formData.get('projectname');
      const description = formData.get('description');
      const usedlanguage = formData.get('usedlanguage');
      const start_at = formData.get('start_at');
      const end_at = formData.get('end_at');
      const status = formData.get('status');
      const liveurl = formData.get('liveurl');
      // const primarycategory = formData.get('primarycategory ');
      // const secondarycategory = formData.get('secondarycategory');
      const type = formData.get('type');
      const primarycategory = 200
      const secondarycategory = 454

      
      
  
      try {
        await db.insert(project).values({projectname , description, usedlanguage, start_at, end_at,liveurl, status, primarycategory, secondarycategory, type });
        return { success: true };
      } catch (error) {
        console.error(error);
        return { success: false, error: 'Failed to insert record' };
      }
    },
  };