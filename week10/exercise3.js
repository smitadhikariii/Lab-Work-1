
function checkGrade() {
    const marks = parseFloat(prompt("Enter your marks:"));
    let result = "";
    
    if (marks >= 80 && marks <= 100) {
        result = "Distinction";
    } else if (marks >= 60 && marks < 80) {
        result = "First Division";
    } else if (marks >= 50 && marks < 60) {
        result = "Second Division";
    } else if (marks >= 40 && marks < 50) {
        result = "Third Division";
    } else if (marks < 40) {
        result = "Fail";
    } else {
        result = "Invalid marks entered!";
    }
    
    document.getElementById("gradeResult").textContent = `Result: ${result}`;
}