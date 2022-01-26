
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(301, 200, 40, 0,  2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(400, 200, 40, 0,  2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(500, 200, 40, 0,  2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc(350, 240, 40, 0,  2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(450, 240, 40, 0,  2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);



function circle(mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2 * Math.PI);
    ctx.stroke();
}


