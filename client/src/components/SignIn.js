import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const SignIn = () => {
  return (
    <div>
      <div class="left-comp">
        <img class="left_img1" src="../../public/assets/interview.png" />
      </div>
      <div class="right-comp">
        <div class="ff ff_title">
          <a class="ff_link ff_tlink" href="#">
            Sign In
          </a>
          <p class="ff_title_p">&nbsp;or&nbsp;</p>
          <a class="ff_link ff_tlink" href="#">
            Sign Up
          </a>
        </div>
        <div class="ff">
          <label class="ff_label">E-mail address</label>
          <input type="email" class="ff_input" placeholder="Enter your email" />
        </div>
        <div class="ff">
          <label class="ff_label">Password</label>
          <input
            type="text"
            class="ff_input"
            placeholder="Enter the password"
          />
        </div>
        <div class="ff">
          <button class="btn btn-primary ff_btn mr-20" type="button">
            Sign In
          </button>
          <a class="ff_link" href="#">
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
