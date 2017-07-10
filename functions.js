function determineDeath() {
	var estimate = 71;
	var age = document.getElementsByName("age")[0];
	
	//grabs the value of age and tests to see its 0-150
	//breaks out of function if it doesnt pass 
	if (age.value < 0) {
		age.value = 0;
		window.alert("Your age cannot be below zero.");
		return;
	}
	else if (age.value > 150) {
		age.value = 150;
		window.alert("Your age cannot be above 150.");
		return;
	}
	
	age = age.value;

	
	var yearsRemaining = estimate - age;
	var immortal = age - estimate;
	var livedDiv = "<div class='lived box'></div>";
	var leftDiv = "<div class='left box'></div>";
	var message = "";
	
	
	
	document.getElementsByClassName("question-container")[0].style.display="none";
	
	document.getElementsByClassName("answer-container")[0].style.display="inherit";
	
	document.getElementsByClassName("skew")[0].style.height="30%";
	
	if (yearsRemaining <= 0) {
		for (var i = 0; i < age; i++) {
			$(".blocks").append(livedDiv);
		}
		if (yearsRemaining === 0) {
			message = "I've got some bad news. You might die this year. Well, technically you could die at any age.";
			$(".message").html(message);
		}
		else {
			message = "Amazing, you've lived "+immortal+" years over the world average.";
			$(".message").html(message);
		}
	}
	else {
		for (var i = 0; i < age; i++) {
			$(".blocks").append(livedDiv);
		}
		for (var j = 0; j < yearsRemaining; j++) {
			$(".blocks").append(leftDiv);
		}
		message = "You have "+yearsRemaining+" more years before you reach the global average life span.";
		$(".message").html(message);
	}
}

function overlay() {
	$(".overlay").toggle("fast");
	$(".info-icon").toggle("fast");
	$(".close-icon").toggle("fast");
}


