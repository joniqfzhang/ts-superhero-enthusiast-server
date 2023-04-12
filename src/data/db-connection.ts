
import mongoose from "mongoose";

export const connectDB = async () => {
    const uri = process.env.DATABASE_URI
    try {
        console.log('connectDB', uri)
        await mongoose.connect(uri);
        console.log('connected to database successfully!')
        mongoose.connection.on('error', err => {
            console.error(err);
          });
    } 
    catch (err) {
        console.error('connectDB error',err);
    }
};