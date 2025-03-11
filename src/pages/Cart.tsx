import React from 'react';

const Cart = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
      <div className="bg-white rounded-lg shadow p-8">
        <p className="text-gray-600">Your cart is empty. Start shopping!</p>
      </div>
    </div>
  );
};

export default Cart;