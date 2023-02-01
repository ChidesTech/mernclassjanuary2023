import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import http from "../http";


export default function AdminProductPage() {
    const [products, setProducts] = useState([]);
 
    async function getProducts() {
        const { data } = await http.get("/products");
        setProducts(data);
    }

    async function deleteHandler(id){
        if(!window.confirm("Are you sure you want to delete this product?")){
            return;
        }
        const {data} = await http.delete(`/products/${id}`);  //=  /products/wfteFWGHJFGHFEGHJusftyqwf56FQ
        if(data.error){
            Swal.fire(data.error);
            return
        }

        if(data.success){
            Swal.fire("Done", "Product Deleted Successfully", "success");
            getProducts();
        }
        
    }

    useEffect(() => {
        getProducts();
    }, []);

    return <>
        <div className="d-flex justify-content-between p-3">
            <h3 className="text-white text-center text-uppercase">Admin Products</h3>
            <div>
                <Link className="btn btn-info " to="/add-product">Add Product</Link>
            </div>
        </div>
        <div className="admin-products"> 
           {products.length > 0 && 
             products.map((product, i) => {
                return <div className="admin-product">
                <img src={product.image} alt="" className="admin-product-image" />
                <div className="admin-product-details">
                    <h3 className="admin-product-title">{product.title}</h3>
                    <p className="admin-product-description">{product.description}</p>
                </div>
                <div className="admin-product-price">₦{product.price} </div>
                <div className="admin-product-actions">
                    <button className="btn btn-success"><i className="fa fa-edit"></i></button>
                    <button onClick={()=> deleteHandler(product._id)} className="btn btn-danger"><i className="fa fa-trash-alt"></i></button>
                </div>
            </div>
             })
           }
            

        </div>
    </>
}