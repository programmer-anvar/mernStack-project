import mongoose from "mongoose";

export const connectDb = async () =>{
    try{
         mongoose.connect(process.env.MONGO_URI)
         console.log("MONGODB CONNECTED SUCCESSFULLY!")
    }catch(error){
        console.error("ERROR CONNECTING MONGODB:", error);
        process.exit(1); //exit with failure
    }
}