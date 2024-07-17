import { useContext, useEffect, useState } from "react";
import './Orders.css';
import ShoppingContext from "../context/shopping/shoppingContext";
import { db } from "../firebase";


const Orders = () => {
  const { user } = useContext(ShoppingContext);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (user?.uid) {
        try {
          const ordersRef = db
            .collection("user")
            .doc(user.id)
            .collection("orders");
          const snapshot = await ordersRef.get();
          const fetchOrders = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setOrders(fetchOrders);
        } catch (err) {
          console.error("Error fetching orders", err);
        }
      }
    };
    fetchOrders();
  }, [user]);

  return (
    <div className="orders">
      <h1> Your Orders </h1>{" "}
      <div className="orders__list">
        {" "}
        {orders.map((order) => (
          <div key={order.id} className="orders__order">
            <h2> Order ID: {order.id} </h2>{" "}
            <p> Amount: $ {order.amount / 100} </p>{" "}
            <p> Created: {new Date(order.created * 1000).toLocaleString()} </p>
            <div className="orders__items">
              {" "}
              {order.basket.map((itemWrapper, index) => {
                const item = itemWrapper.item; // Access the item details
                return (
                  <div key={index} className="orders__item">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="orders__itemImage"
                    />
                    <div className="orders__itemDetails">
                      <h3> {item.title} </h3> <p> Price: {item.price} </p>{" "}
                      <p> Rating: {item.rating} </p>{" "}
                    </div>{" "}
                  </div>
                );
              })}{" "}
            </div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default Orders;
