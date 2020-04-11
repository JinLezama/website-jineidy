import React, { Profiler } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return (
       <ul className="right">
           <li><NavLink to='/create'>New Product</NavLink></li>
           <li><a onClick={props.signOut}>Log Out</a></li>
           <li><NavLink to='/' className='btn btn-floating orange lighten-1'>
               {props.profile.initials}
            </NavLink></li>
       </ul>
    )
}

const mapDispatchToprops = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToprops)(SignedInLinks)