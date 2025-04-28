import { connectedToDatabase } from "@/app/lib/mongodb";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        await connectedToDatabase()

        const { searchParams } = new URL(request.url)
        const category = searchParams.get("category")
        const page = parseInt(searchParams.get("page")) || 1
        const ppg = 12 // products per page

        let products;

        if (category) {
            products = await Product.find({ category })
        } else {
            products = await Product.find({})
        }

        const allPages = Math.ceil(products.length / ppg)
        const firstIndex = (page - 1) * ppg
        const lastIndex = firstIndex + ppg
        const showProducts = products.slice(firstIndex, lastIndex)

        return NextResponse.json({
            products: showProducts,
            currentPage: page,
            totalPages: allPages,
        }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: "خطا در دریافت محصولات" }, { status: 500 })
    }
}
