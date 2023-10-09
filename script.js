document.addEventListener("DOMContentLoaded", function () {
  var loginBtn = document.getElementById("loginBtn");
  var loginPopup = document.getElementById("loginPopup");
  var closeLogin = document.querySelector(".close");

  var appointmentBtn = document.getElementById("appointmentBtn");
  var appointmentPopup = document.getElementById("appointmentPopup");
  var closeAppointment = document.querySelector(".close-appointment");

  loginBtn.onclick = function () {
    loginPopup.style.display = "block";
    loginPopup.classList.add("fade-in");
  };

  closeLogin.onclick = function () {
    loginPopup.style.display = "none";
    loginPopup.classList.remove("fade-in");
  };

  window.onclick = function (event) {
    if (event.target == loginPopup) {
      loginPopup.style.display = "none";
      loginPopup.classList.remove("fade-in");
    }
  };

  appointmentBtn.onclick = function () {
    appointmentPopup.style.display = "block";
    appointmentPopup.classList.add("fade-in");
  };

  closeAppointment.onclick = function () {
    appointmentPopup.style.display = "none";
    appointmentPopup.classList.remove("fade-in");
  };

  window.onclick = function (event) {
    if (event.target == appointmentPopup) {
      appointmentPopup.style.display = "none";
      appointmentPopup.classList.remove("fade-in");
    }
  };
});
