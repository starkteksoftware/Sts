/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var logins = sessionStorage.getItem("URL")+'/AAAACLIENT/webresources/exam/admin/set/password?status=6';
var login = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/admin/set/password?status=7";

function upload(){
 
    document.getElementById("save").addEventListener("click",send,false);
    
}

function sendURL(requestUrl){
   
    
   try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseLogs(asyncRequest);  //callBack( asyncRequest );
 }, false);
     
    asyncRequest.open( "POST", requestUrl, true );
 asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
 asyncRequest.send(); // send request
 
 
 } // end try
 catch ( exception )
 {
 alert ( "Request Failed" );
 } // end catch
 


    

 
 }
 
 function parseLogs( asyncRequest )
 {
   
 // if request has completed successfully, process the response
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object
 }
 }




function send(){

 var information =   logins+'&subject='+localStorage.getItem("assessment")+'_'+localStorage.getItem("type")+'&author='+localStorage.getItem("author")+'&question='+allQuestions.toString(); 
 alert(information);
 document.getElementById("subject").value= localStorage.getItem("assessment")+'_'+localStorage.getItem("type");
  document.getElementById("author").value = localStorage.getItem("author");
    document.getElementById("question").value = allQuestions.toString();
    var answering ="";
   
    for(var c = 0; c < allAnswers.length; c++ ){
        answering+="#"+allAnswers[c];
    }
    
    if(localStorage.getItem("type").indexOf("M.R") !== -1){
    document.getElementById("answer").value = "*2#2"+answering+"#";
    }
    else{
          document.getElementById("answer").value = "*2#"+answering+"#";
    }
    
    alert(document.getElementById("subject").value);
      alert(document.getElementById("author").value);
        alert(document.getElementById("question").value);
           alert(answering);
           
    
    
    
      document.getElementById("forms").action = sessionStorage.getItem("URL")+"/AAAACLIENT/QuetionSetter";
      
      
      
        document.getElementById("forms").submit();
 // alert(information);
  
 
  //  sendURL(information);
}

window.addEventListener("load",upload,false);