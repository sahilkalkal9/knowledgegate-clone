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
import Footer from "./components/footer/footer";
import Terms from "./components/terms/terms.jsx";
import Privacy from "./components/privacy/privacy.js";
import Refund from "./components/refund/refund.js";

function App() {




  const location = useLocation();

  // const isActive = (path) => location.pathname === path;//

  const isActive = (path) => {
    return window.location.pathname.match(new RegExp(`^${path.replace(/:\w+/g, '\\w+')}$`));
  };




  return (
    <div className="App">
      {
        isActive("/learn/:courseId/:subjectId") || isActive("/signin") || isActive("/signup") ? null : <Nav />
      }

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn/:courseId" element={<CoursePage />} />
        <Route path="/learn/:courseId/:subjectId" element={<VideoPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<Account />} >
          <Route index element={<Profile />} />
          <Route path="/account/profile" element={<Profile />} />
          <Route path="/account/enrollments" element={<Enrollment />} />
          <Route path="/account/invoices" element={<Invoices />} />
        </Route>
        <Route path="/learn/:courseId/checkout" element={<Checkout />} />
       
      </Routes>


      <Footer />


    </div>
  );
}

export default App;
