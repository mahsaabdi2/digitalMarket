import ProductDetailClient from "./ProductDetailClient ";



export default async function ProductDetail ({params}){
    const {id}=params;
    
    const res = await fetch(`${process.env.API_URL}/api/products/${id}`)
    const mainProduct=await res.json();
    
    return(
        
        <ProductDetailClient mainProduct={mainProduct} />
   
       
    )

}