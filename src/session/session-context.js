import React from 'react';

const SessionContext = React.createContext({
  authenticated: false,
  login: () => {},
  logout: () => {}
});

export default SessionContext;
