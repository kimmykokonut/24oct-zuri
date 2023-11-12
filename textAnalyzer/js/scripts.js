//Utility Logic
function isEmpty(testString) {
	return (testString.trim().length === 0);
} //returns BOOLEAN. if str empty, return true 

// Business Logic

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
// ADD SWEAR CENSOR FUNCTION
// let text = "Yesterday I visited the muppeteer and zoinks it was a total biffaroni so I left after the loopdaloop."
function censor(text) {
	let cleanText = removePunct(text);
	const offensiveWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
	const textArray = cleanText.split(" ");
	let outputArray = [];
	outputArray = textArray.filter(function (element) {
		return !offensiveWords.includes(element.toLowerCase());
	});
	const outputString = outputArray.join(' ');
	return outputString;
}
function checkPunct(char) {
	const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
	return punctuation.includes(char);
}
function removePunct(str) {
	let strNoPunct = '';
	for (let i = 0; i < str.length; i++) {
		let character = str.charAt(i);
		if (!checkPunct(character)) {
			strNoPunct += character;
		}
	}
	return strNoPunct;
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
		if (index !== (textArray.length - 1)) { //doesn't add space after last word
			p.append(" "); //adds a space between words
		}
	});
	return p;
}
//how many times words appear hi:3, etc
// const text = "hello there hello hello there hi how are you hello";
// function wordCounterWithObjects(text) { //K:V pairs. doesn't work
// 	if (isEmpty(text)) { //calling isEmpty func
// 		return 0;
// 	}
// 	const wordArray = word.split(" ");
// 	const wordCounter = {}; //for k:v
// 	wordArray.forEach(function (word) {
// 		if (!wordCounter[word]) { //check if already counted
// 			wordCounter[word] = 1; //adds key w value 1
// 		} else {
// 			wordCounter[word] += 1; //if already exists, take value add 1
// 		}
// 		return wordCounter;
// 	});
// }
function countWord(word, text) {
	const textArray = text.split(' ');
	let count = 0;
	textArray.forEach(function (element) {
		if (element === word) {
			count += 1;
		}
	});
	return count;
}
function countAllWords(text) {
	const commonResponse = document.querySelector('div#common-words');
	const h3 = document.createElement('h3');
	h3.innerText = "List of common words: ";
	commonResponse.append(h3);
	const p = document.createElement('p');
	commonResponse.append(p);

	const textArray = text.split(' ');
	const checkedWords = [];

	textArray.forEach(function (word) {
		if (!checkedWords.includes(word)) {
			/* checking if we have already counted this specific word by using the .includes method. the "!" character will check if the opposite of the condition is true, so rather than checking if the array includes the word, we are checking if it doesn't include the word. If it doesn't, it means we haven't checked it, so we can proceed to the logic below */
			const wordOccurrences = countWord(word, text);
			checkedWords.push(word);
			//append to DOM
			p.innerText = word + ": " + wordOccurrences; // Hello: 3
		}
	});
	return p; //only printing 'you:1'
}
//sort array by highest value first. line below not working


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
	let commonWordsResponse = countAllWords(passage);
	document.querySelector("div#common-words").append(commonWordsResponse); //only printing "you:1";
}

window.addEventListener("load", function () {
	document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});