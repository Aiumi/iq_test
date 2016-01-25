var pos = 0, test, test_status, question, choice, choices, chA, chB, ChC, ChD, ChE, correct = 0;
var questions = [
	["Which one of these animals is least like the others?","Dog","Mouse","Lion","Snake","Elephant", "D"],
	["If you rearrange the letters of BARBIT, you would have the name of a:","Ocean","Country","State","City","Animal","E"],
	["Which one of the five is least like the other four?","Potato","Corn","Apple","Carrot","Bean","C"],
	["Adam, who is twelve years old, is three times as old as his brother. How old will Adam be when he is twice as old as his brother?","15","16","18","20","21","B"],
	["Which one of the five is least like the other four?","Touch","Taste","Hear","Smile","See","D"]
];
function_(x) {
	return document.getElementById(x);
}
function renderQuestion(){
	test = _("test");
	if(pos >= questions.length){
		test.innerHTML = "<h2>You got " + correct + " of " questions.length + " questions correct</h2>";
		_("test_status").innerHTML = "Test Completed";
		pos = 0;
		correct = 0;
		return false;
	}
	_("test_status").innerHTML = "Question " + (pos + 1) + " of " + questions.length;
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	chD = questions[pos][4];
	chE = questions[pos][5];
	test.innerHTML = "<h3>" + question + "</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> " + chA + "<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> " + chB + "<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> " + chC + "<br>";
	test.innerHTML += "<input type='radio' name='choices' value='D'> " + chD + "<br>";
	test.innerHTML += "<input type='radio' name='choices' value='E'> " + chE + "<br><br>";
	test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i = 0; i < choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][6]){
		correct++;
	} 
	pos++;
	renderQuestion();
}
window.addEventListener("load", renderQuestion, false);
