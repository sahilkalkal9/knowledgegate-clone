import { useCollectionData } from "react-firebase-hooks/firestore"
import { auth, firestore } from "../../firebase"
import "../../global.scss"
import downloads from "./downloads.png"
import { getStorage, ref, getDownloadURL } from 'firebase/storage';


function Invoices() {


    const invoicesRef = firestore.collection("users").doc(auth.currentUser?.uid).collection("invoices")
    const [invoices] = useCollectionData(invoicesRef)

    const saveFileToDevice = async (fileName) => {
        try {
            // Get the Firebase Storage reference
            const storage = getStorage();

            // Create a storage reference to the file
            const fileRef = ref(storage, fileName);

            // Get the download URL for the file
            const downloadURL = await getDownloadURL(fileRef);

            // Fetch the file data
            const response = await fetch(downloadURL, { mode: 'no-cors' });
            const fileData = await response.blob();

            // Create a temporary URL for the file data
            const fileURL = URL.createObjectURL(fileData);

            // Create a link element
            const link = document.createElement('a');
            link.href = fileURL;
            link.download = fileName;

            // Trigger the click event to initiate the download
            link.click();

            // Clean up the temporary URL
            URL.revokeObjectURL(fileURL);
        } catch (error) {
            console.error(`Error saving file "${fileName}" to device:`, error);
            // Handle any errors that occur during the download process
        }
    };




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
                                    <div onClick={() => { saveFileToDevice(i.fileSource) }} className="invoice">
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