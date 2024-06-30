import './App.css';
import './index.css';
import { auth } from './firebase';
import Home from './components/Home';
import Orders from './components/Orders';
import SignIn from './components/SignIn';
import Payment from './components/Payment';
import Checkout from './components/Checkout';
import NotFound from './components/NotFound';
import Products from './components/Products';
import Header from './components/layout/Header';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import React, { useContext,useEffect } from 'react';
import ProductDetails from './components/ProductDetails';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShoppingContext from './context/shopping/shoppingContext';

const promise = loadStripe ('pk_test_51PSPjgC5GjrKrKBvOqRlci3UKMMjCBDS2snnr4SFFI7mgjuBCMjX7RrejA8VffnPlRe05IZLBZqXTtAwnPdCvUSg004pj46way')

const App = () => {
  
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;

  useEffect(() => {
    auth.onAuthStateChanged((authUser => {
      console.log("User is -> ", authUser);
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    }))
  }, [])
  
  return (
    < >
      <Header />
      <main>
        <Switch>
          <Route path='/' exact >
            <Redirect to='/home'/>
          </Route>
          <Route path='/home' >
            <Home />
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route path='/products/:id'>
            <ProductDetails />
          </Route>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/orders'>
            <Elements stripe={promise}>
            <Orders />
            </Elements>
          </Route>
          <Route path='/payment'>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/*'>
            <NotFound />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
