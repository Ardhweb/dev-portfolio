import path from 'path'
import {migrate} from 'drizzle-orm/libsql/migrator'

import {db} from "./index.js"
(async ()=>{
    console.log('Running  migrations')
    await migrate(db,{
        migrationsFolder:path.join(__dirname, './migrations'),
    });
    console.log('Migration ran sucess')
})