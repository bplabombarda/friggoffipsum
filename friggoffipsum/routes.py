from flask import json, jsonify, render_template, request, url_for

from friggoffipsum import app
from friggoffipsum.ipsum import Ipsum

@app.route('/', methods=['GET'])
def index():
	return render_template('index.html')

@app.route('/get_text', methods=['GET'])
def get_text():
	num_pgraphs = request.args.get('paragraphs')
	generator = Ipsum()
	pgraphs = generator.get_all_paragraphs(num_pgraphs)
	return (
		jsonify({'data': pgraphs})
	)