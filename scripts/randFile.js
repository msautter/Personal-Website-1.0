
prev1 = document.getElementById('prev1')
prev2 = document.getElementById('prev2')
prev3 = document.getElementById('prev3')
prev4 = document.getElementById('prev4')
let weeks = {
    sites: [
    {
        'name': 'week1.html',
        'source': 'Wk1x700x400.png',
        'text':  'Dice Roller',
        'desc': 'Roll the dice and see where it lands! It doesn\'t get any easier than that.'
    },
    {
        'name': 'week2.html',
        'source': 'Wk2x700x400.png',
        'text':  'Facebook.db Generator',
        'desc': 'Convert your facebook friends list to a database. Comma separated values on the left, table on the right.'
    },
    {
        'name': 'week3.html',
        'source': 'Wk3x700x400.png',
        'text':  'p5.js Paint',
        'desc': 'Become the next Picasso with p5.js. Change the color and size of your brush, then paint away!'
    },
    {
        'name': 'week4.html',
        'source': 'Wk4x700x400.png',
        'text':  'p5.js Plot',
        'desc': 'Use p5.js to graph out the rollercoaster of emotions that is my life.'
    },
    {
        'name': 'week5.html',
        'source': 'Wk5x700x400.png',
        'text':  'Basic Calculator',
        'desc': 'Creating a calculator in a new language is like a rite of passage. If you don\'t make a calculator in that language did you really learn it?'
    },
    {
        'name': 'week6.html',
        'source': 'Wk6x700x400.png',
        'text':  'CSS Filter Tester',
        'desc': 'Test out some of the options for filter in CSS. Yes, that is my dog, Ben, and he is available for modeling.'
    },
    {
        'name': 'week7.html',
        'source': 'Wk7x700x400.png',
        'text':  'Locked Phone',
        'desc' : 'Complete one of the most difficult tasks of the 21st century: unlocking a phone. Luckily the pin is right there.'
    },
    {
        'name': 'week8.html',
        'source': 'Wk8x700x400.png',
        'text':  'Sticky Notes',
        'desc': 'Jot down your high school crush on your very own Sticky Note(TM) and I promise I won\'t tell.'
    },
    {
        'name': 'week9.html',
        'source': 'Wk9x700x400.png',
        'text':  'Part of Speech Generator',
        'desc' : "Use rita.js to list the parts of speech, ya know, in case you forgot 'dog' is a noun. I don\'t judge."
    },
    {
        'name': 'week10.html',
        'source': 'Wk10x700x400.png',
        'text':  'Gravity Sumulator',
        'desc' : 'Use matter.js to see what would happen if you used an hourglass on different planets. Don\'t ask me how I got one on Jupiter.'
    },
    {
        'name': 'week11.html',
        'source': 'Wk11x700x400.png',
        'text':  'Hangman',
        'desc' : 'Can you beat a computer at hangman? Use rita.js to generate a word and see if you can guess it in time.'
    },
    ]
}

function genRand() {
    prev1.href = 'week11.html'
    prev1.img.src = "content/Wk11x700x400.png";
}