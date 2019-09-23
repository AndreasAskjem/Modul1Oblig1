
changeGrid()
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

function clickedButton(element){
    element.style.backgroundColor = "green";
    
}

let buttonCSS;
let gridTemplate;
function submittedNumbers(){
    x = Number(document.getElementById('inputValueX').value);
    y = Number(document.getElementById('inputValueY').value);
    console.log(x,y);
    if(validInput(x,y)){
        let rowTemplate;
        //let gridTemplate = '"';
        //let buttonCSS;
        buttonCSS = '';
        gridTemplate = '';

        for(i=1; i<=y; i++){
            rowTemplate = `'`;
            for(j=1; j<=x; j++){
                number = j + i*x - x;
                console.log(number);
                rowTemplate += `button${number} `;
                buttonCSS += `<button type="button" id="button${number}"
                              style="grid-area: button${number};"
                              onclick="clickedButton(this)">${number}</button>`;
            }
            rowTemplate += `'`;
            gridTemplate += rowTemplate;
        }
        gridTemplate += '"';
        console.log('aaaa');
        document.getElementById('theGrid').style.gridTemplateAreas = gridTemplate;
        document.getElementById('theGrid').innerHTML = buttonCSS;
        //document.getElementById('theGrid').style.gridTemplateColumns = "repeat(${x}, 1fr)";
        //document.getElementById('theGrid').style.gridTemplateRows = "repeat(${y}, 1fr)";
        console.log(x,y);
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

/*
let XandYvlaues;
function submittedNumber(){
    let number = Number(document.getElementById('inputValue').value);
    let XandYvlaues = mathThing(number);
    console.log(XandYvlaues);
    changeGrid(XandYvlaues[0], XandYvlaues[1]);
}

function mathThing(number){
    let x = number;
    let difference = 1000000000;
    for(i=1; i < x+1; i++){
        ratio = x/i;
        if((Number.isInteger(ratio)) && (difference > Math.abs(ratio - i))){
            difference = Math.abs(ratio - i);
            idealX=i;
            idealY=ratio;
            console.log(ratio + "   " + difference + "   " + i);
        }
    }

    console.log('done');
    return[idealX, idealY];
}*/