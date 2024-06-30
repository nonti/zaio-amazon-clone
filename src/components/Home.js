import React from 'react';
import './Home.css';
import Products from './Products';


const Home = () => {
  return (
    <div className='home'>
      <div className='home-container'>
        <img
          className='home-img'
          src='https://m.media-amazon.com/images/I/61vHXnQ8WOL._SX3000_.jpg' alt='Hero'
        />
        <Products />
      </div>
    </div>
  );
};

export default Home;
