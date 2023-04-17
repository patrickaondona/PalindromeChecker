let inputItem = document.getElementById("inputItem");
let checkButton = document.querySelector("button");
let response = document.getElementById("response");

function isPalindrome() {
    if (inputItem.value == ""){
        alert("Please input a value");
    } 
    else{
        let forwardValue = inputItem.value;
        let reverseValue = inputItem.value.split('').reverse().join('');
        if( forwardValue == reverseValue){
            response.innerText = (`"${forwardValue}" is a palindrome.`);    
        }
        else{
            response.innerText = (`"${forwardValue}" is not a palindrome.`);
        }
    }
    inputItem.value = "";
}
checkButton.addEventListener("click", isPalindrome);

