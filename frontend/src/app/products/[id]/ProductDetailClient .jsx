'use client'
import { CartContext } from "@/app/context/CartContext";
import { enTofa } from "@/app/utils/utilies"
import Link from "next/link"
import { useContext } from "react";

 export function generateMetadata(){
        return{
            title:"Home | Azalia Online Shop",
            description:"brows amazing digital products",
            openGraph:{
                title:"Home | Azalia Online Shop",
                description:"brows amazing digital products"
            }
      
        }
      }

export default function ProductDetailClient({mainProduct}){

   
    const {addToCart}=useContext(CartContext);

    return(
        <div className="product-detail">
        <div className="product-detail-content">
            <div className="new-product-image">
                <img src={mainProduct.image} alt={mainProduct.title} />
            </div>
            <div className="new-product-info">
                <h1 className="new-product-title">{mainProduct.title}</h1>
                <span>دسته بندی: </span>
                <Link href={`/products?category=${mainProduct.category}`}>{mainProduct.category}</Link>
                <br/><br/>
                <p className="new-product-description">{mainProduct.description}</p>
                <div className="product-price-row">
                    
                    <div className="product-price"><span>قیمت:</span> {enTofa(mainProduct.price) }تومان</div>
                    <button className="product-button" onClick={()=>addToCart(mainProduct)}>افزودن به سبد خرید</button>
            </div>
            </div>
        </div>
    </div>
    )
}