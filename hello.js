function callMethod() {
	
    var inputQuote = document.getElementById("myquote");
    var inputAuthor = document.getElementById("author");
	// window.alert(inputQuote + inputAuthor);
	// var divContainer = document.getElementById("mydiv");
	// divContainer.innerText += inputQuote.value + " - " + inputAuthor.value + "\n";
	var newRow = '<tr><td>'  + inputQuote.value  + ' - ' + inputAuthor.value + '</td></tr>';
	$('#myTable tr:last').after(newRow);

    var message = "Quote saved";
    $('#alert_placeholder').append('<div class="alert alert-success fade in" id="success-alert"><button type="button" class="close" data-dismiss="alert">&times;</button>'+ message +'</div>');
    $("#success-alert").fadeTo(5000, 500).slideUp(500, 
    	function(){
    		$("#success-alert").alert('close');
    	}
    );

	inputQuote.value = "";
	inputAuthor.value = "";
}
