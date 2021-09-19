const iframe = document.querySelector('iframe');
for (const link of document.querySelectorAll('a')) {
  link.onclick = (e) => {
    e.preventDefault();
    iframe.src = link.href;
  };
}

const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const dayEl = document.getElementById('day');
const timeFormatter = new Intl.DateTimeFormat('en-US', { timeStyle: 'short' });
const dateFormatter = new Intl.DateTimeFormat('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
function updateTime() {
  const now = new Date();
  timeEl.innerText = timeFormatter.format(now);
  dateEl.innerText = dateFormatter.format(now);
  dayEl.innerText = dayFormatter.format(now);
}
updateTime();
setInterval(updateTime, 30_000);

const feastDayEl = document.getElementById('feastday');
const calendar = Romcal.Calendar.calendarFor({ country: 'unitedStates' });
function updateFeastDay() {
  const today = new Date().toISOString().split('T')[0];
  const feastDay = calendar.find(day => day.moment.split('T')[0] === today);
  feastDayEl.innerText = feastDay.name;
}
updateFeastDay();
setInterval(updateFeastDay, 1000 * 60 * 60 * 5);
