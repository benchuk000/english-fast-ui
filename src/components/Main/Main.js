import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Router from '../../Router';

import './Main.css';

class Main extends Component{
  render(){
    return (
      <div className="main">
        <Router/>
      </div>
    );
  }
}

export default Main;