import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import HomeForm from './component/Form/HomeForm.js';
import ButtonForm from './component/Form/ButtonForm.js';
import ListForm from './component/Form/ListForm.js';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              AppBar
            </Typography>
          </Toolbar>
        </AppBar>

        <BottomNavigation showLabels>
          <BottomNavigationAction label="Home" icon={<RestoreIcon />} component={Link} to="/" />
          <BottomNavigationAction label="ButtonForm" icon={<FavoriteIcon />} component={Link} to="/button" />
          <BottomNavigationAction label="ListForm" icon={<LocationOnIcon />} component={Link} to="/list" />
        </BottomNavigation>

        <Route path="/" exact component={HomeForm} />
        <Route path="/button/" component={ButtonForm} />
        <Route path="/list/" component={ListForm} />
      </div>
    </BrowserRouter>
  );
}

export default App;
