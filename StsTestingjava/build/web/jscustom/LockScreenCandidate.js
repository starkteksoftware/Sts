/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function start(){
    
     
      
    
    var user = localStorage.getItem("user");
     if(user == null){
         window.location.assign("index.html");
     }
     
   $("#name").html(user);
   document.getElementById("fullImage").src = sessionStorage.getItem("URL")+"/AAAACLIENT/ImageRetriever?image="+user;
    
}

function key(e){
   
   
    if(e.keyCode == "13"){
       e.preventDefault();
       e.stopPropagation();
       
       
        
         
       var password = document.getElementById("pwd").value;
         if(password == null || password.length < 3){
            window.location.assign("index.html");
           return;
       }
 var login = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/student/verify/login?status=2";


  
//var matricNumber = document.getElementById("username").value;


//var passw =document.getElementById("pwd").value;

    var requestUrl = login+"&matric="+localStorage.getItem("user")+"&password="+password; 
   try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseLog(asyncRequest);  //callBack( asyncRequest );
 }, false);
     
    asyncRequest.open( "POST", requestUrl, true );
 asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );

 asyncRequest.send();

 } // end try
 catch ( exception )
 {
 console.log( exception );
 } // end catch
 

    
}

 

}

function parseLog( asyncRequest )
 {
   
 
   
 // if request has completed successfully, process the response
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object

 var data = JSON.parse(asyncRequest.responseText);
 
 

if(data != "false"){
    
    document.getElementById("forms").action = getAction();
   document.getElementById("forms").submit();
     
    }
    else{
          window.location.assign("candidateLog.html");
     }
}
 }
 
 
  function getAction(){
  
     return sessionStorage.getItem("URL")+"/StsTestingjava/SectionPage.html";
     
     
      
     
     
 }
window.addEventListener("load",start,false);
document.addEventListener("keypress",key,false);
