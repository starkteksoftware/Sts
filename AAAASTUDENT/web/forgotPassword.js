/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */










function start(){
    document.getElementById("forgot").addEventListener("click",send,false);
}

function send(){
      document.getElementById("invalid").setAttribute("style","opacity:0.0");
     
  var email =  document.getElementById("email").value;
  var number =   document.getElementById("number").value;
  
  
  if(email === null || number === null){
      document.getElementById("invalid").setAttribute("style","opacity:1.0");
      
      return;
  }
  
  
  if(email.indexOf("@") > 0  && email.indexOf(".") > 0){
      
  }
  else{
      
      alert("invalid mail");
       document.getElementById("invalid").setAttribute("style","opacity:1.0");
     
      return;
  }
  
  
  alert(email +" "+number);
  var requestUrl = sessionStorage.getItem("URL")+"";
  
  return;
  
    try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseData(asyncRequest);  //callBack( asyncRequest );
 }, false);
     
    asyncRequest.open( "GET", requestUrl, true );
 asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
 asyncRequest.send(); // send request
 

 } // end try
 catch ( exception )
 {
 alert ( "Request Failed" );
 } // end catch
  
}

function parseData(asyncRequest){
 
  if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object


 //var data = JSON.parse(asyncRequest.responseText);

 var data = JSON.parse(asyncRequest.responseText);
 }
 }

window.addEventListener("load",start,false);
