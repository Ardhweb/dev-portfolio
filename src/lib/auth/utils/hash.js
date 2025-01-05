import bcrypt from "bcrypt";

const saltRounds = 10;

export const hashPassword = async (password) => {
  return await bcrypt.hash(password, saltRounds);
};

// export const validatePassword = async (password, hashedPassword) => {
//   return await bcrypt.compare(password, hashedPassword);
// };

export const validatePassword = async (password, hash) => {
  console.log("Hasshing Running")
  return await bcrypt.compare(password, hash); // Returns true/false
};