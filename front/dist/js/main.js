'use strict';

// when the user clicks the button
document.querySelector('button.tagit').addEventListener("click", function () {
	var tagValue = document.querySelector('[name="tag"]').value;
	var selection = document.getElementById("color");
	var colorSelected = selection.options[selection.selectedIndex].value;

	console.log(colorSelected);

	//sending to app.js the word written and color selected ;D
	axios.post('http://localhost:1235/tag', {
		tag: tagValue,
		color: colorSelected
	}).then(function (response) {
		console.log(response);
	}).catch(function (error) {
		console.log(error);
	});
	// send the tag to the server
	changeFontColor();
});

function changeFontColor() {
	var color = document.getElementById("color").value; // cached

	// The working function for changing background color.
	document.bgColor = color;

	// The code I'd like to use for changing the text simultaneously - however it does not work.
	document.getElementById("textColor").style.color = color;
}
//# sourceMappingURL=main.js.map
