
import Link from "next/link";
import ProductList from "./ProductList";


export default async function LatestProducts({searchParams}){
    
    const category = searchParams?.category;
    const page=parseInt(searchParams?.page) || 1

    const url = category ? 
    `${process.env.API_URL}/api/products?category=${category}&page=${page}`: 
    `${process.env.API_URL}/api/products?page=${page}`

    const res = await fetch(url, { cache: "no-store" })
    const {products ,currentPage ,totalPages} = await res.json()
    
    return(
        <>
            <div className="category-button">
            <Link href="/products?category=موبایل">
              <button className="product-button">موبایل</button></Link>
              <Link href="/products?category=تبلت">
              <button className="product-button">تبلت</button></Link>
              <Link href={`/products?category=${encodeURIComponent("لپ تاپ")}`}>
              <button className="product-button">لپ تاپ</button></Link>
               <Link href="/">  
              <button className="product-button">محصولات</button></Link>

              </div>
              
              <div className="new-products">
            <h2 className="title">{category? `محصولات ${category}`: "محصولات پر فروش"}</h2>
            <ProductList products = {products}/>
        </div>
         {/* صفحه‌بندی */}
         <div className="pagination">
                {currentPage > 1 && (
                    <Link href={`/products?${category ? `category=${category}&` : ''}page=${currentPage - 1}`}>
                        <button className="pagination-button">← قبلی</button>
                    </Link>
                )}

                {[...Array(totalPages)].map((_, index) => (
                    <Link
                        key={index}
                        href={`/products?${category ? `category=${category}&` : ''}page=${index + 1}`}
                    >
                        <button
                            className={`pagination-number ${currentPage === index + 1 ? "active" : ""}`}
                        >
                            {index + 1}
                        </button>
                    </Link>
                ))}

                {currentPage < totalPages && (
                    <Link href={`/products?${category ? `category=${category}&` : ''}page=${currentPage + 1}`}>
                        <button className="pagination-button">بعدی →</button>
                    </Link>
                )}
            </div>
        
        </>
    )
}