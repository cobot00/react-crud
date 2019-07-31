import React from 'react';
import Button from '@material-ui/core/Button';

import SessionContext from 'session/session-context.js';

class LoginForm extends React.Component {
  render() {
    return (
      <SessionContext.Consumer>
        {(context) => (
          <div style={{marginLeft: '20px'}}>
            <Button variant="contained" color="primary" onClick={context.login} style={{marginRight: '20px'}} >
              Login
            </Button>
          </div>
        )}
      </SessionContext.Consumer>
    );
  }
}

export default LoginForm;
