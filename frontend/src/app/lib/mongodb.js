import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

if(!uri) throw new Error("تنظیمات دیتابیس را بررسی کنید.")

let isConnected= false;

export async function connectedToDatabase(){
    if(isConnected) return console.log("قبلا متصل شده")
    
    try{
        await mongoose.connect(uri , {dbName: "test"})
        isConnected=true;
        console.log("اتصل موفق به دیتابیس");
        
    }catch(error){
        console.error(error);
        process.exit();
    }
}  