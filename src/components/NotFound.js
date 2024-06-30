import './NotFound.css';
import React from 'react';
import { Link } from '@mui/material';

const NotFound = () => {
  return (
    <div className="not-found">
      <Link to="/">
        <div>
        <img className="img-sorry" src="https://images-na.ssl-images-amazon.com/images/G/01/error/title._TTD_.png" alt="" />
      </div>
      <div>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/error/5._TTD_.png" alt="" />
      </div>
      </Link>    
    </div>
  )
}

export default NotFound;
