import React, { Component, Fragment } from 'react';

import Button from '../components/Button';
import Output from '../components/Output';

import Ipsum from '../utils/ipsum';


export default class App extends Component {
	constructor(props){
        super(props);
        this.state = {
            output: [],
            profanity: false,
        };
        this.handleParagraphs = this.handleParagraphs.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
    	this.setState({
            output: [],
            profanity: !this.state.profanity,
        });
    }

    handleParagraphs(e) {
        const ipsum = new Ipsum(this.state.profanity);
        const newParagraphs = ipsum.getAllParagraphs(e.target.value);
        const output = this.state.output
        console.log(e.target.value)
        console.log(newParagraphs)


        this.setState({
            output: [
                ...this.state.output,
                newParagraphs
            ],
        });
    }

    handleClearOutput() {
        this.setState({
            output: []
        });
    }
 	
	render() {
        const d = new Date();
        const { profanity } = this.state;

		return (
            <Fragment>
                <header>
                    <nav>
                        <h1><a href="/">Frigg Off, Ipsum!</a></h1>
                    </nav>
                </header>

                <section className="button-container">
                    <input className="button paragraphs" value="1" type="submit" onClick={this.handleParagraphs.bind(this)}/>
                    <input className="button paragraphs" value="2" type="submit" onClick={this.handleParagraphs.bind(this)}/>
                    <input className="button paragraphs" value="5" type="submit" onClick={this.handleParagraphs.bind(this)}/>
                    <input className="button paragraphs" value="10" type="submit" onClick={this.handleParagraphs.bind(this)}/>
                    <input id="clear" className="button" value="Clear" type="submit" onClick={this.handleClearOutput.bind(this)}/>
                </section>

                <section>
                    <button onClick={ this.handleToggle }>
                        Clean
                    </button>

                    <button onClick={ this.handleToggle }>
                        Greasy
                    </button>

                    <button onClick={ this.handleToggle }>
                        Classic
                    </button>
                    
                </section>

                <Output html={this.state.output}/>

                <footer>
                    <span className="copyright">
                        © <span id="copyright-year">{ d.getFullYear() }</span> Frigg Off, Ipsum!
                    </span>
                </footer>

            </Fragment>
        );
	}
};