function playGame() {
	var newBet = Number(document.forms["luckySevens"]["newBet"].value);
	if (newBet <= 0) {
		alert("Starting bet must be more than zero.");
		document.forms["luckySevens"]["newBet"].value = "";
		document.forms["luckySevens"]["newBet"].focus();
		return false;
	}
	var winArray = [newBet];
	var rollCounter = 0;
	for (var gameMoney = newBet; gameMoney >= 1; rollCounter++) {
		dieOne = Math.ceil(Math.random() * (1 + 6 - 1));		
		dieTwo = Math.ceil(Math.random() * (1 + 6 - 1));
		if (Number(dieOne + dieTwo) == 7) {
			gameMoney += 4;
			winArray[winArray.length] = gameMoney;
		} else {
			gameMoney -= 1;
			winArray[winArray.length] = gameMoney;
		}
	}
	var maxWin = 0;
	for (var indexCounter = 0; indexCounter < winArray.length; indexCounter++) {
		if (winArray[indexCounter] > maxWin) {
			maxWin = winArray[indexCounter];
		}
	}
	document.getElementById("results").style.display = "block";
	document.getElementById("startingBet").innerText = ("$" + newBet.toFixed(2));
	document.getElementById("totalRolls").innerText = rollCounter;
	document.getElementById("highestAmount").innerText = ("$" + maxWin.toFixed(2));
	document.getElementById("rollCountHigh").innerText = winArray.indexOf(maxWin);
	document.getElementById("submitButton").innerText = "Roll Again?";
	document.forms["luckySevens"]["newBet"].focus();
	return false;
}