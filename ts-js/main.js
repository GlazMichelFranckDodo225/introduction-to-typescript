// Retrieving elements with the indicated identifiers
var inputNb1 = document.querySelector("#nb1");
var inputNb2 = document.querySelector("#nb2");
var divResult = document.querySelector(".result");
function addition(nb1, nb2) {
    return nb1 + nb2;
}
// Adding 'click' event to the 'Calculate' Button
document.querySelector("#calculation").addEventListener("click", function () {
    // Perform the Calculation
    var result = addition(+inputNb1.value, +inputNb2.value);
    // Inserting the result into the element having the Class "result"
    // divResult.innerHTML = "" + result;
    divResult.innerHTML = result.toString();
});
