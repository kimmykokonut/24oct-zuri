//Utility Logic
function isEmpty(testString) {
	return (testString.trim().length === 0);
} //returns BOOLEAN

// Business Logic
//how many times words appear hi:3, etc
function howMany(word, text) { 
	if (isEmpty(text)) { //calling isEmpty func
		return 0;
	}
	const textArray = text.split(" ");
	// make array all lowercase
	const lowerArray = [];
	textArray.forEach(function(word) {
		lowerArray.push(word.toLowerCase());
		console.log(lowerArray);
	});
	// make new array populate with word:occurance count
	let commonArray = [];
	let index = 0;
	lowerArray.forEach(function(element, index) {
		//calvins. removes duplicate words but all are word:1
		// if (!commonArray.includes(word)) {
		// 	let wordInfo = word;
		// 	let wordCount = wordCounter(word, text);
		// 	let output = wordInfo + ':' + wordCount;
		// 	console.log(output);
		// 	const p3 = document.createElement("p");
		// 	p3.innerText = word + ":" + wordCount;
		// 	document.getElementById("bolded-passage").append(p3);
		// 	commonArray.push(word);
		// }
		// My attempt. Produced array, didn't get it to print
		let commonCount = numberOfOccurrencesInText(element, text);
		console.log(commonCount);
		commonArray[element] = commonCount;
		console.log(commonCount);
		index += 1;
	});
	//sort array by highest value first. line below not working
	// const sortedArray = commonArray.sort((a, b) => a.value - b.value);
	console.log(commonArray);
	return commonArray; //returns array
}

function wordCounter(text) {
	if (isEmpty(text)) { //calling isEmpty func
		return 0;
	}
	let wordCount = 0;
	const textArray = text.split(" ");
	textArray.forEach(function (element) {
		if (!Number(element)) {
			wordCount++;
		}
	});
	return wordCount;
}

function numberOfOccurrencesInText(word, text) {
	if (isEmpty(word)) { //calling isEmpty funct
		return 0;
	}
	const textArray = text.split(" ");
	let wordCount = 0;
	textArray.forEach(function (element) {
		if (element.toLowerCase().includes(word.toLowerCase())) {
			wordCount++;
		}
	});
	return wordCount;
}

function boldPassage(word, text) {
	if (isEmpty(word) || isEmpty(text)) { //calling isEmpty function
		return null;
	}
	const boldResult = document.querySelector("div#bolded-passage");
	const h3 = document.createElement("h3");
	h3.innerText = "Your text passage with chosen word in bold: ";
	boldResult.append(h3);
	const p = document.createElement("p");
	boldResult.append(p);
	let textArray = text.split(" ");
	textArray.forEach(function (element, index) {
		if (word === element) {
			const bold = document.createElement("strong");
			bold.append(element);
			p.append(bold);
		} else {
			p.append(element);
		}
		if (index !== (textArray.length - 1)) {
			p.append(" ");
		}
	});
	return p;
}
// let text = "Yesterday I visited the muppeteer and zoinks it was a total biffaroni so I left after the loopdaloop."
function censor(text) {
	let cleanText = removePunct(text);
	const offensiveWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
	const textArray = cleanText.split(" ");
	let outputArray = [];
	outputArray = textArray.filter(function(element) {
		return !offensiveWords.includes(element.toLowerCase());
	});
	const outputString = outputArray.join(' ');
	return outputString;
}

function checkPunct(char) {
	const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
	return punctuation.includes(char);
}

function removePunct (str) {
	let strNoPunct = '';
	for (let i=0; i < str.length; i++) {
		let character = str.charAt(i);
		if (!checkPunct(character)) {
			strNoPunct += character;
		}
	}
	return strNoPunct;
}

//UI Logic
function handleFormSubmission(event) {
	event.preventDefault();
	const passage = document.getElementById("text-passage").value;
	const word = document.getElementById("word").value;
	const cleanUp = censor(passage); //adding censor funct
	const wordCount = wordCounter(cleanUp);
	const occurancesOfWord = numberOfOccurrencesInText(word, passage);
	document.getElementById("total-count").innerText = wordCount;
	document.getElementById("selected-count").innerText = occurancesOfWord;

	let boldedPassage = boldPassage(word, passage);
	if (boldedPassage) {
		document.querySelector("div#bolded-passage").append(boldedPassage);
	} else {
		document.querySelector("div#bolded-passage").innerText = null;
	}
	const pHowMany = document.createElement("p");
	document.body.append(pHowMany);
	pHowMany.innerText = commonArray;
}

window.addEventListener("load", function () {
	document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});