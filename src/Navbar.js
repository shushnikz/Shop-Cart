import React from "react";

export default function Navbar({cart,setCart}){
   
    return(
           <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light px-4.px-lg-5">
                <div className="container-fluid">
                  <a className="navbar-brand ms-5 fs-3" href="#">Start BootStrap</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Shop
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <li><a className="dropdown-item" href="#">All Products</a></li><hr></hr>
                          <li><a className="dropdown-item" href="#">Popular Items</a></li>
                          <li><a className="dropdown-item" href="#">New Arrivals</a></li>
                        </ul>
                      </li>
                    </ul>
                    <button type="button" className="btn btn-outline-dark btn">
                      <img src="https://cdn1.vectorstock.com/i/1000x1000/60/55/shopping-cart-icon-in-flat-style-symbol-vector-20616055.jpg" alt="">
                        </img> Cart <span className="badge badge-dark bg-dark rounded-pill">{cart}</span>
                    </button>
                  
                  </div>
                </div>
              </nav>
        </div>
    );
}