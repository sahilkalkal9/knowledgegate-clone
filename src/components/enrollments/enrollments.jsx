import { useCollectionData } from "react-firebase-hooks/firestore"
import { auth, firestore } from "../../firebase"
import "../../global.scss"

function Enrollment() {


    const enrollmentsRef = firestore.collection("users").doc(auth.currentUser?.uid).collection("courses")

    const [enrollments] = useCollectionData(enrollmentsRef)



    return (
        <div className="Enrollments">
            <div className="enrollment-box">
                <div className="enrollments">
                    <h5 className="account-outlet-head">
                        Enrollments
                    </h5>
                    {
                        enrollments && enrollments == 0
                            ? <p>No enrollments</p>
                            : (
                                enrollments && enrollments.map((en) => (
                                    <div className="enrollment">
                                        <img className="enroll-img" src={en.thumbnail} />

                                        <div className="enrollment-right">
                                            <p className="enrolll-name">
                                                {en.name}

                                            </p>
                                            <p className="purchased">
                                                PURCHASED
                                            </p>
                                            <p className="enroll-subs">
                                                {en.nos} subjects
                                            </p>
                                            <p className="enrolll-name">
                                                {en.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            )
                    }


                </div>
            </div>
        </div>
    )
}

export default Enrollment