const check_btn = document.getElementById("check");
const reset_btn = document.getElementById("reset");
const history_list = document.querySelector(".history-list");
const tries = document.querySelector(".history-head span");
const result = document.querySelector(".result");
const guess_input = document.getElementById("number-guess");

let correctNumber = getRadnomNumber();
let times_Guessed = 0;
// OBJECT
// result dialog
const dialog = {
	low: {
		dialog_text: "YOUR Number is Low",
		color: "darkblue",
		bg_Color: "lightblue",
	},
	high: {
		dialog_text: "YOUR Number is High",
		color: "darkblue",
		bg_Color: "darkorange",
	},
	equal: {
		dialog_text: `Awesome, You Guessed IT .`,
		color: "darkgreen",
		bg_Color: "lightgreen",
	},

	default: {
		dialog_text: "Pleae Enter Number, 1.2.3....100",
		color: "darkred",
		bg_Color: "rgba(139, 0, 0, 0.2)",
	},
};

window.onload = function () {
	check_btn.addEventListener("click", playGame);
	reset_btn.addEventListener("click", initGame);
};
function playGame() {
	let guessNumber = document.getElementById("number-guess");
	let res = displayResult(Number(guessNumber.value));

	showDialog(res);
	showHistory(Number(guessNumber.value));
	guessNumber.value = "";
}

function initGame() {
	tries.textContent = 0;
	history_list.innerHTML = "";
	result.style.display = "none";
	document.getElementById("number-guess").value = "";
	check_btn.disabled = false;
}

// GET RANDOM NUMBER
function getRadnomNumber() {
	let randomm = Math.round(Math.random() * 100) + 1;

	return randomm;
}

// Display Result
function displayResult(number) {
	if (number === correctNumber) {
		return "equal";
	} else if (number < correctNumber) {
		return "low";
	} else if (number > correctNumber) {
		return "high";
	} else {
		return "default";
	}
}

function showDialog(r) {
	result.style.display = "grid";

	result.style.backgroundColor = dialog[r].bg_Color;
	result.style.color = dialog[r].color;
	result.textContent = dialog[r].dialog_text;
}

function showHistory(number) {
	times_Guessed++;
	const li = document.createElement("li");
	tries.textContent = times_Guessed;
	li.textContent = `You Guesed ${number}`;

	history_list.appendChild(li);
}
