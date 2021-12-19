var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");

var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn- " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn- " + player2_name;

function send() {
    var get_number1 = document.getElementById("number1").value;
    var get_number2 = document.getElementById("number2").value;
    var product = parseInt(get_number1) * parseInt(get_number2);

    var question_number = "<h4 id='word_display'>" + get_number1 + "X" + get_number2 + "</h4>";
    var input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    var check_button = "<br> <br><button class='btn btn-info' onclick='check()'> Check </button>";
    var row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}