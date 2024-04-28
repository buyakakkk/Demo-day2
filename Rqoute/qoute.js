const quoteButton = document.getElementById('quoteButton');
const quote = document.getElementById('quote');

const quotes = [
	'The only way to do great work is to love what you do. - Steve Jobs',
	'Believe you can and you\'re halfway there. - Theodore Roosevelt',
	'Don\'t watch the clock; do what it does. Keep going. - Sam Levenson',
	'The harder you work for something, the greater you\'ll feel when you achieve it. - Unknown',
	'Dream bigger. Do bigger. - Unknown',
	'The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt',
	'Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll',
	'If you want to achieve greatness, stop asking for permission. - Unknown',
	'The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt',
	'If you can dream it, you can achieve it. - Zig Ziglar'
];

quoteButton.addEventListener('click', function() {
	const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
	quote.textContent = randomQuote;
});