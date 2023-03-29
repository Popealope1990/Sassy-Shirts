import React from "react";
import {Link} from "react-router-dom"


function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbarbtns">
                <Link to='/' className="btn">Sassy  <i class="fa-solid fa-shirt"></i>  Shirts</Link>
                <Link to='/about' className="btn">About  <i class="fa-solid fa-user"></i>  Me</Link>
                <Link to='/contact' className="btn">Contact  <i class="fa-solid fa-mobile-screen-button"></i>  Me</Link>
            </div>

            <div className="cartbtn">
            <Link to='/cart' className="btn">My  <i class="fa-solid fa-cart-shopping"></i>  Cart</Link>
            </div>
        </nav>
    )
}

export default NavBar;