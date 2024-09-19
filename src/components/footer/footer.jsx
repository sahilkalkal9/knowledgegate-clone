import { Link } from "react-router-dom"
import "../../global.scss"
import kglogo from "../kglogo.png"

function Footer() {
    return (
        <div className="Footer">
            <div className="footer-box">
                <div className="logo-box-footer">
                    <img className="footer-img" src={kglogo} />
                </div>
                <div className="footer-menu">
                    <Link to="/terms">
                        <p className="footer-menu-item">
                            Terms & Conditions
                        </p>
                    </Link>
                    <Link to="/privacy-policy">
                        <p className="footer-menu-item">
                            Privacy Policy
                        </p>
                    </Link>
                    <Link to="/refund-policy">
                        <p className="footer-menu-item">
                            Refund Policy
                        </p>
                    </Link>
                    <p className="footer-menu-item nou">
                        Copyright &copy; 2024 Knowledge Gate
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer