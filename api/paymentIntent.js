const stripe = require('../stripe');

async function paymentIntent(req, res) {
  const { amount, customer } = req.body;
  let customerId = '';

  if (customer === null) {
    const newCustomer = await stripe.customers.create({});
    customerId = newCustomer.id;
  } else {
    customerId = customer;
  }

  let paymentIntent;
  try {
    paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      customer: customerId,
      payment_method_types: ['card'],
    });

    console.log(paymentIntent);
    res.status(200).json({ clientSecret: paymentIntent.client_secret, customer: paymentIntent.customer });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'an error occured, unable to create payment intent' });
  }
}

module.exports = paymentIntent;
