$(() => {
    const dateAndTime = document.getElementById("navDateAndTime");
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

    dateAndTime.innerHTML = `${currentDay}-${month}-${year} `;
    kw.innerHTML = `KW(${weekNumber})`;

    // Create Calendar
    // die Anzahl der Tage im aktuellen Monat erhalten
    const daysInMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    ).getDate();

    // den ersten Tag des Monats erhalten
    const firstDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
    ).getDay();

    // eine Liste mit den Tagen des Monats
    const days = [];

    for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
    }

    // den Kalender in HTML generieren
    const calendar = document.querySelectorAll(".calendar");

    // Create Calender Div Function
    function createKalenderDivs(parent) {
        for (let i = 0; i < 49; i++) {
            const dayElement = document.createElement("div");
            dayElement.classList.add("day", "empty");
            parent.appendChild(dayElement);
        }
    }

    // Create Safty Calendar
    calendar.forEach((element) => {
        createKalenderDivs(element);
    });

    let dayCount = 1;

    // Zuweisung von den Tagen 1-31 den divs.
    function generateCalenderRow(start, end, arrayDiv) {
        for (let i = start; i <= end; i++) {
            if (dayCount <= 31) {
                arrayDiv[i].innerText = dayCount;
            }
            arrayDiv[i].classList.remove("empty");
            // Tag ohne Arbeitsunfall class setzten
            if (i < currentDay) {
                arrayDiv[i].classList.add("dayIO", "text-white");
            } else {
                arrayDiv[i].classList.add("dayFuture");
            }
            dayCount++;
        }
    }

    const calendarDivs = document.querySelectorAll(".day");

    // Create Calendar for Safty
    generateCalenderRow(2, 4, calendarDivs);
    generateCalenderRow(9, 11, calendarDivs);
    generateCalenderRow(14, 34, calendarDivs);
    generateCalenderRow(37, 39, calendarDivs);
    generateCalenderRow(44, 46, calendarDivs);
});
