document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    firstDay: 1,
    timeZone: "UTC",
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
    events: (function () {
      var events = [];
      for (var i = 0; i < data.tables[1].columns.length; i++) {
        var event = data.tables[1].columns[i];
        events.push({
          id: event.rendezvous_id,
          title: event.motif,
          start: event.date_et_heure, // Assurez-vous que 'date_et_heure' est le bon nom de propriété
        });
      }
      return events; // Retourne le tableau d'événements
    })(),
  });

  calendar.render();
});
