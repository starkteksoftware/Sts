/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var context;
var canvas;
var count = 0;
var coordinates = [];

var x1;
var x2 = 0;
var y1;
var y2 = 0;



var image = new Image();

image.src = "Koala.jpg";
function start(){
      

}

function begin(){
   canvas = document.getElementById("drawRectangle");
   
   context = canvas.getContext("2d");
   
 
    
    context.beginPath();
 /*   for( var c = 0; c < 6; c++){
       
        if(c % 2 === 0){
    context.drawImage(image, c * 50, c * 50, 40, 50);
     context.drawImage(image, c + 1 * 50, c * 50, 40, 50);
        }
        else{
       context.drawImage(image, 0 * 50, c * 50, 40, 50);      
        context.drawImage(image, c * 50, c * 50, 40, 50);   
        }
    
    } */
 //    context.drawImage(image,canvas.getAttribute("width"), canvas.getAttribute("height"),100, 100);   
   
      context.drawImage(image,0,0,canvas.getAttribute("width"),canvas.getAttribute("height"));
      
    /*  context.moveTo(10, 10);
      context.lineTo(200, 50);
      context.lineTo(390, 30);  */
     
  //  context.lineCap = "butt"; // line cap style
//context.strokeStyle = "red";
  //  context.stroke();
  






}



function line(x,y){
    
   
    //context.lineTo(x, y);
   //context.moveTo(10, 10);
   count++;
   if(count > 1){
     context.lineTo(x, y);
     
   }
   else{
       context.moveTo(x, y);
         context.lineTo(x, y);
         x1 = x;
         y1 = y;
   }
   
   
    if(count == 5){
     //   call();
 // var data = canvas.toDataURL("image/png").replace("image/png","image/octet-stream");
  
 // window.location.href = data;
   }
   
   if(count == 10){
     //   call();
 
   
   }
    
     
    context.lineCap = "butt"; // line cap style
context.strokeStyle = "red";
    context.stroke();
    
    
    
}
function call(){
    alert(coordinates);
    alert("lowest values of x is"+x1 +" lowest values of y is"+y1 +"  "+"highest x "+x2+" highest y "+y2);
}

function clicked(e){
    
  //  var mousex = e.clientX;
  //  var mousey = e.clientY;
  var mousex = e.layerX;
    var mousey = e.layerY;
  //  alert(mousex +" y"+mousey);
    //mozilla supports d e.layer//chrom suuprtse.offsetY
    coordinates.push(" x "+mousex);
    coordinates.push(" y "+mousey);
    
   if(mousex > x2){
       x2 = mousex;
   }
   
   
   if(mousey > y2){
       y2 = mousey;
   }
 
    
    line(mousex,mousey);
    
   
    
}






window.addEventListener("load",begin,false);
//document.addEventListener("click",clicked,false);


