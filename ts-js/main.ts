// Retrieving elements with the indicated identifiers
const inputNb1 = document.querySelector("#nb1") as HTMLInputElement;
const inputNb2 = document.querySelector("#nb2") as HTMLInputElement;
const divResult = document.querySelector(".result") as HTMLDivElement;

function addition(nb1: number, nb2: number) {
  return nb1 + nb2;
}

// Adding 'click' event to the 'Calculate' Button
document.querySelector("#calculation").addEventListener("click", () => {
  // Perform the Calculation
  let result = addition(+inputNb1.value, +inputNb2.value);

  // Inserting the result into the element having the Class "result"
  // divResult.innerHTML = "" + result;
  divResult.innerHTML = result.toString();
});
