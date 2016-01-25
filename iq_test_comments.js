var pos = 0, test, test_status, question, choice, choices, chA, chB, ChC, ChD, ChE, correct = 0;
// All arrays start with a position of 0. These are the variables for the test, its questions, and choices
var questions = [
	["Which one of these animals is least like the others?","Dog","Mouse","Lion","Snake","Elephant", "D"],
	["If you rearrange the letters of BARBIT, you would have the name of a:","Ocean","Country","State","City","Animal","E"],
	["Which one of the five is least like the other four?","Potato","Corn","Apple","Carrot","Bean","C"],
	["Adam, who is twelve years old, is three times as old as his brother. How old will Adam be when he is twice as old as his brother?","15","16","18","20","21","B"],
	["Which one of the five is least like the other four?","Touch","Taste","Hear","Smile","See","D"]
]; // This array holds the questions, each question has 5 choices, the last element is the correct choice
function _(x) {
	return document.getElementById(x);
}
function renderQuestion(){ // This renders the questions to the page
	test = _("test");
	if(pos >= questions.length){
		test.innerHTML = "<h2>You got " + correct + " of " questions.length + " questions correct</h2>";
		// This prints out how many they got correct
		_("test_status").innerHTML = "Test Completed";
		pos = 0;
		correct = 0; // These will restart the test 
		return false; // This stops the test after it is completed
	}
	_("test_status").innerHTML = "Question " + (pos + 1) + " of " + questions.length; 
	question = questions[pos][0]; // This array targets the question itself
	chA = questions[pos][1]; // These arrays target the choices
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
	test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>"; // This button submits ans
} // += appends the choices to the questions
function checkAnswer(){
	choices = document.getElementsByName("choices"); // This results in an array
	for(var i = 0; i < choices.length; i++){ // This for loop runs through the array
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][6]){
		correct++; // This will add up the number of correct answers they give
	} // This 'if' statement checks if their answer matches the correct choice
	pos++; // This changes the position of the question to the next one
	renderQuestion(); // This loads the next question after the current one is answered
} 
window.addEventListener("load", renderQuestion, false); // This will start renderQuestion when page loads
