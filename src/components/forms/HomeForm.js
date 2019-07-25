import React from 'react';
import Button from '@material-ui/core/Button';

import SessionContext from 'session/session-context.js';

class HomeForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
    };

    this.onChangeInput = this.onChangeInput.bind(this);
    this.onChangeSelect = this.onChangeSelect.bind(this);
  }

  onChangeInput(e, key) {
    this.setState({ [key]: e.target.value });
  }

  onChangeSelect(e, key) {
    this.setState({ [key]: e.target.value });
  }

  render() {
    return (
      <SessionContext.Consumer>
        {(context) => (
          <div style={{marginLeft : '20px'}}>
            <h2>Home</h2>

            <div className="block-margin">
              <label>名前：</label>
              <input type="text" value={this.state.name} onChange={(e) => this.onChangeInput(e, 'name')} />
            </div>

            <div>
              <label>性別：</label>
              <select value={this.state.value} onChange={(e) => this.onChangeSelect(e, 'sex')}>
                <option value="male">男性</option>
                <option value="female">女性</option>
                <option value="other">指定しない</option>
              </select>
            </div>

            <SubComponent sex={this.state.sex} />

            { context.authenticated ? <Button variant="contained" color="primary" onClick={context.logout} style={{marginTop: '30px'}} >Logout</Button> : null }
          </div>
        )}
      </SessionContext.Consumer>
    );
  }
}

const SubComponent = (params) => {
  if (params.sex === 'female') {
    return (
      <div>sub</div>
    );
  } else {
    return null;
  }
}

export default HomeForm;
