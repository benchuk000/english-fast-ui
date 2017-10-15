import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import product from './product.png'
import './WelcomePage.css';


const WelcomePage = () => (
  <div className="welcome">
    <img className="welcome__img" src={product}/>
  </div>
);

export default WelcomePage;