import { Link } from "react-router-dom"
import "../../global.scss"
import kglogo from "./kg logo.png"

function SignUp() {
    return (
        <div className="SignIn">
            <div className="signin-box">
                <img className="signin-logo" src={kglogo} />
                <h4 className="create-account-head">
                    Create Your Account
                </h4>
                <p className="already-account">
                    Already have an account?
                    <Link to="/signin">
                        <span className="signin-button">  SIGN IN</span>
                    </Link>
                </p>

                <form className="signin-form" >
                    <input type="email" placeholder="Enter your email" className="signin-input" />
                    <input type="password" placeholder="Enter a password" className="signin-input" />
                    <input type="submit" className="signin-submit" value="SIGN UP" />

                </form>



                <p className="or">
                    or
                </p>

                <button className="google">
                    Continue with Google
                </button>

                <p className="agreement">
                    By clicking "signup" you agree to out Terms of Service & Privacy Policy
                </p>

                <p className="explore">
                    Continue without signup?
                    <Link to="/">
                        <span className="explorebut">  EXPLORE</span>
                    </Link>
                </p>


            </div>
        </div>
    )
}

export default SignUp