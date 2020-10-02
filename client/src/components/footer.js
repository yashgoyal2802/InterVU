import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="footer-basic">
          <footer>
            <div class="social">
              <a href="#">
                <i class="icon ion-social-instagram"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-snapchat"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-twitter"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-facebook"></i>
              </a>
            </div>
            <ul class="list-inline">
              <li class="list-inline-item">
                <a href="#">Home</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Services</a>
              </li>
              <li class="list-inline-item">
                <a href="#">About</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Terms</a>
              </li>
              <li class="list-inline-item">
                <a href="#" style={{ color: "#0a427a" }}>
                  Privacy Policy
                </a>
              </li>
            </ul>
            <p class="copyright">InterVu © 2020</p>
          </footer>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
