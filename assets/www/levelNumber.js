function getscore() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.l) {
            localStorage.l= Number(localStorage.l);
        } else {
            localStorage.l= 1;
        }
        if (localStorage.n) {
            localStorage.n= Number(localStorage.n);
        } else{
            localStorage.n = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
        }
        if (localStorage.shuffled) {
            localStorage.shuffled= localStorage.shuffled;
        }
        document.getElementById("level").innerHTML = "Ниво: " + localStorage.l;
    }
}
function score() {
            localStorage.l= Number(localStorage.l)+1;                          
        document.getElementById("level").innerHTML = "Ниво: " + localStorage.l;
    }