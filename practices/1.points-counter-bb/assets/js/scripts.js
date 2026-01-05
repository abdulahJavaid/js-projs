// 
////////// Scripts for the index
// 

let hInitial = 0;
let gInitial = 0;

let hBtn1 = document.getElementById("hBtn1");
let hBtn2 = document.getElementById("hBtn2");
let hBtn3 = document.getElementById("hBtn3");
let gBtn1 = document.getElementById("gBtn1");
let gBtn2 = document.getElementById("gBtn2");
let gBtn3 = document.getElementById("gBtn3");

document.addEventListener('DOMContentLoaded', function () {
    updatePoints();
});

function updatePoints () {
    let hPoints = document.getElementById("hPoints");
    let gPoints = document.getElementById("gPoints");
    hPoints.textContent = hInitial;
    gPoints.textContent = gInitial;

    if (gInitial == hInitial) {
        [hPoints, gPoints].forEach((div) => {
            div.classList.add("glow-0");
        });
    } else {
        [hPoints, gPoints].forEach((div) => {
            div.classList.remove("glow-0");
        });
    }

    if (gInitial > hInitial) {
        gPoints.classList.add("glow-w");
        hPoints.classList.add("glow-l");
    } else {
        gPoints.classList.remove("glow-w");
        hPoints.classList.remove("glow-l");
    }

    if (gInitial < hInitial) {
        hPoints.classList.add("glow-w");
        gPoints.classList.add("glow-l");
    } else {
        hPoints.classList.remove("glow-w");
        gPoints.classList.remove("glow-l");
    }
}

hBtn1.onclick = function () {
    hInitial += 1;
    updatePoints();
}
hBtn2.onclick = function () {
    hInitial += 2;
    updatePoints();
}
hBtn3.onclick = function () {
    hInitial += 3;
    updatePoints();
}

gBtn1.onclick = function () {
    gInitial += 1;
    updatePoints();
}
gBtn2.onclick = function () {
    gInitial += 2;
    updatePoints();
}
gBtn3.onclick = function () {
    gInitial += 3;
    updatePoints();
}

document.getElementById("btn-reset").onclick = function () {
    gInitial = 0;
    hInitial = 0;
    updatePoints();
}