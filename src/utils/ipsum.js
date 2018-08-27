import quotes from '../data/quotes';

export default class Ipsum {
	constructor(profanity) {
		const set = profanity ? 'clean' : 'dirty';
		this.quotes = quotes[set];
	}

	_getRandomQuote() {
		return this.quotes[Math.floor(Math.random()*this.quotes.length)]
	}

	_getParagraph() {
		let paragraph = '';
		let firstSentence = true;
		const minCharacters = 250;
		while (paragraph.length < minCharacters) {
			if (firstSentence) {
				paragraph += this._getRandomQuote();
				firstSentence = false;
			} else {
				paragraph += this._getRandomQuote();
			}
		}
		return paragraph;
	}

	getAllParagraphs(paragraphs) {
		let all = [];
		while (all.length < paragraphs) {
			all.push(this._getParagraph())
		}
		let html = '';
		all.forEach(paragraph => {
			html += `<p>${paragraph}</p>`
		});
		return html;
	}
}