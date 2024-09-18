import "../../global.scss"
import stopwatch from "./stopwatch.png"

function CoursePage() {
    return (
        <div className="CoursePage">
            <div className="course-page">
                <div className="course-page-left">

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

                        <button className="buy-now-course-page" >
                           BUY NOW
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default CoursePage