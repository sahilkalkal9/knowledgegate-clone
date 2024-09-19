import "../../global.scss"
import stopwatch from "./stopwatch.png"
import booki from "./book.png"
import { Link } from "react-router-dom"

function CoursePage() {
    return (
        <div className="CoursePage">
            <div className="course-page">
                <div className="course-page-left">
                    <h1 className="course-page-name">
                        GATE Guidance Plus 2025
                    </h1>

                    <p className="course-desc">
                        GATE Guidance Plus 2025
                    </p>

                    <p className="contents-course-page">
                        Content
                    </p>

                    <div className="course-page-subjects">
                        <div className="course-page-sub">
                            <img className="sub-img" src="https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/86062/courses/105497/1700637084527GATE%20Guidence_thumbnails%20%284%29.png" />
                            <div className="sub-dets">
                                <Link to="/learn/GATE-Guidance-Plus-2025/classes">
                                    <h6 className="sub-name">
                                        Discrete Mathematics for GATE
                                    </h6>
                                </Link>
                                <p className="sub-videos">
                                    100 videos
                                </p>
                            </div>
                        </div>
                        <div className="course-page-sub">
                            <img className="sub-img" src="https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/86062/courses/105497/1700637084527GATE%20Guidence_thumbnails%20%284%29.png" />
                            <div className="sub-dets">
                                <h6 className="sub-name">
                                    Discrete Mathematics for GATE
                                </h6>
                                <p className="sub-videos">
                                    100 videos
                                </p>
                            </div>
                        </div>
                        <div className="course-page-sub">
                            <img className="sub-img" src="https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/86062/courses/105497/1700637084527GATE%20Guidence_thumbnails%20%284%29.png" />
                            <div className="sub-dets">
                                <h6 className="sub-name">
                                    Discrete Mathematics for GATE
                                </h6>
                                <p className="sub-videos">
                                    100 videos
                                </p>
                            </div>
                        </div>
                        <div className="course-page-sub">
                            <img className="sub-img" src="https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/86062/courses/105497/1700637084527GATE%20Guidence_thumbnails%20%284%29.png" />
                            <div className="sub-dets">
                                <h6 className="sub-name">
                                    Discrete Mathematics for GATE
                                </h6>
                                <p className="sub-videos">
                                    100 videos
                                </p>
                            </div>
                        </div>
                        <div className="course-page-sub">
                            <img className="sub-img" src="https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/86062/courses/105497/1700637084527GATE%20Guidence_thumbnails%20%284%29.png" />
                            <div className="sub-dets">
                                <h6 className="sub-name">
                                    Discrete Mathematics for GATE
                                </h6>
                                <p className="sub-videos">
                                    100 videos
                                </p>
                            </div>
                        </div>
                        <div className="course-page-sub">
                            <img className="sub-img" src="https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/86062/courses/105497/1700637084527GATE%20Guidence_thumbnails%20%284%29.png" />
                            <div className="sub-dets">
                                <h6 className="sub-name">
                                    Discrete Mathematics for GATE
                                </h6>
                                <p className="sub-videos">
                                    100 videos
                                </p>
                            </div>
                        </div>
                        <div className="course-page-sub">
                            <img className="sub-img" src="https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/86062/courses/105497/1700637084527GATE%20Guidence_thumbnails%20%284%29.png" />
                            <div className="sub-dets">
                                <h6 className="sub-name">
                                    Discrete Mathematics for GATE
                                </h6>
                                <p className="sub-videos">
                                    100 videos
                                </p>
                            </div>
                        </div><div className="course-page-sub">
                            <img className="sub-img" src="https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/86062/courses/105497/1700637084527GATE%20Guidence_thumbnails%20%284%29.png" />
                            <div className="sub-dets">
                                <h6 className="sub-name">
                                    Discrete Mathematics for GATE
                                </h6>
                                <p className="sub-videos">
                                    100 videos
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="course-page-right">
                    <div className="course-page-img-box">
                        <img className="course-page-img" src="https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/86062/courses/182628/1707470188416plus_lyst3202.png" />
                    </div>
                    <div className="course-page-right-lower">
                        <div className="expire-div">
                            <img className="stopwatch" src={stopwatch} />
                            <p className="expire-text">
                                Expires On Jul 31, 2025
                            </p>
                        </div>

                        <div className="course-page-price-div">
                            <h4 className="course-page-price">
                                ₹ 40,906
                            </h4>

                            <p className="course-page-price-real">
                                ₹ 81,812
                            </p>

                        </div>

                        <Link to="/learn/GATE-Guidance-Plus-2025/checkout">
                            <button className="buy-now-course-page" >
                                BUY NOW
                            </button>
                        </Link>

                    </div>
                    <div className="course-included">
                        <h6 className="included-head">
                            What's included
                        </h6>
                        <div className="subs-div">
                            <img className="book" src={booki} />
                            <p className="nsubs">
                                10 Subjects
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CoursePage