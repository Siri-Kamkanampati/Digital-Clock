var alarmsound=new Audio();
    alarmsound.src='alarm-clock.mp3';
    
    var alarmtimer;
    function setalarm(button){
        var timereq=document.getElementById('alarmtime').valueAsNumber;
        if(isNaN(timereq)){
            alert('Invalid date');
            return;
        }
        var alarm=new Date(timereq);
        var alarmtime=new Date(alarm.getUTCFullYear(),alarm.getUTCMonth(),alarm.getUTCDate(), alarm.getUTCHours(),alarm.getUTCMinutes(),alarm.getUTCSeconds());
        var difference = alarmtime.getTime()-(new Date()).getTime();
        if(difference<0){
            alert('Invalid Alarm time');
            return;
        }
        alarmtimer=setTimeout(initAlarm,difference);
        button.innerText='Cancel Alarm';
        button.setAttribute('onclick','cancelAlarm(this);');
        button.setAttribute('class', 'btn btn-danger');
    };
  


function cancelAlarm(button){
    clearTimeout(alarmtimer);
    button.innerText='Set Alarm';
    button.setAttribute('onclick','setalarm(this);');
};
function initAlarm(){
    alarmsound.loop=true;
    alarmsound.play();
    document.getElementById('alarmoptions').style.display='';
};
function stopAlarm() {
    alarmsound.pause();
    alarmsound.currentTime=0;
    document.getElementById('alarmoptions').style.display='none';
    cancelAlarm(document.getElementById('alarmbutton'));
};
function snooze(){
    stopAlarm();
    alarmtimer=setTimeout(initAlarm,300000);

};

function setdate(){
    d=new Date();
    htime= d.getHours();
    mtime= d.getMinutes();
    stime=d.getSeconds();
    hrotation = 30*htime + mtime/2  ;
    mrotation = 6*mtime;
    srotation = 6*stime;
    hour.style.transform= `rotate(${hrotation}deg)`;
    min.style.transform= `rotate(${mrotation}deg)`;
    sec.style.transform= `rotate(${srotation}deg)`;

};
setInterval(setdate,1000);

