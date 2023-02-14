import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";

export default function CheckoutPage() {

    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [city, setCity] = useState("");
    const navigate = useNavigate();

    function submitHandler() {
        if (!fullName || !address || !phoneNumber || !city) {
            Swal.fire("Error", "Please Fill All Fields", "error");
            return;
        }
        localStorage.setItem("deliveryInfo", JSON.stringify({ fullName, address, phoneNumber, city }));
        
    }

    return <>
        <div className="checkout">
            <div className="checkout-items">
                <h3>Cart Items</h3>
                <table>
                    <tr>
                        <td><img style={{ height: "5rem", width: "5rem" }} src="chidestech.jpg" alt="" /></td>
                        <td>Laptop</td>
                        <td>3 X 30000 = 9000</td>
                    </tr>
                    <tr>
                        <td><img style={{ height: "5rem", width: "5rem" }} src="chidestech.jpg" alt="" /></td>
                        <td>Laptop</td>
                        <td>3 X 30000 = 9000</td>
                    </tr>
                </table>
            </div>
            <div className="checkout-delivery-info">
                <h3 className="text-center text-white m-5">Delivery Details</h3>
                <form onSubmit={submitHandler} action="" style={{ maxWidth: "750px", margin: "auto" }} className="form">
                    <input onChange={e => setFullName(e.target.value)} value={fullName} type="text" className="py-2 form-control mb-3" placeholder="Title" />
                    <input onChange={e => setAddress(e.target.value)} value={address} type="text" className="py-2 form-control mb-3" placeholder="Price" />
                    <input onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber} type="text" className="py-2 form-control mb-3" placeholder="Image URL" />
                    <input onChange={e => setCity(e.target.value)} value={city} type="text" className="py-2 form-control mb-3" placeholder="Description" />
                    <button className="btn btn-info w-100">Submit</button>
                </form>
            </div>
        </div>

    </>
}