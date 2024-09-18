import { Link } from "react-router-dom";
import "../../global.scss"
import kglogo from "./kg logo.png"

function SignIn() {
    return (
        <div className="SignIn">
            <div className="signin-box">
                <img className="signin-logo" src={kglogo} />
                <h4 className="create-account-head">
                    Sign In To Your Account
                </h4>
                <p className="already-account">
                    Already have an account?
                    <Link to="/signup">
                        <span className="signin-button">  SIGN UP</span>
                    </Link>
                </p>

                <form className="signin-form" >
                    <input type="email" placeholder="Enter your email" className="signin-input" />
                    <input type="password" placeholder="Enter a password" className="signin-input" />
                    <input type="submit" className="signin-submit" value="SIGN IN" />

                </form>

                <p className="forget">
                    FORGOT PASSWORD?
                </p>

                <p className="or">
                    or
                </p>

                <button className="google">
                    Continue with Google
                </button>


                <p className="explore esign">
                    Continue without signin?
                    <Link to="/">
                        <span className="explorebut">  EXPLORE</span>
                    </Link>
                </p>


            </div>
        </div>
    )
}

export default SignIn;