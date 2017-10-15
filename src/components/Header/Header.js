import React from 'react';

import './Header.css';
import HeaderModal from '../../containers/HeaderModal/HeaderModal';
import logo from './logo.png';

const Header = ({ children }) => (
  <div className="header">
    <div className="header__logo">
      <img src={logo} className="header__logo__img"/>
    </div>
    <div className="header__buttons">
      { children }
    </div>

    <HeaderModal/>
  </div>
);

export default Header;