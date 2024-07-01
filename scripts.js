// Create a new Date object to get the current date and time in the user's local timezone
const localDate = new Date();

function formatDate(dayOfWeek) {
  var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return daysOfWeek[dayOfWeek];
}

const currentDay = formatDate(localDate.getUTCDay());

var utcDay = document.getElementById("currentDay").textContent = currentDay

console.log(currentDay);

// Get the UTC time
const utcTime = localDate.toUTCString();

var currentTimeUTC = document.getElementById("currentTimeUTC").textContent = utcTime;

console.log(currentTimeUTC);

// Output the UTC time in milliseconds
console.log(utcMilliseconds);