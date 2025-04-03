const myArray = [];

function addToArray() {
    const input = document.getElementById("arrayInput");
    const value = parseInt(input.value);
    
    if (!isNaN(value)) {
        myArray.push(value);
        input.value = "";
    } else {
        alert("Please enter a valid number!");
    }
}

function displayArray() {
    const output = document.getElementById("arrayOutput");
    let html = myArray.length === 0 ? "<p>Array is empty</p>" : "<ul>";
    
    myArray.forEach((item, index) => {
        html += `<li>Element ${index} = ${item}</li>`;
    });
    
    output.innerHTML = html + (myArray.length > 0 ? "</ul>" : "");
}