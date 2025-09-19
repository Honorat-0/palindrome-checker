const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultText = document.getElementById("result");


checkBtn.addEventListener("click", ()=> {
  textInput.value === "" ? alert("Please input a value") : check(textInput.value);
  textInput.value = "";
})



function check(text) {
  const regex = /[_\|\/\\,\s\-\:().]/gi;
  const result = text.replace(regex, "");
  let textArr = [];
  let reverseTextArr = [];
  for (const i of result) {
    textArr.push(i.toLowerCase());
    reverseTextArr.unshift(i.toLowerCase());
  }

  if (textArr.join("") === reverseTextArr.join("")) {
    resultText.classList.remove("not");
    resultText.innerText = `${text} is a palindrome`
  } else {
    resultText.classList.add("not");
    resultText.innerText = `${text} is not a palindrome`
  };
}
