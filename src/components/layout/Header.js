import './Header.css';
import { auth } from '../../firebase';
import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingContext from '../../context/shopping/shoppingContext';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Header = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user } = shoppingContext;

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <header className='header'>
      <Link to='/' className='no-underline'>
        <img className='header-logo'
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            alt='Amazon Logo'
          />
      </Link>
          <div className='header-option'>
        <div className='delivery-option'>
          <div className='location-icon'>
            <LocationOnOutlinedIcon/>
          </div>
          <div className='location-text'>
            <span className='header-option'>Deliver to </span>
            <span className='header-option-item'>Pretoria , SA</span>
          </div>
        </div>
      </div>
      
      <div className='header-search'>
        <button className='header-search-all'>All</button>
            <input className='header-input' type='text' placeholder='Search' />
            <SearchIcon className='search-icon' />
          </div>
          <div className='header-nav'>
            <Link to={!user && '/signin'} className='no-underline'>
              <div className='header-options' onClick={handleAuthentication}>
                <span className='header-option'>
                  Hello {!user ? 'Guest' : user.email} 
                </span>
                <span className='header-option-item'>
                  {user ? 'Sign out' : 'Sign in'}
                </span>	
              </div>
            </Link>

            <Link to='/orders' className='no-underline'>
              <div className='header-options'>
                <span className='header-option'>Returns</span>
                <span className='header-option-item'>& Orders</span>	
            </div>
            </Link>
            <Link to='/prime' className='no-underline'>
              <div className='header-options'>
                <span className='header-option'>Your</span>
                <span className='header-option-item'>Basket</span>	
            </div>
              </Link>
              <Link to='/checkout' className='no-underline'>
          <div className='header-option-basket'>
            <ShoppingCartOutlinedIcon className='shopping-basket-icon' />
              <span className='header-option-item header-basket-count'>{basket.length}
              </span>
                </div>
              </Link>
          </div>
      </header>
  )
}

export default Header;
