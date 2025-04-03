
function showPrompt() {
    const name = prompt("Enter your name:");
    const studentId = prompt("Enter your student ID:");
    
    if (name && studentId) {
        alert(`Name: ${name}\nStudent ID: ${studentId}`);
    } else {
        alert("You didn't enter both values!");
    }
}