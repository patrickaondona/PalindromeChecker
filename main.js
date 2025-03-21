const checkButton = document.getElementById("check-btn");
const input = document.getElementById("input");
const resultText = document.getElementById("result-txt");

checkButton.addEventListener("click", () => {
  const inputValue = input.value;
  const forwardValue = inputValue.replace(" ", "").toLowerCase().split("").join("");
  const backwardValue = inputValue.replace(" ", "").toLowerCase().split("").reverse().join("");

  if (input.value === "") {
    alert("Please insert a text, phrase or number");
    resultText.innerText = "";
    return;
  }
  if (backwardValue === forwardValue) {
    resultText.innerText = `"${inputValue}" is a palindrome!`;
  } else {
    resultText.innerText = `"${inputValue}" is not a palindrome.`;
  }
});
