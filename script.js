var full_name = prompt("Enter your name");
var eng = Number(prompt("Enter your english marks"));
var urdu = Number(prompt("Enter your urdu marks"));
var math = Number(prompt("Enter your maths marks"));
var computer = Number(prompt("Enter your computer marks"));

var totalmarks = eng + urdu + math + computer;

var total_output =`
Student Name: ${full_name}
English Marks: ${eng}
Urdu Marks: ${urdu}
Maths Marks: ${math}
Computer Marks: ${computer}
Total Marks: ${totalmarks}`;

alert(total_output);