const quotes = [   // Quotes set
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero"
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein"
    },
    {
        quote: "Always forgive your enemies; nothing annoys them so much.",
        author: "Oscar Wilde"
    },
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "Doublethink means the power of holding two contradictory beliefs in one's mind simultaneously, and accepting both of them.",
        author: "George Orwell"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. ",
        author: "Steve Jobs"
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotel"
    },
    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },
    {
        quote: "Life is really simple, but we insist on making it complicated.",
        author: "Confucius"
    },
    {
        quote: "Love the life you live. Live the life you love.",
        author: "Bob Marley"
    },
    {
        quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        author: "Winston S. Churchill"
    },
    {
        quote: "The secret of success is to do the common thing uncommonly well.",
        author: "John D. Rockefeller Jr."
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    }
];
const colors = [   // Colors set
    'pink', 'orange', 'violet', 'yellow',
    'white', 'green', 'teal', 'cyan', 'grey',
    'olive', 'brown', 'purple', 'magenta'
];
// Quote change method
const newQuote = () => {
    // Random quote+author change
    let randQ = Math.floor(Math.random() * quotes.length);
    text.textContent = quotes[randQ].quote;
    $(document).ready(function () {
        $('#quote').text(quotes[randQ].quote);
        $('#auth').text(quotes[randQ].author);
    });

    // Random color change
    let randC = Math.floor(Math.random() * colors.length);
    $(document).ready(function () {
        $('#quote-box').css('background-color', colors[randC]);
    });
}

// First call of quotes
newQuote();

// Change quotes after mouse click
$(document).ready(function () {
    $('button').click(() => {
        newQuote();
    });
});

