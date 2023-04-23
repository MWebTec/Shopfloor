const dateAndTime = document.getElementById('navDateAndTime');
const kw = document.getElementById("navKW");

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();

const weekNumber = getWeek(currentDate);

// Kalenderwoche bestimmen
function getWeek(date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const daysSinceFirstDay = (date - firstDayOfYear) / 86400000; // Anzahl der vergangenen Tage seit Jahresbeginn
    return Math.ceil((daysSinceFirstDay + firstDayOfYear.getDay() + 1) / 7);
}

dateAndTime.innerHTML = `${currentDay}/${month}/${year} `;
kw.innerHTML = `KW(${weekNumber})`; 

// Create Calendar
// die Anzahl der Tage im aktuellen Monat erhalten
const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
// den ersten Tag des Monats erhalten
const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
// eine Liste mit den Namen der Wochentage
const weekdays = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
// eine Liste mit den Tagen des Monats
const days = [];

for (let i = 1; i <= daysInMonth; i++) {
  days.push(i);
}

// den Kalender in HTML generieren
const calendar = document.getElementById('calendar');

// die Kopfzeile mit den Wochentagen hinzufügen
weekdays.forEach(weekday => {
    const dayElement = document.createElement('div');
    dayElement.textContent = weekday;
    dayElement.classList.add('day', 'header');
    calendar.appendChild(dayElement);
  });
  
  // Leerzellen vor dem ersten Tag des Monats hinzufügen
  for (let i = 0; i < firstDayOfMonth; i++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day', 'empty');
    calendar.appendChild(dayElement);
  }
  
  // die Tage des Monats hinzufügen
  days.forEach(day => {
    const dayElement = document.createElement('div');
    dayElement.textContent = day;
    dayElement.classList.add('day');

    if (day < currentDay ) {
        dayElement.classList.add('dayIO');
    } else {
        dayElement.classList.add('dayFuture');
    }
    
    // hervorheben, wenn es der heutige Tag ist
    if (day === currentDate.getDate()) {
      dayElement.classList.add('today');
    }
    
    calendar.appendChild(dayElement);
  });

