"use strict";
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
const increaseBtn = document.querySelector(".increase");
const counterDisplay = document.querySelector("#value");
let counter = 0;

//IMPLEMENTING COUNTER

decreaseBtn.addEventListener("click", function () {
  counter--;
  counterDisplay.textContent = counter;
  if (counter < 0) {
    counterDisplay.style.color = "red";
  } else if (counter === 0) {
    counterDisplay.style.color = "purple";
  }
});

increaseBtn.addEventListener("click", function () {
  counter++;
  counterDisplay.textContent = counter;
  if (counter > 0) {
    counterDisplay.style.color = "green";
  } else if (counter === 0) {
    counterDisplay.style.color = "purple";
  }
});

resetBtn.addEventListener("click", function () {
  counter = 0;
  counterDisplay.textContent = counter;
  if (counter === 0) {
    counterDisplay.style.color = "purple";
  }
});
