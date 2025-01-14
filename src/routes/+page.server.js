import {db} from "$lib/server/db/index.js";
import {project} from "./drizzle/schema/schema.js";
import { gt } from "drizzle-orm";
import { count,sql } from 'drizzle-orm';
import { json } from '@sveltejs/kit';
export async function load() {
  const limit = 3; // Number of items to fetch at a time
  const projects = await db
     .select()
     .from(project).limit(3)
const total_projects = db.select({ count: count()}).from(project);
    
    
 
     return {
         projects,
         total_projects
         
       
     };
 }

   