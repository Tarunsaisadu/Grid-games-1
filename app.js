document.addEventListener('DOMContentLoaded',()=>{
// card options
 const cardArray = [
     {
         name: 'burger',
         img: 'images/burger.png'

     },
     {
        name: 'can',
        img: 'images/can.png'
        
    },
    {
        name: 'color',
        img: 'images/color.png'
        
    },
    {
        name: 'empty',
        img: 'images/empty.png'
        
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
        
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
        
    },
    {
        name: 'sandwich',
        img: 'images/sandwich.png'
        
    },
    {
        name: 'soup',
        img: 'images/soup.png'
        
    }
    ]
    // sorting on new game
     cardArray.sort(()=> 0.5-Math.random())
//     first pick your grid from html
    const grid = document.querySelector('.grid');
    const resultedDisplay= document.querySelector('#result')
    let cardsChoosen=[]
    let cardschosenId=[]
//    creating game board
    function createBoard(){
        for (let i=0; i<cardArray.length; i++){
            let card = document.createElement('img')
            card.setAttribute('src','images/burger.png')
            card.setAttribute('data-id', i)
             card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }
    // check for matches

    function checkForMatch(){
        let cards= document.querySelectorAll('img')
        const optionOneId= cardschosenId[0]
        const optionTwoId= cardschosenId[1]
        if(cardsChoosen[0]===cardsChoosen[1]){
            alert('you found a match')
            cards.optionOneId.setAttribute('src', images/empty.png)
            cards.optionTwoId.setAttribute('src', images/empty.png)
            cardsWon.push(cardsChoosen)
        } else{
            cards[optionOneId].setAttribute('src','images/burger.png')
            cards[optionTwoId].setAttribute('src','images/burger.png')
            alert('sorry try again')
        }
        cardsChoosen=[]
        cardsChosenId=[]
        resultDisplay.textContent=cardsWon.length
        if(cardsWon.length===cardArray.length/2){
            resultDisplay.textContent= 'congratulations!! u did it'
        }
    }

    // flip the card function 

      function flipCard() {
           
        let cardId = this.getAttribute('data-id') 
        cardsChoosen.push(cardArray[cardId].name)
        cardschosenId.push(cardId)
        this.setAttribute('src',cardArray[cardId].img)
        if(cardsChoosen.length===2){
            setTimeout(checkForMatch,500)
        }
      
    }

  createBoard()


























})