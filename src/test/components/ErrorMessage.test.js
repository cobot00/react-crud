import React from 'react';
import {ErrorMessage} from 'components/ErrorMessage.js';
import {shallow} from 'enzyme';

it('ErrorMessage rendering', () => {
  const target = shallow(
    <ErrorMessage errorMessage={'メールアドレスとパスワードを入力してください'} />
  );
  expect(target.text()).toEqual('メールアドレスとパスワードを入力してください');
});
