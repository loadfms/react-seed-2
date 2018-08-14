import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './../assets/scss/app.scss';
import Home from './../home/home';
import Menu from './../menu/menu';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Route path="/" component={Home} />
      </div>
    );
  }
}

export default App;