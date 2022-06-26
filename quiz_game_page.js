function send() {
num_1 = document.getElementById("num_1_input").value;
num_2 = document.getElementById("num_2_input").value;
actual_answer = parseInt(num_1) * parseInt(num_2);


question_number = "<h4> Question:" + num_1 + " X " + num_2 +"</h4>";
input_box = "<br>Answer : <input type='number' id='input_check_box'>";
check_button = "<br><br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_number + input_box + check_button;

document.getElementById("output").innerHTML = row;
document.getElementById("num_1").value = "";
document.getElementById("num_2").value = "";
}