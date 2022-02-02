/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


// An array of quote objects
 const quotes = [{
	quote: 'Out of the mountain of despair, a stone of hope.',
	source: 'Dr. Martin Luther King',
	citation: 'I have a dream speech',
	year: 'August 28, 1963',
	tag: 'Philisophical'
}, {
	quote: 'We choose to go to the Moon... we choose to go to the Moon in this decade and do the other things, not because they are easy but because they are hard.',
	source: 'John F Kennedy',
	citation: 'Rice Stadium Speech',
	year: 'September 12, 1962',
	tag: 'Historic'
}, {
	quote: 'There is no better teacher than adversity. Every defeat, every heartbreak, every loss, contains its own seed, its own lesson on how to improve your performance the next time.',
	source: 'Malcolm X',
}, {
	quote: 'I think what motivates people is not great hate, but great love for other people.',
	source: 'Huey P newton',
	year: '1969'
}, {
	quote: 'If you do not have confidence in self, you are twice defeated in the race of life. With confidence, you have won even before you have started.',
	source: 'Marcus Garvey',
} ];


// function to create random quote object
function getRandomQuote() {
	let quoteObject = quotes[Math.floor(Math.random() * quotes.length)]; 
	return quoteObject	
};

// function to print quote to the page
function printQuote() {
	let randomQuote = getRandomQuote();
	let htmlString = `<p class="quote">${randomQuote.quote}</p>
				      <p class="source">${randomQuote.source}`;
	
	if ('citation' in randomQuote) {
		htmlString+= `<span class="citation">${randomQuote.citation}</span>`;
	}
	if ('year' in randomQuote) {
		htmlString+= `<span class="year">${randomQuote.year}</span>`;
	}
	if ('tag' in randomQuote) {
		htmlString+= `<span class="year">${randomQuote.tag}</span>`;
	};
	htmlString += `</p>`;

	document.getElementById('quote-box').innerHTML = htmlString;
	
	//Change background color (source and credit:codespeedy.com)
	document.body.style.backgroundColor = "#"+ Math.floor(Math.random()*16777215).toString(16);
};

//call printquote function at 10 second intervals (1000 = 1 second)
setInterval(printQuote,10000);

//click event listener for the print quote button
document.getElementById('load-quote').addEventListener("click", printQuote, false);