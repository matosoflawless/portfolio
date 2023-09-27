import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Squash as Hamburger } from "hamburger-react";
// import LanguageChanger from "../languagechanger/LanguageChanger";
import { debounce } from "../../assets/utils";

import "./Navbar.scss"


function Navbar() {

	const routes = [
		{ label: "Home", to: "/" },
		{ label: "Projects", to: "/work" },
		{ label: "Contact", to: "/contacts" },
	];
        const [openMenu, setOpenMenu] = useState(false);
        const [showNavbar, setShowNavbar] = useState(true);
        const [lastScrollPos, setLastScrollPos] = useState(0);
    
        
    
        useEffect(() => {
            if (typeof window !== "undefined")
                window.addEventListener("scroll", handleScroll);
    
            return () => window.removeEventListener("scroll", handleScroll);
        }, [lastScrollPos]);
    
        const handleScroll = () => {
            debounceScroll();
        };
    
        const debounceScroll = debounce(() => {
            if (typeof window !== "undefined") {
                if (window.scrollY < 120) {
                    setShowNavbar(true);
                } else {
                    setShowNavbar(window.scrollY < lastScrollPos);
                }
                setLastScrollPos(window.scrollY);
            }
        }, 100);



        return (
            <ClickAwayListener onClickAway={() => setOpenMenu(false)}>
                <div className={`navbar-main-div${showNavbar ? " show" : " hide"}`}>
                  
                    <div className="navbar-mobile-hamburger">
                        <Hamburger
                            color="white"
                            toggled={openMenu}
                            toggle={setOpenMenu}
                            size={26}
                            rounded
                        />
                    </div>
                    <div className={`navbar-links ${openMenu ? "opened" : "closed"}`}>
                        {routes.map((route, index) => (
                            <NavLink
                                key={index}
                                to={route.to}
                                className={({ isActive }) =>
                                    isActive ? "navbar-item active" : "navbar-item"
                                }
                                onClick={() => setOpenMenu(false)}
                            >
                                <p>{route.label}</p>
                            </NavLink>
                        ))}
                        {/* for mobile */}
                        <div className="navbar-actions-div-mobile">
                        
                        </div>
                    </div>
                    <div className="navbar-actions-div">
                        <button>EN</button>
            
                    </div>
                </div>
            </ClickAwayListener>
        );
    }
    
    export default Navbar;