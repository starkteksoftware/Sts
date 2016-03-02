/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var lastNames = null;
var firstNames = null;
var emails = null;
var userNames = null;
var passwords = null;
var passd = null;
var label = document.getElementById("error");

function start(){

    document.getElementById("submit").addEventListener("click",submitted,false);
}

function submitted(){
    label.innerHTML="";
    label.setAttribute("style","color:red");
     document.getElementById("firstName").setAttribute("style","border-color:grey; border-style:solid;");
    document.getElementById("lastName").setAttribute("style","border-color:grey; border-style:solid;");
    document.getElementById("email").setAttribute("style","border-color:grey; border-style:solid;");
    document.getElementById("pass").setAttribute("style","border-color:grey; border-style:solid;");
    document.getElementById("password").setAttribute("style","border-color:grey; border-style:solid;");
         document.getElementById("userName").setAttribute("style","border-color:grey; border-style:solid;");
    
    
    
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
 userNames=    document.getElementById("userName").value;
 if(userNames === null || userNames.length < 1){
        label.innerHTML ="All details are required";
           document.getElementById("userName").setAttribute("style","border-color:red; border-style:dotted;");
    
 }
 passwords = document.getElementById("password").value;
 passd = document.getElementById("pass").value;
 if(passwords === null || passwords.length < 1){
        document.getElementById("password").setAttribute("style","border-color:red; border-style:dotted;");
        
        label.innerHTML ="All details are required";
   
 }
 
 else if( passd === null || passd.length < 1 ){
        label.innerHTML ="All details are required";
           document.getElementById("pass").setAttribute("style","border-color:red; border-style:dotted;");
        
     
 }
    
    if(passwords === passd){
       
    }else{ 
           document.getElementById("pass").setAttribute("style","border-color:red;");
            document.getElementById("password").setAttribute("style","border-color:red;");
        
        
           label.innerHTML ="Password mismatch";
           
    }
    
    
    if(label.innerHTML.length > 2){
       
        return;
    }
  
    post();
}


function post(){
 //  document.getElementById("formUp").action = getAction();
  
   // document.getElementById("formUp").submit();
    
    postDate();
   
   
     
    
}

function getAction (){
    
    
    return sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b?status=1";
}


start();

var loginInHere =sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b?status=1";
 
 
 
 function postDate(){
  var requestUrl = loginInHere+"&userName="+userNames+"&firstName="+firstNames+"&email="+emails+"&lastName="+lastNames+"&password="+passwords;
    
    
        //+ methodAndArguments;
        
  
    
   try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseLogInfos(asyncRequest);  //callBack( asyncRequest );
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
   
    function parseLogInfos(asyncRequest ){
   if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 var data = JSON.parse(asyncRequest.responseText);
 
if(data == "false"){
   label.innerHTML ="Username exist"; 
}
if(data == "true"){
    label.setAttribute("style","color:green");
    
    label.innerHTML ="account created"; 
     clear();

}

 }
    }
    
    function clear(){
        document.getElementById("lastName").value ="";
         document.getElementById("firstName").value ="";
          document.getElementById("email").value ="";
           document.getElementById("userName").value ="";
            document.getElementById("password").value ="";
             document.getElementById("pass").value ="";
               document.getElementById("firstName").setAttribute("style","border-color:grey; border-style:solid;");
    document.getElementById("lastName").setAttribute("style","border-color:grey; border-style:solid;");
    document.getElementById("email").setAttribute("style","border-color:grey; border-style:solid;");
    document.getElementById("pass").setAttribute("style","border-color:grey; border-style:solid;");
    document.getElementById("password").setAttribute("style","border-color:grey; border-style:solid;");
         document.getElementById("userName").setAttribute("style","border-color:grey; border-style:solid;");
    
             
    }
