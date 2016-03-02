/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function start(){
    document.getElementById("scienceC").addEventListener("click",science,false);
    document.getElementById("compSc").addEventListener("click",cs,false);
 document.getElementById("eng").addEventListener("click",engf,false);
 document.getElementById("maths").addEventListener("click",mathsf,false);
 document.getElementById("chemist").addEventListener("click",chemF,false);
  document.getElementById("space").addEventListener("click",spaceF,false);
  document.getElementById("planetF").addEventListener("click",planetf,false);
  document.getElementById("technology").addEventListener("click",tc,false);
   document.getElementById("body").addEventListener("click",bf,false);
   document.getElementById("bio").addEventListener("click",biof,false);
   
    
}



function chemF(){
   
    document.getElementById("content").innerHTML = document.getElementById("chemH").innerHTML;
    
}
function engf(){
   
    document.getElementById("content").innerHTML = document.getElementById("engH").innerHTML;
    
}

function mathsf(){
      document.getElementById("content").innerHTML = document.getElementById("mathH").innerHTML;
      
   
}
function science(){
     
     $("#science").modal();
     
     
}
function tc(){
     $("#tech").modal();
      
}
 
function bf(){
       $("#bodyfacts").modal();
}

function planetf(){
    
     $("#planets").modal();
      
       
}

function biof(){
       $("#biology").modal();
   
}
function spaceF(){
     $("#spaceFact").modal(); 
      
      
}

function cs(){
    document.getElementById("content").innerHTML = document.getElementById("csH").innerHTML;
}

window.addEventListener("load",start,false);