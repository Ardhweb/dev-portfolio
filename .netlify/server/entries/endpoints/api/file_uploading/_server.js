import cloudinary from "cloudinary";
import * as dotenv from "dotenv";
import multer from "multer";
import { j as json } from "../../../../chunks/index2.js";
dotenv.config({ path: ".env.local" });
cloudinary.v2.config({
  cloud_name: process.env.YOUR_CLOUD_NAME,
  api_key: process.env.YOUR_API_KEY,
  api_secret: process.env.YOUR_API_SECRET
});
const storage = multer.memoryStorage();
multer({ storage });
const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const file = formData.get("image");
    if (!file || !file.arrayBuffer) {
      return json({ message: "No file uploaded or invalid file format" }, { status: 400 });
    }
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const uploadResult = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.v2.uploader.upload_stream(
        { resource_type: "image", folder: "uploads" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      uploadStream.end(fileBuffer);
    });
    return json({ message: "Upload successful", url: uploadResult.secure_url }, { status: 200 });
  } catch (error) {
    console.error("Error during file upload:", error);
    return json({ message: "File upload failed", error: error.message }, { status: 500 });
  }
};
export {
  POST
};
