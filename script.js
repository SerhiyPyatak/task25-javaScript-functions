function compareNums(firstNum, secondNum) {
	if (firstNum === secondNum) {
		return 0;
	} else if ( firstNum < secondNum ) {
		return -1;
	} else { return 1 };
}

function getFactorial(userNum) {
	let factorial = 1;
	for (let i = userNum; i > 1; i--) {
		factorial *= i;
	}
	return factorial;
}

function isPerfectNum(usrNumber) {
	const dividers = findAllDividers(usrNumber).split('; ');
	let sumDividers = 0;
	for (let i = 0; i < dividers.length - 1; i++) {
		sumDividers += parseInt(dividers[i]);
	};
	if (usrNumber == sumDividers) {
		return true; 
	} else {
		return false;
	}
}

function isPerfectNumRefactor(usrNumber) {
	let sumDividers = 0;
	for (let i = 0; i < usrNumber; i++) {
		if(!(usrNumber % i)) sumDividers += i;
	};
	if (usrNumber == sumDividers) {
		return true; 
	} else {
		return false;
	}
}

function findAllDividers(num) {
	let result = "1";
	for (let i = 2; i <= num; i++) {
		if (!(num % i)) {
			result = result + '; ' + i;
		}
	}
	return result;
}

function getSquareArea(rectWidth, rectHeight) {
	if (!rectWidth) {
		return Math.pow(rectHeight, 2);
	} else if (!rectHeight) {
		return Math.pow(rectWidth, 2);
	} else {
		return rectHeight * rectWidth;
	}
}

function getPerfectsInRange(arrRange) {
	let result = "";
	for (let i = arrRange[0]; i <= arrRange[1]; i++) {
		if (isPerfectNumRefactor(i)) {
			result = result + ' ' + i;
		}
	}
	return result;
}

function timeFormatter(hourValue = 0, minuteValue = 0, secondsValue = 0) {
	const timeStamp = new Date();
	timeStamp.setHours(hourValue, minuteValue, secondsValue);
	return timeStamp.toLocaleTimeString('en-GB');
}

function amountOfSeconds(hourValue = 0, minuteValue = 0, secondsValue = 0) {
	return hourValue * 3600 + minuteValue * 60 + secondsValue;
}

function secondsToTimeStruct(secondAm) {
	const hourAm = Math.trunc(secondAm / 3600);
	const minuteAm = Math.trunc(secondAm - hourAm * 3600);
	const timeStruct = new Date();
	timeStruct.setHours (
		hourAm,
		minuteAm,
		secondAm - hourAm * 3600 - minuteAm * 60
	)
	return timeStruct;
}

function dateDiff(startYear, startMonth, startDay, endYear, endMonth, endDay) {

}

function processForm(oForm) {
	const task = oForm.elements.task.value;
	let result;
	switch (task) {
		case "compareNumbers":
			result = compareNums(
				+oForm.elements.rangeStart.value, +oForm.elements.rangeEnd.value);
			alert(`Result of comparing is ${result}`);
			break;
		case "findTheFactorial":
			result = getFactorial(
				+oForm.elements.inputForFactorial.value
			);
			alert(`The factorial is: ${result}`);
			break;
		case "concatNumbers":
			let joined = "";
			for (let i = 0; i <= 2; i++) {
				joined += prompt('Enter numeric value, please:');
			}
			alert(`The concatenated number is ${joined}`);
			break;
		case "squareArea":
			result = getSquareArea(
				+oForm.elements.squareWidth.value, +oForm.elements.squareHeight.value);
			alert(`The area is ${result}`);
			break;
		case "perfectNumber":
			let val = +prompt(`Enter numeric value, please:`);
			if (isPerfectNumRefactor(val)) {
				alert(`Yeap! This is perfect number!`);
			} else {
				alert(`Nope! This isn't perfect number!`);
			}			
			break;
		case "perfectsRange":
			const outRes = getPerfectsInRange(askNumbers(2));
			alert(`Perfects are:\n ${outRes}`);
			break;
		case "formatDDMMSS":
			const timeVal = timeFormatter(
				+oForm.elements.hourValue.value,
				+oForm.elements.minuteValue.value,
				+oForm.elements.secondsValue.value
			);
			alert(`Your timestamp is ${timeVal}`);
			break;
		case "calcTheSeconds":
			const timeVal1 = amountOfSeconds(
				+oForm.elements.hourValue1.value,
				+oForm.elements.minuteValue1.value,
				+oForm.elements.secondsValue1.value
			);
			alert(`Amount of seconds is ${timeVal1}`);
			break;
		case "convertSeconds":
			let secAmount = +prompt('Type amount of seconds please:');
			let timeStruct = secondsToTimeStruct(secAmount);
			alert (`In your case it will be: ${timeStruct.toLocaleTimeString('en-GB')}`);
			break;
		case "substractDates":
			/*const startDate = new Date(oForm.elements.dateDiffStart.value);
			const endDate = new Date(oForm.elements.dateDiffEnd.value);
			const microSecondsDiff = Math.abs(startDate - endDate);
			const secondsDiff = Math.round(microSecondsDiff / 1000);
			const resolvingStruct = secondsToTimeStruct(secondsDiff);
			alert (`Difference is: ${resolvingStruct.toLocaleTimeString('en-GB')}`);*/
			alert('I can\'t understand this task. It seems result will always be 00:00:00 :(')
			break;
	}
}

function askNumbers(amount) {
	let inputNum = [];
	for (let i = 1; i <= amount; i++) {
		inputNum.push(+prompt(`Enter the number #${i}please:`));
	};
	return inputNum;
}

function lessNumber() {
	const inPut = askNumbers(2);
	( inPut[0] < inPut[1] ) 
	? alert(`The less is ${inPut[0]}`)
	: alert(`The less is ${inPut[1]}`);
}

function powerNum() {
	const inPut = askNumbers(2);
	alert (`Your result is ${Math.pow(inPut[0], inPut[1])}`);
}

function isPrime() {
	const inPut = askNumbers(1);
	const val = Math.sqrt(inPut[0]);
	for (let i = 2 ; i <= val; i++) {
		if (inPut[0] % i === 0) {
			alert('This isn\'t prime number');
			return;
		};
	};
	alert('This is a prime number');
}

function getRest() {
	const inPut = askNumbers(2);
	const division = inPut[0] / inPut[1];
	const rounDivision = Math.floor(division);
	const rest = inPut[0] - inPut[1] * rounDivision;
	alert(`The rest is ${rest}`);
}

function askSeveralNums() {
	let buf;
	let userInp = [];
	do {
		buf = prompt('Type a number please');
		if (buf !== null) userInp.push(parseInt(buf));
	} while (buf !== null);
	return userInp;
}

function getSumma() {
	alert(sum(...askSeveralNums()));
}

function sum(...arr) {
	return arr.reduce((priv, current) => {
		return priv + current;
	});
}