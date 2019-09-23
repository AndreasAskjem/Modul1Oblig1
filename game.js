
//changeGrid()
//function gridSize(){}

function changeGrid(){
    console.log('aaaaaaaaaaa');
    let grid = '';
    let template = "'";
    //grid.
    
    for(i=1; i<=16; i++){
        grid += `<button type="button" id="button${i}" style="grid-area: button${i};" onclick="clickedButton(this)">${i}</button>`;
        
    }
    document.getElementById('theGrid').innerHTML = grid;
    document.getElementById('theGrid').style.gridTemplateAreas = "'button1 button2 button3 button4' 'button5 button6 button7 button8' 'button9 button10 button11 button12' 'button13 button14 button15 button16' ";
}

function clickedButton(element, value){
    element.style.backgroundColor = "green";
    element.innerHTML = value;
    
}


//submittedNumbers()
let buttonCSS;
let gridTemplate;
function submittedNumbers(){
    x = Number(document.getElementById('inputValueX').value);
    y = Number(document.getElementById('inputValueY').value);
    //x=3;
    //y=2;
    if(validInput(x,y)){
        let values = shuffleArray(x*y);
        let rowTemplate;
        let buttonCSS = '';
        let gridTemplate = '';

        for(i=1; i<=y; i++){
            rowTemplate = `'`;
            for(j=1; j<=x; j++){
                number = j + i*x - x;
                rowTemplate += `button${number} `;
                buttonCSS += `<button type="button" id="button${number}"
                              style="grid-area: button${number};"
                              onclick="clickedButton(this, ${values[number-1]})">${number}</button>`;
            }
            rowTemplate += `'`;
            gridTemplate += rowTemplate;
        }
        document.getElementById('theGrid').innerHTML = buttonCSS;
        document.getElementById('theGrid').style.gridTemplateAreas = gridTemplate;
        document.getElementById('theGrid').style.gridAutoColumns = "repeat(x, 1fr)";
        document.getElementById('theGrid').style.gridAutoRows = "repeat(y, 1fr)";
    }
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
    console.log(arr);


    let shuffledArr = [];
    let temp;
    for(i=arr.length; i > 0; i--){
        
        randomNumber = Math.floor(Math.random() * i);
         temp = arr.splice(randomNumber,1)
        shuffledArr.push(temp[0]);
    
    }
    console.log(shuffledArr);
    return shuffledArr;
}