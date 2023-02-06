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


//GET A SINGLE PRODUCT ROUTE
productRouter.get("/:id", async(req, res)=>{
    const id = req.params.id;
    const product = await Product.findById(id);
    res.send(product);

});

//UPDATE A SINGLE PRODUCT ROUTE
productRouter.put("/:id", async(req, res) =>{
    const id = req.params.id;
    //Get the product you wish to update
    const product = await Product.findById(id);
    //Check if the product exists
    if(!product){
        res.send({error : "The product was not found"});
        return;
    }
    //Update the product information
    product.title = req.body.title || product.title;
    product.price = req.body.price || product.price;
    product.image = req.body.image || product.image;
    product.description = req.body.description || product.description;
    //Save new product information
    const updatedProduct = await product.save();
    if(updatedProduct){
        res.send({success : "Product updated successfully"})
    }else{
        res.send({error : "Error updating product"})
    }

})



module.exports = productRouter;