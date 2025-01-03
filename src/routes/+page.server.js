import { db } from "/src/lib/server/db/index"; // Database connection
import { users } from "/src/lib/server/db/schema"; // Table schema

export async function load() {
  try {
    const result = await db.select().from(users).all();
    console.log("Fetched users:", result); // Debug log the fetched result

    return { users_data: result }; // Return the users_data to the template
  } catch (error) {
    console.error("Error fetching users:", error); // Log any errors
    return {
      users_data: [], // Fallback to an empty array if there is an error
      error: "Error fetching users from the database", // Include an error message
    };
  }
}
