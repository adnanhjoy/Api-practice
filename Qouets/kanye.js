const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuotes(data))
}

const displayQuotes = quote => {
    const displayQuote = document.getElementById('display-quote');
    displayQuote.innerText = quote.quote;
    console.log(displayQuote)
}