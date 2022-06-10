const stripe = require('../stripe');

async function paymentIntent(req, res) {
  const { amount, customer, paymentMethodId } = req.body;
  let paymentIntent;
  try {
    paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      customer,
      payment_method: paymentMethodId,
      off_session: true,
      confirm: true,
    });
    res.status(200).json({ clientSecret: paymentIntent.client_secret })
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'an error occured, unable to create payment intent' })
  }
}

module.exports = paymentIntent;
