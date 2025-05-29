document.getElementById('event-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const title = document.getElementById('event-title').value;
  const date = document.getElementById('event-date').value;
  const note = document.getElementById('event-note').value;

  const events = JSON.parse(localStorage.getItem('familyEvents') || '[]');
  events.push({ title, date, note });
  localStorage.setItem('familyEvents', JSON.stringify(events));
  renderEvents();
  this.reset();
});

function renderEvents() {
  const list = document.getElementById('calendar-events');
  const events = JSON.parse(localStorage.getItem('familyEvents') || '[]');
  list.innerHTML = '';
  events.forEach(event => {
    const li = document.createElement('li');
    li.textContent = `${event.date} - ${event.title}: ${event.note}`;
    list.appendChild(li);
  });
}

renderEvents();
