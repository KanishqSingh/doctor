import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Function to configure Cloudinary
const connectcloudinary = () => {
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_SECRET_KEY
        });

        console.log("Cloudinary configured:", cloudinary.config());
    } catch (error) {
        console.error("Error configuring Cloudinary:", error.message);
    }
};

// export default connectcloudinary;


// console.log("CLOUDINARY_NAME:", process.env.CLOUDINARY_NAME);
// console.log("CLOUDINARY_API_KEY:", process.env.CLOUDINARY_API_KEY);
// console.log("CLOUDINARY_SECRET_KEY:", process.env.CLOUDINARY_SECRET_KEY);


export default connectcloudinary 