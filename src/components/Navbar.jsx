import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/cartContext";
import useNav from "../hooks/useNav";
import Logo from "./Logo";

function Navbar() {

    const { counter } = useContext(CartContext);

    const navRef = useRef();
    const bgRef = useRef();

    return (
        <>
        <header className="relative flex items-center fluid-container z-50">
            <Logo />

            <nav className="absolute md:relative w-full top-[240%] -translate-y-96 md:translate-y-0 animate opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto" ref={navRef}>
                <ul className="flex flex-col md:flex-row justify-end items-start md:items-center gap-5">
                    <Link to="/" onClick={() => useNav(navRef, bgRef)}>Home</Link>
                    <Link to="/about" onClick={() => useNav(navRef, bgRef)}>About</Link>
                    <Link to="/products" onClick={() => useNav(navRef, bgRef)}>Products</Link>
                    <Link to="/cart" className="py-5 md:pl-5">
                        <div className="relative"  onClick={() => useNav(navRef, bgRef)}>
                            <img src="../../icons/icon_cart.svg" alt="Shopping Cart" className="h-12"/>
                            <p className="font-bold absolute bottom-0 -right-3">{counter}</p>
                        </div>
                    </Link>
                </ul>
            </nav>
        </header>

        <div className="absolute flex md:hidden top-[95px] right-[17.5%] z-50">
            <img src="../../icons/icon_hamburger.svg" alt="Toggle Nav" className="h-7" onClick={() => useNav(navRef, bgRef)}/>
        </div>
        <div className="absolute top-0 -translate-y-[100%] md:-translate-y-[100%] bg-white w-full h-[400px] z-30 animate" ref={bgRef}>

        </div>
        </>
    );
}

export default Navbar;