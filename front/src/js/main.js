

// when the user clicks the button
document.querySelector('button.tagit').addEventListener("click", function() {
	let tagValue = document.querySelector('[name="tag"]').value
	let selection = document.getElementById("color");	
	let colorSelected = selection.options[selection.selectedIndex].value;

	console.log(colorSelected);

	//sending to app.js the word written and color selected ;D
	axios.post('http://localhost:1235/tag', {
		tag: tagValue,
		color: colorSelected
	})
	.then(function (response) {
		console.log(response);
	})
	.catch(function (error) {
		console.log(error);
	});
	// send the tag to the server
	changeFontColor()

})

function changeFontColor() {
	var color = document.getElementById("color").value; // cached

	// The working function for changing background color.
	document.bgColor = color;

	// The code I'd like to use for changing the text simultaneously - however it does not work.
	document.getElementById("textColor").style.color = color;
}
















