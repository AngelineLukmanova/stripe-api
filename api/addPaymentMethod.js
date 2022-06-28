const stripeAPI = require('../stripe');

async function addPaymentMethod(req, res) {
  const { paymentMethod, customer } = req.body;
  let newPaymentMethod;

  try {
    newPaymentMethod = await stripeAPI.paymentMethods.attach(
      paymentMethod,
      { customer }
    );
    console.log(newPaymentMethod);
    res.status(200).json({ newPaymentMethod });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'an error occured, unable to create payment intent' })
  }
}

module.exports = addPaymentMethod;