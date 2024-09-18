import { Link } from "react-router-dom"
import "../global.scss"
import kglogo from "./kglogo.png"

function Nav() {
    return (
        <div className="NavBar">
            <div className="nav">
                <Link to="/">
                    <img className="logo" src={kglogo} />
                </Link>

                <div className="menu">
                    <p className="menu-item">Community</p>
                    <p className="menu-item">Newsfeed</p>
                    <button className="signin-nav" >
                        SIGN IN
                    </button>
                    <button className="signup-nav" >
                        SIGN UP
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Nav