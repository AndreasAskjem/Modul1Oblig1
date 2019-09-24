let previousClickedCard = -1;
let beforePreviousClickedCard = -2;
let closeCards = true;
let card1;
let card2=-1;

function onCardClick(clickedCard, value){
    if(clickedCard.classList.contains('closedCard')){
        
        flipCard(clickedCard, value);
        
        if(closeCards && (card1 != card2)){
            flipCard(previousClickedCard, value);
            flipCard(beforePreviousClickedCard, value);
        }
        else if(closeCards && (card1 == card2)){
            previousClickedCard.style.background = "hsl(84, 40%, 45%)";
            beforePreviousClickedCard.style.background = "hsl(84, 40%, 45%)";
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
            card.innerHTML = '&nbsp;&nbsp;';
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

    for(i=1; i<=y; i++){
        rowTemplate = `'`;
        for(j=1; j<=x; j++){
            number = j + i*x - x;
            rowTemplate += `button${number} `;

            buttonCSS += `<button type="button" id="button${number}"
                          onclick="onCardClick(this,${values[number-1]})"
                          class="closedCard"
                          style="grid-area: button${number};
                          width: auto;
                          height: auto;">
                          &nbsp;&nbsp;</button>`; //${number}
        }
        rowTemplate += `.'`;
        //console.log(rowTemplate);
        gridTemplate += rowTemplate;
    }
    rowTemplate = `'`;
    for(i=0;i<x+1;i++){
        rowTemplate += '. '
    }
    rowTemplate += `'`;
    gridTemplate += rowTemplate;
    //console.log(rowTemplate);
    document.getElementById('theGrid').innerHTML = buttonCSS;
    document.getElementById('theGrid').style.gridTemplateAreas = gridTemplate;
    //document.getElementById('theGrid').style.gridAutoColumns = "repeat(x, 1fr) auto";
    //document.getElementById('theGrid').style.gridAutoRows = "repeat(y, 1fr) auto";
}



function validInput(x,y){
    if(Number(x) && Number(y) && ((x*y)%2==0)){
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