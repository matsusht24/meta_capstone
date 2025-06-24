
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <img Linklt="Little Lemon Logo" src="/images/Logo .svg"></img>
        <ul>
            <li><Link to="/">Home</Link></li>
            {/* <li><Link>About</Link></li>
            <li><Link>Menu</Link></li> */}
            <li><Link to="/booking">Reservations</Link></li>
            {/* <li><Link>Order Online</Link></li>
            <li><Link>Login</Link></li> */}
        </ul>
    </nav>
  )
}

export default Nav