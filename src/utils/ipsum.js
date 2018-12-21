import quotes from '../data/quotes';

export default class Ipsum {
	constructor(profanity) {
		const mode = profanity ? 'clean' : 'dirty';
		this.quotes = quotes[mode];
	}

	_getRandomQuote() {
		return this.quotes[ Math.floor(Math.random() * this.quotes.length) ]
	}

	_getParagraph() {
		let paragraph = '';
		const minCharacters = 250;

		while (paragraph.length < minCharacters) {
			paragraph = `${paragraph} ${this._getRandomQuote()}`
		}
		return paragraph.trim();
	}

	getAllParagraphs(paragraphs) {
		let all = [];

		while (all.length < paragraphs) {
			all.push(this._getParagraph())
		}
		return all;
	}
}