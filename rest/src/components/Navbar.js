import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () =>{

    return(
        <nav className="nav-wrapper purple">
            <div className="container">
                <a href="/" className="brand-logo">troll API REST</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;