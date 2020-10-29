import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
const set = ()=>{
  localStorage.setItem('logged',false)

}
// const Header = () => {
//   return (
//     <div>
//       <header>
//         <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
//           <div className="container">
//             <a className="brand" href="/">
//               InterVu
//             </a>
//             <button
//               data-toggle="collapse"
//               data-target="#navcol-1"
//               className="navbar-toggler"
//             >
//               <span className="sr-only">Toggle navigation</span>
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navcol-1">
//               <ul className="nav navbar-nav mr-auto">
//                 <li className="nav-item">
//                   <a href="/"
//                     className="nav-link active"
//                     style={{ fontSize: "25px" }}
//                   >
//                     Home
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="/Addpost" style={{ fontSize: "25px" }}>
//                     Add Post
//                   </a>
//                 </li>
//                 {/* <li className="nav-item dropdown">
//                   <a
//                     data-toggle="dropdown"
//                     aria-expanded="false"
//                     className="dropdown-toggle nav-link"
//                     href="#"
//                   >
//                     Dropdown{" "}
//                   </a>
//                   <div className="dropdown-menu">
//                     <a className="dropdown-item" href="#">
//                       First Item
//                     </a>
//                     <a className="dropdown-item" href="#">
//                       Second Item
//                     </a>
//                     <a className="dropdown-item" href="#">
//                       Third Item
//                     </a>
//                   </div>
//                 </li> */}
//               </ul>
//               <span className="navbar-text actions">
//                 <a className="login" href="/signin">
//                   Log In
//                 </a>
//                 <a
//                   className="btn btn-light action-button login"
//                   role="button"
//                   href="/signup"
//                 >
//                   Sign Up
//                 </a>
//               </span>
//             </div>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// };

const Header = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
          <div className="container">
            <a className="brand" href="/">
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
                  <a className="nav-link" href="/Addpost" style={{ fontSize: "25px" }}>
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
              {localStorage.getItem('logged')?"":loginbit()}
              {localStorage.getItem('logged')?logoutbit():''}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
const loginbit = () => {
  return (<div>
    <span className="navbar-text actions">
      <a className="login" href="/signin">
        Log In
      </a>
      <a
        className="btn btn-light action-button login"
        role="button"
        href="/signup"
      >
        Sign Up
      </a>
    </span>
    </div>)
}
const logoutbit = () => {
  return (<div>
    <span className="navbar-text actions">
    <a className="btn btn-primary" type="Button" href='/signin'>Switch Account</a>
  <a className="btn btn-secondary" type="Button" href='/'>{localStorage.getItem('name')}</a>
    </span>
    </div>)
}

export default Header;
