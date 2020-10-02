import React from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
function App() {
  return (
    <div className="App">
      <Header />
      <SignIn />
      <Footer />
    </div>
  );
}

export default App;
