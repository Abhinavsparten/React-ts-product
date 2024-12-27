// ProductList.tsx
import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const Card: React.FC= () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch datas from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data: Product[] = await response.json();
        setProducts(data);
        console.log(products)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
<>
  {products.length > 0 ? (
    products.map((product) => (
      <div
        key={product.id}
        className=" p-4 rounded-lg shadow-xl hover:scale-105 transition-transform"
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-contain rounded-md mb-4" 
        />
        <h3 className="text-lg text-center font-semibold text-gray-800 truncate">{product.title}</h3>
        <p className="text-sm text-center text-gray-600">{product.category}</p>
        <p className="text-lg text-center font-bold mt-2 text-amber-400">${product.price}</p>
        <div className="flex justify-center">
        <button className="bg-indigo-400 text-white border-none py-2 px-5 rounded-md mt-2 mb-3">
          Add to Cart</button>
      </div>
      </div>
    ))
  ) : (
    <p className="text-center text-gray-500">Loading products...</p>
  )}
</>

  );
};

export default Card;
