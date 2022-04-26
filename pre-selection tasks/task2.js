//Create a function(s) that returns total amount of seconds starting from the beginning of today and till now.

function secondsPerToday() {
    const date = new Date();
    const secondsToday = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    return secondsToday;
}

console.log(secondsPerToday());