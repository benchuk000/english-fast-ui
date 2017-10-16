import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';

import './Header.css';
import HeaderModal from '../../containers/HeaderModal/HeaderModal';
import logo from './logo.png';

const Header = ({ children }) => (
  <AppBar
    title={<Link to="/"><img src={logo} className="header__logo__img"/></Link>}
    showMenuIconButton={false}
    iconStyleRight={{ margin: 0}}
    iconElementRight={<div className="header__buttons">{ children }</div>}
  >
    <HeaderModal/>
  </AppBar>
);

export default Header;