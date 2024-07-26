import { useContext, useEffect, useState } from "react";
import './Orders.css';
import ShoppingContext from "../context/shopping/shoppingContext";
import { db } from "../firebase";
import Order from './Order';


const Orders = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { user } = shoppingContext;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection('user')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot((snapshot) =>
          setOrders(snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          })))
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className='orders'>
      <h1>Your Orders</h1>
      <div className='orders-container'>
        {orders?.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
