//select the chart element//

const chart=document.querySelector(".chart");

// create a canvas//

const canvas= document.createElement("canvas");
canvas.width=80;
canvas.height=80;

// append canvas to chart element//

chart.appendChild(canvas);

/// to draw a circle we need context of a canvas//

const ctx= canvas.getContext("2d");

//line width//

ctx.lineWidth=9;

//radius//

const rad=20;
function drawCircle(color, ratio, anticlockwise){
    ctx.strokeStyle=color;
    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height/2, rad, 0, ratio*2*Math.PI, anticlockwise);
    ctx.stroke();
}

function updateChart(income,outcome){
    let ratio= income/(income-outcome);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle("#7feb82", -ratio, true);
    drawCircle("#ff0000", 1-ratio, false);
}
