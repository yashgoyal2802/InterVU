import React from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import CompanyForm from "./components/CompanyForm";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <SignUp /> */}
      <CompanyForm />
      <Footer />
    </div>
  );
}

export default App;
