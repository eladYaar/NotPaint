"use strict";

/**@type{HTMLCanvasElement} */
const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
let currentLineColor = "black";
let currentLineWidth = 1;

function paint(/**@type{MouseEvent}*/ event) {
    if (event.buttons === 1) {
        const rect = myCanvas.getBoundingClientRect();
        const xOffset = rect.left;
        const yOffset = rect.top;
        ctx.lineTo(event.clientX - xOffset, event.clientY - yOffset);
        ctx.strokeStyle = currentLineColor;
        ctx.lineWidth = currentLineWidth;
        ctx.stroke();
    }
}       

function mark() {
    ctx.beginPath();
}



function changeLineWidth(lineWidth) {
    currentLineWidth = lineWidth;
}

function changeLineColor(color = "") {
    if (!color) {
        switch (getRandNum()) {
            case 1:
                color = "black"
                break;
            case 2:
                color = "red"
                break;
            case 3:
                color = "green"
                break;
            case 4:
                color = "blue"
                break;
            case 5:
                color = "yellow"
                break;
            case 6:
                color = "magenta"
                break;
            case 7:
                color = "cyan"
                break;
        }
    }
    currentLineColor = color;
    return;
}   

function getRandNum(min = 1, max = 7) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function clearCanvas() {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);    
}


function showAdvancedOptions() {
    const advancedOptionsDiv = document.getElementById("advancedOptionsDiv");
    if (!advancedOptionsDiv.style.display || advancedOptionsDiv.style.display === 'none') {
        advancedOptionsDiv.style.display = 'flex';
    } else {
        advancedOptionsDiv.style.display = 'none';
    }
}
