import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
          <div className="container">
            <a className="brand" href="#">
              InterVu
            </a>
            <button
              data-toggle="collapse"
              data-target="#navcol-1"
              className="navbar-toggler"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="nav navbar-nav mr-auto">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="#"
                    style={{ fontSize: "25px" }}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ fontSize: "25px" }}>
                    Add Post
                  </a>
                </li>
                {/* <li className="nav-item dropdown">
                  <a
                    data-toggle="dropdown"
                    aria-expanded="false"
                    className="dropdown-toggle nav-link"
                    href="#"
                  >
                    Dropdown{" "}
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      First Item
                    </a>
                    <a className="dropdown-item" href="#">
                      Second Item
                    </a>
                    <a className="dropdown-item" href="#">
                      Third Item
                    </a>
                  </div>
                </li> */}
              </ul>
              <span className="navbar-text actions">
                <a className="login" href="#">
                  Log In
                </a>
                <a
                  className="btn btn-light action-button login"
                  role="button"
                  href="#"
                >
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
