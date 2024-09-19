import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/home/home";
import Nav from "./components/nav";
import "./global.scss"
import CoursePage from "./components/coursePage/coursePage";
import VideoPage from "./components/videoPage/videoPage";
import SignIn from "./components/signin/signin";
import SignUp from "./components/signup/signup";
import Account from "./components/account/account";
import Profile from "./components/profile/profile";
import Enrollment from "./components/enrollments/enrollments";
import Invoices from "./components/invoices/invoices";
import Checkout from "./components/checkout/checkout";

function App() {

  const handlePayment = async (e) => {
    e.preventDefault();

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const options = {
        key: 'rzp_test_a5IHmEsWCCdHsy', // Replace with your Razorpay Key ID
        amount: 500 * 100, // amount in paisa
        currency: 'INR',
        name: 'Chemictionary',
        description: 'GATE Guide Course 2025',
        prefill: {
          email: "sahilkalkal108@gmail.com",
          contact: "+917982294822"
        },
        handler: function (response) {
          // Payment successful, console the paymentId, orderId, and signature (used as invoiceId)
          console.log('Payment ID:', response.razorpay_payment_id);
          console.log('Order ID:', response.razorpay_order_id);
          console.log('Invoice (Signature) ID:', response.razorpay_signature);

          alert('Payment successful! Check the console for payment details.');
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


  const location = useLocation();

  const isActive = (path) => location.pathname === path;



  return (
    <div className="App">
      {
        isActive("/learn/GATE-Guidance-Plus-2025/classes") || isActive("/signin") || isActive("/signup") ? null : <Nav />
      }

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn/GATE-Guidance-Plus-2025" element={<CoursePage />} />
        <Route path="/learn/GATE-Guidance-Plus-2025/classes" element={<VideoPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<Account />} >
          <Route index element={<Profile />} />
          <Route path="/account/profile" element={<Profile />} />
          <Route path="/account/enrollments" element={<Enrollment />} />
          <Route path="/account/invoices" element={<Invoices />} />
        </Route>
        <Route path="/learn/GATE-Guidance-Plus-2025/checkout" element={<Checkout />} />
      </Routes>



    </div>
  );
}

export default App;
