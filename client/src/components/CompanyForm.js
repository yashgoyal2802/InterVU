import React from "react";

class CompanyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { companyName: 'Google' ,numberOfTechnicalRounds:0,numberOfNonTechnicalRounds:0,avgDuration:'',yourExperience:''};
  }
  mySubmitHandler1 = (event) => {
    localStorage.getItem('logged')?this.mySubmitHandler(event):alert("LOGIN PLS");
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    console.log("You are submitting " + this.state.numberOfTechnicalRounds);
    fetch('http://localhost:5001/api/subs/addSub', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },    
      body: JSON.stringify({
        numberOfTechnicalRounds:this.state.numberOfTechnicalRounds,
        numberOfNonTechnicalRounds:this.state.numberOfNonTechnicalRounds,
        AverageDuration:this.state.avgDuration,
        YourExpericence:this.state.yourExperience,
        companyName:this.state.companyName
    
          })
    })
    console.log(this.state.numberOfTechnicalRounds,this.state.numberOfNonTechnicalRounds,this.state.avgDuration,this.state.yourExperience,this.state.companyName);

  }
  myChangeHandlerTR = (event) => {
    this.setState({numberOfTechnicalRounds: parseInt(event.target.value)});
    console.log(this.state.numberOfTechnicalRounds);
  }
  myChangeHandlerC = (event) => {
    this.setState({companyName: event.target.value});
    console.log(this.state.companyName);
  }
  myChangeHandlerNTR = (event) => {
    this.setState({numberOfNonTechnicalRounds: parseInt(event.target.value)});
    console.log(this.state.numberOfNonTechnicalRounds);
  }
  myChangeHandlerAD = (event) => {
    this.setState({avgDuration: event.target.value});
    console.log(this.state.avgDuration);
  }
  myChangeHandlerYE = (event) => {
    this.setState({yourExperience: event.target.value});
    console.log(this.state.yourExperience);
  }
  setG = () =>{
    this.setState({companyName: "Google"});
    console.log(this.state.companyName);

  }
  setF = () =>{
    this.setState({companyName: "Facebook"});
    console.log(this.state.companyName);

  }
  setL = () =>{
    this.setState({companyName: "Linkedin"});
    console.log(this.state.companyName);

  }
  setA = () =>{
    this.setState({companyName: "Amazon"});
    console.log(this.state.companyName);

  }

  render() {
    return (
      <div>
      <div class="left-comp" style={{ padding: "6.55%" }}>
        <div className="left_comp_list">
          <button className="comp_select" onClick={this.setG}>Google</button>
        </div>
        <div className="left_comp_list">
          <button className="comp_select" onClick={this.setF}>Facebook</button>
        </div>
        <div className="left_comp_list">
          <button className="comp_select" onClick={this.setL}>LinkedIn</button>
        </div>
        <div className="left_comp_list">
          <button className="comp_select" onClick={this.setA}>Amazon</button>
        </div>
      </div>
      <div className="right-comp">
        <div className="ff ff_title">
          <a className="ff_link ff_tlink">
            {this.state.companyName}
          </a>
        </div>
        <div className="ff">
          <label className="ff_label">Number of technical rounds</label>
          <input type="text" className="ff_input" placeholder="0" onChange={this.myChangeHandlerTR}/>
        </div>
        <div className="ff">
          <label className="ff_label">Number of non-technical rounds</label>
          <input type="text" className="ff_input" placeholder="0" onChange={this.myChangeHandlerNTR}/>
        </div>
        {/* <div class="ff">
          <label class="ff_label">Type of interview</label>
          <input type="text" class="ff_input" placeholder="Offline/Online" />
        </div> */}
        <div className="ff">
          <label className="ff_label">Average Duration</label>
          <input type="text" className="ff_input" placeholder="30 mins" onChange={this.myChangeHandlerAD}/>
        </div>
        <div className="ff">
          <label className="ff_label">Your Exprience</label>
          <input type="text" className="ff_input" placeholder="Good/Bad" onChange={this.myChangeHandlerYE}/>
        </div>
        <div class="ff">
          <input className="btn btn-primary ff_btn mr-20" type="Button" value="ADD POST" onClick={this.mySubmitHandler1} />
        </div>
      </div>
    </div>
    );
  }
}



// const CompanyForm = () => {
//   return (
//     <div>
//       <div class="left-comp" style={{ padding: "6.55%" }}>
//         <div className="left_comp_list">
//           <button className="comp_select">Google</button>
//         </div>
//         <div className="left_comp_list">
//           <button className="comp_select">Facebook</button>
//         </div>
//         <div className="left_comp_list">
//           <button className="comp_select">LinkedIn</button>
//         </div>
//         <div className="left_comp_list">
//           <button className="comp_select">Amazon</button>
//         </div>
//       </div>
//       <div className="right-comp">
//         <div className="ff ff_title">
//           <a className="ff_link ff_tlink" href="#">
//             Google
//           </a>
//         </div>
//         <div className="ff">
//           <label className="ff_label">Number of technical rounds</label>
//           <input type="text" className="ff_input" placeholder="0" />
//         </div>
//         <div className="ff">
//           <label className="ff_label">Number of non-technical rounds</label>
//           <input type="text" className="ff_input" placeholder="0" />
//         </div>
//         {/* <div class="ff">
//           <label class="ff_label">Type of interview</label>
//           <input type="text" class="ff_input" placeholder="Offline/Online" />
//         </div> */}
//         <div className="ff">
//           <label className="ff_label">Average Duration</label>
//           <input type="text" className="ff_input" placeholder="30 mins" />
//         </div>
//         <div className="ff">
//           <label className="ff_label">Your Exprience</label>
//           <input type="text" className="ff_input" placeholder="Good/Bad" />
//         </div>
//         <div class="ff">
//           <button className="btn btn-primary ff_btn mr-20" type="button">
//             Add Post
//           </button>
//           <a className="ff_link" href="#">
//             Choose a Different Company
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

export default CompanyForm;
