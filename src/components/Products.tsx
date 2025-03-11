import React from 'react';
import { Star } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "EMERALD T-SHIRT",
      price: "LKR 2000",
      image: "/images/nsbm.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "RUBY T-SHIRT",
      price: "LKR 2000",
      image: "/images/nsbm.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "CITRINE T-SHIRT",
      price: "LKR 2000",
      image: "/images/nsbm.jpg",
      rating: 5
    },
    {
      id: 4,
      name: "SAPPHIRE T-SHIRT",
      price: "LKR 2000",
      image: "/images/nsbm.jpg",
      rating: 5
    },
    {
      id: 5,
      name: "SWIFT T-SHIRT",
      price: "LKR 2000",
      image: "/images/nsbm.jpg",
      rating: 5
    },
    {
      id: 6,
      name: "HOODIE",
      price: "LKR 2000",
      image: "/images/nsbm.jpg",
      rating: 5
    },
  ];

  return (
    <div id="products" className="bg-green-600 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-12">All Available T-Shirts</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <div className="flex justify-center mb-2">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;