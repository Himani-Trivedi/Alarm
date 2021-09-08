
var sound = new Audio('alarmtone.WAV');
let d = new Date();
let index = 1;

window.onload = function showCurrent() {
    const months = [
        "January", "February",
        "March", "April", "May",
        "June", "July", "August",
        "September", "October",
        "November", "December"
    ];

    monthname = months[d.getMonth()] + " " + d.getDate();
    document.getElementById('date').innerHTML = monthname;

    switch (d.getDay()) {
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
}

function showTime() {

    var d=new Date();
    //fetching DateTime
    dh = d.getHours();
    dm = d.getMinutes();
    ds = d.getSeconds();
    ampm = "AM";

    dh = (dh > 12 ? dh - 12 : dh);

    if (dh == 0) {
        dh = 12;
    }

    //zero Padding
    dm = (dm < 10 ? "0" : "") + dm;
    ds = (ds < 10 ? "0" : "") + ds;
    dh = (dh < 10 ? "0" : "") + dh;
   
    //Creating String
    document.getElementById('time').innerHTML =  dh + " : " + dm + " : " + ds;
    // console.log( dh + " : " + dm + " : " + ds );

}

setInterval(showTime, 1000);


document.getElementById('setAlarm').addEventListener('click', (e) => {
    intime = document.getElementById('intime').value;

    if (intime != "") {
        let x;
        d_temp = new Date();
        temp_time = intime.split(":")
        d_temp.setHours(temp_time[0], temp_time[1]);

        x = setTimeout(() => {
            sound.play();
        }, d_temp - d);

        e.preventDefault();

        var html = `
    <div class="card bg-dark text-white" style="width: 18rem; border-radius: 40px;" id="card${index}">
        <div class="card-body">
            <h5 class="card-title" style="color: gray;">Alarm Set </h5>
            <p class="card-text">${document.getElementById('intime').value}</p>
            <a href="" class="btn btn-secondary" id="pause" onclick="check(event,this,1,${x});" >Stop</a>
            <a href="" class="btn btn-secondary" id="stop" onclick="check(event,this,0,${x});" >Cancel</a>
        </div>
    </div>
    `;
        index++;

        document.getElementById('container').innerHTML += html;

    }
})


function check(e, i, flag, x) {

    e.preventDefault();

    if (flag == 1) {
        sound.pause();
    }

    i.parentNode.parentNode.parentNode.removeChild(i.parentNode.parentNode);

    clearTimeout(x);

}