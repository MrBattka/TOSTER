let hours = "04";
let minutes = "51";
let seconds = "16";

const getSeconds = () => {
  // функция обратного отсчета
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("minutes").innerHTML = `${minutes}:`;
  document.getElementById("hours").innerHTML = `${hours}:`;

  seconds--;

  if (seconds < 0) {
    if (minutes == 0 && hours == 0) {
      clearTimeout(timer);
      document.getElementById("seconds").innerHTML = "00";
    } else if (minutes == 0 && hours != 0) {
      hours--;
      minutes = 60;
      getSeconds();
    } else {
      seconds = 59;
      minutes--;
      getSeconds();
    }
  } else {
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    timer = setTimeout(getSeconds, 1000);
  }
};

getSeconds()