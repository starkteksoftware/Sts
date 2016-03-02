/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var hide;
var user;
var password;
var locations = "";
var URL ="";




function start(){
    
    
   URL = location.protocol +"//"+ location.host;
 locations =  location.protocol;
     hide = document.getElementById('invalid');
    hide.setAttribute("style","display:none");
   document.getElementById("logger").addEventListener("click",verify,false);

localStorage.clear();

 var url = document.URL;
     var ipConfig = url.split(":");
    
  var ip =   ipConfig[1].split("//");
 
     sessionStorage.setItem("URL",URL);
     
    alert( sessionStorage.getItem("URL"));
    
    
     
     
  

}

function verify(){
  hide.setAttribute("style","display:none");
  
   
  user = document.getElementById("username").value;
  password =document.getElementById("pwd").value;

     localStorage.setItem("UserName",user);
 
 if(user === null || user.length === 0){
      hide.setAttribute("style","display:block");
 }
 
 if(password === null || password.length === 0){
      hide.setAttribute("style","display:block");
 }
 
  if(hide.offsetParent === null){
      log();
       // checkuserName();
      }
 
 
 return;
    
}





function checkuserName(){

  document.getElementById("forms").action = getAction(); 
   // document.getElementById("forms").submit();
    
   
    
}
var login = "/AAAACLIENT/webresources/exam/admin/verify/a/a/a/a/a/a/a/a/a/a/a";



function log(){
    
    
//matricNumber = document.getElementById("matric").value;
//alert(location.protocol+"//"+location.hostname);

localStorage.clear();




     var url = document.URL;
     var ipConfig = url.split(":");
    
  var ip =   ipConfig[1].split("//");
 
     localStorage.setItem("Ip",ip[1]);
    
     
      localStorage.setItem("UserName",user);
var logs = location.host;


   // var requestUrl = logs+
   var loc = location.protocol+"//";
   
   
   
   
   
   
   
  var requestUrl= sessionStorage.getItem("URL")+login+"?username="+user+"&password="+password; //+"?matric="+matricNumber;
   // alert(requestUrl);
    
    
    
    
    
        //+ methodAndArguments;
        
  
  
    
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
 alert ( "Request Failed" );
 } // end catch
 

    
}
function parseLog( asyncRequest )
 {
   
 
   
 // if request has completed successfully, process the response
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object

 var data = JSON.parse(asyncRequest.responseText);
 
    //    alert(data);
        
 

if(data == "true"){
 document.getElementById("forms").action = getAction();
  document.getElementById("forms").submit();
  


}
else{
        hide.setAttribute("style","display:block");
        
}



 // display data on the page
 } // end if
 } //
 
 
 function getAction(){
     var logs = location.host;
     
     var loc = location.protocol+"//";
     return sessionStorage.getItem("URL")+"/AAAASTUDENT/OngoingExams.html";
     
     
     
     
     
 }
function code(e){
if(e.keyCode === 13){
        verify();  
}
}

function con(e){
  //  window.alert("you have clicked me");
    
    e.preventDefault();
}




window.addEventListener("contextmenu",con,false);


window.addEventListener("load",start,false);
document.addEventListener("keypress",code,false);