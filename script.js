"use strict";

const form = document.getElementById("rating-form"); // define the form

function submitForm(event) {
  event.preventDefault(); // stop the document refresh

  const ratingSection = document.querySelector(".rating"); //define the major sections
  const thankYou = document.querySelector(".thank-you");

  ratingSection.classList.add("hide"); // hide section 1
  thankYou.classList.remove("hide"); // show section 2

  const rating = form.elements["selection"]; // get the radio buttons
  document.querySelector(".value").innerHTML = rating.value; // update the selected value
}

form.addEventListener("submit", submitForm); // watch for the submit
