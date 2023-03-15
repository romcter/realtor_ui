import React, {Component} from "react";
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import css from './Nav.module.css'
import index_css from '../../index.module.css'
import app_css from '../../App.module.css'
import {NavLink} from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';

const Nav = () =>{

    const [toggleMenu, setToggleMenu] = React.useState(false);

    return(
        // <nav>
        //     <div className={n.item}>
        //         <NavLink to='/sale' activeClassName={n.active}>Sale</NavLink>
        //     </div>
        //     <div className={n.item}>
        //         <NavLink to='/rent' activeClassName={n.active}>Rent</NavLink>
        //     </div>
        //     <div className={n.item}>
        //         <NavLink to='/new_buildings' activeClassName={n.active}>New Buildings</NavLink>
        //     </div>
        //     <div className={n.item}>
        //         <NavLink to='/realtors' activeClassName={n.active}>Realtors</NavLink>
        //     </div>
        //     <div className={n.item}>
        //         <NavLink to='/agency' activeClassName={n.active}>Agency</NavLink>
        //     </div>
        // </nav>

        <nav className={css.app__navbar}>
            <ul className={css.app__navbar_links}>
                <NavLink to='/sale' className={css.app__navbar_link}>Sale</NavLink>
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
            <div className={css.app__navbar_smallscreen}>
                <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className={[css.app__navbar_smallscreen_overlay, app_css.flex__center, index_css.slideBottom]}>
                        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                        <ul className={css.app__navbar_smallscreen_links}>
                            <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
                            <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
                            <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
                            <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
                            <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}
export default Nav;