const express = require("express");
const Order = require("../models/orderModel");


const orderRouter = express.Router();


orderRouter.post("/", async(req, res) => {
   let orderItems = req.body.orderItems;
   let totalPrice = orderItems.reduce((a,c) => a + c.price * c.qty, 0);

   const newOrder = new Order({
      user : req.body.user,
      orderItems : req.body.orderItems,
      deliveryInfo : req.body.deliveryInfo,
      totalPrice : totalPrice
   });

   const order = await newOrder.save();
   if(order){
      res.send({success : "Order Made Successfully"});
   }else{
      res.send({error : "Error Saving Order"});
   }
});
orderRouter.get("/", async(req, res)=>{
   const orders = await Order.find().populate("user");
   res.send(orders);
})





module.exports = orderRouter;