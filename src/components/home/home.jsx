import { Link } from "react-router-dom"
import "../../global.scss"
import courses from "../../courses.json"
import { auth } from "../../firebase"

function Home() {
    return (
        <div className="Home">
            <div className="welcome-div">
                {
                    auth.currentUser
                        ? <p className="hi-text">
                            Hi {auth.currentUser.displayName},
                        </p>
                        : null
                }
                <h1 className="welcome">
                    Welcome to Knowledge Gate
                </h1>
            </div>
            <div className="home-lower">
                <div className="courses">
                    <h4 className="courses-head">
                        Courses
                    </h4>
                    <div className="courses-box">
                        {
                            courses.map((c) => (
                                <div className="course">
                                    <div className="course-img-box">
                                        <img className="course-img" src={c.thumbnail} />
                                    </div>
                                    <div className="course-dets-box">
                                        <Link to={`/learn/${c.id}`}>
                                            <h6 className="course-name">
                                                {c.name}
                                            </h6>
                                        </Link>
                                        <p className="lessons" >
                                            {c.no_of_s} subjects
                                        </p>
                                        <div className="course-price-box">
                                            <h6 className="course-dis-price">
                                                {c.price}
                                            </h6>
                                            <p className="course-price">
                                                {c.cut_price}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }




                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home