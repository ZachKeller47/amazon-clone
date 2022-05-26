import React from 'react'
import Product from './Product';
import "./home.css"

function Home() {
  return (
    <div className="home">
        <img className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
        alt="Home Banner" 
        />

      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product 
          id="12345"
          title="Extreme Ownership by Jocko Willink"
          price={14.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71lU0yQOl2L._AC_UY218_.jpg"
        />

        <Product 
          id="12345"
          title="Amazon Christmas gift card"
          price={250}
          rating={5}
          image="https://m.media-amazon.com/images/I/81i94-svTyL._AC_SY240_.jpg"
        />
      </div>

      <div className="home__row">
      <Product 
          id="12345"
          title="MLB the show 22"
          price={49.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71E4RNU8dqL._AC_UY218_.jpg"
        />

        <Product 
          id="12345"
          title="The Gentlemen"
          price={12.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/91m8QW0uNVL._AC_UY218_.jpg"
        />

        <Product 
          id="12345"
          title="Nutrogena Hydro Boost"
          price={16.48}
          rating={5}
          image="https://m.media-amazon.com/images/I/71ICfUvvEyL._AC_UL320_.jpg"
        />
      </div>

      <div className="home__row">
      <Product 
          id="12345"
          title="MSI Gaming GeForce RTX 3080 LHR 10GB GDRR6X 320-Bit HDMI/DP Nvlink Torx Fan 3 Ampere Architecture OC Graphics Card (RTX 3080 Ventus 3X Plus 10G OC LHR)"
          price={987.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71t5WWhtLTL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  )
}

export default Home