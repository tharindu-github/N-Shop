import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-green-600 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover Your Perfect Style at N-SHOP
          </h1>
          <p className="text-white/90 mb-8">
            Find top-quality fashion and accessories that perfectly match your style at N-SHOP. Shop now and shine.
          </p>
          <button 
            onClick={scrollToProducts}
            className="px-8 py-3 bg-white text-green-700 rounded-md font-semibold hover:bg-green-50 transition-colors duration-200"
          >
            SHOP NOW
          </button>
        </div>
        <div className="rounded-3xl overflow-hidden">
          <img 
            src="/images/nsbm.jpg"
            onError={(e) => { e.currentTarget.src = ''; }}
            alt="Sample Product"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;