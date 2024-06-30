import './Orders.css';
import axios from '../axios';
import { db } from '../firebase';
import { useContext,useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import CheckoutProduct from "./CheckoutProduct.js";
import ShoppingContext from "../context/shopping/shoppingContext.js";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';



const Orders = () => {
  
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
    <>
      <h1>Your Orders</h1>
      <div className='orders'>
        <div className='order-container'>
          <div className='order-section'>
            <div className='order-items'>
              {basket.map((item) => (
                <CheckoutProduct
                  key = { item.id }
                  id = { item.id }
                  title = { item.title }
                  image = { item.image }
                  price = { item.price }
                />
               ))}
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default Orders;

