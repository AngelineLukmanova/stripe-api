const express = require('express');
const cors = require('cors');
const paymentIntent = require('./api/paymentIntent');
const chargeCustomer = require('./api/chargeCustomer');
const paymentOptions = require('./api/paymentOptions');
const createRefund = require('./api/refund');
const paymentIntentsList = require('./api/paymentIntentsList');
const addPaymentMethod = require('./api/addPaymentMethod');

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.get('/', (req, res) => res.send('hello world'));

app.post('/payment-options', paymentOptions);
app.post('/add-payment-method', addPaymentMethod);
app.post('/create-charge', chargeCustomer);
app.post('/create-refund', createRefund);
app.post('/create-payment-intent', paymentIntent);
app.post('/create-payment-intents-list', paymentIntentsList);


app.listen(process.env.PORT || 8080, () => console.log('Server started..'));


