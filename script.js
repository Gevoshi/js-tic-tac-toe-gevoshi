// Create table for to play

for (var i=0; i<9; i++){
    document.getElementById('game').innerHTML+='<div class="block"></div>';
} 

// Create count for to play & EventListener

var count = 0;

document.getElementById('game').onclick = function(event){
    if(event.target.className == 'block'){
         if (event.target.innerHTML !== 'X' && event.target.innerHTML !== '0') {
            if(count%2 == 0){
                event.target.innerHTML = 'X';
                count++;     
            }
            else{
                event.target.innerHTML = '0';
                count++;     
            }
            setTimeout(() => {
                checkWinner()
            }, 100)
        }
    }
}

// Functions

function checkWinner(){
    var allBlock = document.getElementsByClassName('block');

    // find X

    if(allBlock[0].innerHTML == 'X' && allBlock[1].innerHTML == 'X' && allBlock[2].innerHTML == 'X') {
        alert('player X Win')
        toDefault()
    };
    if(allBlock[3].innerHTML == 'X' && allBlock[4].innerHTML == 'X' && allBlock[5].innerHTML == 'X') {
        alert('player X Win')
        toDefault()
    };
    if(allBlock[6].innerHTML == 'X' && allBlock[7].innerHTML == 'X' && allBlock[8].innerHTML == 'X') {
        alert('player X Win')
        toDefault()
    };
    if(allBlock[0].innerHTML == 'X' && allBlock[3].innerHTML == 'X' && allBlock[6].innerHTML == 'X') {
        alert('player X Win')
        toDefault()
    };
    if(allBlock[1].innerHTML == 'X' && allBlock[4].innerHTML == 'X' && allBlock[7].innerHTML == 'X') {
        alert('player X Win')
        toDefault()
    };
    if(allBlock[2].innerHTML == 'X' && allBlock[5].innerHTML == 'X' && allBlock[8].innerHTML == 'X') {
        alert('player X Win')
        toDefault()
    };
    if(allBlock[0].innerHTML == 'X' && allBlock[4].innerHTML == 'X' && allBlock[8].innerHTML == 'X') {
        alert('player X Win')
        toDefault()
    };
    if(allBlock[2].innerHTML == 'X' && allBlock[4].innerHTML == 'X' && allBlock[6].innerHTML == 'X') {
        alert('player X Win')
        toDefault()
    };

    // find 0

    if(allBlock[0].innerHTML == '0' && allBlock[1].innerHTML == '0' && allBlock[2].innerHTML == '0') {
        alert('player 0 Win')
        toDefault()
    };
    if(allBlock[3].innerHTML == '0' && allBlock[4].innerHTML == '0' && allBlock[5].innerHTML == '0') {
        alert('player 0 Win')
        toDefault()
    };
    if(allBlock[6].innerHTML == '0' && allBlock[7].innerHTML == '0' && allBlock[8].innerHTML == '0') {
        alert('player 0 Win')
        toDefault()
    };
    if(allBlock[0].innerHTML == '0' && allBlock[3].innerHTML == '0' && allBlock[6].innerHTML == '0') {
        alert('player 0 Win')
        toDefault()
    };
    if(allBlock[1].innerHTML == '0' && allBlock[4].innerHTML == '0' && allBlock[7].innerHTML == '0') {
        alert('player 0 Win')
        toDefault()
    };
    if(allBlock[2].innerHTML == '0' && allBlock[5].innerHTML == '0' && allBlock[8].innerHTML == '0') {
        alert('player 0 Win')
        toDefault()
    };
    if(allBlock[0].innerHTML == '0' && allBlock[4].innerHTML == '0' && allBlock[8].innerHTML == '0') {
        alert('player 0 Win')
        toDefault()
    };
    if(allBlock[2].innerHTML == '0' && allBlock[4].innerHTML == '0' && allBlock[6].innerHTML == '0') {
        alert('player 0 Win')
        toDefault()
    };
}

const toDefault = () => {
    var allBlock = document.getElementsByClassName('block');

    for(let i=0; i<9; i++){
        allBlock[i].innerHTML = ''
    }

    count = 0
}