$(document).ready(function(){
	var myButton = $("#submitButton");

	myButton.on("click", function(){
		var number1 = parseInt($("#number1").val());
		var number2 = parseInt($("#number2").val());

		if(number1 < 0 || number2 < 0){
			alert('Numbers must be positive');
		}else{
			$.post("/sum",{
				number1: number1,
				number2: number2
			}, function(resp, statusText){
				var answerContainer = $(".answer");
				var answerField = answerContainer.find(">span");

				answerField.text(resp.result);
				answerContainer.removeClass('hidden');

			});
		}
	});
});
