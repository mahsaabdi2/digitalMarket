import { connectedToDatabase } from "@/app/lib/mongodb";
import Product from "@/app/models/Product";
import { NextResponse } from "next/server";

export async function GET(req , {params}){
    try{
        await connectedToDatabase();
        const {id}=params;

        const product=await Product.findById(id);

        return NextResponse.json({product}, {status: 200});
        }catch(error){
        return NextResponse.json({error:error});
    }
        
    
}

export async function DELETE(req , {params}) {
    const {id}=params
    try{
        await connectedToDatabase();
        const product=await Product.findById(id)

        if(!product){
            return NextResponse.json({status:404})
        }
        await product.deleteOne();
    
        return NextResponse.json({status:200})

    }catch(error){
        return NextResponse.json({error:error})
    }
}


export async function PUT(req ,{params}) {
    const {id}=params
    try{
        await connectedToDatabase();
        const data=await req.json();
        const product= await Product.findById(id);
        if(!product){
            return NextResponse({status:404})
        }
        Object.assign(product , data)
        await product.save();
        return NextResponse.json({status:200})
    }catch(error){
        return NextResponse.json({error:error} , {status:500})
    }
}