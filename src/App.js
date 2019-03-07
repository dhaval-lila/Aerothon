import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from "./NavigationBar";

class App extends Component {
  render() {
    return (
      <div className="App">
      <div style={ { height : "100px" , background : "#343a40" , color : "white"}}>
        <h1 className ={"pt-4"}>
          AirBuzz App
        </h1>
      </div>
          <NavigationBar/>
      </div>
    );
  }
}

export default App;
