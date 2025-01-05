import { verifyToken } from "./utils/jwt";

export const authenticate = async (event) => {
  const authHeader = event.request.headers.get("Authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    throw new Error("Token not provided");
  }

  try {
    const user = verifyToken(token); // Validate the JWT token
    return user; // Return the decoded user info
  } catch {
    throw new Error("Invalid or expired token");
  }
};
