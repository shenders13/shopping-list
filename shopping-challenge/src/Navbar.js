import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="link">Home</Link>
            <Link to="/cart" className="link">Cart</Link>
        </nav>
    )
};

export default Navbar