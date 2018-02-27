import random

from friggoffipsum.quotes import quotes

class Ipsum:
	def __init__(self):
		self.quotes = quotes

	def get_random_quote(self):
		rand_quote = random.choice(self.quotes)
		return rand_quote

	def get_paragraph(self):
		paragraph = ""
		min_char_length = 250
		first_sentence = True
		while len(paragraph) < min_char_length:
			if first_sentence:
				paragraph = '{}'.format(self.get_random_quote())
				first_sentence = False
			else:
				paragraph = '{} {}'.format(paragraph, self.get_random_quote())
		return paragraph

	def get_all_paragraphs(self, number_of_pgraphs):
		all_pgraphs = []
		while len(all_pgraphs) < int(number_of_pgraphs):
			all_pgraphs.append(self.get_paragraph())
		html = ''
		for pgraph in all_pgraphs:
			html += '<p>{}</p>'.format(pgraph)
		return html