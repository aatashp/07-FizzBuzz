$('document').ready(function() {

	// VARIABLES
	var runFizzBuzz = "#run-fizzbuzz",
			numInput = "#num-input",
			msg = "#msg",
			columns = "#q1, #q2, #q3, #q4",
			num = ".num",
			lists = "#lists",
			keyNumber = 13;

	// FUNCTIONS
	var fizzBuzz = function() {

		var column = "#q1",
				fizz = "Fizz",
				buzz = "Buzz",
				output = "",
				input = $(numInput).val(),
				message = "";

		//Reset
		$(columns).hide();
		$(num).remove();
		$(msg).html("");

		message = inspectInput(input);

		if (message.length == 0) {

			input = +input;
			$(lists).hide().fadeIn('slow');

			for (i=1; i<=input; i++) {
				output = "";

				$(column).show();

				if(i%3==0) {
					output = fizz;
				} 

				if (i%5==0) {
					output += buzz;
				} 

				if (output.length == 0) {
					output = i;
				}

				output = "<p class='num'>" + output	+ "</p>";

				$(column).append(output);

				if (i%25==0) {
					column = "#q" + (i/25 + 1);
				}
			}
		} else {
			$(msg).html(message);
			$("#lists").hide();
		}
	}


	var inspectInput = function(input) {
		var erromsg = "Please enter a number between 1 and 100";

		$(numInput).val('');

		if (isNaN(input)) {
			return erromsg;
		} else if (input%1 != 0) {
			return erromsg;
		} else if ( (input < 1) || (input > 100) ) {
			return erromsg;
		} else {
			return "";
		}

	}	

	function keyPressed(event) {
		if (event.which == keyNumber) {
			fizzBuzz();
		}
	}


	// INITIALIZE

	// EVENT HANDLERS
	$(document).on('keydown', keyPressed);
	$(runFizzBuzz).on('click', fizzBuzz);
})