import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loggedInUserId } from '../../helper';

import { logout } from '../../redux/action/auth';

const Navbar = ({ auth, logout }) => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code'></i> DevBlog
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/'>Developers</Link>
        </li>

        <li>
          <Link to='/profiles'>Profiles</Link>
        </li>

        {/* Posts */}
        <li>
          <Link to='/posts'>Posts</Link>
        </li>

        {/* Dashboard */}
        {auth.isAuthenticated && (
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
        )}

        {/* Register */}
        {auth.isAuthenticated === false && (
          <li>
            <Link to='/register'>Sign Up</Link>
          </li>
        )}

        {/* Login */}
        {auth.isAuthenticated === false && (
          <li>
            <Link to='/login'>Login</Link>
          </li>
        )}

        {/* Logout */}
        {auth.isAuthenticated && (
          <li>
            <Link to='#' onClick={(e) => logout()}>
              Logout
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});
export default connect(mapStateToProps, { logout })(Navbar);
