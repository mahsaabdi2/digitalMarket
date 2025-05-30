import { connectedToDatabase } from "@/app/lib/mongodb";
import Order from "@/models/Order";
import { NextResponse } from "next/server";

export async function POST(request) {
    try{
        await connectedToDatabase();
        const {user , cart, totalPrice}=await request.json();

        const newOrder=new Order({
            user ,
            cart,
            totalPrice,
            status:"pending",
            createAt:new Date()
        })


        await newOrder.save();

        return NextResponse.json({message:"سفارش با موفقیت ثبت شد"} , {status:201})

    }catch(error){
        return NextResponse.json({message :"خطا در ثبت سفارش"},{status:500})
    }
}