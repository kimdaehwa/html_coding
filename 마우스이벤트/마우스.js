"use strict";

const font = document.getElementById("font");
const container = document.getElementById("container");

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX; // 마우스 x좌표
  const mouseY = e.clientX; // 마우스 y좌표

  console.log(mouseX, mouseY); // 좌표 바뀌는거 확인하는 용도

  if(mouseY > 48 && mouseX < 1800){
    font.style.display = "block"; // 보이게
    font.style.left = mouseX + "px";
    font.style.top = mouseY + "px";
  } else {
    font.style.display = "none"; // 위 설정 구역 벗어나면 안보이게
  }
});

// 클릭시 안에 텍스트 바뀌게 끔
container.addEventListener("click", () => {
  if(font.innerText === "Pause"){
    font.innerText = "Play";
    setTimeout(() => {
      font.innerText = "Pause";
    }, 3000);
  } else {
    font.innerText = "Pause";
  }
});