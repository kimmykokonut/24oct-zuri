//Utility Logic
function isEmpty(testString) {
	return (testString.trim().length === 0);
} //returns BOOLEAN

// Business Logic

function howMany(word, text) {
	let newArray = text.split(" ");
	let commonArray = [];
	let index = 0;
	newArray.forEach(function(element, index) {
		let wordCount = numberOfOccurrencesInText(element, text);
		commonArray[element] = wordCount;
		index += 1;
	})

	return commonArray;
}

function wordCounter(text) {
	if (isEmpty(text)) {
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
	if (isEmpty(word)) {
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
	if (isEmpty(word) || isEmpty(text)) {
		return null;
	}
	const p = document.createElement("p");
	let textArray = text.split(" ");
	textArray.forEach(function(element, index) {
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
// Practice ex: for censor function. Unfinished
// function censor(word, text) {
// 	const textArray = text.split(" ");
// 	const outputArray = [];
// 	textArray.forEach(function(element) {
// 		if (element.toLowerCase().includes(word.toLowerCase())) {
// 			outputArray.push('');
// 			console.log('hi');
// 		} else {
// 			outputArray.push(element);
// 		}
// 	});
// 	const newText = outputArray.join(' ');
// 	return newText;
// }
// tb done: put muppeteer, biffaroni, and loopdaloop in array and remove from text

//UI Logic
function handleFormSubmission(event) {
	event.preventDefault();
	const passage = document.getElementById("text-passage").value;
	const word = document.getElementById("word").value;
	const wordCount = wordCounter(passage);
	const occurancesOfWord = numberOfOccurrencesInText(word, passage);
	document.getElementById("total-count").innerText = wordCount;
	document.getElementById("selected-count").innerText = occurancesOfWord;

	let boldedPassage = boldPassage(word, passage);
	if (boldedPassage) {
		document.querySelector("div#bolded-passage").append(boldedPassage);
	} else {
		document.querySelector("div#bolded-passage").innerText = null;
	}
}

window.addEventListener("load", function () {
	document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);

});