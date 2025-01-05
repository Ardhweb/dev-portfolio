import jwt from "jsonwebtoken";

const secretKey = "your-secret-key"; // Use environment variables in production

export const generateToken = (payload) => {
  return jwt.sign(payload, secretKey, { expiresIn: "1h" });
};

export const verifyToken = (token) => {
  return jwt.verify(token, secretKey);
};
