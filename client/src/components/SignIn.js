import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import signIn from "../assets/interview.png";
import {verify} from 'jsonwebtoken';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password:''};
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    console.log("You are submitting " + this.state.email);
    fetch('http://localhost:5000/api/users/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },    
      body: JSON.stringify({
        email: this.state.email, password:this.state.password
          })
    }).then((response) => {
      if(response.status === 200){
          console.log("SUCCESSS")
          return response.json();     
      }else if(response.status === 408){
          console.log("SOMETHING WENT WRONG")
          this.setState({ requestFailed: true })
      }
  })
  .then((data) => {
      this.setState({ isLoading: false, jwt: data.token,success:data.success  })
      console.log(this.state)
      localStorage.setItem('jwt',data.token);
      let loc = localStorage.getItem('jwt');
      console.log(loc);
      var decoded = verify(loc, 'secret');
      console.log(decoded.name)
      localStorage.setItem('name',decoded.name);
      localStorage.setItem('logged',true);
      

  })
  .catch((error) => {
      this.setState({ requestFailed: true })
  })
console.log("end call api")
    console.log(this.state.email,this.state.password);

  }
  myChangeHandlerS = (event) => {
    this.setState({email: event.target.value});
    console.log(this.state.email);
  }
  myChangeHandlerP = (event) => {
    this.setState({password: event.target.value});
    console.log(this.state.password);
  }

  render() {
    return (
      <div>
        <div class="left-comp">
          <img class="left_img1" src={signIn} />
        </div>
        <div class="right-comp">
          <div class="ff ff_title">
            <a class="ff_link ff_tlink" href="/signin">
              Sign In
            </a>
            <p class="ff_title_p">&nbsp;or&nbsp;</p>
            <a class="ff_link ff_tlink" href="/signup">
              Sign Up
            </a>
          </div>
          <div class="ff">
            <label class="ff_label">E-mail address</label>
            <input type="email" class="ff_input" placeholder="Enter your email" onChange={this.myChangeHandlerS}/>
          </div>
          <div class="ff">
            <label class="ff_label">Password</label>
            <input
              type="password"
              class="ff_input"
              placeholder="Enter the password" onChange={this.myChangeHandlerP}
            />
          </div>
          <div class="ff">
            <button class="btn btn-primary ff_btn mr-20" type="button" onClick={this.mySubmitHandler}>
              Sign In
            </button >
          </div>
        </div>
      </div>
      
    );
  
  }
}

// const SignIn = () => {
//   return (
//     <div>
//       <div class="left-comp">
//         <img class="left_img1" src={signIn} />
//       </div>
//       <div class="right-comp">
//         <div class="ff ff_title">
//           <a class="ff_link ff_tlink" href="#">
//             Sign In
//           </a>
//           <p class="ff_title_p">&nbsp;or&nbsp;</p>
//           <a class="ff_link ff_tlink" href="#">
//             Sign Up
//           </a>
//         </div>
//         <div class="ff">
//           <label class="ff_label">E-mail address</label>
//           <input type="email" class="ff_input" placeholder="Enter your email" onChange={this.myChangeHandlerTR}/>
//         </div>
//         <div class="ff">
//           <label class="ff_label">Password</label>
//           <input
//             type="text"
//             class="ff_input"
//             placeholder="Enter the password" onChange={this.myChangeHandlerTR}
//           />
//         </div>
//         <div class="ff">
//           <button class="btn btn-primary ff_btn mr-20" type="button" onClick={this.mySubmitHandler}>
//             Sign In
//           </button >
//           <a class="ff_link" href="#">
//             Create an account
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

export default SignIn;
