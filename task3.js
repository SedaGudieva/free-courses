/* Task 3 */
var a = Number(process.argv[2]);
var b = Number(process.argv[3]);
var time = [];
var e;
var hour = Math.floor((a+b)/3600);

function ending(unit){
    unit = unit % 100;
    if(unit <= 20 && unit >= 10){
        return e = 0;
    }else if((unit % 10) >=5 ){
        return e = 0;
    }else if((unit % 10) == 1){
        return e = 1;
    }else return e = 2;
}

if(hour > 0){
    time.push(hour);
    ending(hour);
    if (e == 0){
        time.push('часов');
    }else if (e == 1){
        time.push('час');
    }else time.push('часа')
}

var minute = Math.floor(((a+b) % 3600)/60);
if(minute > 0){
    time.push(minute);
    ending(minute);
    if (e == 0){
        time.push('минут');
    }else if (e == 1){
        time.push('минута');
    }else time.push('минуты')
}

var second = ((a+b) % 3600) % 60;
if(second > 0){
    time.push(second);
    ending(second);
    if (e == 0){
        time.push('секунд');
    }else if (e == 1){
        time.push('секунда');
    }else time.push('секунды')
}

console.log(time.join(' '));
/* Put your code here */
