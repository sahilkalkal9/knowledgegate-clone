import logo from './logo.svg';
import './App.css';

function App() {

  const handlePayment = async (e) => {
    e.preventDefault();

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const options = {
        key: 'rzp_live_s81SgI1QzQVvkr', // Replace with your Razorpay Key ID
        amount: 500 * 100, // amount in paisa
        currency: 'INR',
        name: 'Chemictionary',
        description: 'CM Guide Course 2025',
        prefill: {
          email: "sahilkalkal108@gmail.com",
          contact: "+917982294822"
        },
        notes: {
          app_name: 'Chemictionary'
        },
        handler: function (response) {
          // Payment successful, console the paymentId, orderId, and signature (used as invoiceId)
          console.log('Payment ID:', response.razorpay_payment_id);

        },
        modal: {
          ondismiss: function () {
            console.log('Payment modal closed');
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    };
  };

  return (
    <div className="App">
      <button onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
}

export default App;
