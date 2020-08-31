let a;
let stringTime;
let stringDate;
let timeHour = " ";
let timeMinute = " ";
let timeSecond = " ";
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

setInterval(() => {
  a = new Date();
  stringDate = a.toLocaleDateString(undefined, options);
  stringTime = getHour() + ":" + getMinute() + ":" + getSecond();
  document.getElementById("time").innerHTML = stringTime + "<br>On " + stringDate;
}, 1000);

getHour = () => {
  if (a.getHours() < 10) {
    return timeHour = "0" + a.getHours();
  } else {
    return timeHour = a.getHours();
  }
}

getMinute = () => {
  if (a.getMinutes() < 10) {
    return timeMinute = "0" + a.getMinutes();
  } else {
    return timeMinute = a.getMinutes();
  }
}

getSecond = () => {
  if (a.getSeconds() < 10) {
    return timeSecond = "0" + a.getSeconds();
  } else {
    return timeSecond = a.getSeconds();
  }
}