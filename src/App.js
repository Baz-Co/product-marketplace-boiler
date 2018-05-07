import React, { Component } from 'react';

import Products from "./components/Products/Products";

import logo from './logo.svg';

import './App.css';
import './components/Component.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2 className="Component-title">
          Market Place View
        </h2>
        <Products />
      </div>
    );
  }
}

export default App;
