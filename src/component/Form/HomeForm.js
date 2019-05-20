import React from 'react';

class HomeForm extends React.Component {
  constructor(props) {
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
      <div>
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
      </div>
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
