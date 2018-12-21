import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Input from '../components/Input';
import Output from '../components/Output';

import Ipsum from '../utils/ipsum';
import '../styles/App.scss';

export default class App extends React.PureComponent {
	state = {
    copied: false,
    output: [],
    profanity: false,
  }

  handleToggle = () => {
  	this.setState((prevState) => ({
      output: [],
      profanity: !prevState.profanity,
    }));
  }

  handleParagraphs = (evt) => {
    const ipsum = new Ipsum(this.state.profanity);
    const newParagraphs = ipsum.getAllParagraphs(evt.target.value);
    
    this.setState((prevState) => ({
      output: [
        ...prevState.output,
        ...newParagraphs,
      ]
    }));
  }

  handleClearOutput = () => {
    this.setState({
      output: []
    });
  }

  handleCopyOutput = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
            this.setState({ copied: false });
        },
        1500
      );    
    });  
  }
   
  resetCopiedStatus () {
    this.setState({ copied: false });
  }

	render() {
    const {
      copied,
      output,
      profanity,
    } = this.state;

		return (
      <>
        <header>
          <nav>
            <h1><a href="/">Frigg Off, Ipsum!</a></h1>
          </nav>
        </header>
        <section className={ copied ? 'message' : 'message invisible' }>
          Copied!
        </section>
        <section className="button-container">
          <Input
            onClick={ this.handleParagraphs }
            value='1'
            />
          <Input
            onClick={ this.handleParagraphs }
            value='2'
            />
          <Input
            onClick={ this.handleParagraphs }
            value='5'
            />
          <Input
            onClick={ this.handleParagraphs }
            value='10'
            />
          <Input
            onClick={ this.handleClearOutput }
            value='Clear'
            />
        </section>
        <section>
          <button
            className={ profanity ? 'button' : 'button button-disabled' }
            disabled={ profanity }
            onClick={ this.handleToggle }
            >
            Clean
          </button>
          <button
            className={ profanity ? 'button button-disabled' : 'button' }
            disabled={ !profanity }
            onClick={ this.handleToggle }
            >
            Greasy
          </button>
          <CopyToClipboard
            onCopy={ this.handleCopyOutput }
            text={ output.join('\n').trim() }>
            <button
              className='button'
              disabled={ !output.length }
              onClick={ this.handleCopyOutput }
              >
              Copy
            </button>
          </CopyToClipboard>
        </section>
        <Output paragraphs={ output } />
        <footer>
          <span className="info">
            <a href="https://github.com/bplabombarda/friggoffipsum">
              <img src='https://img.shields.io/badge/Frigg%20Off%20Ipsum%20On%20GitHub-lightgray.svg?style=for-the-badge&logo=github&logoColor=white&colorA=D21E25&colorB=D21E25' />
            </a>
          </span>
        </footer>
      </>
    );
	}
};