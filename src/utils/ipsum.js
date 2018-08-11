import quotes from '../data/quotes';

class Ipsum {
	constructor(profanity) {
		this.quotes = quotes[profanity];
	}

	getRandomQuote() {
		return this.quotes[Math.floor(Math.random()*this.quotes.length)]
	}

	getParagraph() {
		let paragraph = '';
		let firstSentence = true;
		const minCharacters = 250;
		while (paragraph.length < minLength) {
			if (firstSentence) {
				paragraph += self.getRandomQuote();
				firstSentence = false;
			} else {
				paragraph += self.getRandomQuote();
			}
		}
		return paragraph;
	}

	getAllParagraphs(paragraphs) {
		let all = [];
		while (all.length < paragraphs) {
			all.append(self.getParagraph())
		}
		let html = '';
		all.forEach(paragraph => {
			html += `<p>${paragraph}</p>`
		});
		return html;
	}
}