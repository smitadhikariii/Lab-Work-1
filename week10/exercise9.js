function calculateArray() {
    const numbers = [1, 2, 3, 4, 5];
    let sum = 0;
    let product = 1;
    
    numbers.forEach(num => {
        sum += num;
        product *= num;
    });
    
    document.getElementById("arrayCalcResults").innerHTML = `<p>Array: [${numbers.join(", ")}]</p><p>Sum: ${sum}</p><p>Product: ${product}</p>`;
}