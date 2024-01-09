import '../src/clock.css';

const year = document.querySelector(".date-year");
const month = document.querySelector(".date-month");
const day = document.querySelector(".date-day");
const date = document.querySelector(".date");
const digitalClock = document.querySelector(".digital-clock");
const hoursArrow = document.querySelector(".clock-hours__arrow");
const minutesArrow = document.querySelector(".clock-minutes__arrow");
const secondsArrow = document.querySelector(".clock-seconds__arrow");

const namesOfMonth = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень",];

const arrDay = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П`ятниця", "Субота",];


setInterval(() => {
    const currentTime = new Date();
    //console.dir(currentTime)
    const currentDay = arrDay[currentTime.getDay()];
    const currentDate = currentTime.getDate();
    const currentMonth = namesOfMonth[currentTime.getMonth()];
    const currentYear = currentTime.getFullYear();
    
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    
    const secondDeg = 360 / 60;
    const minuteDeg = 360 / 60;
    const hourDeg = 360 / 12;

    const formatTime = `${hours
        .toString()
        .padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${seconds
                .toString()
                .padStart(2, '0')}`;
    //console.log(formatTime);

    day.textContent = currentDay;
    date.textContent = currentDate;
    year.textContent = currentYear;
    month.textContent = currentMonth;
    digitalClock.textContent = `Поточний час ${formatTime}`;

    secondsArrow.style.transform = `rotate(${seconds * secondDeg}deg)`;
    minutesArrow.style.transform = `rotate(${minutes * minuteDeg}deg)`;
    hoursArrow.style.transform = `rotate(${hours * hourDeg + (hourDeg / 60) * minutes}deg)`;
    
}, 1000);

