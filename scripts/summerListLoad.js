let imgLinks = document.getElementsByClassName('imgLink')
let imgSources = document.getElementsByClassName('card-img-top')
let projTitles = document.getElementsByClassName('projTitle')
let projDates = document.getElementsByClassName('projWeek')
let projDescs = document.getElementsByClassName('card-text')
let summerBtns = document.getElementsByClassName('summerBtn')
let sortVal = document.getElementById('sortSelect').value
let j = 0
let rand = 0
let projects = {
    summer: [
        {
            site: 'summer.html',
            img: 'comingSoon.png',
            title: 'Coming Soon',
            weekNum: 0,
            week: '',
            desc: ''
        },
        {
            site: 'week1.html',
            img: 'Wk1x700x400.png',
            title: 'Dice Roller',
            weekNum: 1,
            week: '05/20-05/26',
            gitHubRep: 'Wk1-Dice-Roller',
            codePenTag: 'WyRdap',
            desc: 'Roll the dice and see where it lands! It doesn\'t get any easier than that.',
            paras: [
                'For the first week of my summer programming challenge, I wanted to create a simple dice roller. I could have just picked a random num from 1-6, but I wanted to practice my animations using Javascript.',
                'Each time the user presses start, a random length is chosen and decremented when the selector moves. I later added the ability to loop the selector because it spent too much time on the ends. Then added a random start button that also randomized where the selector begins.'
            ]
        },
        {
            site: 'week2.html',
            img: 'Wk2x700x400.png',
            title: 'Facebook.db Generator',
            weekNum: 2,
            week: '05/27-06/02',
            gitHubRep: 'Wk2-Facebook.db',
            codePenTag: 'ZRLvMr',
            desc: 'Convert your facebook friends list to a database. Comma separated values on the left, table on the right.',
            paras: [
                'Originally, I developed this project in python and SQLite but I wanted to recreate it in Javascript. I also tried to integrate the Facebook API to generate a list of friends, but Facebook disabled this feature a few years ago.',
                'In order to get a table of friends, you need to go to your friends list from your profile. Scroll down to the bottom of page, select all (ctrl+a), copy (ctrl+c), and paste (ctrl+v) into the text field.'
            ]
        },
        {
            site: 'week3.html',
            img: 'Wk3x700x400.png',
            title: 'p5.js Paint',
            weekNum: 3,
            week: '06/03-06/09',
            gitHubRep: 'Wk3-p5.js-Paint',
            codePenTag: 'ERRRJM',
            desc: 'Become the next Picasso with p5.js. Change the color and size of your brush, then paint away!',
            paras: [
                'For this week, I wanted to include some JavaScript libraries. This program uses the p5.js library which is "JavaScript interpretation of the Processing language".',
                'The example program on the p5js website has you drawing an ellipse wherever the cursor is. I wanted to build on this and create a paint program where you can change the size and colors. In the future I plan to add a color picker.'
            ]
        },
        {
            site: 'week4.html',
            img: 'Wk4x700x400.png',
            title: 'p5.js Plot',
            weekNum: 4,
            week: '06/10-06/16',
            gitHubRep: 'Wk4-p5.js-Plot',
            codePenTag: 'wXEZex',
            desc: 'Use p5.js to graph out the rollercoaster of emotions that is my life.',
            paras: [
                'I really enjoy using the p5.js library so this week I created a plotting program. This is a really simple application and has a lot of room for improvement.',
                'Hopefully, I can come back to this and allow the user to click on a point instead of typing coordinates. Also if the points aren\'t showing, make sure to click on the graph after typing.'
            ]
        },
        {
            site: 'week5.html',
            img: 'Wk5x700x400.png',
            title: 'Basic Calculator',
            weekNum: 5,
            week: '06/17-06/23',
            gitHubRep: 'Wk5-Basic-Calculator',
            codePenTag: 'PaxBVN',
            desc: 'Creating a calculator in a new language is like a rite of passage. If you don\'t make a calculator in that language did you really learn it?',
            paras: [
                'Creating a basic calculator is like a rite of passage for a programmer when learning a new language. If you don\'t make a calculator in that language did you really learn it?',
                'Originally this project had a lot more JavaScript, but I realized we can just update the calculator display within html. The updateCalc() function in JS isn\'t really even necessary but I thought it was best to create a function to limit repetitive code.'
            ]
        },
        {
            site: 'week6.html',
            img: 'Wk6x700x400.png',
            title: 'CSS Filter Tester',
            weekNum: 6,
            week: '06/24-06/30',
            gitHubRep: 'Wk6-CSS-Filter-Tester',
            codePenTag: 'MXzMxr',
            desc: 'Test out some of the options for filter in CSS. Yes, that is my dog, Ben, and he is available for modeling.',
            paras: [
                'This week I learned about css filter properties for images. I wanted to visualize the different effects so I created this control panel that manipulates this photo of my dog.',
                'I hope to add support users to upload their own photo and add custom filters similar to Instagram or Snapchat. I am wary about adding an upload feature to my site due to security reasons.'
            ]
        },
        {
            site: 'week7.html',
            img: 'Wk7x700x400.png',
            title: 'Locked Phone',
            weekNum: 7,
            week: '07/01-07/07',
            gitHubRep: 'Wk7-Locked-Phone',
            codePenTag: 'wXVOPd',
            desc: 'Complete one of the most difficult tasks of the 21st century: unlocking a phone. Luckily the pin is right there.',
            paras: [
                'I wanted to make an application that emulated an android phone and could load mobile versions of websites within it. I still need to do more research on implementing some of the functionality of a smart phone, but the lock screen is a good start. ',
                'Maybe next summer I\'ll come back to this project and add a web browser so you can check your email from a phone rendered on some random kid\'s website.'
            ]
        },
        {
            site: 'week8.html',
            img: 'Wk8x700x400.png',
            title: 'Sticky Notes',
            weekNum: 8,
            week: '07/08-07/14',
            gitHubRep: 'Wk8-Sticky-Notes',
            codePenTag: 'pZJLKb',
            desc: 'Jot down your high school crush on your very own Sticky Note(TM) and I promise I won\'t tell.',
            paras: [
                'I really liked how the sticky note turned out from last week\'s project so I recreated it here with some additional functionality. This time the content within the note is editable and you can move the note by dragging the pushpin.',
                'When I return to this project, I want the user to be able to create more than one sticky notes and maybe change the color of the paper and pushpin.'
            ]
        },
        {
            site: 'week9.html',
            img: 'Wk9x700x400.png',
            title: 'Part of Speech Generator',
            weekNum: 9,
            week: '07/15-07/21',
            gitHubRep: 'Wk9-Pos-Gen',
            codePenTag: 'EpgyQB',
            desc: "Use rita.js to list the parts of speech, ya know, in case you forgot 'dog' is a noun. I don\'t judge.",
            paras: [
                'For this week, I planned on using matter.js for a gravity simulator but I wanted to take a break from visual JavaScript libraries. I later found Rita.js, "a library that provides tools for artists and writers working with natural language in programmable media."',
                'This is just a basic implementation of Rita\'s pos( ) function that generates a PENN part-of-speech tag for most words in the English language. If you want to know more about what each tag means you can find them here.'
            ]
        },
        {
            site: 'week10.html',
            img: 'Wk10x700x400.png',
            title: 'Gravity Sumulator',
            weekNum: 10,
            week: '07/22-07/28',
            gitHubRep: 'Wk10-Gravity-Simulator',
            codePenTag: 'QBgLxJ',
            desc: 'Use matter.js to see what would happen if you used an hourglass on different planets. Don\'t ask me how I got one on Jupiter.',
            paras: [
                'This project took me a little longer than the others, but looking back, I can say it was worth it. For this week I used a combination of matter.js and p5.js. I could have used matter.js for the rendering but need more practice with p5.js so I combined them.',
                'With these two libraries, the possibilities are endless. I can make more complex simulations, animations, and even physics games!'
            ]
        },
        {
            site: 'week11.html',
            img: 'Wk11x700x400.png',
            title: 'Hangman',
            weekNum: 11,
            week: '07/29-08/04',
            gitHubRep: 'Wk11-Hangman',
            codePenTag: 'PByPdB',
            desc: 'Can you beat a computer at hangman? Use rita.js to generate a word and see if you can guess it in time.',
            paras: [
                'Last week\'s gravity simulator got me thinking about making games on my website. I couldn\'t think of any physics based games I wanted to create so I went for a classic and made my own version of hangman. This was probably the most code I\'ve written for one of these small projects but I know I could write a lot more if I had time.',
                'Maybe when I come back to this code I can use matter.js to make the body sway back and forth. That might be a little too creepy though.'
            ]
        },
        {
            site: 'week12.html',
            img: 'Wk12x700x400.png',
            title: 'Morse Code Machine',
            weekNum: 12,
            week: '08/05-08/11',
            gitHubRep: 'Wk12-Morse',
            codePenTag: 'qygyQe',
            desc: 'Practice your morse code skills with this morse code translator. See if you can write your name!',
            paras: [
                'I wanted to end this 12 week challenge with a true challenge. Create a program with no Javascript frameworks, and only vanilla JavaScript, HTML, and CSS. I chose to code morse code because I wanted to learn it and after this week\'s challenge, I can now say the following: ',
                '.-- . / .- .-. . / .-.. .. ...- .. -. --. / .. -. / .- / ... .. -- ..- .-.. .- - .. --- -. .-.-.- / .-- .... --- . ...- . .-. / -... .-. . .- -.- ... / - .... . / ... .. -- ..- .-.. .- - .. --- -. / -.-. .- -. / . ... -.-. .- .--. . .-.-.-'
            ]
        }
    ]
}
randSummer = projects.summer.slice(1, projects.summer.length)
shuffle(randSummer)

