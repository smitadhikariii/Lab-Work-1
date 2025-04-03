function calculateArea() {
    const length = parseFloat(prompt("Enter length:"));
    const breadth = parseFloat(prompt("Enter breadth:"));
    
    if (!isNaN(length) && !isNaN(breadth)) {
        const area = length * breadth;
        document.getElementById("areaResult").innerHTML = `<p>Length: ${length}</p><p>Breadth: ${breadth}</p><p>Area: ${area}</p>`;
    } else {
        alert("Please enter valid numbers!");
    }
}