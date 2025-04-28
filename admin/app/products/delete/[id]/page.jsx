'use client'
import { useParams, useRouter } from "next/navigation"

export default function DeleteProduct(){

    const router=useRouter();
    const {id}=useParams();

    async function handleDelete(){
        const response=await fetch(`http://localhost:3001/api/products/${id}`,{
            method:"DELETE"
        })

        if(response.ok){
            router.push("/products")
        }
    
    }
    return(
        <div>
            <h1>Are you sure to delete this product?</h1>

            <button onClick={handleDelete}>yes, delete it</button>
            <button onClick={()=>router.push("/products")}>no , cancle it</button>
        </div>
    )
}