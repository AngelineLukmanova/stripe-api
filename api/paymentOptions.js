const stripe = require('../stripe');

async function paymentOptions(req, res) {
  const { customer } = req.body;
  let paymentOptions;
  try {
    paymentOptions = await stripe.paymentMethods.list({
      customer,
      type: 'card',
    });
    console.log('log', customer, paymentOptions);
    res.status(200).json({ payments: paymentOptions.data })

  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'an error occured, unable to fetch payment options' })
  }
}

module.exports = paymentOptions;