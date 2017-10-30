import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';

const HeaderMenu = ({ isOpen, anchorEl, handleTouchTap, handleRequestClose, handleItemTouchTap, children }) => (
  <div>
    <RaisedButton
      onClick={handleTouchTap}
      label="Click me"
    />
    <Popover
      open={isOpen}
      anchorEl={anchorEl}
      anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
      onRequestClose={handleRequestClose}
    >
      <Menu onItemTouchTap={handleItemTouchTap} onClick={handleRequestClose}>
        {children}
      </Menu>
    </Popover>
  </div>
);

export default HeaderMenu;