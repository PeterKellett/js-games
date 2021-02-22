$(document).ready(function(){
    const cardArray = [
        {
            name: 'Aloha Wonderwall',
            img: 'static/images/memory-game/aloha_wonderwall.JPG'
        },
        {
            name: 'Aloha Wonderwall',
            img: 'static/images/memory-game/aloha_wonderwall.JPG'
        },
        {
            name: 'Amelia Earhart',
            img: 'static/images/memory-game/amelia_earhart.JPG'
        },
        {
            name: 'Amelia Earhart',
            img: 'static/images/memory-game/amelia_earhart.JPG'
        },
        {
            name: 'Angelina Jolie',
            img: 'static/images/memory-game/angelina_jolie.JPG'
        },
        {
            name: 'Angelina Jolie',
            img: 'static/images/memory-game/angelina_jolie.JPG'
        },
        {
            name: 'Beyonce',
            img: 'static/images/memory-game/beyonce_knowles-carter.JPG'
        },
        {
            name: 'Beyonce',
            img: 'static/images/memory-game/beyonce_knowles-carter.JPG'
        },
        {
            name: 'Billy Holiday',
            img: 'static/images/memory-game/billie_holiday.JPG'
        },
        {
            name: 'Billy Holiday',
            img: 'static/images/memory-game/billie_holiday.JPG'
        },
        {
            name: 'Jane Austin',
            img: 'static/images/memory-game/jane_austen.JPG'
        },
        {
            name: 'Jane Austin',
            img: 'static/images/memory-game/jane_austen.JPG'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //Create the board
    function createBoard() {
        console.log("Creating board")
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'static/images/memory-game/question_mark_card.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //Check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'static/images/memory-game/question_mark_card.jpg')
            cards[optionTwoId].setAttribute('src', 'static/images/memory-game/question_mark_card.jpg')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all.'
        }
    }
    

    //Flip card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 1000)
        }
    }

    createBoard()
})