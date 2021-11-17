import React from "react";
import { Link, withRouter } from "react-router-dom";
import {Container} from "./navbar.style"
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import "./navbar.css"
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
const Navbar =()=>{
    return(
        <>
        <div className="navbar-container">
            <div className="header">
            <div className='header-message'>Due to COVID-19, shipping might be delayed</div>
            <div className='menu'>
            <div className='logo'><Logo className='header-logo' fill='#f3f3f3'/></div>
            <div className="menu-options">
            <div className='menu-option'>
                <Link to="/">Account</Link>
            </div>
            <div className='menu-option'>
            <Link to="/">All Categories</Link>
            </div>
            <div className='menu-option'>
            <Link to="/">My Order</Link>
            </div>
            <div className='menu-option'>
            <Link to="/">My Notifications</Link>
            </div>
            <div className='menu-option'>
            <Link to="/">Help Center</Link>
            </div>
            <div className='menu-option'>
            <Link to="/">About Us</Link>
            </div>  
            <div className='menu-option'>
            <ShoppingCartOutlinedIcon/>
            </div>           
            </div>
            </div> 
            </div>
            
       </div>
        </>
    )
}

export default Navbar