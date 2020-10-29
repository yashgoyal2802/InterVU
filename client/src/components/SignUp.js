import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import signImg from "../assets/bad.png";


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password:'',password2:'',name:'',mob:''};
  }
  mySubmitHandler = (event) => {
    console.log("SUBMIT CALLED");
    event.preventDefault();
    alert("You are submitting " + this.state.email);
    console.log("You are submitting " + this.state.email);
    fetch('http://localhost:5000/api/users/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },    
      body: JSON.stringify({
        name:this.state.name,password2:this.state.password2,email: this.state.email,password:this.state.password
          })
    }).then((response) => {
      console.log(response);
      if(response.status === 200){
          console.log("SUCCESSS")
          return response.json();     
      }else if(response.status === 408){
          console.log("SOMETHING WENT WRONG")
          this.setState({ requestFailed: true })
      }
  })
  .catch((error) => {
      this.setState({ requestFailed: true })
  })
console.log("end call api")
    console.log(this.state.email,this.state.password);

  }
  myChangeHandlerN = (event) => {
    this.setState({name: event.target.value});
    console.log(this.state.name);
  }
  myChangeHandlerE = (event) => {
    this.setState({email: event.target.value,});
    console.log(this.state.email);
  }
  myChangeHandlerP = (event) => {
    this.setState({password: event.target.value,password2: event.target.value});
    console.log(this.state.password);
  }

  render() {
    return (
      <div>
        <div class="left-comp">
          <img class="left_img1" src={signImg} />
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
            <label class="ff_label">Name</label>
            <input type="text" class="ff_input" placeholder="Enter your Name" onChange={this.myChangeHandlerN}/>
          </div>
          <div class="ff">
            <label class="ff_label">E-mail address</label>
            <input type="text" class="ff_input" placeholder="Enter your email" onChange={this.myChangeHandlerE} />
          </div>
          <div class="ff">
            <label class="ff_label">Password</label>
            <input
              type="password"
              class="ff_input"
              placeholder="Enter the password"
              onChange={this.myChangeHandlerP}
            />
          </div>
          <div class="ff">
            <button class="btn btn-primary ff_btn mr-20" type="button" onClick={this.mySubmitHandler}>
              Sign Up
            </button>
            <a class="ff_link" href="/signiN">
              I  am already a member
            </a>
          </div>
        </div>
      </div>
    );
  
  }
}

// const SignUp = () => {
//   return (
//     <div>
//       <div class="left-comp">
//         <img class="left_img1" src={signImg} />
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
//           <label class="ff_label">Name</label>
//           <input type="text" class="ff_input" placeholder="Enter your Name" />
//         </div>
//         <div class="ff">
//           <label class="ff_label">E-mail address</label>
//           <input type="text" class="ff_input" placeholder="Enter your email" />
//         </div>
//         <div class="ff">
//           <label class="ff_label">Password</label>
//           <input
//             type="text"
//             class="ff_input"
//             placeholder="Enter the password"
//           />
//         </div>
//         <div class="ff">
//           <label class="ff_label">mobile number</label>
//           <input type="text" class="ff_input" placeholder="Enter the number" />
//         </div>
//         <div class="ff">
//           <button class="btn btn-primary ff_btn mr-20" type="button">
//             Sign Up
//           </button>
//           <a class="ff_link" href="#">
//             I  am already a member
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

export default SignUp;
