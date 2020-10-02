import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <nav class="navbar navbar-light navbar-expand-md navigation-clean-button">
          <div class="container">
            <a class="navbar-brand" href="#">
              InterVu
            </a>
            <button
              data-toggle="collapse"
              data-target="#navcol-1"
              class="navbar-toggler"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navcol-1">
              <ul class="nav navbar-nav mr-auto">
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    First Item
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Second Item
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    data-toggle="dropdown"
                    aria-expanded="false"
                    class="dropdown-toggle nav-link"
                    href="#"
                  >
                    Dropdown{" "}
                  </a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                      First Item
                    </a>
                    <a class="dropdown-item" href="#">
                      Second Item
                    </a>
                    <a class="dropdown-item" href="#">
                      Third Item
                    </a>
                  </div>
                </li>
              </ul>
              <span class="navbar-text actions">
                <a class="login" href="#">
                  Log In
                </a>
                <a class="btn btn-light action-button" role="button" href="#">
                  Sign Up
                </a>
              </span>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
