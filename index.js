$(document).ready( ()=>{

/*
IO: input: click #new-quote 
output:  new random quote
*/

const getQuote =() =>
{
const quotes  = ["The power of imagination makes us infinite.",
"We know what we are, but not what we may." ,
 "The work of today is the history of tomorrow, and we are its makers.", 
"Those who say it cannot be done should not interrupt the person doing it.",
"The best revenge is massive success.",
"Whatever you are, be a good one.",
"Cut your own firewood. It will heat you twice.",
"I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.",
"The most effective way to do it, is to do it.",
"Failure is the condiment that gives success its flavor.",
"Forget safety. Live where you fear to live. Destroy your reputation. Be notorious.",
"Failure is simply the opportunity to begin again, this time more intelligently.",
"A good head and a good heart are always a formidable combination.",
"When something is important enough, you do it even if the odds are not in your favor."

];

const authors = ["- John Muir", "- William Shakespeare", "- Juliette Gordon Low", "- Unknown", "- Frank Sinatra", "- Abraham Lincoln", "- Henry Ford", "- Bruce Lee", "- Albert Einstein", "- Truman Capote",
 "- Rumi", "- Henry Ford", "- Nelson Mandela", "- Elon Musk"];


const rand  =  Math.floor(Math.random() * authors.length);
$('#text').text(quotes[rand].toUpperCase());
$('#author').text(authors[rand]);

let thisQuote = quotes[rand];
let thisAuthor = authors[rand];

$('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text='+encodeURIComponent('\'' + thisQuote + '\''+' '+ thisAuthor ));

//change some css on click

$('#text').toggleClass('animated flash');
$('#comma').toggleClass('animated flash');

$('#text').toggleClass('animated heartBeat');
$('#comma').toggleClass('animated heartBeat');


}

const changeColor = () =>{
	const colors = ['#760dd6cf', '#d6320dcf', '#d60d0dcf', '#7fd60dcf', '#d60dd0cf' , '#0d67d6cf', '#d6bd0dcf', '#d60dabcf'];

let randomNumber  = Math.floor(Math.random() * colors.length);
let randomColor = colors[randomNumber];

	$('#quote-box').css('background-color', randomColor);
}

//the function below makes sure that a random quote is create the first time the first time 
getQuote();

$('#new-quote').on('click', function () {

	getQuote();
	changeColor();
});

});