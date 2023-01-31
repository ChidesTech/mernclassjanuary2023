const express = require("express");
const Product = require("../models/productModel");
const productRouter = express.Router();


productRouter.post("/", async(req, res) =>{
    //Create a new product
  const newProduct = new Product(req.body);
  const product = await newProduct.save();
  if(product){
     res.send({success : "Product Saved Successfully"})
  }else{
    res.send({error : "Error Saving Product"})
  }
})



module.exports = productRouter;