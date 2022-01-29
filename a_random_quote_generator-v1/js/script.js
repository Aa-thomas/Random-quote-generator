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
	year: 'year1',
	tag: 'tag1'
}, {
	quote: 'this is quote 2',
	source: 'source2',
	citation: 'cit2',
	year: 'year2'
}, {
	quote: 'this is quote 3',
	source: 'source3',
	citation: 'cit3',
	year: 'year3',
	tag: 'tag3'
}, {
	quote: 'this is quote 4',
	source: 'source4',
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
}, {
	quote: 'this is quote 7',
	source: 'source7',
	citation: 'cit7',
	year: 'year7',
	tag: 'tag7'
}, {
	quote: 'this is quote 8',
	source: 'source8',
	tag: 'tag8'

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
	let quoteObject = quotes[Math.floor(Math.random() * quotes.length)]; 
	return quoteObject
	
}
/***
 * `printQuote` function
 ***/
function printQuote() {
	let randomQuote = getRandomQuote();
	let htmlQuote = `<p class="quote">${randomQuote.quote}</p>`;
	let htmlSource = `<p class="source">${randomQuote.source}</p>`;
	let htmlString = `${htmlQuote}` + `${htmlSource}`;

	if ('citation' in randomQuote) {
		htmlString+= `<span class="citation">${randomQuote.citation}</span>`;
	}
	if ('year' in randomQuote) {
		htmlString+= `<span class="year">${randomQuote.year}</span>`;
	}
	if ('tag' in randomQuote) {
		htmlString+= `<span class="year">${randomQuote.tag}</span>`;
	}
	document.getElementById('quote-box').innerHTML = htmlString;
	//Change background color (credit:codespeedy.com)
	document.body.style.backgroundColor = "#"+ Math.floor(Math.random()*16777215).toString(16);

}

//Function to automatically change quote every 10 seconds
setInterval(printQuote,10000)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);