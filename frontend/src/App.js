import './App.css';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Registerpage from './pages/Registerpage';
import Loginpage from './pages/Loginpage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AdminProductPage from './pages/AdminProductPage';
import ExpenseTracker from './components/ExpenseTracker';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';


//CRUD - Create, Read, Update, Delete
function App() {
  return  <BrowserRouter>
   <Header/>
  <Routes>
    < Route path="/" element={<Homepage/>}/>
    < Route path="/register" element={<Registerpage/>}/>
    < Route path="/login" element={<Loginpage/>}/>
    < Route path="/admin-products" element={<AdminProductPage/>}/>
    < Route path="/add-product" element={<AddProductPage/>}/>
    < Route path="/edit-product/:id" element={<EditProductPage/>}/>
    

 </Routes> 
 {/* <ExpenseTracker/> */}
    </BrowserRouter>
}

export default App;