function genRand() {
    rand = Math.floor(Math.random() * projects.summer.length);
    summerBtns[1].setAttribute("href", projects.summer[rand].site)
}
function loadList() {
    sortVal = document.getElementById('sortSelect').value
    console.log(sortVal)
    switch (sortVal) {
        case 'a':
            j = 0
            for (let i = 1; i < projects.summer.length; i++) {
                imgLinks[j].setAttribute("href", projects.summer[i].site)
                imgSources[j].src = "content/" + projects.summer[i].img
                imgSources[j].alt = projects.summer[i].title
                projTitles[j].setAttribute("href", projects.summer[i].site)
                projTitles[j].innerHTML = "Week " + projects.summer[i].weekNum + ":"
                projTitles[j].innerHTML = "Week " + projects.summer[i].weekNum + ":"
                projDates[j].innerHTML = projects.summer[i].week
                projDescs[j].innerHTML = projects.summer[i].desc
                j++
            }
            break
        case 'd':
            j = 0
            for (let i = projects.summer.length - 1; i > 0; i--) {
                imgLinks[j].setAttribute("href", projects.summer[i].site)
                imgSources[j].src = "content/" + projects.summer[i].img
                imgSources[j].alt = projects.summer[i].title
                projTitles[j].setAttribute("href", projects.summer[i].site)
                projTitles[j].innerHTML = "Week " + projects.summer[i].weekNum + ":"
                projTitles[j].innerHTML = "Week " + projects.summer[i].weekNum + ":"
                projDates[j].innerHTML = projects.summer[i].week
                projDescs[j].innerHTML = projects.summer[i].desc
                j++
            }
            break
        case 'm':
            shuffle(randSummer)
            j = 0
            for (let i = 0; i < projects.summer.length; i++) {
                imgLinks[j].setAttribute("href", randSummer[i].site)
                imgSources[j].src = "content/" + randSummer[i].img
                imgSources[j].alt = randSummer[i].title
                projTitles[j].setAttribute("href", randSummer[i].site)
                projTitles[j].innerHTML = "Week " + randSummer[i].weekNum + ":"
                projTitles[j].innerHTML = "Week " + randSummer[i].weekNum + ":"
                projDates[j].innerHTML = randSummer[i].week
                projDescs[j].innerHTML = randSummer[i].desc
                j++
            }
            break

    }

}

// function addContent(i, j, list) {
//     imgLinks[j].setAttribute("href", list[i].site)
//     imgSources[j].src = "content/" + list[i].img
//     imgSources[j].alt = list[i].title
//     projTitles[j].setAttribute("href", list[i].site)
//     projTitles[j].innerHTML = "Week " + list[i].weekNum + ":"
//     projTitles[j].innerHTML = "Week " + list[i].weekNum + ":"
//     projDates[j].innerHTML = list[i].week
//     projDescs[j].innerHTML = list[i].desc
// }

//ES2015 (ES6) Version
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}