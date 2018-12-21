import React from 'react';
import {
  func,
  string,
} from 'prop-types'

import '../styles/Input.scss';

const Input = ({ onClick, value }) => {
	return (
		<input
      className='button'
      value={ value }
      type='submit'
      onClick={ onClick }
      />
	);
};

Input.propTypes = {
  onClick: func,
  value: string,
};

export default Input;
