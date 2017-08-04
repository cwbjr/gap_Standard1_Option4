function myFunction() {
	var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var d = new Date();
    var n = week[d.getDay()];
    var t = [d.toLocaleTimeString()];
    var a = "Time is " + "<strong>" + t + "</strong>" + " & today is " + "<strong>" + n + "</strong>.";
    
    document.getElementById("timeDay").innerHTML = a;
}myFunction()