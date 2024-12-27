import React from 'react'
import Header from './Header.tsx'
import Carousel from './Carousel.tsx'
import ProductList from './ProductList.tsx'
import Footer from './Footer.tsx'

const Container:React.FC = () => {
  return (
    <>
      <Header/>
      <Carousel/>
      <ProductList/>
      <Footer/>
    </>
  )
}

export default Container
