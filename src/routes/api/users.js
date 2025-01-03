// // src/routes/api/users.js
// import { db } from "/src/lib/server/db/index";  // Server-only import
// import { users } from "/src/lib/server/db/schema"; // Server-only import

// export async function GET() { // Server-side endpoint
//   try {
//     const result = await db.select().from(users).all();
//     return {
//       status: 200,
//       body: { users: result }, // Send users data to client
//     };
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     return {
//       status: 500,
//       body: { error: "Error fetching users from the database" },
//     };
//   }
// }
