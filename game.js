let previousClickedCard = -2;
let closeCards = true;

function onCardClick(clickedCard, value){
    console.log(clickedCard);
    //if()

    flipCard(clickedCard);
    



    //element.style.backgroundColor = "hsl(84, 47%, 56%)";
}

function flipCard(card){
    card.classList.toggle('openCard');
    card.classList.toggle('closedCard');
}

//Creates the grid with buttons depending on inputs,
//and assign them random numbrs.
//submittedNumbers()
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
                          style="grid-area: button${number};"
                          onclick="onCardClick(this,${values[number-1]})"
                          class="closedCard">
                          ${number}</button>`;
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
    document.getElementById('theGrid').style.gridAutoColumns = "repeat(x, 1fr) auto";
    document.getElementById('theGrid').style.gridAutoRows = "repeat(y, 1fr) auto";
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
    length = length/2;
    let arr = [];
    for(i=0; i<length; i++){
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