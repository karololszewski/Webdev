window.onload = function() {
	resizeNavFunction();
}

function resizeNavFunction() {
	var nav = document.getElementById("nav-menu");
	var navBtn = document.getElementById("nav-btn");
	var left = document.getElementById("section-left");
	var right = document.getElementById("section-right");
	var middle = document.getElementById("section-middle");
	var width = window.innerWidth 
	|| document.documentElement.clientWidth 
	|| document.body.clientWidth;

	if (width < 550) {
		nav.style.display = "none";
		navBtn.style.display = "inline";
	} else if (width >= 550 && width < 800) {
		nav.style.display = "inline";
		navBtn.style.display = "none";
		left.style.display = "none";
		right.style.display = "none";
		middle.style.width = "100%";
	} else if (width >= 800) {
		left.style.display = "inline-block";
		right.style.display = "inline-block";
		middle.style.width = "60%";
	}
}
