import React from 'react'
import Card from './Card.tsx';

const ProductList:React.FC = () => {
  return (
   
      <div className="p-16 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-14">
       <Card/>
    </div>
 
)
}

export default ProductList
