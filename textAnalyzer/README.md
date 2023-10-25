Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("            ");
Expected Output: 0

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2
---------------------
Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3
*not fixed: Yes, the word "redo" contains the word "red" — but it's not an occurrence of the word. We aren't going to worry about this issue, though you are welcome to refactor the application on your own to fix this with an additional test.

test: "It should return a string"

Test: "It should omit "zoinks" from wordCount because it is offensive"
Code:
const text = "Yesterday I visited the muppeteer and zoinks it was a total biffaroni so I left after the loopdaloop."
const word = "zoinks"
numberOfOccurencesInText(word, text);
Expected Output: 0

test3: "It should assess text against array of swears and remove swears from text"
Code:
const text = "Yesterday I visited the muppeteer and zoinks it was a total biffaroni so I left after the loopdaloop."
const swears = ["zoinks", "", ""]
numberOfOccurencesInText(swears, text);
Expected Output: 0

-------------------
Test: "it should change array values to lowercase to fix bug with Hi being counted as unique against hi
Code: const lowerArray = [];
	textArray.forEach(function(word) {
		lowerArray.push(word.toLowerCase());
	});
Expected Output: hey: 1
hi: 3
there: 2
whoa: 2
yay: 2
yo: 2

Test: "it should sort array in order of most used to least" (by value?)
Code:
Expected Output: 
Most common words:
hi: 3
there: 2
yo: 2
yay: 2
whoa: 2
hey: 1

code: 	const sortedArray = commonArray.sort((x, y) => x.value.length - y.value.legth);
nope, sorts by key alpha

final test: display list to user (not started)