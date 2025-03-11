import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-gray-600">FOLLOW OUR INSTAGRAM : @N_SHOP</p>
        </div>
        
        <div className="flex justify-center space-x-8 mb-8">
          <Link to="/" className="text-gray-600 hover:text-green-700">HOME</Link>
          <Link to="/wishlist" className="text-gray-600 hover:text-green-700">WISHLIST</Link>
          <Link to="/cart" className="text-gray-600 hover:text-green-700">CART</Link>
          <Link to="/account" className="text-gray-600 hover:text-green-700">ACCOUNT</Link>
          <Link to="/contact" className="text-gray-600 hover:text-green-700">CONTACT</Link>
        </div>

        <div className="text-center text-gray-600">
          <p>©N-Shop. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;