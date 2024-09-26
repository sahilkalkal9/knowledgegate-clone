import { useParams } from "react-router-dom";
import "../../global.scss";
import courses from "../../courses.json";
import { auth, firestore } from "../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

function Checkout() {
    const [user, setUser] = useState(null);
    const [userDetails, setUserDetails] = useState({});
    const params = useParams();
    const courseId = params.courseId;
    const coursesRef = firestore.collection("users").doc(auth.currentUser?.uid).collection("courses")
    const [coursesO] = useCollectionData(coursesRef)

    const usersRef = firestore.collection("users");
    const [users] = useCollectionData(usersRef);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    var courseBought = false;

    const handleCheckk = () => {
        const cown = coursesO && coursesO.some((cd) => cd.courseId == courseId)
        courseBought = cown
    }

    handleCheckk()

    useEffect(() => {
        if (user && users) {
            const currentUser = users.find((u) => u.uid === user.uid);
            if (currentUser) {
                setUserDetails({
                    name: currentUser.name || "",
                    email: currentUser.email || "",
                    phone: currentUser.phone || "",
                    address: currentUser.address || "",
                });
            }
        }
    }, [user, users]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const [payDone, setPayDone] = useState(false)


    









    return (
        <div className="Checkout">
            {
                auth.currentUser
                    ? (
                        courseBought
                            ?
                            <p>You have purchased this course already. Go to My Enrollments in Account section.</p>
                            : (
                                !payDone
                                    ? (
                                        courses.map((c) => (
                                            c.id === courseId
                                                ? (
                                                    <div className="checkout-box" key={c.id}>
                                                        <div className="checkout-left">
                                                            <div className="checkout-left-div">
                                                                <img className="checkout-img" src={c.thumbnail} alt={c.name} />
                                                                <p className="checkout-name">{c.name}</p>
                                                            </div>
                                                            <p className="checkout-name pdets">Personal Details</p>
                                                            <div className="checkout-per-dets">
                                                                <input
                                                                    type="text"
                                                                    name="name"
                                                                    value={userDetails.name}
                                                                    placeholder="Enter Full Name"
                                                                    onChange={handleChange}
                                                                    required
                                                                    className="checout-input"
                                                                />
                                                                <input
                                                                    type="email"
                                                                    name="email"
                                                                    value={userDetails.email}
                                                                    placeholder="Enter Email"
                                                                    className="checout-input"
                                                                    readOnly
                                                                />
                                                                <input
                                                                    type="number"
                                                                    name="phone"
                                                                    value={userDetails.phone}
                                                                    placeholder="Enter Phone Number"
                                                                    onChange={handleChange}
                                                                    required
                                                                    className="checout-input"
                                                                />
                                                                <input
                                                                    type="text"
                                                                    name="address"
                                                                    value={userDetails.address}
                                                                    placeholder="Enter Full Address"
                                                                    onChange={handleChange}
                                                                    required
                                                                    className="checout-input"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="checkout-right">
                                                            <p className="checkout-name">Payment Details</p>
                                                            <div className="pay-det">
                                                                <p className="item-head">Item Total</p>
                                                                <p className="item-head">{c.cut_price}</p>
                                                            </div>
                                                            <div className="pay-det">
                                                                <p className="item-head">Discount</p>
                                                                <p className="item-head disPay">- {c.discount}</p>
                                                            </div>
                                                            <div className="pay-det subtotal">
                                                                <p className="pay-main">Sub Total</p>
                                                                <p className="pay-main">{c.price}</p>
                                                            </div>
                                                            <div className="pay-det paytotal">
                                                                <p className="pay-main">TOTAL</p>
                                                                <p className="pay-main">{c.price}</p>
                                                            </div>
                                                            <div className="pay-button-div">
                                                                <button  className="pay-securely">PAY SECURELY</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                                : null
                                        ))
                                    )
                                    : (
                                        <p> Thank you, check enrollments in account section </p>
                                    )
                            )
                    )
                    : <p>Please Login or Sign up to checkout</p>
            }
        </div >
    );
}

export default Checkout;
