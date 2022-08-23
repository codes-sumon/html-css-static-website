var h2 = document.querySelector('.text h2');
//var h3 = document.querySelector('.text h3');

var monthArr = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

var dayArr = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

var d = new Date();

var obj = getDate();

function getDate() {
    var month = d.getMonth();
    month = monthArr[month];

    var day = d.getDay();
    day = dayArr[day];

    var date = d.getDate();

    h2.innerHTML = day + ' '+date + ', ' + month +' '+ d.getFullYear();
    return {
        m: month,
        dy: day,
        dt: date,
        yr: d.getFullYear()
    };
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =  "Time: "+ h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
