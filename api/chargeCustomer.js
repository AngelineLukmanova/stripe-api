const stripeAPI = require('../stripe');

async function chargeCustomer(req, res) {
  const { amount } = req.body;
  let chargeCustomer;
  try {
    chargeCustomer = await stripeAPI.charges.create({
      amount,
      currency: 'usd',
      customer: 'cus_KRYen6DUWxw3Lf'
    });
    res.status(200).json({ chargeCustomer })
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'an error occured, unable to create payment intent' })
  }
}

module.exports = chargeCustomer;