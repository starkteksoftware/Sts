/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var hide;
var user;
var password;
var URL = "";
function start(){
  localStorage.clear();
   URL = location.protocol +"//"+ location.host;
  
     hide = document.getElementById('invalid');
    hide.setAttribute("style","display:none");
    
 
     var url = document.URL;
     var ipConfig = url.split(":");
    
  var ip =   ipConfig[1].split("//");
 
     localStorage.setItem("Ip",ip[1]);
  
 sessionStorage.setItem("URL",URL);
  
    document.getElementById("logger").addEventListener("click",verify,false);
}

function verify(){
  
   $(".red").hide();
  user = document.getElementById("username").value;
  password =document.getElementById("pwd").value;
  
 localStorage.setItem("user", user);
 
 
 
 if(user === null || user.length === 0){
         document.getElementById("statTexts").innerHTML = "Enter a user name";
    $("#statTexts").show("slow");
    
  return;
 }
 
 if(password === null || password.length === 0){
          document.getElementById("statTexts").innerHTML = "Enter a password";
    $("#statTexts").show("slow");
    
   return;
 }
 
 log();
 
 return;
    
}

function checkuserName(){
  
    
    
}




function log(){
  
  
    $("#statTexts").hide();
    
    
var login = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/student/matric";

  
matricNumber = document.getElementById("username").value;

    var requestUrl = login+"?matric="+matricNumber;
        //+ methodAndArguments;
        
  
    
   try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseLogger(asyncRequest);  //callBack( asyncRequest );
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
function parseLogger( asyncRequest )
 {
   
 // if request has completed successfully, process the response
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object

 var data = JSON.parse(asyncRequest.responseText);

 
 
         localStorage.setItem("detail",data);
         
         
       
if(data === "true"){
   
          
   
}
if(data ==="session active"){
    
     
      
    
      
    document.getElementById("statTexts").innerHTML = "Session active";
    $("#statTexts").show("slow");
    
    return;
}
if(data === "false"){
        document.getElementById("statTexts").innerHTML = "Please you have not registered";
    $("#statTexts").show("slow");
    
    return;
}
 if(data.indexOf("#") == 0){
   
    window.location.assign(sessionStorage.getItem("URL")+"/StsTestingjava/SectionPage.html");
    
   
 }
 
 
 if(data.indexOf("*") == 0){
   
     window.location.assign(sessionStorage.getItem("URL")+"/StsTestingjava/SectionPage.html");
    
    
    
 }
 

 
 
 // display data on the page
 } // end if
 } //




function con(e){
  //  window.alert("you have clicked me");
    
    e.preventDefault();
}


function kycode(e){
    
    if(e.keyCode == "13"){
      
        verify();
    }
    }
    


window.addEventListener("contextmenu",con,false);





window.addEventListener("load",start,false);
document.addEventListener("keypress",kycode,false);
 