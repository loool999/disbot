let advertisement = document.getElementById("ad")
let disableadbtn = document.getElementById("disable")
let menu = document.getElementById("header_section_top")

advertisement.style.display = ''

function toggleAds() {
  const ads = document.getElementById('ads');
	const option = sessionStorage.getItem('ads');
  if (option === 'on') {
    sessionStorage.setItem('ads', 'off');
    ads.style.color = ''; 
    advertisement.style.display = 'none';
  } else {
    sessionStorage.setItem('ads', 'on');
    advertisement.style.display = ''; 
    ads.style.color = '';
  }
}

if (sessionStorage.getItem('ads') == 'off') {
	advertisement.style.display = "none"
  ads.style.color = '';
} else {
	advertisement.style.display = ''
  ads.style.color = '';
}

// document.body.style.backgroundColor = "rgb(60, 9, 108)"
function galaxy() {
	window.localStorage.setItem('galaxy', 'true');
	document.body.style.backgroundColor = "rgb(60, 9, 108)"
	localStorage.setItem('ocean', 'false');
	menu.style.backgroundColor = "rgb(90, 24, 154)"
	window.localStorage.removeItem('ocean');
}


function toggleNoGG() {
  const option = localStorage.getItem('nogg');
  const nogg = document.getElementById('nogg');
  if (option === 'on') {
    nogg.style.color = '';
    localStorage.setItem('nogg', 'off');
  } else {
    nogg.style.color = 'green';
    localStorage.setItem('nogg', 'on');
  }
}

if (localStorage.getItem('nogg') === 'on') 
  nogg.style.color = 'green';

if (window.localStorage.getItem('galaxy') == "true") {
	document.body.style.backgroundColor = "rgb(60, 9, 108)"

	menu.style.backgroundColor = "rgb(90, 24, 154)"
} else if (window.localStorage.getItem('ocean') == "on") {
	document.body.style.backgroundColor = "rgb(72, 202, 228)"

	menu.style.backgroundColor = "rgb(144, 224, 239)"
} else if (window.localStorage.getItem('classic') == "on") {
	menu.style.backgroundColor = "rgb(135, 152, 106)"
	document.body.style.backgroundColor = "rgb(113, 131, 85)"
} else {
	document.body.style.backgroundColor = "rgb(60, 9, 108)"

	menu.style.backgroundColor = "rgb(90, 24, 154)"
}



