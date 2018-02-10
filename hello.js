function callMethod(){
    var inputQuote = document.getElementById("myquote");
    var inputAuthor = document.getElementById("author");
	// window.alert(inputQuote + inputAuthor);
	var divContainer = document.getElementById("mydiv");
	divContainer.innerText += inputQuote.value + " - " + inputAuthor.value + "\n";
	inputQuote.value = "";
	inputAuthor.value = "";
}