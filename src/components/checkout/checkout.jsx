import "../../global.scss"

function Checkout() {
    return (
        <div className="Checkout">
            <div className="checkout-box">
                <div className="checkout-left">
                    <div className="checkout-left-div">
                        <img className="checkout-img" src="https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/86062/courses/181433/1707117795930GATE_Guidence_thumbnails__8__lyst4662.png" />
                        <p className="checkout-name">
                            GATE Guidance Plus 2025
                        </p>
                    </div>

                    <p className="checkout-name pdets">
                        Personal Details
                    </p>

                    <div className="checkout-per-dets">
                        <input type="text" name="fullname" placeholder="Enter Full Name" required className="checout-input" />
                        <input type="email" name="email" placeholder="Enter Email" required className="checout-input" />
                        <input type="number" name="phone" placeholder="Enter Phone Number" required className="checout-input" />
                        <input type="text" name="address" placeholder="Enter Full Address" required className="checout-input" />
                    </div>
                </div>
                <div className="checkout-right">
                    <p className="checkout-name">
                        Payment Details
                    </p>

                    <div className="pay-det">
                        <p className="item-head">
                            Item Total
                        </p>
                        <p className="item-head">
                            ₹ 81812
                        </p>
                    </div>
                    <div className="pay-det">
                        <p className="item-head">
                            Discount
                        </p>
                        <p className="item-head disPay">
                            - ₹ 40909
                        </p>
                    </div>
                    <div className="pay-det subtotal">
                        <p className="pay-main">
                            Sub Total
                        </p>
                        <p className="pay-main">
                            ₹ 40906
                        </p>
                    </div>
                    <div className="pay-det paytotal">
                        <p className="pay-main">
                            TOTAL
                        </p>
                        <p className="pay-main">
                            ₹ 40906
                        </p>
                    </div>
                    <div className="pay-button-div">
                        <button className="pay-securely" >
                            PAY SECURELY
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Checkout