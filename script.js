const day = document.getElementById("days");
const hour = document.getElementById("hours");
const mint = document.getElementById("minute");
const sec = document.getElementById("seconds");

const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");






const countdown = () =>{
    const disDate = date.options[date.selectedIndex].value;
    const dismonth = month.options[month.selectedIndex].value;
    const disyear = year.options[year.selectedIndex].value;    

    // `${disDate} ${dismonth} ${disyear}`
const newYears = disDate + dismonth + disyear;


    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate)/1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    day.innerHTML = formatCounter(days);
    hour.innerHTML = formatCounter(hours);
    mint.innerHTML = formatCounter(minutes);
    sec.innerHTML = formatCounter(seconds);

    function formatCounter(time){
      return  time < 10 ? `0${time}`: time ;
    }
    
}

function handleChange(){
  setInterval(countdown, 1000);
}

