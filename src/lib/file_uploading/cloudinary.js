// src/lib/cloudinary.js
import cloudinary from 'cloudinary';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

cloudinary.v2.config({
  cloud_name:process.env.YOUR_CLOUD_NAME,
  api_key:process.env.YOUR_API_KEY,
  api_secret:process.env.YOUR_API_SECRET,
});

export default cloudinary;
