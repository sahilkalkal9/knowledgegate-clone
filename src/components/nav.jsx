import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../global.scss";
import kglogo from "./kglogo.png";
import userr from "./userr.png";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

function Nav() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="NavBar">
            <div className="nav">
                <Link to="/">
                    <img className="logo" src={kglogo} alt="Logo" />
                </Link>

                <div className="menu">

                    {
                        !user
                            ? <Link to="/signin">
                                <button className="signin-nav" >
                                    SIGN IN
                                </button>
                            </Link>
                            : null
                    }
                    {
                        !user
                            ? <Link to="/signup">
                                <button className="signup-nav" >
                                    SIGN UP
                                </button>
                            </Link>
                            : null
                    }

                    {
                        user
                            ? <Link to="account">
                                <img className="userr" src={userr} alt="User" />
                            </Link>
                            : null
                    }
                </div>
            </div>
        </div>
    );
}

export default Nav;
