import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [userInfo, setUserInfo] = useState(null)
  useEffect(()=>{
    setUserInfo(JSON.parse(localStorage.getItem("userInfo")))
    return ()=>{
      setUserInfo(null)
    }
  },[]);


  function logoutHandler(){
    localStorage.removeItem("userInfo")
  }
  return <>
  <nav className="navbar navbar-expand-lg navbar-dark ">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">SwiftRides</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Cart</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             {userInfo ? userInfo.username : <i className="fa fa-user"></i> }
            </a>
            {!userInfo &&  <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown" >
              <li><Link className="dropdown-item" to="/login">Login</Link></li>
              <li><a className="dropdown-item" href="/register">Register</a></li>
            </ul>  }

            {userInfo &&   <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown" >
              <li><Link className="dropdown-item" to="/admin-products">Admin Products</Link></li>      
              <li><a className="dropdown-item" href="/login">Order History</a></li>      
              <li><hr className="dropdown-divider"/></li>
              <li><a onClick={logoutHandler} className="dropdown-item" href="/">Logout</a></li>
            </ul>}
           
          </li>
          
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  </>;
}
