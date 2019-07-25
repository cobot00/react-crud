import React from 'react';

const StateContext = React.createContext({
  authenticated: false,
  login: () => {},
  logout: () => {}
});

export default StateContext;
