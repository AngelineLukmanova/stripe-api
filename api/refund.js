const stripe = require('../stripe');

async function createRefund(req, res) {
  const { paymentIntent, amount, reason } = req.body;
  let refund;

  try {
    refund = await stripe.refunds.create({
      payment_intent: paymentIntent,
      amount,
      metadata: { 'refund_reason': reason }
    });
    res.status(200).json({ refund });

  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'an error occured, unable to refund' });
  }
}

module.exports = createRefund;