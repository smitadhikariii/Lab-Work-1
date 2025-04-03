
const tableContainer = document.getElementById("multiplicationTable");

for (let i = 1; i <= 10; i++) {
    const result = 5 * i;
    const equation = document.createElement("p");
    equation.textContent = `5 * ${i} = ${result}`;
    tableContainer.appendChild(equation);
}