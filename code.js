// function test(){
//     console.log(document.getElementById('menuBar'));
//     document.getElementById('menuBar').classList.toggle('greenBackground');
// }


function hideElements(){
    document.getElementById('menuOption1').classList.toggle('hide');
    document.getElementById('menuOption2').classList.toggle('hide');
    button = document.getElementById('menuButton');

    console.log(button.style.backgroundColor);
    
    if(button.style.backgroundColor == '#344d48'){
        button.style.backgroundColor = '#395246';
    }
    else{
        button.style.backgroundColor = '#344d48';
    }
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