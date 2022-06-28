const express = require('express');
const cors = require('cors');
const paymentIntent = require('./api/paymentIntent');
const paymentOptions = require('./api/paymentOptions');
const createRefund = require('./api/refund');
const paymentIntentsList = require('./api/paymentIntentsList');
const addPaymentMethod = require('./api/addPaymentMethod');

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.get('/', (req, res) => res.send('Stripe Demo API'));

app.post('/payment-options', paymentOptions);
app.post('/add-payment-method', addPaymentMethod);
app.post('/create-refund', createRefund);
app.post('/create-payment-intent', paymentIntent);
app.post('/create-payment-intents-list', paymentIntentsList);


app.listen(process.env.PORT || 8080, () => console.log('Server started..'));


