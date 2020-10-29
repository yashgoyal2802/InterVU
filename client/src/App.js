import React from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import CompanyForm from "./components/CompanyForm";
import Main from "./components/Main";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      < Header />
      <Route path="/" exact component = {Main} />
      <Route path="/SignUp" exact component = {SignUp} />
      <Route path="/SignIn" exact component = {SignIn} />
      <Route path="/AddPost" exact component = {CompanyForm} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
