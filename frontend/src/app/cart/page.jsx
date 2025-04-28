'use client'

import Image from "next/image"
import { enTofa } from "../utils/utilies"
import TrashIcon from "../components/icons/Trash";
import React, { useContext, useState } from 'react';
import { CartContext } from "../context/CartContext";

export default function Cart(){

    const {cart, removeFromCart, updateQuantity, getTotal , clearCart} = useContext(CartContext)

    const [userInfo ,setUserInfo]=useState({
        name: "",
        email: "",
        country:"",
        city: "",
        address:"",
        postalCode:""
    })
    
    function handleChange(e){
        setUserInfo({...userInfo , [e.target.name] : e.target.value})
    }

    async function handleSubmit(e){
        e.preventDefault();

        const orderData = {
            user:userInfo,
            cart,
            totalPrice:getTotal()
        }

        try{
            const response = await fetch("http://localhost:3000/api/orders", {
                method:"POST",
                headers:{"Content-Type":"Application/json"},
                body:JSON.stringify(orderData)
            })

            if (response.ok){
                alert("سفارش شما با موفقست ثیت شد")
                clearCart();
                setUserInfo({name:"" , email:"" , country:"" , city:"",address:"" , postalCode:""})
            }else{
                alert("خطا در ثبت سفارش")
            }


        }catch(error){
            alert("مشکل پیس آمده")
        }
    }
    
    return(
        <div className="cart-grid">
            <div className="cart-box">
                <h2>سبد خرید</h2>

                {cart.length == 0 && <div>سبد خرید خالی است</div>}

                {
                    cart.length > 0 && (
                        <table className="cart-table">
                            <thead>
                                <tr>
                                    <th>کالا</th>
                                    <th>قیمت (تومان)</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    cart.map(
                                        (product)=> (
                                            <tr key={product._id}>
                                                <td className="cart-product">
                                                    <Image src={product.image} width={80} height={80}
                                                        className="cart-product-image"
                                                        alt={product.title}/>
                                                    {product.title}
                                                    <input type="number" value={product.quantity} min="1"
                                                    onChange={(event)=>updateQuantity(product._id, Number(event.target.value))}/>
                                                    <button onClick={()=>removeFromCart(product._id)}><TrashIcon/></button>
                                                </td>

                                                <td>
                                                    {enTofa(product.price) }
                                                </td>
                                            </tr>
                                        )
                                    )
                                }

                                <tr>
                                    <td> <strong>مجموع</strong></td>
                                    <td><strong>{enTofa(getTotal()) }</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    )
                }
            </div>
            {
                cart.length > 0 && (
                    <div className="cart-box">
                        <h2 className="cart-title">اطلاعات شما</h2>
                        <form className="cart-form" onSubmit={handleSubmit} >
                            <input value={userInfo.name} onChange={handleChange} name="name" type="text" className="cart-input" placeholder="نام" />
                            <input value={userInfo.email} onChange={handleChange} name="email" type="email" className="cart-input" placeholder="ایمیل" />
                            <input value={userInfo.country} onChange={handleChange} name="country" type="text" className="cart-input" placeholder="کشور" />
                            <input value={userInfo.city} onChange={handleChange} name="city" type="text" className="cart-input" placeholder="شهر" />
                            <input value={userInfo.address} onChange={handleChange} name="address" type="text" className="cart-input" placeholder="آدرس" />
                            <input value={userInfo.postalCode} onChange={handleChange} name="postalCode" type="number" className="cart-input" placeholder="کدپستی" />
                            <button className="cart-button">پرداخت آنلاین</button>
                        </form>
                    </div>
                )
            }
        </div>
    )
}