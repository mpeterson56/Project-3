import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
    function showNavigation() {
        if (Auth.loggedIn()) {
          return (
            <ul>
              <li>
                <a href="/" onClick={() => Auth.logout()}>
                  Logout
                </a>
              </li>
            </ul>
          );
        } else {
          // return (
          //   <ul>
          //     <li>
          //       <Link to="/studentSignup">
          //         Student Signup
          //       </Link>
          //     </li>
          //     <li>
          //       <Link to="/studentLogin">
          //         Student Login
          //       </Link>
          //     </li>
          //     <li>
          //       <Link to="/tutorSignup">
          //         Tutor Signup
          //       </Link>
          //     </li>
          //     <li>
          //       <Link to="/tutorLogin">
          //         Tutor Login
          //       </Link>
          //     </li>
          //   </ul>
          // );
           return (
            <ul>
              <li>
                  Student 
                  <span> 
                  <Link to="/studentLogin"> Login</Link> /
                  <Link to="/studentSignup"> Sign Up</Link>                                     
                  </span>  
              </li>
            
              <li>
                  Tutor 
                  <span> 
                  <Link to="/studentLogin"> Login</Link> /
                  <Link to="/tutorSignup"> Sign Up</Link>                        
                  </span>  
              </li>
            </ul>
          );         
        }
      }
    
      return (
        <header>
          <h1>
            Tutor Coin
          </h1>
          <nav>
            {showNavigation()}
          </nav>
        </header>
      );
}

export default Nav;