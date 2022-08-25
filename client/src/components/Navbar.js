import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <nav>
          <div class="nav-wrapper teal accent-2">
            <a href="#" class="brand-logo indigo-text text-darken-4">
              Tutor Coin
            </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <Link class="indigo-text text-darken-4" to="/Jobs">
                  Jobs
                </Link>
              </li>
              <li>
                <Link class="indigo-text text-darken-4" to="/Account">
                  Account
                </Link>
              </li>
              <li>
                {" "}
                <a
                  href="/"
                  class="indigo-text text-darken-4"
                  onClick={() => Auth.logout()}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
      );
    } else {
      return (
        <nav>
          <div class="nav-wrapper teal accent-2">
            <a href="/!" class="brand-logo indigo-text text-darken-4">
              Tutor Coin
            </a>
      
            <ul id="nav-moble" class="right hide-on-med-and-down">
              <li>
                <Link class="indigo-text text-darken-4" to="/studentLogin">
                  Student Login
                </Link>
              </li>
              <li>
                <Link class="indigo-text text-darken-4" to="/tutorLogin">
                  Tutor Login
                </Link>
              </li>
              <li>
                <Link class="indigo-text text-darken-4" to="/studentSignup">
                  Student Signup
                </Link>
              </li>
              <li>
                <Link class="indigo-text text-darken-4" to="/tutorSignup">
                  Tutor Signup
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
  }

  return (
    <header>
      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
