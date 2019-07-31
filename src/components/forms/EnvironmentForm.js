import React from 'react';

class EnvironmentForm extends React.Component {
  render() {
    return (
      <div style={{marginLeft: '20px', width: '600px'}}>
        <h2 style={{marginBottom: '5px'}}>環境変数</h2>

        <div style={{marginLeft: '5px'}} className='enclosed-area'>
          <div style={{marginBottom: '10px'}}>
            <b>process.env.NODE_ENV:</b> {process.env.NODE_ENV}
          </div>

          <div style={{marginBottom: '10px'}}>
            <b>process.env.REACT_APP_API_URL:</b> {process.env.REACT_APP_API_URL}
          </div>

          <div style={{marginBottom: '10px'}}>
            <b>process.env.REACT_APP_X:</b> {process.env.REACT_APP_X}
          </div>

          <div style={{marginBottom: '10px'}}>
            <b>process.env.REACT_APP_Y:</b> {process.env.REACT_APP_Y}
          </div>
        </div>
      </div>
    );
  }
}

export default EnvironmentForm;
