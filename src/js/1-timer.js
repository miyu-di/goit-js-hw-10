import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

// let selectedDate;
let userSelectedDate;
let countdownInterval;


const startbtn = document.querySelector('button');

const timepicker = flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates && selectedDates.length > 0) {
      userSelectedDate = selectedDates[0];
      
      const currentDate = new Date();
      if (userSelectedDate < currentDate) {
        iziToast.error({
        title: 'Error',
        titleColor: '#fff',
        color: '#EF4040',
        message: 'Please choose a date in the future',
        messageColor: '#fff',
        position: 'topRight'
      });
      } else {
        startbtn.disabled = false;
      }
    }
  },
},
);

function startCountdown(endTime) {
    countdownInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDifference = endTime - currentTime;
      const { days, hours, minutes, seconds } = convertMs(timeDifference);

      document.querySelector('[data-days]').textContent = addLeadingZero(days);
      document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
      document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
      document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);

      if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        iziToast.success({
          title: 'Success',
          titleColor: '#fff',
          color: '#59A10D',
          message: 'Countdown Finished',
          messageColor: '#fff',
          position: 'topRight'
        });
      }
    }, 1000);
  }

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value < 0 ? `00` : value < 10 ? `0${value}` : value;
}

document.querySelector('[data-start]').addEventListener('click', () => {
    const selectedDate = timepicker.selectedDates[0];
    startCountdown(selectedDate);
  });