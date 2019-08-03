import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default function Header() {
  return (
    <header>
      <AppBar position="static">
        <ToolBar>
          <IconButton edge="start" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </ToolBar>
      </AppBar>
    </header>    
  )
}
