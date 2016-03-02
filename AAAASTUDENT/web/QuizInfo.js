/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function start(){
     document.getElementById("chemistry").addEventListener("click",chem,false);
     document.getElementById("acidBase").addEventListener("click",acid,false);
}


function chem(){
    
     $("#myChemistry").modal();
     
     
}

function acid(){
        $("#myacid").modal();
         
  
}

window.addEventListener("load",start,false);