let inputItem = document.getElementById("inputItem");
let checkButton = document.querySelector("button");
let response = document.getElementById("response");

function isPalindrome() {
    let forwardValue = inputItem.value;
    let reverseValue = inputItem.value.split('').reverse().join('');
    if( forwardValue== reverseValue){
        response.innerText = (`${forwardValue} is a palindrome.`);    
    }
    else{
        response.innerText = (`${forwardValue} is not a palindrome.`);
    }
}
checkButton.addEventListener("click", isPalindrome);
