import React, { Component } from 'react';
import Logout from '../Logout.js';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render(){
    let links = <span />;
    if(this.props.user){
      links = (
        <span>
          <Link to="/saved/profile">Profile</Link>
          <Logout updateUser={this.props.updateUser} />
        </span>
      );
    }
    else {
      links = (
        <span>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </span>
      );
    }

    return(
      <div className="navbar-fixed">
        <nav className="transparent z-depth-0">
          <div className="nav-wrapper">
            <div className="col s12">
              <a href="/">Home</a>
              <Link to="/jobs">Jobs</Link>
              <Link to="/account">Account</Link>
                {links}
            </div>
          </div>
        </nav>
        <header>
    
        </header>
      </div>
    );
  }
}

export default Nav;