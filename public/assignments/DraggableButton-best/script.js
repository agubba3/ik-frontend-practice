"use strict";

const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".item");

let isMouseDown = false;
let currentX, currentY, initialX, initialY;
let xOffset = 0;
let yOffset = 0;

containerEl.addEventListener("mousedown", dragStart);
containerEl.addEventListener("mousemove", drag);
containerEl.addEventListener("mouseup", dragEnd);

function dragStart(e) {
  // Capturing initial location button before dragging
  // Always to get back to the center
  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;

  console.log("Cursor click: ", e.clientX, e.clientY, " Offset: ", xOffset, yOffset);
  console.log("Initial: ", initialX, initialY);
  // Where your cursor is currently, Offset: How far you have moved from the center

  //validate that we are dragging the required element only
  if (e.target === btnEl) {
    isMouseDown = true;
  }
}

function drag(e) {
  if (isMouseDown) {
    e.preventDefault();

    // Capturing location of button as the mouse moves
    currentX = e.clientX - initialX; 
    currentY = e.clientY - initialY;

    // currentX = e.clientX - window.innerWidth / 2; 
    // currentY = e.clientY - window.innerHeight / 2;

    /* The location where the mouse has reached is the new offset value and is captured 
 to have smooth movement until mouse is up */
    xOffset = currentX;
    yOffset = currentY;

    // Take the button to new location by styling it
    btnEl.style.left = currentX + "px";
    btnEl.style.top = currentY + "px";
  }
}

function dragEnd() {
  isMouseDown = false;
}

