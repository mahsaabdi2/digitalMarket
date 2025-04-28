'use client';

import Link from "next/link";
import { useContext, useState } from "react";
import BarsIcon from "./icons/Bars";
import { CartContext } from "../context/CartContext";
import { enTofa } from "../utils/utilies";
import { SearchContext } from "../context/SearchContext";

const Header = () => {
    const [mobileNavActive, setMobileNavActive] = useState(false)
    const {cart} = useContext(CartContext);
    const {searchQuery , handleSearch}=useContext(SearchContext);
    const [searchItem, setSearchItem] = useState("");

    const handleInputChange = (e) => {
      const value = e.target.value;
      setSearchItem(value);
      handleSearch(value);
    };
    return (
      <header className="header">
        <div className="header-wrapper">
            <input 
              type="text" 
              placeholder="search here" 
              value={searchItem}
              onChange={handleInputChange}
            />
          <nav className={`nav ${mobileNavActive ? "active" : ""}`}>
            <Link href={"/"} className="nav-link">صفحه اصلی</Link>
            <Link href={"/products"} className="nav-link">فروشگاه</Link>
            <Link href={"/cart"} className="nav-link">سبد خرید</Link>
            {cart.length>0 ? <span className="nav-link">{enTofa(cart.length) }</span> : ""}
          </nav>
          <button className="nav-button" onClick={() => setMobileNavActive((prev) => !prev)}>
            <BarsIcon />
          </button>
        </div>
      </header>
    );
  };
  
  export default Header;