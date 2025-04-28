'use client'
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import ProductBox from "./ProductBox";

export default function ProductList({ products }) {
    const { searchQuery } = useContext(SearchContext);
    
    const filteredProducts = searchQuery
      ? products.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : products;

    return (
        <div className="products-grid">
            {
                filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductBox product={product} key={product._id} />
                    ))
                ) : (
                    <p>محصولی پیدا نشد 😔</p>
                )
            }
        </div>
    )
}
