import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This is my first react app!</h1>
        </header>
        <h2 className="App-intro">
		Here is an react Tictactoe game:
        </h2>
      </div>
    );
  }
}

export default App;
