'use client'
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function NewProduct() {
    
    const[formData , setFormData]=useState({
        title:"",
        price:"",
        image:"",
        description:"",
        category:"لب تاب"
    });

    const router=useRouter()

    function handleChange(e){
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    async function handleSubmit(e){
        e.preventDefault();

        const response=await fetch("http://localhost:3001/api/products",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(formData)
        })

        if(response.ok){
           router.push("/products")
        }
    
    }

    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="title" placeholder="title"/>
                <input onChange={handleChange} type="text" name="price" placeholder="price"/>
                <input onChange={handleChange}type="text" name="image" placeholder="image url"/>
                <textarea onChange={handleChange} name="description" placeholder="description"></textarea>
                <select onChange={handleChange} name="category" >
                    <option value="لب تاب">لب تاب</option>
                    <option value="موبایل">موبایل</option>
                    <option value="تبلت">تبلت</option>
                </select>
                <button type="submit">save</button>
            </form>
        </div>
    )
}