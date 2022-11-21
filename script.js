document.addEventListener('DOMContentLoaded', () => {
    const newYear = new Date('Jan 1 2023 00:00:00');

    const daysValue = document.querySelector('.timer_days .timer_value');
    const hoursValue = document.querySelector('.timer_hours .timer_value');
    const minutesValue = document.querySelector('.timer_minutes .timer_value');
    const secondsValue = document.querySelector('.timer_seconds .timer_value');

    const daysText = document.querySelector('.timer_days .timer_text');
    const hoursText = document.querySelector('.timer_hours .timer_text');
    const minutesText = document.querySelector('.timer_minutes .timer_text');
    const secondsText = document.querySelector('.timer_seconds .timer_text');

    function declOfNum(number, titles) {
       let cases = [2, 0, 1, 1, 1, 2];
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
    }

    const timeCount = () => {
        let now = new Date();
        let leftUntil = newYear - now;

        let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
        let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
        let minutes = Math.floor(leftUntil / 1000 / 60 ) % 60;
        let seconds = Math.floor(leftUntil / 1000) % 60;

        daysValue.textContent = days;
        hoursValue.textContent = hours;
        minutesValue.textContent = minutes;
        secondsValue.textContent = seconds;

        daysText.textContent = declOfNum(days, ['день', 'дней', 'дней']);
        hoursText.textContent = declOfNum(hours, ['час', 'часов', 'часов']);
        minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
        secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
    }

    timeCount();

    setInterval(timeCount, 1000);
});