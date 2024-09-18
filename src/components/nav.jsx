import "../global.scss"
import kglogo from "./kglogo.png"

function Nav() {
    return (
        <div className="NavBar">
            <div className="nav">
                <img className="logo" src={kglogo} />

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