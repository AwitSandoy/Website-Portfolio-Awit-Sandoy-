function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultElement = document.getElementById("resultArea");

    // Validation
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.innerHTML = "Please enter valid numbers.";
        resultElement.classList.add("result-active");
        resultElement.style.color = "red";
        return;
    }

    // Calculations
    const sum = (num1 + num2).toFixed(2);
    const difference = (num1 - num2).toFixed(2);
    const product = (num1 * num2).toFixed(2);
    
    // Check for division by zero
    const quotient = num2 !== 0 ? (num1 / num2).toFixed(2) : "Undefined (Div by 0)";
    const modulo = num2 !== 0 ? (num1 % num2).toFixed(2) : "Undefined";

    // Display Results
    resultElement.innerHTML = `
        <strong>Sum:</strong> ${sum}<br>
        <strong>Difference:</strong> ${difference}<br>
        <strong>Product:</strong> ${product}<br>
        <strong>Quotient:</strong> ${quotient}<br>
        <strong>Remainder:</strong> ${modulo}
    `;
    
    resultElement.classList.add("result-active");
    resultElement.style.color = "#1967d2"; 
}

function clearFields() {
    const resultElement = document.getElementById("resultArea");
    resultElement.innerHTML = "";
    resultElement.classList.remove("result-active");
}