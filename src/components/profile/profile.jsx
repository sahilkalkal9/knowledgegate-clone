import "../../global.scss"
import pencil from "./write.png"
import checkMark from "./check-mark.png"
import { auth, firestore } from "../../firebase"
import { useCollectionData } from "react-firebase-hooks/firestore"

function Profile() {

    const usersRef = firestore.collection("users")
    const [users] = useCollectionData(usersRef)

    return (
        <div className="Profile">
            <div className="profile-box">
                {
                    users && users.map((u) => (
                        u.uid == auth.currentUser.uid
                            ? <div className="profile-box-dets">
                                <div className="profile-box-det">
                                    <div className="profile-det-head">
                                        <p className="profile-det-label">
                                            Account Name
                                        </p>
                                        <p className="profile-det-text">
                                            {u.name}
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
                                            {u.email}
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
                                            {u.phone}
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
                                            {u.pan}
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
                                            {u.address}
                                        </p>
                                    </div>
                                    <img className="write" src={pencil} />
                                </div>
                            </div>
                            : null
                    ))
                }
            </div>
        </div>
    )
}

export default Profile