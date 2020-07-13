window.addEventListener("DOMContentLoaded", () => {
  const calendar = document.querySelector(".calendar");
  const handleSize = function () {
    if (window.innerWidth < 480) {
      fullCalendar.changeView("listWeek");
    } else if (window.innerWidth < 550) {
      fullCalendar.changeView("dayGridWeek");
    } else {
      if (window.innerHeight < 480) {
        fullCalendar.changeView("dayGridWeek");
      } else {
        fullCalendar.changeView("dayGridMonth");
      }
    }
  };
  const fullCalendar = new FullCalendar.Calendar(calendar, {
    googleCalendarApiKey: "AIzaSyD2LGBF9tbBKZGsPgIOQpddlzqHUh13i6o",
    events: "bv8213p4ntq9gmuhpddpufkvd0@group.calendar.google.com",
    locale: "es",
    firstDay: 1,
    initialView: "dayGridMonth",
    aspectRatio: 2,
    height: "100%",
    buttonText: {
      today: "Hoy",
      month: "Mes",
      week: "Semana",
      day: "Dia",
      list: "Lista",
    },
    headerToolbar: {
      start: "title",
      end: "today prev,next",
    },
    views: {
      dayGridMonth: {
        titleFormat: { year: "numeric", month: "short" },
      },
    },
    eventDidMount: function (info) {
      new Tooltip(info.el, {
        title: info.event.extendedProps.description,
        placement: "top",
        trigger: "hover",
        container: "body",
      });
    },
    eventClick: function (info) {
      info.jsEvent.preventDefault();
    },
    viewDidMount: handleSize,
    windowResize: handleSize,
  });
  fullCalendar.render();
});
