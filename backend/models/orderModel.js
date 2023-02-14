const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({
   user : {type : mongoose.Types.ObjectId, ref : "User"},
   deliveryInfo : {type : Object},
   orderItems : {type : Array}
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;