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
      </div>
      <div className="products-row">
        <Product
          id="5"
          image="https://m.media-amazon.com/images/I/71iQ2M4oQWL._AC_UL320_.jpg"
          price={149}
          title="Skytech Archangel Gaming Computer PC Desktop – RYZEN 5 2600X 6-Core 3.6 GHz, GTX 1660 6G, 500GB SSD, 16GB DDR4 3000MHz, RGB Fans,"
          rating={4}
        />

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
          image="https://m.media-amazon.com/images/I/41N5K5Tvx9L._AC._SR360,460.jpg"
          price={20}
          title="HP Zbook firefly 16 G10 i7 1355U 16GB 1TB SSD 16.0″ (1920 x 1200) Bent FHD+ Touch RTX A500 4GB Win 11 Pro Laptop"
          rating={4}
        />
        <Product
          id="9"
          image="https://m.media-amazon.com/images/I/61eEYLATF9L._AC_SY200_.jpg"
          price={19}
          title="Apple iPhone 15 (128 GB) - Black"
          rating={4}
        />
        <Product
          id="10"
          image="https://images-eu.ssl-images-amazon.com/images/I/51ErvQFU5uL._AC_UL165_SR165,165_.jpg"
          price={9}
          title="Samsung Galaxy A55 256GB 5G Dual Sim Smartphone, Blue Samsung Galaxy A55 256GB 5G Dual Sim Smartphone, Blue"
          rating={4}
        />
      </div>
      <div className="products-row">
        <Product
          id="12"
          image="https://m.media-amazon.com/images/I/61dKEc095AL._AC._SR360,460.jpg"
          price={87}
          title="DJI Mini 4 Pro Drone with RC 2 Controller"
          rating={5}
        />
        <Product
          id="13"
          image="https://m.media-amazon.com/images/I/519hCD01V2L._AC._SR360,460.jpg"
          price={10}
          title="Connex Projector CP104 Connex Lumen Series 1080P Projector with Wi-Fi, Black"
          rating={3}
        />
         <Product
          id="14"
          image="https://m.media-amazon.com/images/I/61DuZJ4cE1L._AC._SR360,460.jpg"
          price={19}
          title="Dell P2725H 27 Inch Full HD (1920x1080) Monitor, 100Hz, IPS, 5ms, 99% sRGB, USB-C, DisplayPort, HDMI, VGA, 4x USB, 3 Year Warranty, Black"
          rating={4}
        />
      </div>
    </>
  )
}

export default Products;