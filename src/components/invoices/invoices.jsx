import { useCollectionData } from "react-firebase-hooks/firestore"
import { auth, firestore } from "../../firebase"
import "../../global.scss"
import downloads from "./downloads.png"


function Invoices() {


    const invoicesRef = firestore.collection("users").doc(auth.currentUser?.uid).collection("invoices")
    const [invoices] = useCollectionData(invoicesRef)




    return (
        <div className="Invoices">
            <div className="invoices-box">
                <div className="invoices">
                    <h5 className="account-outlet-head">
                        Invoices
                    </h5>

                    {
                        invoices && invoices == 0
                            ? <p>No invoices</p>
                            : (
                                invoices && invoices.map((i) => (
                                    <div className="invoice">
                                        <p className="invoice-name">
                                            {i.name}
                                        </p>
                                        <img className="dimg" src={downloads} />
                                    </div>
                                ))
                            )
                    }

                </div>
            </div>
        </div>
    )
}

export default Invoices