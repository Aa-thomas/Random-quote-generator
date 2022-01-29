/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 ***/
 const quotes = [{
	quote: 'This is quote 1',
	source: 'source1',
	citation: 'cit1',
	year: 'year1'
}, {
	quote: 'this is quote 2',
	source: 'source2',
	citation: 'cit2',
	year: 'year2'
}, {
	quote: 'this is quote 3',
	source: 'source3',
	citation: 'cit3',
	year: 'year3'
}, {
	quote: 'this is quote 4',
	source: 'source4',
	citation: 'cit4',
	year: 'year4'
}, {
	quote: 'this is quote 5',
	source: 'source5',
	citation: 'cit5',
	year: 'year5'
}, {
	quote: 'this is quote 6',
	source: 'source6',
	citation: 'cit6',
	year: 'year 6'
}, {
	quote: 'this is quote 7',
	source: 'source7',
	citation: 'cit7',
	year: 'year7'
}, {
	quote: 'this is quote 8',
	source: 'source8',

}, {
	quote: 'this is quote 9',
	source: 'source9',

}, {
	quote: 'this is quote 10',
	source: 'source10',

}, ];


/***
 * `getRandomQuote` function
 ***/
function getRandomQuote() {
	function getRandomNum(upper, lower) {
		let randomNum = Math.floor(Math.random() * (upper - lower + 1)) + lower;
		return randomNum;
	}
	let quoteObject = quotes[getRandomNum(10, 0)]; 
	return quoteObject;
}


/***
 * `printQuote` function
 ***/
function printQuote() {
	let randomQuote = getRandomQuote();
	let htmlQuote = `<p class="quote">${randomQuote.quote}</p>`;
	let htmlSource = `<p class="source">${randomQuote.source}</p>`;
	let htmlString = '';

	if ('citation' in randomQuote) {
		let htmlCit = `<span class="citation">${randomQuote.citation}</span>`;
		htmlString = htmlQuote + htmlSource + htmlCit;
	} else if ('year' in randomQuote) {
		let htmlYear = `<span class="year">${randomQuote.year}</span>`;
		htmlString = htmlQuote + htmlSource + htmlYear;
	} else {
		htmlString = `${htmlQuote}` + `${htmlSource}`;
	}

	document.getElementById('quote-box').innerHTML = htmlString;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);