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
                    <Link to="/signin">
                        <button className="signin-nav" >
                            SIGN IN
                        </button>
                    </Link>
                    <Link to="/signup">
                        <button className="signup-nav" >
                            SIGN UP
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Nav