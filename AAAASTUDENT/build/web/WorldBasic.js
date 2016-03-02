/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function start(){
   document.getElementById("countryCapital").addEventListener("click",country,false);
   document.getElementById("currencies").addEventListener("click",currency,false);
   document.getElementById("calling").addEventListener("click",codes,false);
   document.getElementById("timeZ").addEventListener("click",timeZone,false);
   document.getElementById("flags").addEventListener("click",flag,false);
}


function country(){
    $("#myModal").modal();
}

function currency(){
    
     $("#currency").modal();
}

function codes(){
    $("#calls").modal();
    
    
    
}

function timeZone(){
     $("#timezone").modal();
     
}

function flag(){
    $("#flagview").modal();
     
}
window.addEventListener("load",start,false);