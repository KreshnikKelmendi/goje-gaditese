import React from 'react'
import Banner from '../Banner/Banner'
import ProductsInHomePage from '../Home/ProductsInHomePage'
import BannerQuote from '../Home/BannerQuote'
import Biography from '../Bio/Biography'
import AfterBiography from '../Bio/AfterBiography'

const HomePage = () => {
  return (
    <div>
        <Banner />
        <ProductsInHomePage />
        <BannerQuote />
        <Biography />
        <AfterBiography />
    </div>
  )
}

export default HomePage