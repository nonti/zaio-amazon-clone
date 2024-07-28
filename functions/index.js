const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51PSPjgC5GjrKrKBvSL9nRx6IkjLfqcS2IH4Sx5CFx13a1zGXyWxpj0IRB1ob1atkdZprnKgN9uDW3imL8tb707bn00LcOtA89K');

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
//API

//App Config
const app = express();

//Middleware
app.use(cors({ origin: true }));
app.use(express.json());

//API Route
app.get('/', (req, res) => res.status(200).send('Backend Running!'));
app.post('/payments/create', async (req, res) => {
  const total = req.query.total;

  console.log('Payment request received: ' + total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });
  //if cretated snde response
  res.status(201).send({clientSecret: paymentIntent.client_secret })
});

//Listen Commands
exports.api = functions.https.onRequest(app);
