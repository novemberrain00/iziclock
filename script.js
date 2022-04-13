const timeBlock = document.querySelector('.time'),
    hourArrow = document.querySelector('.arrow-hour'),
    minuteArrow = document.querySelector('.arrow-minute'),
    secondArrow = document.querySelector('.arrow-second'),
    date = new Date();

let hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();

let initialHourRotation = -90 + 30 * hours;
hourArrow.style.transform = `rotate(${initialHourRotation}deg)`;

let initialMinuteRotation = -90 + 6 * minutes;
minuteArrow.style.transform = `rotate(${initialMinuteRotation}deg)`;

let initialSecondRotation = -90 + 6 * seconds;
secondArrow.style.transform = `rotate(${initialSecondRotation}deg)`

const validateDate = (date) => {
    date += ''
    if(date.length < 2) {
        return '0' + date
    }

    return date;
}

const increaseTime = () => {
    seconds += 1;

    if(seconds > 59) {
        seconds = 0;
        minutes += 1;
    }

    if(minutes > 59) {
        minutes = 0;
        hours += 1;
    }

    if(hours > 23) {
        hours = 0
    }

    initialSecondRotation += 6;
    secondArrow.style.transform = `rotate(${initialSecondRotation}deg)`;
    timeBlock.textContent = `${validateDate(hours)}:${validateDate(minutes)}:${validateDate(seconds)}`;
}

let perSecond = setInterval(()=>{
    increaseTime();
}, 1000);

let perHour = setInterval(() => {
    initialHourRotation += 6;
    hourArrow.style.transform = `rotate(${initialHourRotation}deg)`;
}, 3600000);

let perMinute = setInterval(() => {
    initialMinuteRotation += 6;
    minuteArrow.style.transform = `rotate(${initialMinuteRotation}deg)`;
}, 60000);

