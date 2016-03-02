/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var mousex;
 var mousey; 
 
 var elementUsed;
 
 var c = false;

 var count = 0;
function start(){
  
  
  
      
      
    
}


function drag(){
   
    var element = document.getElementById("drag"); 

 // element.addEventListener("dragstart",drage(),false);
   //element.addEventListener("click",draggeds,false);
     //element.addEventListener("drop",drage(),false);
     
     
}


function draggeds(x,y){
  // window.alert(" yepa"); 
   var element = document.getElementById(elementUsed); 
   
   //check trial for js for draggable mouse events
   
   
 element.setAttribute("style","position:absolute; top:"+x+'px;'+"left"+y+'px;');
   
   
   
}

function drage(x,y){
 
 var element = document.getElementById(elementUsed); 
    if(count % 2 === 0){
        
 element.setAttribute("style","position:absolute; top:"+y+'px;'+"left:"+x+'px;');
 
    if(x > 612  &&  x < 650){
        window.alert(element.id);
    }
       }
 
    
   
}





function clicked(e){
    
  
    
     mousex = e.clientX;
     mousey = e.clientY;
 

   drage(mousex,mousey);
   

    
    
    
}

function d(e){
   
    //window.alert(e.target.id);
}

function click(e){
   
    
    if(e.target.tagName ==="DIV"){
        if(count % 2 === 0)
            d(e);
       elementUsed = e.target.id;
//  window.alert(elementUsed);

    }
    else{
 
    
    }
       count++;
}


   // window.addEventListener("load",start,false);

//window.addEventListener("load",begin,false);

document.addEventListener("click",click,false);
document.addEventListener("mousemove",clicked,false);





