'use strict';

// when the user clicks the button
document.querySelector('button.tagit').addEventListener("click", function () {
	var tagValue = document.querySelector('[name="tag"]').value;
	axios.post('http://localhost:1235/tag', {
		tag: tagValue
	}).then(function (response) {
		console.log(response);
	}).catch(function (error) {
		console.log(error);
	});
	// send the tag to the server
});

function changeBackground() {
	var color = document.getElementById("color").value; // cached

	// The working function for changing background color.
	document.bgColor = color;

	// The code I'd like to use for changing the text simultaneously - however it does not work.
	document.getElementById("textColor").style.color = color;
}

document.getElementById("submitColor").addEventListener("click", changeBackground, false);
//# sourceMappingURL=main.js.map
