// Retrieving elements with the indicated identifiers
const inputNb1 = document.querySelector("#nb1");
const inputNb2 = document.querySelector("#nb2");

// Adding 'click' event to the 'Calculate' Button
document.querySelector("#calculation").addEventListener(
    "click", 
    () => {
        // Retrieving User Inputs
        // let inputValue1 = inputNb1.value;
        // let inputValue2 = inputNb2.value;
        // let inputValue1 = parseInt(inputNb1.value);
        // let inputValue2 = parseInt(inputNb2.value);
        let inputValue1 = +inputNb1.value;
        let inputValue2 = +inputNb2.value;

        // Perform the Calculation
        let result = addition(inputValue1, inputValue2);

        // Inserting the result into the element having the Class "result"
        document.querySelector(".result").innerHTML = result;
    }
);

function addition(nb1, nb2) {
    if(typeof(nb1) === "number" && typeof(nb2) === "number") {
        return nb1 + nb2;
    } 
    else {
        return "Veuiller entrer des nombres.";
    }
}