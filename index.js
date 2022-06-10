const express = require('express');
const cors = require('cors');
const paymentIntent = require('./api/paymentIntent');
const chargeCustomer = require('./api/chargeCustomer');
const paymentOptions = require('./api/paymentOptions');
const createRefund = require('./api/refund');
const paymentIntentsList = require('./api/paymentIntentsList');

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.get('/', (req, res) => res.send('hello world'));

app.post('/payment-options', paymentOptions);
app.post('/create-charge', chargeCustomer);
app.post('/create-refund', createRefund);
app.post('/create-payment-intent', paymentIntent);
app.post('/create-payment-intents-list', paymentIntentsList);
// app.post('/update-booking-status', async (req, res) => {
//   try {
//     await updateBookingStatus();
//     res.status(200).send({ status: 200 })
//   }
//   catch (error) {
//     console.error(error);
//     res.status(400).send("Unable to update bookinfs")
//   }
// });

app.listen(process.env.PORT || 8080, () => console.log('Server started..'));


