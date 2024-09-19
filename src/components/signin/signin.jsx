import { Link, useNavigate } from "react-router-dom";
import "../../global.scss"
import kglogo from "./kg logo.png"
import { firestore, auth } from "../../firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';




function SignIn() {

    const usersRef = firestore.collection("users")
    const [users] = useCollectionData(usersRef)
    const navigate = useNavigate()







    const handleSignIn = async () => {

        const provider = new GoogleAuthProvider()
        await signInWithPopup(auth, provider)
            .then(() => {
                firestore.collection("users").doc(auth.currentUser.uid).set({
                    uid: auth.currentUser.uid,
                    photo: auth.currentUser.photoURL,
                    name: auth.currentUser.displayName,
                    email : auth.currentUser.email
                   
                },{merge : true})
            })
        navigate("/")



    }






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

                <button onClick={handleSignIn} className="google">
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