var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllButtons = [];
for(let i=0; i<all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons)
function buttonColorChange(buttonThingy){
    if(buttonThingy.value === 'red'){
        buttonRed();
    }
    else if(buttonThingy.value === 'green'){
        buttonGreen();
    }
    else if(buttonThingy.value === 'reset'){
        buttonColorReset();
    }
    else if(buttonThingy.value === 'random'){
        randomColors();
    }
    else if(buttonThingy.value === 'yellow'){
        buttonYellow();
    }
    else if(buttonThingy.value === 'blue'){
        buttonBlue();
    }
}

function buttonRed(){
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }

}
function buttonGreen(){
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}
function buttonYellow(){
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-warning');
    }
}
function buttonBlue(){
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-primary');
    }
}
function buttonColorReset(){
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}
function randomColors(){
    var choices = ['btn-primary', 'btn-success', 'btn-warning', 'btn-danger'];
    for(let i=0; i<all_buttons.length; i++){
        var randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}








// console.log(randomColors())

