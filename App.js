let userChoice
let msg

function upClicked(){
    userChoice = 1
    generate()
}

function downClicked(){
    userChoice = 0
    generate()
}

function generate(){
    let d1 = Math.floor(Math.random() * 6) + 1;
    let d2 = Math.floor(Math.random() * 6) + 1;
    if (d1+d2 < 7 && userChoice==0)
        msg='You Won'

    else if (d1+d2 > 7 && userChoice==1)
        msg='You Won'
        
    else
        msg='Better Luck Next Time'
    document.getElementById('d').innerHTML = d1 + '&emsp;' + d2
    document.getElementById('msg').innerHTML = msg
}