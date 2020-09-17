var btninc = document.getElementById('increase');
var btndec = document.getElementById('decrease');
var btnres = document.getElementById('reset');
var number = document.getElementById('number');
var nmb;



btninc.addEventListener('click', increase)
btndec.addEventListener('click', decrease)
btnres.addEventListener('click', reset)


function increase() {

    nmb = Number(number.innerText);

    nmb += 1
    number.innerText = nmb
    number.style.color = "green";
    number.style.fontSize = "35px";

}

function decrease() {

    nmb = Number(number.innerText);
    nmb -= 1
    number.innerText = nmb;
    number.style.color = "red";
    number.style.fontSize = "35px";

}

function reset() {

    number.innerText = 0
    number.style.color = "blue";
}