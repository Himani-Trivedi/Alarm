
setInterval(showTime, 1000);
var sound = new Audio('alarmtone.WAV');
let d = new Date();
let index = 1;


function maxTime() {

    document.getElementById('intime')
}

function showTime() {

    const months = [
        "January", "February",
        "March", "April", "May",
        "June", "July", "August",
        "September", "October",
        "November", "December"
    ];

    //fetching DateTime
    dh = d.getHours();
    dm = d.getMinutes();
    ds = d.getSeconds();
    ampm = "AM";

    //Setting AM/PM & 1-12 hours
    if (dh > 12)
        ampm = "PM";

    dh = (dh > 12 ? dh - 12 : dh);
    if (dh == 0) {
        dh = 12;
        ampm = "AM";
    }

    //zero Padding
    dm = (dm < 10 ? "0" : "") + dm;
    ds = (ds < 10 ? "0" : "") + ds;
    dh = (dh < 10 ? "0" : "") + dh;

    //Creating String
    var dateStr = dh + " : " + dm + " : " + ds;

    day = d.getDay();
    monthname = months[d.getMonth()] + " " + d.getDate();

    switch (day) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "WednesDay";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "FriyDay";
            break;
        case 6:
            day = "SaturDay";
            break;
    }

    document.getElementById('dayname').innerHTML = day;
    document.getElementById('time').innerHTML = dateStr;
    document.getElementById('date').innerHTML = monthname;

}


document.getElementById('setAlarm').addEventListener('click', (e) => {
    intime = document.getElementById('intime').value;

    if (intime != "") {
        e.preventDefault();

        var html = `
    <div class="card bg-dark text-white" style="width: 18rem; border-radius: 40px;" id="card${index}">
        <div class="card-body">
            <h5 class="card-title" style="color: gray;">Alarm Set </h5>
            <p class="card-text">${document.getElementById('intime').value}</p>
            <a href="" class="btn btn-secondary" id="pause" onclick="sound.pause();" >Stop</a>
        </div>
    </div>
    `;
        index++;

        document.getElementById('container').innerHTML += html;

        d_temp = new Date();
        temp_time = intime.split(":")
        d_temp.setHours(temp_time[0], temp_time[1]);

        setTimeout(() => {
            sound.play();
        }, d_temp - d);

        document.getElementById('intime').disabled = true
    }
})

