/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function start(){
     
    
    document.getElementById("passbutton").addEventListener("click",sendError,false);
     
    
}


function sendError(){
      document.getElementById("error").setAttribute("style","color:gray");
    
     
    var email=  document.getElementById("email").value;
     if(email === null ){
      document.getElementById("error").setAttribute("style","color:red");
     
      return;
  }
  
  
  if(email.indexOf("@") > 0  && email.indexOf(".") > 0){
      
  }
  else{
      
      
       document.getElementById("error").setAttribute("style","color:red");
    
      return;
  }
  
    var buildUrl = "email="+email+"&status=1";

var requestUrl = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/student/register?"+buildUrl;
   

document.getElementById("load").setAttribute("style","position: absolute; top: 50%; left: 50%; opacity: 1.0;  margin-top:-100;");


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

document.getElementById("load").setAttribute("style","opacity:0.0");

if(data == "true"){
     
    document.getElementById("error").innerHTML = "<p> Email successfully sent, Please  <a href='candidateLogin.html'>Login</a><p>";
}
else{
     document.getElementById("error").setAttribute("style","color:red");
     
     document.getElementById("error").innerHTML = "Email not successfully sent, Try again later";
   
}
 
}
}

window.addEventListener("load",start,false);
 
