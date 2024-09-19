import "../../global.scss"
import stopwatch from "./stopwatch.png"
import booki from "./book.png"
import { Link, useParams } from "react-router-dom"
import courses from "../../courses.json"
import { auth, firestore } from "../../firebase"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { useState } from "react"


function CoursePage() {

    const params = useParams()
    const coursesRef = firestore.collection("users").doc(auth.currentUser?.uid).collection("courses")
    const [coursesO] = useCollectionData(coursesRef)

    var courseBought = false;

    const handleCheckk = (id) => {
        const cown = coursesO && coursesO.some((cd) => cd.courseId == id)
        courseBought = cown
    }



    return (
        <div className="CoursePage">
            {
                courses.map((c) => (
                    c.id == params.courseId
                        ? (
                            <div className="course-page">
                                <div className="course-page-left">
                                    <h1 className="course-page-name">
                                        {c.name}
                                    </h1>

                                    <p className="course-desc">
                                        {c.desc}
                                    </p>

                                    <p className="contents-course-page">
                                        Content
                                    </p>

                                    <div className="course-page-subjects">
                                        {
                                            c.subjects.map((cs) => (
                                                <div className="course-page-sub">
                                                    <img className="sub-img" src={cs.thumbnail} />
                                                    <div className="sub-dets">
                                                        <Link to={`/learn/${c.id}/${cs.id}`}>
                                                            <h6 className="sub-name">
                                                                {cs.name}
                                                            </h6>
                                                        </Link>
                                                        <p className="sub-videos">
                                                            {cs.no_of_v} videos
                                                        </p>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </div>

                                </div>
                                <div className="course-page-right">
                                    <div className="course-page-img-box">
                                        <img className="course-page-img" src={c.thumbnail} />
                                    </div>
                                    <div className="course-page-right-lower">
                                        <div className="expire-div">
                                            <img className="stopwatch" src={stopwatch} />
                                            <p className="expire-text">
                                                {c.validity}
                                            </p>
                                        </div>

                                        <div className="course-page-price-div">
                                            <h4 className="course-page-price">
                                                {c.price}
                                            </h4>

                                            <p className="course-page-price-real">
                                                {c.cut_price}
                                            </p>

                                        </div>

                                        {
                                            handleCheckk(c.id)
                                        }

                                        {
                                            courseBought ?

                                                <button className="buy-now-course-page" >
                                                    PURCHASED
                                                </button>

                                                :
                                                <Link to={`/learn/${c.id}/checkout`}>
                                                    <button className="buy-now-course-page" >
                                                        BUY NOW
                                                    </button>
                                                </Link>
                                        }

                                    </div>
                                    <div className="course-included">
                                        <h6 className="included-head">
                                            What's included
                                        </h6>
                                        <div className="subs-div">
                                            <img className="book" src={booki} />
                                            <p className="nsubs">
                                                {c.no_of_s} Subjects
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        : null
                ))
            }
        </div>
    )

}

export default CoursePage