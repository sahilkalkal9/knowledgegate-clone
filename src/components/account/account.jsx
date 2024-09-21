import "../../global.scss"
import profile from "./person.png"
import enroll from "./page.png"
import invoices from "./dollar-sign.png"
import support from "./support.png"
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"
import exiti from "./exit.png"
import { auth } from "../../firebase"
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth";
import menuk from "./menuk.png"
import cross from "./close.png"

function Account() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const location = useLocation();

    const isActive = (path) => location.pathname === path;


    const closeNav = () => {
        document.getElementById("overlayNav").style.width = "0cm"
    }

    const openNav = () => {
        document.getElementById("overlayNav").style.width = "10cm"
    }






    return (
        <>

            <div id="overlayNav" className="overlay-nav">
                <div className="overlay-box">
                    <div className="close-div">
                        {/* <img className="close-img" src={cross} onClick={closeNav} /> */}
                    </div>
                    <div className="account-dets-menu">
                        <div onClick={() => { closeNav() }} className="account-dets-menu-item">
                            {/* <img className="acc-dets-img" src={cross} /> */}
                            <p className="acc-dets-text">
                                Close
                            </p>
                        </div>
                        <Link to="/account/profile">
                            <div onClick={closeNav} className={isActive("/account") || isActive("/account/profile") || isActive("/account/") ? "account-dets-menu-item activeM" : "account-dets-menu-item"} >
                                <img className="acc-dets-img" src={profile} />
                                <p className="acc-dets-text">
                                    My Profile
                                </p>
                            </div>
                        </Link>
                        <Link to="/account/enrollments">
                            <div onClick={closeNav} className={isActive("/account/enrollments") ? "account-dets-menu-item activeM" : "account-dets-menu-item"}>
                                <img className="acc-dets-img" src={enroll} />
                                <p className="acc-dets-text">
                                    My Enrollments
                                </p>
                            </div>
                        </Link>
                        <Link to="/account/invoices">
                            <div onClick={closeNav} className={isActive("/account/invoices") ? "account-dets-menu-item activeM" : "account-dets-menu-item"}>
                                <img className="acc-dets-img" src={invoices} />
                                <p className="acc-dets-text">
                                    My Invoices
                                </p>
                            </div>
                        </Link>
                        <div onClick={closeNav} className={isActive("/account/helpdesk") ? "account-dets-menu-item activeM" : "account-dets-menu-item"}>
                            <img className="acc-dets-img" src={support} />
                            <p className="acc-dets-text">
                                Helpdesk
                            </p>
                        </div>
                        <div onClick={() => { auth.signOut(); closeNav() }} className="account-dets-menu-item">
                            <img className="acc-dets-img" src={exiti} />
                            <p className="acc-dets-text">
                                Sign Out
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Account">
                {
                    !user
                        ? <div className="account-sec" >
                            <p>Please login or signup</p>
                        </div>
                        : (
                            <div className="account-sec">
                                <div className="account-head-box">
                                    <h3 className="account-text">
                                        Account
                                    </h3>
                                    <img onClick={openNav} className="menuk" src={menuk} />

                                </div>
                                <div className="account-dets">
                                    <div className="account-dets-left">
                                        <div className="account-dets-menu">
                                            <Link to="/account/profile">
                                                <div className={isActive("/account") || isActive("/account/profile") || isActive("/account/") ? "account-dets-menu-item activeM" : "account-dets-menu-item"} >
                                                    <img className="acc-dets-img" src={profile} />
                                                    <p className="acc-dets-text">
                                                        My Profile
                                                    </p>
                                                </div>
                                            </Link>
                                            <Link to="/account/enrollments">
                                                <div className={isActive("/account/enrollments") ? "account-dets-menu-item activeM" : "account-dets-menu-item"}>
                                                    <img className="acc-dets-img" src={enroll} />
                                                    <p className="acc-dets-text">
                                                        My Enrollments
                                                    </p>
                                                </div>
                                            </Link>
                                            <Link to="/account/invoices">
                                                <div className={isActive("/account/invoices") ? "account-dets-menu-item activeM" : "account-dets-menu-item"}>
                                                    <img className="acc-dets-img" src={invoices} />
                                                    <p className="acc-dets-text">
                                                        My Invoices
                                                    </p>
                                                </div>
                                            </Link>
                                            <div className={isActive("/account/helpdesk") ? "account-dets-menu-item activeM" : "account-dets-menu-item"}>
                                                <img className="acc-dets-img" src={support} />
                                                <p className="acc-dets-text">
                                                    Helpdesk
                                                </p>
                                            </div>
                                            <div onClick={() => { auth.signOut() }} className="account-dets-menu-item">
                                                <img className="acc-dets-img" src={exiti} />
                                                <p className="acc-dets-text">
                                                    Sign Out
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="account-dets-right">
                                        <Outlet />
                                    </div>
                                </div>
                            </div>
                        )
                }
            </div>
        </>
    )
}

export default Account;