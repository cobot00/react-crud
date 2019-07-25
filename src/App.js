import React from 'react';
import 'App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import AccountBoxIcon from '@material-ui/icons/AccountBox.js';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SettingsIcon from '@material-ui/icons/Settings';

import LoginForm from 'components/forms/LoginForm.js';
import HomeForm from 'components/forms/HomeForm.js';
import ButtonForm from 'components/forms/ButtonForm.js';
import ListForm from 'components/forms/ListForm.js';
import EnvironmentForm from 'components/forms/EnvironmentForm.js';

import StateContext from 'contexts/state-context.js';

import PropTypes from 'prop-types';

class App extends React.Component {
  constructor() {
    super();

    const login = () => {
      this.setState(() => ({
        authenticated: true
      }));
    };

    const logout = () => {
      this.setState(() => ({
        authenticated: false
      }));
    };

    this.state = {
      authenticated: false,
      login: login,
      logout: logout
    };
  }

  render() {
    return (
      <StateContext.Provider value={this.state}>
        <Routing authenticated={this.state.authenticated} />
      </StateContext.Provider>
    );
  }
}

const Routing = (props) => {
  return (
    <BrowserRouter>
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              AppBar
            </Typography>
          </Toolbar>

          <div style={{marginBottom: '10px', marginLeft: '30px'}}>
            <b>authenticated:</b> {String(props.authenticated)}
          </div>
        </AppBar>

        <BottomNavigation showLabels>
          { props.authenticated ? null : <BottomNavigationAction label="Login" icon={<AccountBoxIcon />} component={Link} to="/login" /> }
          { props.authenticated ? <BottomNavigationAction label="Home" icon={<RestoreIcon />} component={Link} to="/" /> : null }
          { props.authenticated ? <BottomNavigationAction label="ButtonForm" icon={<FavoriteIcon />} component={Link} to="/button" /> : null }
          { props.authenticated ? <BottomNavigationAction label="ListForm" icon={<LocationOnIcon />} component={Link} to="/list" /> : null }
          { props.authenticated ? <BottomNavigationAction label="EnvironmentForm" icon={<SettingsIcon />} component={Link} to="/environment" /> : null }
        </BottomNavigation>

        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/" exact component={HomeForm} />
          <Route path="/button/" component={ButtonForm} />
          <Route path="/list/" render={props => <ListForm params={{ a: 1, b: 2}} {...props} />} />
          <Route path="/environment" exact component={EnvironmentForm} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

Routing.propTypes = { authenticated: PropTypes.bool };

export default App;
