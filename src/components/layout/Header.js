import './Header.css';
import { auth } from '../../firebase';
import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import LocationOn from '@mui/icons-material/LocationOn';
import ShoppingContext from '../../context/shopping/shoppingContext';
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
          <Link to='/'>
            <img className='header-logo'
              src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
              alt='Amazon Logo'
            />
          </Link>
          <Link to='/location'>
            <div className='header-options'>
              <span className='header-option'>Delivering to Pretoria</span>
              <span className='header-option-item'><LocationOn />Update Location</span>
            </div>
          </Link>
      
          <div className='header-search'>
            <input className='header-input' type='text' placeholder='Search' />
            <SearchIcon className='search-icon' />
          </div>
          <div className='header-nav'>
            <Link to={!user && '/signin'}>
              <div className='header-options' onClick={handleAuthentication}>
                <span className='header-option'>
                  Hello {!user ? 'Guest' : user.email} 
                </span>
                <span className='header-option-item'>
                  {user ? 'Sign out' : 'Sign in'}
                </span>	
              </div>
            </Link>

            <Link to='/orders'>
              <div className='header-options'>
                <span className='header-option'>Returns</span>
                <span className='header-option-item'>& Orders</span>	
            </div>
            </Link>
            <Link to='/prime'>
              <div className='header-options'>
                <span className='header-option'>Your</span>
                <span className='header-option-item'>Basket</span>	
            </div>
              </Link>
              <Link to='/checkout'>
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
