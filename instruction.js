const btn2 =  document.getElementById('btn-2');
const X = document.querySelector('.X');
const popUp = document.querySelector('.pop-up');
const main = document.querySelector('.main');


btn2.addEventListener('click', showUp);


function showUp () {
    popUp.style.display = 'block';
    main.style.filter = 'blur(10px)';
}

X.addEventListener('click', removeShowUpX);

function removeShowUpX() {
    popUp.style.display = 'none';
    main.style.filter = 'blur(0px)';
} 