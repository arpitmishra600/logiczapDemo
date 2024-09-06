const {instance} = require("../utils/razorpay");
const User = require("../models/user.models")
const crypto = require("crypto");

exports.capturePayment = async (req, res) => {
    const {amount} = req.body

    const user = await User.findById(req.user._id);
    const plan = user.plan;
    
    try {
      if(plan !== "Free") {
        return res.status(400).send("User is already a premium user");
      }

      const options = {
        amount: amount * 100,
        currency: "INR",
        receipt: Math.random(Date.now()).toString(),
        payment_capture: 1
      }

      const paymentResponse = await instance.orders.create(options);
      res.status(200).json({
        user: user, 
        orderId: paymentResponse.id,
        amount: paymentResponse.amount,
        currency: paymentResponse.currency
      });

    } catch (error) {
        res.status(500).send(error);
    }
}

exports.verifyPayment = async (req, res) => {
  const razorpayOrderId = req.body.razorpay_order_id;
  const razorpayPaymentId = req.body.razorpay_payment_id;
  const razorpaySignature = req.body.razorpay_signature;
  const {plan} = req.body;
  const userId = req.user._id;

  let body = razorpayOrderId + "|" + razorpayPaymentId;
  
  const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest('hex');
    
    
  if(expectedSignature === razorpaySignature) {
    await User.findByIdAndUpdate(userId, {plan: plan}, {new: true})
    return res.status(200).json({message: "Payment successful"});
  }

  return res.status(200).json({message: "Payment failed"});
}