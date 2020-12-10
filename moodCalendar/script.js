const currentYear = new Date().getFullYear();
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const calendar = document.getElementById("calendar");
const moods = document.querySelectorAll(".mood");
const randomize = document.querySelector("#randomize");
const clear = document.querySelector("#clear");
moods.forEach((mood) => {
  mood.addEventListener("click", () => {
    // un select if already selected
    if (mood.classList.contains("selected")) {
      mood.classList.remove("selected");
      activeColor = defaultColor;
    } else {
      moods.forEach((mood) => {
        mood.classList.remove("selected");
      });
      mood.classList.add("selected");
      activeColor = getComputedStyle(mood).getPropertyValue("color");
    }
  });
});

const getAllDays = (year) => {
  const firstDay = new Date(`January 1 ${year}`);
  const lastDay = new Date(`December 31 ${year}`);
  const days = [firstDay];
  let lastDayInArray = firstDay;

  while (lastDayInArray.getTime() !== lastDay.getTime()) {
    days.push(addDays(lastDayInArray, 1));
    lastDayInArray = days[days.length - 1];
  }
  return days;
};

const monthsHTML = "";
// loop over months to create a div for each month
months.forEach((month, idx) => {
  monthsHTML = +`
    <div class="months month_${idx}">
        <h3>${month}</h3>
            <div class="week_days_container">
                 ${weekDays
                   .map((day) => `<div class="week_days">${day}</div>`)
                   .join("")}
            </div>
        <div class="days_container"></div>
    </div>
    `;
});


calendar.innerHTML = monthsHTML;

