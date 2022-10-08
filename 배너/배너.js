"use strict";

const bannerBox = document.querySelector("#bannerBox > ul");
const bannerItem = document.querySelectorAll(".banner_item");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const size = bannerItem[0].clientWidth;

let counter = 0;

nextBtn.addEventListener("click", () => {
  if (counter < bannerItem.length - 1) {
    counter++;
    bannerBox.getElementsByClassName.transform = "translateX(" + -size * counter + "px)";
  } else if (counter === bannerItem - 1) {
    counter = 0;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  }  
});

prevBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  } else {
    counter = bannerItem.length - 1;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  }
});