let val1 = 0;
const countval = document.getElementById("counter");

function decrease(){
    val1--;
    updatecolor();
}

function increase(){
    val1++;
    updatecolor();
}

function reset(){
    val1 = 0;
    updatecolor();
}

function updatecolor(){
    countval.innerText = val1;
    countval.style.color = (val1 === 0)? "black": (val1 < 0)? "red":"green";
}