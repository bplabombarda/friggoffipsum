import React from 'react';

const Button = (props) => {
	return (
		<button onClick={props.onClick}>
            { props.profanity ? 'Fuck off, Ricky!' : 'Frigg off, Barb!' }
        </button>
	);
};

export default Button;