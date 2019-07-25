import React from 'react';
import Button from '@material-ui/core/Button';

import StateContext from 'contexts/state-context.js';

class LoginForm extends React.Component {
  render() {
    return (
      <StateContext.Consumer>
        {(context) => (
          <div style={{marginLeft : '20px'}}>
            <Button variant="contained" color="primary" onClick={context.login} style={{marginRight : '20px'}} >
              Login
            </Button>
          </div>
        )}
      </StateContext.Consumer>
    );
  }
}

export default LoginForm;
