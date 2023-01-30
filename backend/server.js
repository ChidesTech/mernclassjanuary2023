const express = require("express"); //
const mongoose = require("mongoose"); //use to connect the backend to the database
const cors = require("cors"); //cross origin resource sharing (use for interaction btw frontend and backend)
const { response } = require("express");
const User = require("./models/userModel");


const app = express(); //initilazing the node-express app

app.use(cors()); //allows for interacting with the backend and frontend
app.use(express.json()); //allows for the information from thr frontend to be extracted to the backend

// get,post,put,delete

app.get("/" , (request, response) =>{
  response.send ("This is the new node server");
})

//USER ROUTES
app.post("/api/users/register", async (req, res) =>{
 //Check and return if the email already exist, 
 const existingEmail = await User.findOne({email : req.body.email}) //e.g {email : "softyprimei@gmail.com"}
 //
 if (existingEmail){
  res.send({error : "This email is already in use"});
  return;
 }
 //Create a user
 const newUser = new User ({
  email : req.body.email,
  username : req.body.username,
  password : req.body.password
 })
 //Save the user
 const user = await newUser.save();
 if (user){
  res.send({success : "User saved successfully"})
 } else {
  res.send({error : "Error saving New User"})
 }
})


app.post("/api/users/login", async(req, res) =>{
 //check if the email exists and eturn if it does not
 const existingUser = await User.findOne({email : req.body.email});

 //check if the password supplied matches with the existing user's password
 if(!existingUser){
 res.send({ error : "There's no user with this email"});
 return;
 }

 //check if the password supplied matches with the existing user's password
 if (req.body.password !== existingUser.password){
   res.send({error : "The password is incorrect"});
   return;
 } 
 //send a success message and the users information
 res.send({success : "Login Successful", user : existingUser});

})

// create a database connection
mongoose.connect("mongodb+srv://mernclass:mernclasspassword@cluster0.2raujid.mongodb.net/?retryWrites=true&w=majority")
.then(res => console.log("mongoDB connected"))
.catch (err => console.log(err));

// create a lister to run the server
app.listen(5000, ()=>{
console.log("listening on port 5000")
});


