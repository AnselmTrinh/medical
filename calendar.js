document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    locale: "fr",
    allDaySlot: false,
    initialView: "timeGridFiveDay",
    height: 600,
    businessHours: {
      // days of week. an array of zero-based day of week integers (0=Sunday)
      daysOfWeek: [1, 2, 3, 4, 5], // Monday - Thursday

      startTime: "08:00", // a start time (10am in this example)
      endTime: "17:00", // an end time (6pm in this example)
    },
    views: {
      timeGridFiveDay: {
        type: "timeGrid",
        duration: { days: 5 },
      },
    },
    slotMinTime: "08:00", // Début de l'affichage des créneaux horaires
    slotMaxTime: "18:00", // Fin de l'affichage des créneaux horaires
  });
  calendar.render();
});
