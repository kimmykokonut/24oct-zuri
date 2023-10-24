// Business Logic

// function wordCounter(text) {
// 	if (text.trim().length === 0) {
// 		return 0;
// 	}
// 	let wordCount = 0;
// 	const textArray = text.split(" ");
// 	textArray.forEach(function (element) {
// 		if (!Number(element)) {
// 			wordCount++;
// 		}
// 	});
// 	return wordCount;
// }

function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function censor(word, text) {
	const textArray = text.split(" ");
	const outputArray = [];
	textArray.forEach(function(element) {
		if (element.toLowerCase().includes(word.toLowerCase())) {
			outputArray.push('');
			console.log('hi');
		} else {
			outputArray.push(element);
		}
	});
	const newText = outputArray.join(' ');
	return newText;
}
// tb done: put muppeteer, biffaroni, and loopdaloop in array and remove from text