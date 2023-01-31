import { useState } from "react"
import Swal from "sweetalert2";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
import http from "../http";

export default function AddProductPage(){
    const [title , setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

   async function submitHandler(e){
        e.preventDefault();
        //Check for empty fields
     if(!title || !price || !image || !description){
        setError("No field should be empty!!!");
        return;
     }
     //Send a post request to the server with the product information
     const {data} = await http.post("/products", {title, price, image, description});
      if(data.error){
        setError(data.error);
        return
      }
      if(data.success){
        Swal.fire("Saved", "Product Saved Successfully", "success");
        navigate("/admin-products");
      }


    }

    return <>
    <h1 className="text-center text-white m-5">Add Product</h1>
    <form onSubmit={submitHandler} action="" style={{maxWidth : "750px", margin : "auto"}} className="form">
      {error &&  <div className="alert alert-danger p-2">{error}</div>}
      <input onChange={e => setTitle(e.target.value)} value={title} type="text" className="py-2 form-control mb-3" placeholder="Title"/>
      <input onChange={e => setPrice(e.target.value)} value={price} type="number" className="py-2 form-control mb-3" placeholder="Price"/>
      <input  onChange={e => setImage(e.target.value)} value={image}type="text" className="py-2 form-control mb-3" placeholder="Image URL"/>
      <input  onChange={e => setDescription(e.target.value)} value={description}type="text" className="py-2 form-control mb-3" placeholder="Description"/>
      <button className="btn btn-info w-100">Submit</button>
    </form>
    </>
}