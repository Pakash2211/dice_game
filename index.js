var btn = document.querySelector("button");
btn.addEventListener("click", rollDice);

function rollDice() {
    var m1 = document.querySelector("#member-1");
    var m2 = document.querySelector("#member-2");
    var m3 = document.querySelector("#member-3");
    var win = document.querySelector("#winner");

    var rdm1 = Math.floor(Math.random() * 6) + 1;
    m1.innerText = rdm1;
    var rdm2 = Math.floor(Math.random() * 6) + 1;
    m2.innerText = rdm2;
    var rdm3 = Math.floor(Math.random() * 6) + 1;
    m3.innerText = rdm3;



    var x = Math.max(rdm1, rdm2, rdm3);
    if (x == rdm1) {
        m1.style.backgroundColor = "green";
        win.innerText = "Member A"
    } else if (x == rdm2) {
        m2.style.backgroundColor = "green";
        win.innerText = "Member B"
    } else {
        m3.style.backgroundColor = "green";
        win.innerText = "Member C"
    }

    var y = Math.min(rdm1, rdm2, rdm3);
    if (y == rdm1) {
        m1.style.backgroundColor = "red";
    } else if (y == rdm2) {
        m2.style.backgroundColor = "red";
    } else {
        m3.style.backgroundColor = "red";
    }

    if (x > rdm1 && y < rdm1) {
        m1.style.backgroundColor = "yellow";
    } else if (x > rdm2 && y < rdm2) {
        m2.style.backgroundColor = "yellow";;
    } else {
        m3.style.backgroundColor = "yellow";
    }



    if (rdm1 == rdm2 && rdm2 == rdm3) {
        m1.style.backgroundColor = "teal";
        m2.style.backgroundColor = "teal";
        m3.style.backgroundColor = "teal";
        win.innerText = "Draw Match"
    } else if (rdm1 == rdm2 && rdm1 > rdm3) {
        m1.style.backgroundColor = "teal";
        m2.style.backgroundColor = "teal";
        win.innerText = "Member A && Member B";
    } else if (rdm1 == rdm2 && rdm1 < rdm3) {
        m1.style.backgroundColor = "teal";
        m2.style.backgroundColor = "teal";
        win.innerText = "Member C";
    } else if (rdm1 == rdm3 && rdm1 > rdm2) {
        m1.style.backgroundColor = "teal";
        m3.style.backgroundColor = "teal";
        win.innerText = "Member A && Member C"
    } else if (rdm1 == rdm3 && rdm1 < rdm2) {
        m1.style.backgroundColor = "teal";
        m3.style.backgroundColor = "teal";
        win.innerText = "Member B"
    } else if (rdm2 == rdm3 && rdm2 > rdm1) {
        m2.style.backgroundColor = "teal";
        m3.style.backgroundColor = "teal";
        win.innerText = "Member B && Member C"
    } else if (rdm2 == rdm3 && rdm2 < rdm1) {
        m2.style.backgroundColor = "teal";
        m3.style.backgroundColor = "teal";
        win.innerText = "Member A"
    }
}