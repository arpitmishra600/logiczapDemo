import axios from 'axios'
import toast from 'react-hot-toast';

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }

  async function handleClick(amount, plan) {
    try {
      await loadScript('https://checkout.razorpay.com/v1/checkout.js') 
      const orderResponse = await axios.post('http://localhost:5050/api/v1/payment/capturePayment', {amount: amount},{withCredentials:true})
      
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        currency: orderResponse.data.currency,
        amount: orderResponse.data.amount,
        order_id: orderResponse.data.orderId,
        prefill: {
          name: orderResponse.data.user.name,
          email: orderResponse.data.user.email
      }, 
      handler: function (response) {
        verifyPayment({...response, plan})
      }
     }
      const paymentObject = new window.Razorpay(options)
      paymentObject.open()
      paymentObject.on("payment.failed", function (response) {
        console.log(response.error);
      })
    } catch (error) {
      console.log(error);
      
    }
  }
  
  async function verifyPayment(data) {
    try {
      await axios.post('http://localhost:5050/api/v1/payment/verify', data, {withCredentials:true})
      toast.success('Payment successful')
      localStorage.setItem("plan",data.plan)
    } catch (error) {
      console.log(error);
      
    }
  }

  export default handleClick