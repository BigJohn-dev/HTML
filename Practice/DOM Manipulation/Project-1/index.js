// Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

// Array of Quotes

const quotes = [
    {
        quote: `“The best way to get started is to quit talking and begin doing.”`,
        person: `Walt Disney`
    },
    {
        quote: `“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.”`,
        person: `Winston Churchill`
    },
    {
        quote: `“Don’t let yesterday take up too much of today.”`,
        person: `Will Rogers`
    },
    {
        quote: `“You learn more from failure than from success. Don’t let it stop you. Failure builds character.”`,
        person: `Unknown`
    },
    {
        quote: `“It’s not whether you get knocked down, it’s whether you get up.”`,
        person: `Vince Lombardi`
    },
    {
        quote: `“If you are working on something exciting, it will keep you motivated.”`,
        person: `Unknown`
    },
    {
        quote: `“Success usually comes to those who are too busy to be looking for it.”`,
        person: `Henry David Thoreau`
    },
    {
        quote: `“Don’t be afraid to give up the good to go for the great.”`,
        person: `John D. Rockefeller`
    },
    {
        quote: `“I find that the harder I work, the more luck I seem to have.”`,
        person: `Thomas Jefferson`
    },
    {
        quote: `“Success is not in what you have, but who you are.”`,
        person: `Bo Bennett`
    }
];

// Event Listener

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});