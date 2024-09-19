import "../../global.scss"
import downloads from "./downloads.png"

function Invoices() {
    return (
        <div className="Invoices">
            <div className="invoices-box">
                <div className="invoices">
                    <h5 className="account-outlet-head">
                        Invoices
                    </h5>

                    <div className="invoice">
                        <p className="invoice-name">
                            GATE Guidance Plus 2025
                        </p>
                        <img className="dimg" src={downloads} />
                    </div>
                    <div className="invoice">
                        <p className="invoice-name">
                            GATE Guidance Plus 2025
                        </p>
                        <img className="dimg" src={downloads} />
                    </div>
                    <div className="invoice">
                        <p className="invoice-name">
                            GATE Guidance Plus 2025
                        </p>
                        <img className="dimg" src={downloads} />
                    </div>
                    <div className="invoice">
                        <p className="invoice-name">
                            GATE Guidance Plus 2025
                        </p>
                        <img className="dimg" src={downloads} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Invoices