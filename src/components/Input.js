import React from 'react';

import '../styles/Input.scss'

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

export default Input;