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
                   
                        <p className="footer-menu-item">
                            Terms & Conditions
                        </p>
                   
                        <p className="footer-menu-item">
                            Privacy Policy
                        </p>
                    
                    
                        <p className="footer-menu-item">
                            Refund Policy
                        </p>
                    
                    <p className="footer-menu-item nou">
                        Copyright &copy; 2024 Knowledge Gate Clone
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer