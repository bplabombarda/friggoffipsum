var one = document.getElementsByClassName('paragraphs')[0]
var two = document.getElementsByClassName('paragraphs')[1]
var five = document.getElementsByClassName('paragraphs')[2]
var ten = document.getElementsByClassName('paragraphs')[3]
var clear = document.getElementById('clear');
var copy = document.getElementById('copy');
var alert = document.getElementById('alert');
var output = document.getElementById('output-text');
var copyright = document.getElementById('copyright-year');

one.addEventListener('click', handleAddParagraphs);
two.addEventListener('click', handleAddParagraphs);
five.addEventListener('click', handleAddParagraphs);
ten.addEventListener('click', handleAddParagraphs);
clear.addEventListener('click', handleClear);
copy.addEventListener('click', handleCopy);

function handleClear(e) {
	output.innerHTML = "";
	output.classList.add('hidden');
	copy.classList.add('hidden');
}

function handleAddParagraphs(e) {
	e.preventDefault();
	var pgraphs = e.target.value;

	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
	  if (xhr.readyState == XMLHttpRequest.DONE) {
	  	var json = JSON.parse(xhr.responseText);
	  	var text = json.data;
	  	output.innerHTML += text;
	  	output.classList.remove('hidden');
	  	copy.classList.remove('hidden');
	  }
	}
	xhr.open('GET', '/get_text?paragraphs=' + pgraphs, true);
	xhr.send();
}

function showCopiedAlert() {
	alert.classList.remove('hidden')
	alert.style.visibility = 'visible';
	alert.style.opacity = 1;
}


function handleCopy() {
	var clip = new Clipboard('#copy');
  clip.on('success', function(e) {
    e.clearSelection();
    alert.classList.remove('invisible');
    setTimeout(
      function Remove() {
				alert.classList.add('invisible');
      },
      1500
    );
  });
}

var date = new Date();
var year = date.getFullYear();
copyright.innerText = year;