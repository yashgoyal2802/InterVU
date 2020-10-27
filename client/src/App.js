import React from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import CompanyForm from "./components/CompanyForm";
import Main from "./components/Main";
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <SignUp />
      <SignIn /> */}
      {/* <CompanyForm /> */}

      <Footer />
    </div>
  );
}

export default App;
