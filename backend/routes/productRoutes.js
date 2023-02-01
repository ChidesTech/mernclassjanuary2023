const express = require("express");
const Product = require("../models/productModel");
const productRouter = express.Router();

//POST A PRODUCT
productRouter.post("/", async(req, res) =>{
    //Create a new product
  const newProduct = new Product(req.body);
  const product = await newProduct.save();
  if(product){
     res.send({success : "Product Saved Successfully"})
  }else{
    res.send({error : "Error Saving Product"})
  }
});

//GET ALL PRODUCTS
productRouter.get("/", async(req, res) =>{
    const products = await Product.find();
    res.send(products);
});

//DELETE A SINGLE PRODUCT


productRouter.delete("/:id", async(req, res)=>{
    const id = req.params.id;
    
    const deleteProduct = await Product.findByIdAndDelete(id);
    
    if(deleteProduct){
        res.send({success : "Product Deleted Successfully"})
    }else{
        res.send({error : "Error Deleting Product"})
    }

} )



module.exports = productRouter;