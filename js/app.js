$('document').ready(function() {

	// VARIABLES
	var fizz = "Fizz",
			buzz = "Buzz",
			list = "#q1",
			output = "";

	// FUNCTIONS


	// INITIALIZE
	for (i=1; i<=100; i++) {
		output = "";

		if(i%3==0) {
			output = fizz;
		} 

		if (i%5==0) {
			output += buzz;
		} 

		if (output.length == 0) {
			output = i;
		}

		output = "<p>" + output	+ "</p>";

		$(list).append(output).hide().fadeIn();

		if (i%25==0) {
			list = "#q" + (i/25 + 1);
			console.log(list);
		}
	}

	// EVENT HANDLERS

})