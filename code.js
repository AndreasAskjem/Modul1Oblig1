
// document.getElementById('menuButton').style.backgroundColor = '#344d48'

function hideElements(){
    document.getElementById('menuOption1').classList.toggle('hide');
    document.getElementById('menuOption2').classList.toggle('hide');
    button = document.getElementById('menuButton');
}

let totalButtonPresses = 0;
colorButtons = document.getElementsByClassName('colorB');
function buttonClicked(element){
    // console.log(element.innerText)
    totalButtonPresses += 1;
    if (element.innerText == 'Green'){
        console.log('Green button was pressed');
        right = document.getElementById('rightHalf');
        right.style.background = 'green';
    }
    if (element.innerText == 'Red'){
        console.log('Red button was pressed');
        right = document.getElementById('rightHalf');
        right.style.background = 'red';
    }
    if (element.innerText == 'Blue'){
        console.log('Blue button was pressed');
        right = document.getElementById('rightHalf');
        right.style.background = 'blue';
    }
    let text = document.getElementById('showNumberOfPresses');
    if(totalButtonPresses < 10){
        text.innerHTML=`You have made a total of <strong>${totalButtonPresses}</strong> button presses!`;
    }
    else{
        text.innerHTML=`You have made <em><strong>TOO MANY</strong></em> button presses!`;
        document.getElementById('errorFix').classList.remove('hide');
        
        let i = 0;
        for(i=0; i < 3; i++){
            colorButtons[i].classList.add('disabled');
            colorButtons[i].disabled = true;
            buttonMouseLeave(element);
        }

        totalButtonPresses=10;
    }
    console.log(colorButtons);
}

function reset(){
    if(totalButtonPresses >= 10){

        right = document.getElementById('rightHalf');
        right.style.background = 'white';

        totalButtonPresses = 0;
        text = document.getElementById('showNumberOfPresses');
        text.innerHTML = `You have made a total of <strong>${totalButtonPresses}</strong> button presses!`;

        document.getElementById('errorFix').classList.add('hide');

        let i = 0;
        for(i=0; i < 3; i++){
            colorButtons[i].classList.remove('disabled');
            colorButtons[i].disabled = false;
        }
    }
}

function buttonMouseOver(element){
    if (element.innerText == 'Green'){
        element.style.background = 'green';
    }
    if (element.innerText == 'Red'){
        element.style.background = 'red';
    }
    if (element.innerText == 'Blue'){
        element.style.background = 'blue'
    }
}

function buttonMouseLeave(element){
    if (element.innerText == 'Green'){
        element.style.background = 'lightgreen';
    }
    if (element.innerText == 'Red'){
        element.style.background = 'pink';
    }
    if (element.innerText == 'Blue'){
        element.style.background = 'lightblue'
    }
}