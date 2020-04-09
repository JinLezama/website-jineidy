import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
       <ul className="right">
           <li><NavLink to='/create'>New Product</NavLink></li>
           <li><NavLink to='/'>Log Out</NavLink></li>
           <li><NavLink to='/' className='btn btn-floating orange lighten-1'>JE</NavLink></li>
       </ul>
    )
}

export default SignedInLinks