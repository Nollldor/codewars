/*
HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)
 */

function humanReadable (seconds) {
    let restTime;

    let time = {
        seconds: 0,
        minutes: 0,
        hours: 0,
    };

    //seconds
    time.seconds = seconds % 60;

    //or time.seconds.slice(-2)
    if (time.seconds < 10){
        time.seconds = '0' + time.seconds.toString();
    }else{
        time.seconds = time.seconds.toString();
    }
    restTime = Math.trunc(seconds/60);

    //minutes
    time.minutes = restTime % 60;

    //or .slice(-2)
    if (time.minutes < 10){
        time.minutes = '0' + time.minutes.toString();
    }else{
        time.minutes = time.minutes.toString();
    }
    //hours
    time.hours = Math.trunc(restTime/60);

    //or .slice(-2)
    if (time.hours < 10){
        time.hours = '0' + time.hours.toString();
    }else{
        time.hours = time.hours.toString();
    }


    return `${time.hours}:${time.minutes}:${time.seconds}`;
}

console.log(humanReadable(36000));

/////////////////////////////////////
//best practice

function humanReadable2(seconds) {
    let pad = function(x) { return (x < 10) ? "0"+x : x; }
    return pad(parseInt(seconds / (60*60))) + ":" +
        pad(parseInt(seconds / 60 % 60)) + ":" +
        pad(seconds % 60)
}

console.log(humanReadable2(36000));