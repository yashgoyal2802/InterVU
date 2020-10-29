import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSnapchatGhost,
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  render() {
    return (
      <div>
        <footer>
          <div className="footer-basic">
            <footer>
              <div className="social">
                <a className="social_link" href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a className="social_link" href="#">
                  <FontAwesomeIcon icon={faSnapchatGhost} />
                </a>
                <a className="social_link" href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a className="social_link" href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </div>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="#">Home</a>
                </li>
                <li className="list-inline-item">
                </li>
                <li className="list-inline-item">
                  <a href="#">About</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">Terms</a>
                </li>
                <li className="list-inline-item">
                  <a href="#" style={{ color: "#0a427a" }}>
                    Privacy Policy
                  </a>
                </li>
              </ul>
              <p className="copyright">InterVu © 2020</p>
            </footer>
          </div>
        </footer>
      </div>
    );
  
  }
}

// const Footer = () => {
//   return (
//     <div>
//       <footer>
//         <div className="footer-basic">
//           <footer>
//             <div className="social">
//               <a className="social_link" href="#">
//                 <FontAwesomeIcon icon={faInstagram} />
//               </a>
//               <a className="social_link" href="#">
//                 <FontAwesomeIcon icon={faSnapchatGhost} />
//               </a>
//               <a className="social_link" href="#">
//                 <FontAwesomeIcon icon={faTwitter} />
//               </a>
//               <a className="social_link" href="#">
//                 <FontAwesomeIcon icon={faFacebookF} />
//               </a>
//             </div>
//             <ul className="list-inline">
//               <li className="list-inline-item">
//                 <a href="#">Home</a>
//               </li>
//               <li className="list-inline-item">
//                 <a href="#">Services</a>
//               </li>
//               <li className="list-inline-item">
//                 <a href="#">About</a>
//               </li>
//               <li className="list-inline-item">
//                 <a href="#">Terms</a>
//               </li>
//               <li className="list-inline-item">
//                 <a href="#" style={{ color: "#0a427a" }}>
//                   Privacy Policy
//                 </a>
//               </li>
//             </ul>
//             <p className="copyright">InterVu © 2020</p>
//           </footer>
//         </div>
//       </footer>
//     </div>
//   );
// };

export default Footer;
