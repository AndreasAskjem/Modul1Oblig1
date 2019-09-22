
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
    document.getElementById('theGrid').style.gridTemplateAreas = "'button1 button2 button3 button4' 'button5 button6 button7 button8' 'button9 button10 button11 button12' 'button13 button14 button15 button16'";
}

function clickedButton(element){
    element.style.backgroundColor = "green";
    
}

let XandYvlaues;
function submittedNumber(){
    let number = Number(document.getElementById('inputValue').value);
    let XandYvlaues = mathThing(number);
    console.log(XandYvlaues);
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
}