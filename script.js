const images1 = document.querySelectorAll('img')[0];
const images2 = document.querySelectorAll('img')[1];

const span = document.querySelector('span');

const btn = document.getElementById('btn-1');

const randomCount1 = Math.floor(Math.random() * 6) + 1;
const randomCount2 = Math.floor(Math.random() * 6) + 1;

const randomDiceImage1 = "dice" + randomCount1 + ".png";
const randomDiceImage2 = "dice" + randomCount2 + ".png";

const randomImageSource1 = "images/" + randomDiceImage1;
const randomImageSource2 = "images/" + randomDiceImage2;

function decide(){
    if (randomCount1 > randomCount2) {
          span.innerHTML = "YOU WINS!";   
    } else if (randomCount2 > randomCount1) {
        span.innerHTML = "COMPUTER WINS!";   
    } else {
        span.innerHTML = "DRAW";   
    }
}


btn.addEventListener('click', function(){
    images1.setAttribute('src', randomImageSource1);
    images2.setAttribute('src', randomImageSource2);
    setInterval( decide, 1000);
    }

);
