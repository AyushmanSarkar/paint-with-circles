canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_position_of_x, last_position_of_y;
var radius = 15;
var color="red";
var width_of_line = 1;

//Mouse down event
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    //Additional Activity starts
    color =  document.getElementById("color").value;
  // width_of_line = document.getElementById("width_of_line").value;
   radius = document.getElementById("radius").value
    //Additional Activity ends

    mouseEvent="mouseDown";
}
//Mouse leave event
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

//Mouse up event
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}

//Mouse move event
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
    console.log("Current position of x and y coordinates = ");
    console.log("x = "+current_position_of_mouse_x +"y = "+current_position_of_mouse_y);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*Math.PI);

    console.log("Last position of x and y coordinates = ");
    console.log("x = "+last_position_of_x + "y = "+last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}