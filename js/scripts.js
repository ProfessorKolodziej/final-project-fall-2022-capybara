// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

let back = document.querySelector('.back')
let inp = document.querySelector('#inputRange')
let show = false;
let play = document.querySelector('.play')
let pause = false;
let rightArrow = document.querySelector('.rightArrow')
let Time = 31;
const formatTime = (seconds) => {
	let hours = Math.floor(seconds / 3600);
	let minutes = Math.floor((seconds % 3600) / 60);
	let remainingSeconds = seconds % 60;

	let formattedHours = hours < 10 ? "0" + hours : hours;
	let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
	let formattedSeconds = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

	return formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
}
inp.addEventListener('input', (e) => {
	let time = document.querySelector('.time')
	time.innerHTML = formatTime(e.target.value * 60)
	Time = e.target.value * 60
})

const initFun = () => {
	let oneBox = document.querySelector('.homePageWord')
	let twoBox = document.querySelector('.homePageWorder')
	if (show) {
		oneBox.style.display = "none"
		twoBox.style.display = "flex";
		let time = document.querySelector('.timer')
		time.innerHTML = formatTime(Time)
	} else {
		oneBox.style.display = "flex"
		twoBox.style.display = "none"
	}
}
initFun();
let setTime = 0;
const Timeout = () => {
	clearInterval(setTime)
	setTime = setInterval(() => {
		if (Time > 0) {
			Time--;
			initFun()
		} else {
			clearInterval(setTime)
			show = false;
			initFun()
		}
	}, 1000)
}

back.addEventListener('click', () => {
	show = false;
	clearInterval(setTime)
	initFun()
})

rightArrow.addEventListener('click', () => {
	show = true;
	initFun()
	Timeout()
})

play.addEventListener('click', () => {
	if (pause) {
		Timeout()
		pause = false
	} else {
		clearInterval(setTime)
		pause = true
	}
})

document.getElementById("nextPage").addEventListener("click", function () {
	document.getElementById("page1").style.display = "none";
	document.getElementById("page2").style.display = "block";
	document.getElementById("nextPage").style.display = "none";
	document.getElementById("prevPage").style.display = "block";
});

document.getElementById("prevPage").addEventListener("click", function () {
	document.getElementById("page1").style.display = "block";
	document.getElementById("page2").style.display = "none";
	document.getElementById("nextPage").style.display = "block";
	document.getElementById("prevPage").style.display = "none";
});
