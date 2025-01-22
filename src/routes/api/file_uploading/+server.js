import cloudinary from '$lib/file_uploading/cloudinary.js';
import multer from 'multer';
import { json } from '@sveltejs/kit';

const storage = multer.memoryStorage();
const upload = multer({ storage });
export const POST = async ({ request }) => {
  try {
    // Parse the form data using SvelteKit's request.formData()
    const formData = await request.formData();
    const file = formData.get('image'); // Get the 'image' field from the form

    if (!file || !file.arrayBuffer) {
      return json({ message: 'No file uploaded or invalid file format' }, { status: 400 });
    }

    // Convert the file to a Buffer
    const fileBuffer = Buffer.from(await file.arrayBuffer());

    // Upload the file to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.v2.uploader.upload_stream(
        { resource_type: 'image', folder: 'uploads' },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );

      // Stream the file buffer to Cloudinary
      uploadStream.end(fileBuffer);
    });

    return json({ message: 'Upload successful', url: uploadResult.secure_url }, { status: 200 });
  } catch (error) {
    console.error('Error during file upload:', error);
    return json({ message: 'File upload failed', error: error.message }, { status: 500 });
  }
};