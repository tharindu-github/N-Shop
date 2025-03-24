import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black">
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Wishlist</li>
        <li className="p-4">Cart</li>
        <li className="p-4">Account</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#508D4E] ease-in-out duration-500"
            : "fixed left-[-100%] top-0 w-[60%] h-full ease-in-out duration-500"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#1A5319] m-4">N-Shop</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Wishlist</li>
          <li className="p-4 border-b border-gray-600">Cart</li>
          <li className="p-4 border-b border-gray-600">Account</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
