var button = document.querySelector(".btn-search");
var popup = document.querySelector(".appointment-form");
var checkin = document.querySelector("#check-in-date");
var departure = document.querySelector("#date-of-departure");
var adults = document.querySelector("#adults");

button.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("appointment-form-close");
});

popup.addEventListener("submit", function(event) {
  if (!checkin.value || !departure.value || !adults.value) {
    event.preventDefault();
    alert("Нужно ввести даты заезда и выезда, и количество людей");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("appointment-form")) {
      popup.classList.toggle("appointment-form-close");
    }
  }
});
