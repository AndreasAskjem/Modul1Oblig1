let previousClickedCard = -1;
let beforePreviousClickedCard = -2;
let closeCards = true;
let card1 =-1;
let card2 =-2;

function onCardClick(clickedCard, value){
    console.log(document.getElementById('theGrid').offsetWidth)
    if(clickedCard.classList.contains('closedCard')){
        
        flipCard(clickedCard, value);
        
        if(closeCards && (card1 != card2)){
            flipCard(previousClickedCard, value);
            flipCard(beforePreviousClickedCard, value);
        }
        closeCards = !closeCards;

        card2 = card1;
        card1 = value;
        beforePreviousClickedCard = previousClickedCard;
        previousClickedCard = clickedCard;
    }
}

function flipCard(card, value){
    try{
        card.classList.toggle('openCard');
        card.classList.toggle('closedCard');

        if(card.classList.contains('openCard')){
            card.innerHTML = value;
        }
        else{
            card.innerHTML = '';
        }
    } catch{}
}

//Creates the grid with buttons depending on inputs,
//and assign them random numbrs.
let buttonCSS;
let gridTemplate;
function submittedNumbers(){
    x = Number(document.getElementById('inputValueX').value);
    y = Number(document.getElementById('inputValueY').value);

    if(validInput(x,y)){
        createGrid(x,y);
    }
}

createGrid(3,2);
function createGrid(x,y){
    let values = shuffleArray(x*y);
    let rowTemplate;
    let buttonCSS = '';
    let gridTemplate = '';
    let number;

    
    let cardSize = getCardSize(x,y);


    for(i=1; i<=y; i++){
        rowTemplate = `'. `;
        for(j=1; j<=x; j++){
            number = j + i*x - x;
            rowTemplate += `button${number} `;

            buttonCSS += `<button type="button" id="button${number}"
                          style="grid-area: button${number};"
                          onclick="onCardClick(this,${values[number-1]})"
                          class="closedCard">
                          </button>`; //${number}
        }
        rowTemplate += `.'`;
        //console.log(rowTemplate);
        gridTemplate += rowTemplate;
    }

    rowTemplate = `'`;
    for(i=0;i<x+2;i++){
        rowTemplate += '. '
    }
    rowTemplate += `'`;
    gridTemplate += rowTemplate;
    //console.log(rowTemplate);
    document.getElementById('theGrid').innerHTML = buttonCSS;
    document.getElementById('theGrid').style.gridTemplateAreas = gridTemplate;
    widthPercent = cardSize; //"80px";  //`${100/x}%`;
    heightPercent = cardSize; //"80px";  //`${100/y}%`;
    document.getElementById('theGrid').style.gridTemplateColumns = `auto repeat(${x}, ${widthPercent}px) auto`;
    document.getElementById('theGrid').style.gridTemplateRows = `repeat(${y}, ${heightPercent}px) auto`;
    
}


function getCardSize(width, height){
    totalWidth = document.getElementById('theGrid').offsetWidth;
    totalHeight = document.getElementById('theGrid').offsetHeight;
    let cardSize;


    console.log('totalW ' + totalWidth);
    console.log('totalH ' + totalHeight);
    console.log('W ' + width);
    console.log('H ' + height);
    if(totalWidth/width < totalHeight/height){
        cardSize = (totalWidth-5)/(width+3);
    }
    else{
        cardSize = (totalHeight-5)/(height+3);
    }
    console.log(cardSize);
    //console.log(totalWidth/width + ' ' + totalHeight/height);
    return cardSize;
}



function validInput(x,y){
    if(Number(x) && Number(y) && ((x*y)%2==0 && x>0 && x<11 && y>0 && y<11)){

        return(true);
    }
    else{
        console.log("That didn't work.")
    }
}


function shuffleArray(length){
    let arr = [];
    for(i=0; i<(length/2); i++){
        arr.push(i+1);
        arr.push(i+1);
    }

    let shuffledArr = [];
    let temp;
    for(i=arr.length; i > 0; i--){
        randomNumber = Math.floor(Math.random() * i);
        temp = arr.splice(randomNumber,1)
        shuffledArr.push(temp[0]);
    }
    return shuffledArr;
}