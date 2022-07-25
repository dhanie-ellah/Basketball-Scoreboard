let homeScore = document.getElementById('homeScore');
let guestScore = document.getElementById('guestScore');
let i = 0;
let j = 0;

function homePlusOne(){
    i += 1;
    homeScore.textContent = i;
}
function homePlusTwo(){
    i += 2;
    homeScore.textContent = i;
}
function homePlusThree(){
    i += 3;
    homeScore.textContent = i;
}

function guestPlusOne(){
    j += 1;
    guestScore.textContent = j;
}
function guestPlusTwo(){
    j += 2;
    guestScore.textContent = j;
}
function guestPlusThree(){
    j += 3;
    guestScore.textContent = j;
}

function reset(){
    i = 0;
    homeScore.textContent = i;
    j = 0;
    guestScore.textContent = j;
    // if(i > 0 || j > 0){
    //     i = 0;
    //     j = 0;
    // }
}