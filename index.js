var a = document.getElementById("text");

var b = document.getElementsByTagName("h1");

var c = document.getElementsByClassName("box");

var d = document.getElementById("element").innerHTML= "Hello World";

function replace(){
    var e = document.getElementById("content").innerHTML= "Welcome to Elevation Academy";
}
 var head=document.getElementById("heading");
 head.style.color="red";  

 function changeflex(){
    var flex=document.getElementsByClassName("container");
    flex[0].style.flexDirection="column";
}

setInterval(showTime,1000);

function showTime(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    if(hour>=12){
        am_pm = "AM";
    }
    hour = hour<10 ? "0" + hour : hour;
    min = min<10 ? "0" + min : min;
    sec = sec<10 ? "0" + sec : sec;

    let currentTime = hour + ":" + min + ":" + sec + am_pm;

    document.getElementById("clock").innerHTML = currentTime;
}
showTime();





