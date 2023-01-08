import React from "react";
import "./App.css";
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Main from "./Components/Main";
//import './Components/style.css'

function App() {
  return (
    <>
      <div>
        <div className="App-header">
          <h1 align="center">React Pokemon</h1>
          <h2 align="center">By Ragul</h2>
        </div>
        <Main />
      </div>
    </>
  );
}

export default App;
