import React from 'react';
import "./Products.css";
import Product from './Product';

const Products =() => {
  return (
    <>
      <div className="products-row">
        <Product
          id="1"
          title="Apple 2020 MacBook Air (13-inch, Apple M1 chip with 8‑core CPU and 7‑core GPU, 8GB, 256GB) - Space Gray"
          image="https://m.media-amazon.com/images/I/61Rly6yup7L._AC_SY200_.jpg"
          price={15}
          rating={5}
        />
        <Product
          id="2"
          image="https://m.media-amazon.com/images/I/71ijOjfXu2L._AC._SR360,460.jpg"
          price={75}
          title="PreSonus HP4 4-Channel Compact Headphone Amplifier"
          rating={4}
        />
      </div>
      <div className="products-row">
        <Product
          id="3"
          image="https://m.media-amazon.com/images/I/61tneKCBufL._AC_UL320_.jpg"
          price={48}
          title="Samson QH4 4-Channel Studio Headphone Amplifier + Stereo Headphones + Stereo Interconnect Cable, 10 feet - Top Value Amplifier"
          rating={3}
        />
        <Product
          id="4"
          image="https://m.media-amazon.com/images/I/61lAvV-tMfL._AC_UL320_.jpg"
          price={18}
          title="Apple 2022 Apple TV 4K Wi‑Fi with 64GB storage (3rd generation)"
          rating={5}
        />
        <Product
          id="5"
          image="https://m.media-amazon.com/images/I/71iQ2M4oQWL._AC_UL320_.jpg"
          price={149}
          title="Skytech Archangel Gaming Computer PC Desktop – RYZEN 5 2600X 6-Core 3.6 GHz, GTX 1660 6G, 500GB SSD, 16GB DDR4 3000MHz, RGB Fans,"
          rating={4}
        />
      </div> 
      <div className="products-row">
        <Product
          id="6"
          image="https://m.media-amazon.com/images/I/71aFSPPZOEL._AC_SX342_.jpg"
          price={87}
          title="Apple 2022 MacBook Air laptop with M2 chip: 13.6-inch Liquid Retina display, 8GB RAM, 256GB SSD storage, backlit keyboard, 1080p FaceTime HD camera. Works with iPhone and iPad; Midnigh"
          rating={5}
        />
        <Product
          id="7"
          image="https://m.media-amazon.com/images/I/61+jaO2GeDL._AC._SR360,460.jpg"
          price={14}
          title="Fujifilm Instax Mini 12 Instant Film Camera, Mint Green"
          rating={3}
        />
      </div>
      <div className="products-row">
        <Product
          id="8"
          image="https://m.media-amazon.com/images/I/71VsOYhuksL._AC_UL320_.jpg"
          price={19}
          title="FiO BTR3K Receiver Amplifier Bluetooth Headphone Amp High Resolution Support aptX HD/aptX LL/LDAC for Car Audio/Home TV/Speaker/Smartphones/PC (3.5mm/2.5mm Output)"
          rating={4}
        />
      </div>
    </>
  )
}

export default Products;