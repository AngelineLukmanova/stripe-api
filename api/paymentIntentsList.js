const stripe = require('../stripe');

async function paymentIntentsList(req, res) {
  const { customer } = req.body;
  let paymentIntentsList;
  try {
    paymentIntentsList = await stripe.paymentIntents.list({
      limit: 10,
      customer,
    });
    res.status(200).json({ paymentIntentsList })
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'an error occured, unable to fetch list of payments' })
  }
}

module.exports = paymentIntentsList;
