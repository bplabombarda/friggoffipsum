import React, { Component } from 'react';
import quotes from '../data/quotes';


export default class App extends Component {
	constructor(props){
        super(props);
        this.state = {
            profanity: false
        };
        this.handleInput = this.handleInput.bind(this);
    }

    handleToggle() {
    	
    }
 	
	render() {
		const { profanity } = this.state;

		return (
			{ this.state.profanity ? <h1>True!</h1> : <h1>False!</h1> }
		);
	}
};