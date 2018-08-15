import React, { Component, Fragment } from 'react';

import Button from '../components/Button';

import quotes from '../data/quotes';


export default class App extends Component {
	constructor(props){
        super(props);
        this.state = {
            profanity: false
        };
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        const { profanity } = this.state;

    	this.setState({
            profanity: !this.state.profanity
        });
    }
 	
	render() {
		return (
            <Fragment>
                <header>
                    <h1><a href="/">Frigg Off, Ipsum!</a></h1>
                </header>

                <Button 
                    onClick={this.handleToggle}
                    profanity={this.state.profanity}
                />

                <footer>
                    <span class="copyright">
                        © <span id="copyright-year"></span> Frigg Off, Ipsum!
                    </span>
                </footer>
                
            </Fragment>
        );
	}
};