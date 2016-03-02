/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var mousex =0;
var mousey =0;

var coordinates = [];


function allowDrop(ev){
   
    ev.preventDefault();
}

function drag(ev){
   
    ev.dataTransfer.setData("Text",ev.target.id);
    
}



function messageBox(htmls,titles)
{
 
    $.Dialog({
       shadow: true,
                  overlay: true,
                  flat: true,
                
                  icon: '<i class="icon-cancel fg-red"></i>',
         padding: 10,
         width:500,
        title:titles,
        content:htmls
        
    });
}

function drop(ev){
    ev.preventDefault();
    
   // alert(ev.target.id);
  // document.getElementById(ev.target.id).setAttribute("style","background-image:url()");
      if(ev.target.id == ""){
   
        messageBox("Re Drag the cursor");
       
        return;
    }
   
    mousex = ev.layerX;
     mousey = ev.layerY;
   
   
   
    
    
    
    var data = ev.dataTransfer.getData("Text");
    var documented = document.getElementById(data);
    
    //ev.target.appendChild(document.getElementById(data));
    documented.setAttribute("style","position:absolute; top:"+(mousey -23) +'px;'+"left:"+(mousex - 32)+'px;');
    var a = mousey -23;
    var b = mousex -32;
   
   
   
   
   
    var aa = a+"*";
    var bb = b;
    
    var join = aa+bb;
   


    
    
    totalQuestions[page] = ev.target.id+"**"+join;
            
          
          
       
         
      var markers =  document.getElementById(page+'.');
      
      
         markers.setAttribute("style","background-color: red");
         
         
         
 // alert(join);
   
    
    
    
    
    
    
    
}