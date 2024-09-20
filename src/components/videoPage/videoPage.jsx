import "../../global.scss"
import videoi from "./video.png"
import larr from "./larr.png"
import { Link, useParams } from "react-router-dom"
import Iframe from "react-iframe"
import courses from "../../courses.json"
import { useState } from "react"
import { auth, firestore } from "../../firebase"
import { useCollectionData } from "react-firebase-hooks/firestore"

function VideoPage() {

    const params = useParams()

    const courseID = params.courseId
    const subjectId = params.subjectId

    const [videoUrl, setVideoUrl] = useState("")
    const [videoName, setVideoName] = useState("")

    // console.log(videoName, videoUrl)
    const coursesRef = firestore.collection("users").doc(auth.currentUser?.uid).collection("courses")
    const [coursesO] = useCollectionData(coursesRef)
    const courseBought = coursesO && coursesO.some(co => co.id == courseID)

    // courses.map((c) => (
    //     c.id == courseID
    //         ? (
    //             c.subjects.map((cs) => (
    //                 cs.id == subjectId
    //                     ? (
    //                         setVideoName(cs.videos[0].name)
    //                     )
    //                     : null
    //             ))
    //         )
    //         : null
    // ))





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
                                                        {cs.name}
                                                    </p>
                                                </div>


                                                <div className="video-player">
                                                    {
                                                        !auth.currentUser
                                                            ? (
                                                                <div className="vp-course-dets-box">
                                                                    <div className="video-player-course-dets">
                                                                        <h4 className="vp-course-name">
                                                                            {c.name}
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
                                                                            {c.validity}
                                                                        </p>
                                                                        <Link to={`/learn/${courseID}/checkout`}>
                                                                            <button className="vp-buy-now">
                                                                                BUY NOW
                                                                            </button>
                                                                        </Link>

                                                                        <p className="signinvp">
                                                                            Already purchased ? <span className="signintext">
                                                                                SIGN IN
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            )
                                                            : auth.currentUser && courseBought
                                                                ? (
                                                                    videoUrl == ""
                                                                        ? <p>Select video to play</p>
                                                                        :
                                                                        <Iframe className="video-iframe" url={videoUrl} >
                                                                        </Iframe>
                                                                )
                                                                : (
                                                                    <div className="vp-course-dets-box">
                                                                        <div className="video-player-course-dets">
                                                                            <h4 className="vp-course-name">
                                                                                {c.name}
                                                                            </h4>
                                                                            <div className="vp-course-price-div">
                                                                                <h5 className="vp-course-price-dis">
                                                                                    {c.price}
                                                                                </h5>
                                                                                <p className="vp-course-price">
                                                                                    {c.cut_price}
                                                                                </p>
                                                                            </div>
                                                                            <p className="tilldate">
                                                                                {c.validity}
                                                                            </p>
                                                                            <Link to={`/learn/${courseID}/checkout`}>
                                                                                <button className="vp-buy-now">
                                                                                    BUY NOW
                                                                                </button>
                                                                            </Link>


                                                                        </div>
                                                                    </div>
                                                                )
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