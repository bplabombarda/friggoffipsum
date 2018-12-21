import quotes from '../data/quotes';

export default class Ipsum {
	constructor(profanity) {
		const mode = profanity ? 'dirty' : 'clean';
		this.quotes = quotes[mode];
	}

	getRandomQuote() {
		return this.quotes[ Math.floor(Math.random() * this.quotes.length) ]
	}

	getParagraph() {
		let paragraph = '';
		const minCharacters = 250;

		while (paragraph.length < minCharacters) {
			paragraph = `${paragraph} ${this.getRandomQuote()}`
		}
		return paragraph.trim();
	}

	getAllParagraphs(paragraphs) {
		let all = [];

		while (all.length < paragraphs) {
			all.push(this.getParagraph())
		}
		return all;
	}
}