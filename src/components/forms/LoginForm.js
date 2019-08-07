import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import SessionContext from 'session/session-context.js';

import {ErrorMessage} from 'components/ErrorMessage.js';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      errorMessage: ''
    };
  }

  onChangeInput(e, key) {
    this.setState({[key]: e.target.value});
  }

  onClickLogin(action) {
    const email = this.state.email.trim();
    const password = this.state.password.trim();
    if (email && password) {
      action(this.state.email, this.state.password);
    } else {
      this.setState({errorMessage: 'メールアドレスとパスワードを入力してください'});
    }
  }

  render() {
    return (
      <SessionContext.Consumer>
        {(context) => (
          <div style={{marginLeft: '20px'}}>
            <ErrorMessage errorMessage={this.state.errorMessage} />

            <div style={{marginBottom: '20px'}}>
              <TextField
                type="email"
                required={true}
                placeholder="user01@example.com"
                label="メールアドレス"
                value={this.state.email}
                onChange={(e) => this.onChangeInput(e, 'email')}
                margin="none"
                style={{width: 300}}
              />
            </div>

            <div style={{marginBottom: '50px'}}>
              <TextField
                type="password"
                required={true}
                label="パスワード"
                value={this.state.password}
                onChange={(e) => this.onChangeInput(e, 'password')}
                margin="none"
                style={{width: 300}}
              />
            </div>

            <Button
              variant="contained"
              color="primary"
              onClick={() => this.onClickLogin(context.login)}
              style={{marginRight: '20px'}}
            >
              Login
            </Button>
          </div>
        )}
      </SessionContext.Consumer>
    );
  }
}

export default LoginForm;
