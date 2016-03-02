/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function start(){
    document.getElementById("typing").addEventListener("click",startT,false);
    document.getElementById("guessr").addEventListener("click",countryg,false);
    document.getElementById("searchBio").addEventListener("click",searchB,false);
}

    
  function searchB(){
      $("#sBio").modal();
      
  }

var windowObjectReference;

function openRequestedPopup() {
  windowObjectReference = window.open(
    sessionStorage.getItem("URL")+"/AAAASTUDENT/Misc/Anagram.html"
    ,
    "DescriptiveWindowName",
    "resizable,scrollbars,status"
  );
}

function startT(){
  
      $("#types").modal();
       
}
 
function countryg(){
   $("#guessCountryId").modal();
   
}
window.addEventListener("load",start,false);