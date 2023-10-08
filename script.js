document.addEventListener("DOMContentLoaded", function () {
  var loginBtn = document.getElementById("loginBtn");
  var loginPopup = document.getElementById("loginPopup");
  var close = document.querySelector(".close");

  loginBtn.onclick = function () {
    loginPopup.style.display = "block";
  };

  close.onclick = function () {
    loginPopup.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == loginPopup) {
      loginPopup.style.display = "none";
    }
  };
});

document.addEventListener("DOMContentLoaded", function () {
  var loginBtn = document.getElementById("loginBtn");
  var loginPopup = document.getElementById("loginPopup");
  var closeLogin = document.querySelector(".close");

  var appointmentBtn = document.getElementById("appointmentBtn");
  var appointmentPopup = document.getElementById("appointmentPopup");
  var closeAppointment = document.querySelector(".close-appointment");

  loginBtn.onclick = function () {
    loginPopup.style.display = "block";
  };

  closeLogin.onclick = function () {
    loginPopup.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == loginPopup) {
      loginPopup.style.display = "none";
    }
  };

  appointmentBtn.onclick = function () {
    appointmentPopup.style.display = "block";
  };

  closeAppointment.onclick = function () {
    appointmentPopup.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == appointmentPopup) {
      appointmentPopup.style.display = "none";
    }
  };
});
