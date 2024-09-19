import "../../global.scss"
import profile from "./person.png"
import enroll from "./page.png"
import invoices from "./dollar-sign.png"
import support from "./support.png"
import { Link, Outlet, useLocation } from "react-router-dom"

function Account() {


    const location = useLocation();

    const isActive = (path) => location.pathname === path;



    return (
        <div className="Account">
            <div className="account-sec">
                <div className="account-head-box">
                    <h3 className="account-text">
                        Account
                    </h3>
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
                        </div>
                    </div>
                    <div className="account-dets-right">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account;