
// document.getElementById('menuButton').style.backgroundColor = '#344d48'

function hideElements(){
    document.getElementById('menuOption1').classList.toggle('hide');
    document.getElementById('menuOption2').classList.toggle('hide');
    button = document.getElementById('menuButton');
}

let totalButtonPresses = 0;
function buttonClicked(element){
    // console.log(element.innerText)
    totalButtonPresses += 1;
    if (element.innerText=='Green'){
        console.log('Green button was pressed');
        right = document.getElementById('rightHalf');
        right.style.background = 'green';
    }
    if (element.innerText=='Red'){
        console.log('Red button was pressed');
        right = document.getElementById('rightHalf');
        right.style.background = 'red';
    }
    if (element.innerText=='Blue'){
        console.log('Blue button was pressed');
        right = document.getElementById('rightHalf');
        right.style.background = 'blue';
    }
    let text = document.getElementById('showNumberOfPresses');
    text.innerHTML=`You have made a total of <strong>${totalButtonPresses}</strong> button presses!`;
}