import React from "react";
import css from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () =>{
    return(
        <nav className={css.app__navbar}>
            <ul className={css.app__navbar_links}>
                <NavLink to='/flat-sale' className={css.app__navbar_link}>Sale</NavLink>
                <NavLink to='/rent' className={css.app__navbar_link}>Rent</NavLink>
                <NavLink to='/new_buildings' className={css.app__navbar_link}>New Buildings</NavLink>
                <NavLink to='/realtors' className={css.app__navbar_link}>Realtors</NavLink>
                <NavLink to='/agency' className={css.app__navbar_link}>Agency</NavLink>
            </ul>
            <div className={css.app__navbar_login}>
                <a href="#registration" className="p__opensans">Registration</a>
                <div />
                <a href="#login" className="p__opensans">Log In </a>
            </div>
        </nav>
    )
}
export default Nav;