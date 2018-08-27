import React from 'react';

const Button = ({ profanity, onClick }) => {
	return (
		<button onClick={ onClick }>
            { profanity ? 'Rated PG' : 'Rated R' }
        </button>
	);
};

export default Button;