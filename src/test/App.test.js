import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('1 + 2 = 3', () => {
  expect(1 + 2).toEqual(3);
});
