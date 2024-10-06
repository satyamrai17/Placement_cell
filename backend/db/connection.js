//connection.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
const URL = process.env.MONGO_URI;
const promise = mongoose.connect(URL);
promise.then(data=>{
    console.log("Database Connected...");
}).catch(err=>{
    console.log("Error During DB Connection ", err);
})

export default mongoose;