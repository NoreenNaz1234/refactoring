let intervalId;
function correctAns(){
   document.querySelector("header").innerHTML = "CORRECT";
    document.querySelector("header").classList.toggle("success-text", true);
    document.querySelector("header").classList.toggle("error-text", false);
    let counter = 0;
    clearInterval(intervalId);
    intervalId = setInterval(function () {
      let color = "#28a745";
      if (counter++ % 2) {
        color = "#1DE9B6";
      }
      document.querySelector("body").style["background-color"] = color;
    }, 500);

}

function incorrectAns(){
   document.querySelector("header").innerHTML = "INCORRECT";
    document.querySelector("header").classList.toggle("success-text", false);
    document.querySelector("header").classList.toggle("error-text", true);
    let counter = 0;
    clearInterval(intervalId);
    intervalId = setInterval(function () {
      let color = "#FF3D00";
      if (counter++ % 2) {
        color = "#BF360C";
      }
      document.querySelector("body").style["background-color"] = color;
    }, 500);

}

function submitMathAns() {
  const answer = parseInt(document.querySelector("#math input").value);
  if (answer === 4) {
    // correct
    correctAns();
  } else {
    // incorrect
    incorrectAns();
   
  }
}

function submitEnglishAns() {
  const answer = document.querySelector("#english input[name='webdev']:checked")
    .value;
  if (answer === "website") {
    // correct
     correctAns();
  } else {
    // incorrect
   incorrectAns();
  }
}

function submitScienceAns() {
  const answer = document.querySelector("#science input").value;
  if (answer.toLowerCase() === "blue") {
    // correct
    correctAns();
  } else {
    // incorrect
    incorrectAns();
  }
}
//repeation changes
//3 changes
//1.variable
//2.code repeat. use loop and function