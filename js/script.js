// =======================================
// NCE Digital Routine v4.0
// Created by: Iqbal Ahmed
// Core Script - Part 1
// =======================================

"use strict";

// ---------- Room Buttons ----------
const roomButtons = document.querySelectorAll(".room-btn");
const roomCards = document.querySelectorAll(".room-card");

// ---------- Routine Data ----------
const routineData = {
  oab210: {},
  oab202e: {},
  oab209: {},
  pmre: {},
  ece: {}
};

// ---------- Show Room ----------
function showRoom(roomId) {

  roomCards.forEach(card => {
    card.style.display = "none";
  });

  const target = document.getElementById(roomId);

  if (target) {
    target.style.display = "block";
  }

}

// ---------- Room Button Click ----------
roomButtons.forEach(button => {

  button.addEventListener("click", () => {

    roomButtons.forEach(btn =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    showRoom(button.dataset.room);

  });

});

// ---------- Default Room ----------
document.addEventListener("DOMContentLoaded", () => {

  if (roomButtons.length > 0) {
    roomButtons[0].classList.add("active");
  }

  showRoom("oab210");

});

// ---------- Load Room ----------
function loadRoom(roomId) {

    console.log("Loading room:", roomId);

}

// ---------- Current Class ----------
function updateCurrentClass() {

    const current = document.getElementById("currentClass");
    const next = document.getElementById("nextClass");

    if (current) current.textContent = "No Class";
    if (next) next.textContent = "No Upcoming Class";

}

loadRoom("oab210");
updateCurrentClass();

setInterval(updateCurrentClass, 60000);
