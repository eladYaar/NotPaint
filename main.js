"use strict";

/**@type{HTMLCanvasElement} */
const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
const defaultColorButton = document.getElementById("black");
const defaultWidthButton = document.getElementById("width1");
const advancedColorButton = document.getElementById("advancedColorButton");
const advancedLineWidthButton = document.getElementById("advancedLineWidthButton");

let currentLineColor = defaultColorButton.id;
let currentLineWidth = 1;
let selectedColorButton = defaultColorButton;
let selectedWidthButton = defaultWidthButton;

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

function changeLineWidth(lineWidthButton) {
    const lineWidth = lineWidthButton.value;
    if (!lineWidthButton.classList.contains("selectedButton")) {
        lineWidthButton.classList.add("selectedButton");
        lineWidthButton.classList.remove("unselectedButton");
        selectedWidthButton.classList.remove("selectedButton");
        selectedWidthButton.classList.add("unselectedButton");
        selectedWidthButton = lineWidthButton;
    }
    currentLineWidth = lineWidth;
    advancedLineWidthButton.value = lineWidth;
}

function changeLineColor(colorButton, adv = false) {
    let color;
    if (adv) {
        color = colorButton.value;
    } else {
        color = colorButton.value;
    }
    if (!colorButton.classList.contains("selectedButton")) {
        colorButton.classList.add("selectedButton");
        colorButton.classList.remove("unselectedButton");
        selectedColorButton.classList.remove("selectedButton");
        selectedColorButton.classList.add("unselectedButton");
        selectedColorButton = colorButton;
    }
    if (colorButton.id === "randomColor") {
        switch (getRandNum()) {
            case 1:
                color = "#000000"
                break;
            case 2:
                color = "#FF0000"
                break;
            case 3:
                color = "#00FF00"
                break;
            case 4:
                color = "#0000FF"
                break;
            case 5:
                color = "#FFFF00"
                break;
            case 6:
                color = "#FF00FF"
                break;
            case 7:
                color = "#00FFFF"
                break;
        }
        colorButton.style.border = `2px solid ${color}`
    }
    currentLineColor = color;
    advancedColorButton.value = color;
    console.dir(colorButton)
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
