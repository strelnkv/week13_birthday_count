function format(number) {
  if (number <= 9) {
    return "0" + number;
  } else {
    return number;
  }
}

const button = document.querySelector(".button");
const input = document.querySelector(".date");
const today = new Date();
const todayYear = today.getFullYear();
const todayMonth = today.getMonth() + 1;
const todayDay = today.getDate();
const formatedMonth = format(todayMonth);
const formatedDay = format(todayDay);

const p = document.querySelector(".result");

input.value = `${todayYear}-${formatedMonth}-${formatedDay}`;

button.addEventListener("click", countDays);

function countDays() {
  const date = input.value;
  const inputDate = new Date(Date.parse(date));
  const result = Math.floor((inputDate - today) / (24 * 60 * 60 * 1000));
  p.textContent = "До дня рождения осталось " + result + " дней!";
}
