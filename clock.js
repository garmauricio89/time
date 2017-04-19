

document.addEventListener("DOMContentLoaded",function(){
    setInterval(startTime, 500);

    greet();
})

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    

}
 function checkTime(i) {
if (i < 10) {i = "0" + i};  
return i;}

function greet() {
     var today = new Date();
    var h = today.getHours();
    
    if (h<12) {alert('good morning');
    document.body.style.backgroundColor = "red";}
    else if (h>16) {alert('good evening');
document.body.style.backgroundColor = "blue";}
    else { alert('good afternoon');
document.body.style.backgroundColor = "green";}

}