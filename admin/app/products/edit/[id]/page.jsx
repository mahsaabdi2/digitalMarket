'use client'
import { useParams,useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditProduct(){
      const {id}=useParams();
      const router=useRouter(); 

      const[formData , setFormData]=useState({
            title:"",
            price:"",
            image:"",
            description:"",
            category:"لب تاب"
        })

        useEffect(
            ()=>{
            async function fetchProducts(){
                const res=await fetch(`http://localhost:3001/api/products/${id}`)
                const data=await res.json()
                setFormData(data.product)
            }
            fetchProducts();
        },[id])

        function handleChange(e){
            setFormData({...formData, [e.target.name]:e.target.value})
        }

        async function handleSubmit(e){
            e.preventDefault();
            const res=await fetch(`http://localhost:3001/api/products/${id}`,{
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(formData)
            })
            if(res.ok){
                router.push("/products")
            }
        }
    
    return(
        <div>
            <h1>edit product</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={formData.title} type="text" name="title" placeholder="title"/>
                <input onChange={handleChange} value={formData.price} type="text" name="price" placeholder="price"/>
                <input onChange={handleChange} value={formData.image} type="text" name="image" placeholder="image url"/>
                <textarea onChange={handleChange} value={formData.description} name="description" placeholder="description"></textarea>
                <select onChange={handleChange} value={formData.category} name="category" >
                    <option value="لب تاب">لب تاب</option>
                    <option value="موبایل">موبایل</option>
                    <option value="تبلت">تبلت</option>
                </select>
                <button type="submit">save updated</button>
            </form>
        </div>
    )
}