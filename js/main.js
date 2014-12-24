// Code Icons Page, by @mabrasil.

if (!('boxShadow' in document.body.style)) {
	document.body.setAttribute('class', 'noBoxShadow');
}

// Get each icon Class and Code
document.body.addEventListener("click", function(e) {
	var target = e.target;
	if (target.tagName === "INPUT" &&
		target.getAttribute('class').indexOf('Code') === -1) {
		target.select();
	}
});

// Font Test Drive
$(function() {
	var fontSize = document.getElementById('fontSize'),
		testDrive = document.getElementById('testDrive'),
		testText = document.getElementById('testText');
	function updateTest() {
		testDrive.innerHTML = testText.value || String.fromCharCode(160);
		if (window.ciCode) {
			window.ciCode(testDrive);
		}
	}
	function updateSize() {
		testDrive.style.fontSize = fontSize.value + 'px';
	}
	fontSize.addEventListener('change', updateSize, false);
	testText.addEventListener('input', updateTest, false);
	testText.addEventListener('change', updateTest, false);
	updateSize();
}());