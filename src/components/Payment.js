import './Payment.css';
import axios from '../axios';
import { db } from '../firebase';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import React, { useContext, useEffect, useState } from 'react';
import ShoppingContext from '../context/shopping/shoppingContext';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const Payment = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user, getBasketTotal, emptyBasket } = shoppingContext;
  const history = useHistory();

  const stripe = useStripe()
  const elements = useElements()

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    //Generate special stipe secret which will allow us to charge the customer
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log('The secret is => ', clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    
    const payload = await stripe.confirmCardPayment(clientSecret,
      {
        payment_method: { card: elements.getElement(CardElement) },
      }).then(({ paymentIntent }) => {
        //payment intent = payment confirmation
        db.collection('user')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setSucceeded(true);
        setError(null)
        setProcessing(false);
        //Empty Basket
        emptyBasket();
        //redirect the user to order page
        history.push('/orders');
        //Empty basket
      })
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error? 'e.rror.message' : '')
  };
  
  return (
    <div className='payment'>
      <div className='payment-container'>
        <h1>
        Checkout <Link to='/checkout'>{basket?.length} items</Link>
        </h1>
        <div className='payment-section'>
          <div className='payment-title'> 
            <h3>Delivery Address</h3>
          </div>
          <div className='payment-address'>
            <p>{user?.email}</p>
            <p>123 ReactJS Road</p>
            <p>Cape Town, SA</p>
          </div>
        </div>
          <div className='payment-section'>
            <div className='payment-title'>
              <h3>Review items and delivery</h3>
            </div>
            <div className='payment-items'>
              {basket.map((item) => (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>
          <div className='payment-section'>
            <div className='payment-title'>
              <h3>Payment Method</h3>
            </div>
            <div className='payment-details'>
            { /**Stripe code willl go here */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} /> 
              <div className='payment-price-container'>
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p>: 'Buy Now'}</span>
                </button>
              </div>
              {error && <div>{error }</div>}
            </form>
            </div>
        </div>
      </div>
      </div>
  )
}

export default Payment;
