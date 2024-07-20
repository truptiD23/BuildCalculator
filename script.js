document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
    let currentInput = "";
    let previousInput = "";
    let operator = "";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-value");

            if (button.id === "clear") {
                currentInput = "";
                previousInput = "";
                operator = "";
                display.textContent = "0";
            } else if (button.id === "equals") {
                if (currentInput && previousInput && operator) {
                    currentInput = evaluate(previousInput, currentInput, operator);
                    display.textContent = currentInput;
                    previousInput = "";
                    operator = "";
                }
            } else if (button.classList.contains("operator")) {
                if (currentInput) {
                    if (previousInput) {
                        currentInput = evaluate(previousInput, currentInput, operator);
                    }
                    operator = value;
                    previousInput = currentInput;
                    currentInput = "";
                    display.textContent = previousInput;
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });

    function evaluate(a, b, operator) {
        a = parseFloat(a);
        b = parseFloat(b);
        switch (operator) {
            case "+":
                return (a + b).toString();
            case "-":
                return (a - b).toString();
            case "*":
                return (a * b).toString();
            case "/":
                return (a / b).toString();
            default:
                return b;
        }
    }
});
