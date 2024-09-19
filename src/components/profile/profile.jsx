import "../../global.scss"
import pencil from "./write.png"
import checkMark from "./check-mark.png"

function Profile() {
    return (
        <div className="Profile">
            <div className="profile-box">
                <div className="profile-box-dets">
                    <div className="profile-box-det">
                        <div className="profile-det-head">
                            <p className="profile-det-label">
                                Account Name
                            </p>
                            <p className="profile-det-text">
                                Sahil Kalkal
                            </p>
                        </div>
                        <img className="write" src={pencil} />
                    </div>
                    <div className="profile-box-det">
                        <div className="profile-det-head">
                            <p className="profile-det-label">
                                Email
                            </p>
                            <p className="profile-det-text">
                                sahilkalkal108@gmail.com
                            </p>
                        </div>
                        <img className="write" src={checkMark} />
                    </div>
                    <div className="profile-box-det">
                        <div className="profile-det-head">
                            <p className="profile-det-label">
                                Contact Number
                            </p>
                            <p className="profile-det-text">
                                +917982294822
                            </p>
                        </div>
                        <img className="write" src={pencil} />
                    </div>
                    <div className="profile-box-det">
                        <div className="profile-det-head">
                            <p className="profile-det-label">
                                PAN
                            </p>
                            <p className="profile-det-text">
                                OEKPS8307J
                            </p>
                        </div>
                        <img className="write" src={pencil} />
                    </div>
                    <div className="profile-box-det">
                        <div className="profile-det-head">
                            <p className="profile-det-label">
                                My Address
                            </p>
                            <p className="profile-det-text">
                                G-79, Kunwar Singh Nagar, Nangloi, New Delhi - 110041
                            </p>
                        </div>
                        <img className="write" src={pencil} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile