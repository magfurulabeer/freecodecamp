var quotes = [];

function Quote(text, author) {
	this.text = text;
	this.author = author;
	quotes.push(this);
};

new Quote("The best way to cheer yourself up is to try to cheer somebody else up.", "Mark Twain");
new Quote("Do what you feel in your heart to be right, for you’ll be criticized anyway.", "Eleanor Roosevelt");
new Quote("Be yourself; everyone else is already taken.", "Oscar Wilde");
new Quote("Be there for others, but never leave yourself behind.", "Dodinsky");
new Quote("Whatever the mind of man can conceive and believe, it can achieve.", "Napoleon Hill");
new Quote("Every child is an artist. The problem is how to remain an artist once he grows up.", "Pablo Picasso")
new Quote("Eighty percent of success is showing up.", "Woody Allen");
new Quote("Your time is limited, so don’t waste it living someone else’s life.", "Steve Jobs");
new Quote("People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.", "Zig Ziglar");
new Quote("The best revenge is massive success.", "Frank Sinatra");
new Quote("If you don’t build your dream, someone else will hire you to help them build theirs.", "Dhirubhai Ambani");
new Quote("Whenever you find yourself on the side of the majority, it is time to pause and reflect.", "Mark Twain");
new Quote("Great minds discuss ideas; average minds discuss events; small minds discuss people.", "Eleanor Roosevelt");
new Quote("I have not failed. I’ve just found 10,000 ways that won’t work.", "Thomas A. Edison");
new Quote("Live as if you were to die tomorrow. Learn as if you were to live forever.", "Mahatma Ghandi");
new Quote("It is our choices, that show what we truly are, far more than our abilities.", "J.K. Rowling");
new Quote("A wise man can learn more from a foolish question than a fool can learn from a wise answer.", "Bruce Lee");

function randomQuote() {
	
	var num = Math.floor(Math.random() * (quotes.length));
	var node = "<blockquote>" + quotes[num].text + "<footer>- <cite>" + quotes[num].author + "</cite></footer></blockquote";
	document.getElementById("quote").innerHTML = node;
}

window.onload = function () {
	var button = document.getElementById("button");
	button.addEventListener("click",randomQuote);
}
