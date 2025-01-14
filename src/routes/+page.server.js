import {db} from "$lib/server/db/index.js";
import {project} from "./drizzle/schema/schema.js";
import { gt } from "drizzle-orm";
import { sql } from 'drizzle-orm';
import { json } from '@sveltejs/kit';
export async function load() {
  const limit = 3; // Number of items to fetch at a time
  const projects = await db
     .select()
     .from(project).limit(3)
     const total_projects = await db.select().from(project);
     const len_total_proj = total_projects.length;
     console.log('Total_projects:',total_projects.length);
     
    
    
 
     return {
         projects,
         len_total_proj
         
       
     };
 }

   