/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var lastNames = null;
var firstNames = null;
var emails = null;
var label = document.getElementById("error");
var passwords = null;
var passretry =null;
var passd = null;
var logUsers = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b?status=2";

var logUser = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b?status=1";
function start(){
    var userName = localStorage.getItem("UserName");
   
   
   
   
   var requestUrl = logUser+"&userName="+userName;
    //+ methodAndArguments;
    try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseLogggs(asyncRequest);  //callBack( asyncRequest );
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
 
 function parseLogggs( asyncRequest )
 {
   
 // if request has completed successfully, process the response
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object

 var data = JSON.parse(asyncRequest.responseText);

var datas = data.split("#");
var splitted = datas[1].split(",");
document.getElementById("lastName").value = splitted[3];
document.getElementById("firstName").value = splitted[2];
document.getElementById("email").value = splitted[4];
passretry = splitted[1];


startUp();


 // display data on the page
 } // end if
 } 
 
 function startUp(){
     document.getElementById("submitForm").addEventListener("click",subs,false);
     
 }
 
 function subs(){
    label.setAttribute("style","color:red");
    document.getElementById("firstName").setAttribute("style","border-color:grey; border-style:solid;");
    document.getElementById("lastName").setAttribute("style","border-color:grey; border-style:solid;");
    document.getElementById("email").setAttribute("style","border-color:grey; border-style:solid;");
    document.getElementById("pass").setAttribute("style","border-color:grey; border-style:solid;");
    document.getElementById("password").setAttribute("style","border-color:grey; border-style:solid;");
    
 
 
     lastNames=     document.getElementById("lastName").value;
 if(lastNames === null || lastNames.length < 1){
        label.innerHTML ="All details are required";
         document.getElementById("lastName").setAttribute("style","border-color:red; border-style:dotted;");
        
   
 }
 firstNames =    document.getElementById("firstName").value;
 if(firstNames === null || firstNames.length < 1){
         label.innerHTML ="All details are required";
          document.getElementById("firstName").setAttribute("style","border-color:red; border-style:dotted;");
        
    
 }
 emails =    document.getElementById("email").value;
 if(emails === null || emails.length < 1){
         label.innerHTML ="All details are required";
          document.getElementById("email").setAttribute("style","border-color:red; border-style:dotted;");
        
   
 }
 
 passwords = document.getElementById("password").value;
 
 if(passwords === passretry){
     
 }
 else{
      document.getElementById("password").setAttribute("style","border-color:red; border-style:dotted;");
        
        label.innerHTML ="Incorrect user password";
    
 }
 var p = document.getElementById("passwordss").value;
 passd = document.getElementById("pass").value;
 if(passwords === null || passwords.length < 1){
             label.innerHTML ="All details are required";
              document.getElementById("password").setAttribute("style","border-color:red; border-style:dotted;");
        
    
 }
 
 else if( passd === null || passd.length < 1 ){
      document.getElementById("pass").setAttribute("style","border-color:red; border-style:dotted;");
        
    
 }
    if(p === null ){
        return;
    }
    if(p === passd){
      
        
    }
    else{
         document.getElementById("password").setAttribute("style","border-color:red;");
          document.getElementById("pass").setAttribute("style","border-color:red;");
     
        
            label.innerHTML ="Password mismatch";
            
    }
    
    if(label.innerHTML.length > 3){
        return;
    }
    
    sendData();
 }
 
 
 
 function sendData(){
      var userName = localStorage.getItem("UserName");
      var requestUrl = logUsers+"&userName="+userName+"&firstName="+firstNames+"&lastName="+lastNames+"&email="+emails+"&password="+passd;
    //+ methodAndArguments;
    try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            passLogg(asyncRequest);  //callBack( asyncRequest );
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
 
 function passLogg(asyncRequest){
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
     var data = JSON.parse(asyncRequest.responseText);
     
     if(data =="true"){
        label.setAttribute("style","color:green");
      label.innerHTML = "Account update succesfull.";
            clear();
            
     }
     
     
     if(data == "false"){
              label.setAttribute("style","color:red");
     label.innerHTML = "Unable to update account.";
     }
     
     
     
 }
 }
 
 
  function clear(){
        document.getElementById("lastName").value ="";
         document.getElementById("firstName").value ="";
          document.getElementById("email").value ="";
           document.getElementById("passwordss").value ="";
           
           document.getElementById("password").value ="";
             document.getElementById("pass").value ="";
             
             
             
             
             
    }
 start();