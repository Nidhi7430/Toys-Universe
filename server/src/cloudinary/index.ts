import dotenv from 'dotenv';
import cloudinary from 'cloudinary';

dotenv.config();

console.log(JSON.stringify(process.env));

const cloudinary_v2 = cloudinary.v2;

cloudinary_v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary_v2;
