var running = false;
var sessionTime = 25;
var breakTime = 5;
var session =  true;
var hours = 0;
var minutes = 0;
var seconds = 0;
var timer;
var bell = new Audio('desk_bell.mp3');
var beep = new Audio('soft_chime_beep.mp3');

Number.prototype.sec = function() {
	return this * 1000;
}

Number.prototype.mins = function() {
	return this * 60000;
}

function toggleSession() {
	session = !session;
	if(session) {
		document.getElementById("segment").innerHTML = "Session";
	} else {
		document.getElementById("segment").innerHTML = "Rest";
	}
}

function displaySessionTime() {
	document.getElementById("session").innerHTML = sessionTime;
}

function minusSession() {
	if(sessionTime > 0) {
		sessionTime -= 1;
	}
	displaySessionTime();
	displayTime(sessionTime);
}

function plusSession() {
	sessionTime += 1;
	displaySessionTime();
	displayTime(sessionTime);
}

function displayBreakTime() {
	document.getElementById("break").innerHTML = breakTime;
}

function minusBreak() {
	if(breakTime > 0) {
		breakTime -= 1;
	}
	displayBreakTime();
}

function plusBreak() {
	breakTime += 1;
	displayBreakTime();
}

function displayTime(num) {
	convertTime(num);
	document.getElementById("timer").innerHTML = timeFormat();
}

function timeFormat() { // TODO: Refactor
	var time = "";
	if(hours > 0) {
		time = time + hours + ":" + format(minutes) + ":" + format(seconds);
	} else if(minutes > 0) {
			time = time + minutes;
			if(seconds > 0) {
				time = time + ":" + format(seconds);
			}
	} else {
		time = seconds;
	}

	return time;
}

function format(num) {
	if(num >= 10) {
		return String(num);
	} else {
		return "0" + String(num);
	}
}

function convertTime(mins) {
	if(mins >= 60) {
		hours = Math.floor(mins/60);
		minutes = mins%60;
	} else {
		minutes = mins;
	}
}

function switchSession() {
	toggleSession();
	session ? displayTime(sessionTime) : displayTime(breakTime);
	run();
}

function toggleOn() {
	running = !running;
	if(running) {
		document.getElementById("clock").style.opacity = 1;
		run();
	} else {
		document.getElementById("clock").style.opacity = .5;
		clearInterval(timer);
	}
}

function run() {
	timer = setInterval(updateTimer,1000);
	//setTimeout(clearInterval(timer), minutes * 60000);
	// This was causing me trouble, so I decided to stop
	// intervals in the updateTimer using if statements
}

function stop() {
	clearInterval(timer);
	document.getElementById("timer").innerHTML = "Finished!";
	switchSession();
	session ? beep.play() : bell.play();
}

function updateTimer() {
	if(hours === 0 && minutes === 0 && seconds === 0) {
		stop();
	} else {
		seconds--;
		if(seconds === -1) {
			seconds = 59;
			minutes--;
		}
		if(minutes === -1) {
			minutes = 59;
			hours--;
		}
		displayTime(minutes);
	}
	console.log("loop");
}


displayTime(sessionTime);
