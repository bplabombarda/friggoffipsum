var output = document.getElementById('output-text');
var submit = document.forms[0].elements['submit'];
var copy = document.forms[0].elements['copy'];
var overlay = document.getElementById('copy-overlay');

submit.addEventListener('click', handleSubmit);
copy.addEventListener('click', handleCopy);

function getFormData() {
	var form = document.forms[0];
	var numPgraphs = form.elements['paragraphs'].value;
	return numPgraphs
}

function handleSubmit(e) {
	e.preventDefault();
	var pgraphs = getFormData()

	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
	  if (xhr.readyState == XMLHttpRequest.DONE) {
	  	var json = JSON.parse(xhr.responseText);
	  	var text = json.data;
	    output.innerHTML = text;
	    output.style.display = 'inherit';
	    copy.style.display = 'inline';
	  }
	}
	xhr.open('GET', '/get_text?paragraphs=' + pgraphs, true);
	xhr.send();
}


function handleCopy() {
	var clip = new Clipboard('.copy-button');
  clip.on('success', function(e) {
    e.clearSelection();
  });
}