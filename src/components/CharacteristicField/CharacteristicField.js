
import React from 'react';

import './CharacteristicField.css';

export const CharacteristicField = ({ children, className }) => 
  <div className={`grid-noGutter characteristic-field ${className}`} children={children}/>;

export const CharacteristicKey = ({ children, className, xs = 12, sm = 6, md = 4, lg = 3 }) =>
  <div className={`col-4_xs-${xs}_sm-${sm}_md-${md}_lg-${lg} characteristic-field__col ${className}`} children={children}/>

export const CharacteristicValue = ({ children, className, xs = 12, sm = 6, md = 8, lg = 9 }) =>
  <div className={`col-8_xs-${xs}_sm-${sm}_md-${md}_lg-${lg} characteristic-field__col ${className}`} children={children}/>