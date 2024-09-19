import "../../global.scss"
import videoi from "./video.png"
import larr from "./larr.png"
import { Link, useParams } from "react-router-dom"
import Iframe from "react-iframe"
import courses from "../../courses.json"
import { useState } from "react"

function VideoPage() {

    const params = useParams()

    const courseID = params.courseId
    const subjectId = params.subjectId

    const [videoUrl, setVideoUrl] = useState("")
    const [videoName, setVideoName] = useState("")

    console.log(videoName, videoUrl)





    return (
        <div className="VideoPage">
            {
                courses.map((c) => (
                    c.id == courseID
                        ? (
                            c.subjects.map((cs) => (
                                cs.id == subjectId
                                    ? (
                                        <div className="video-page">
                                            <div className="video-page-left">
                                                <div className="video-page-left-head">
                                                    <Link to={`/learn/${courseID}`}>
                                                        <img className="larr" src={larr} />
                                                    </Link>
                                                    <p className="sub-name-video">
                                                        Discrete Mathematics for GATE
                                                    </p>
                                                </div>


                                                <div className="video-player">
                                                    {/* <div className="vp-course-dets-box">
                                                    <div className="video-player-course-dets">
                                                        <h4 className="vp-course-name">
                                                            Blue Print of DIscrete Mathematics
                                                        </h4>
                                                        <div className="vp-course-price-div">
                                                            <h5 className="vp-course-price-dis">
                                                                ₹ 40,906
                                                            </h5>
                                                            <p className="vp-course-price">
                                                                ₹ 81,812
                                                            </p>
                                                        </div>
                                                        <p className="tilldate">
                                                            Till Jul 31, 2025
                                                        </p>
                                                        <button className="vp-buy-now">
                                                            BUY NOW
                                                        </button>
                        
                                                        <p className="signinvp">
                                                            Already purchased ? <span className="signintext">
                                                                SIGN IN
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div> */}
                                                    {
                                                        videoUrl == ""
                                                            ? <p>Select video to play</p>
                                                            :
                                                            <Iframe className="video-iframe" url={videoUrl} >
                                                            </Iframe>
                                                    }

                                                </div>

                                                <div className="about-bar-vp">
                                                    <p className="about-text-vp">
                                                        About
                                                    </p>
                                                </div>
                                                <div className="vp-about-section">
                                                    <h3 className="vp-video-big-name">
                                                        {videoName}
                                                    </h3>
                                                    <p className="tilldate">
                                                        {c.validity}
                                                    </p>


                                                    <div className="author-section">
                                                        <h3 className="vp-video-big-name">
                                                            Author
                                                        </h3>
                                                        <div className="author-data">
                                                            <img className="author-img" src="https://imgproxy.learnyst.com/https://asset-cdn.learnyst.com/assets/schools/86062/teacher/DSC_0037_removebg_preview_8xg7b3.png?w=48&h=48&resizetype=fit" />
                                                            <p className="author-name">Sanchit Jain</p>
                                                        </div>
                                                        <p className="author-name">
                                                            M.Tech in Computer Science, has more that 8 years of teaching experience, has mentored thousands of students for GATE and NET exam.
                                                        </p>
                                                    </div>
                                                </div>




                                            </div>
                                            <div className="video-page-right">
                                                <h5 className="syllab-head">
                                                    Syllabus
                                                </h5>

                                                <div className="syllabus-videos">
                                                    {
                                                        cs.videos.map((csv) => (
                                                            <div className="syllabus-video" onClick={() => { setVideoName(csv.name); setVideoUrl(csv.link) }} >
                                                                <div className="syllabus-video-head">
                                                                    <img className="video-img" src={videoi} />
                                                                    <p className="video-name">
                                                                        {csv.name}
                                                                    </p>
                                                                </div>
                                                                <p className="video-time">
                                                                    {csv.timing}
                                                                </p>
                                                            </div>
                                                        ))
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    )
                                    : null
                            ))
                        )
                        : null
                ))
            }
        </div >
    )
}

export default VideoPage