var countDownDate = new Date("Jan 1, 2024").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate-now;


    var days = Math.floor(distance / (1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((distance % (1000*60)) / 1000);


    document.getElementById("day-box").innerHTML = days;
    document.getElementById("hr-box").innerHTML = hours;
    document.getElementById("min-box").innerHTML = minutes;
    document.getElementById("sec-box").innerHTML = seconds;
    
})