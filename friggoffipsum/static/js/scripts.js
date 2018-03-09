var one = document.getElementById('one-paragraph');
var two = document.getElementById('two-paragraphs');
var five = document.getElementById('five-paragraphs');
var ten = document.getElementById('ten-paragraphs');

var output = document.getElementById('output-text');
var submit = document.forms[0].elements['submit'];
var copy = document.getElementById('copy-text');
var copied = document.getElementById('copied');
var copyright = document.getElementById('copyright-year');

submit.addEventListener('click', handleSubmit);
copy.addEventListener('click', handleCopy);

var date = new Date();
var year = date.getFullYear();

copyright.innerText = year;

function getFormData() {
	var form = document.forms[0];
	var numPgraphs = form.elements['paragraphs'].value;
	return numPgraphs
}

function getValue(e) {
	console.log(e.target);
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
	    copy.style.display = 'block';
	  }
	}
	xhr.open('GET', '/get_text?paragraphs=' + pgraphs, true);
	xhr.send();
}


function handleCopy() {
	var clip = new Clipboard('.copy-button');
  clip.on('success', function(e) {
    e.clearSelection();
    copy.classList.add('hide')
    setTimeout(
      function Remove() {
        elem.classList.add("remove");
      },
      500 );
  });
}