function categorizeEvents() {
  const today = new Date().toISOString().split('T')[0];
  const events = JSON.parse(localStorage.getItem('familyEvents') || '[]');
  const summary = {
    past: [], current: [], upcoming: []
  };

  events.forEach(event => {
    if (event.date < today) summary.past.push(event);
    else if (event.date === today) summary.current.push(event);
    else summary.upcoming.push(event);
  });

  const box = document.getElementById('event-summary');
  box.innerHTML = `
    <strong>Past Events:</strong><br>${summary.past.map(e => e.title).join(', ') || 'None'}<br><br>
    <strong>Today:</strong><br>${summary.current.map(e => e.title).join(', ') || 'None'}<br><br>
    <strong>Upcoming:</strong><br>${summary.upcoming.map(e => e.title).join(', ') || 'None'}
  `;
}

categorizeEvents();
