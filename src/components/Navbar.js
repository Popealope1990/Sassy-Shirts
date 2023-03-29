import React from "react";
import {Link} from "react-router-dom"


function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbarbtns">
                <Link to='/'>Sassy  <i class="fa-solid fa-shirt"></i>  Shirts</Link>
                <Link to='/about'>About  <i class="fa-solid fa-user"></i>  Me</Link>
                <Link to='/contact'>Contact  <i class="fa-solid fa-mobile-screen-button"></i>  Me</Link>
            </div>

            <div className="cartbtn">
            <Link to='/cart'>My  <i class="fa-solid fa-cart-shopping"></i>  Cart</Link>
            </div>
        </nav>
    )
}

export default NavBar;