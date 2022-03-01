import './App.css';
import React from "react";
import Sidebar from './Sidebar';
import Main from './Main';

const App = () => {
  return (
    <div class = "Container">
      <div class = "Wrapper">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}


export default App;


