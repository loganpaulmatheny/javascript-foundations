function createEvent(title, month, day) {
  var event = {
    title: title,
    month: month,
    day: day,
  };
  var birthday = new Date(`${event.month} ${event.day}, 2023`).getDate();
  if (isNaN(birthday)) {
    return `Error: ${event.day} is not a valid day`;
  }
  return event;
}

function createCalendar(owner, events) {
  var calendar = {
    owner: owner,
    events: events,
  };
  return calendar;
}

function reportMonthlyEvents(calendar, month) {
  var events = [];
  for (i = 0; i < calendar.events.length; i++) {
    if (calendar.events[i].month === month) {
      events.push(calendar.events[i]);
    }
  }
  return events;
}

module.exports = { createEvent, createCalendar, reportMonthlyEvents };
