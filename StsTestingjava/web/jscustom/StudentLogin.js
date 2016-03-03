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
    $("#invalids").hide();
   var url = document.URL;
     var ipConfig = url.split(":");
    
  var ip =   ipConfig[1].split("//");
 
     localStorage.setItem("Ip",ip[1]);
  
 sessionStorage.setItem("URL",URL);
  $("#nexts").hide();
  $("#next").hide();
    document.getElementById("logger").addEventListener("click",verify,false);
    document.getElementById("createAccount").addEventListener("click",create,false);
}

function create(){
    
    $("#nexts").show();
    
    $("#statTexts").hide();
    var last = document.getElementById("lastCreate").value;
    var first = document.getElementById("firstCreate").value;
    var other = document.getElementById("otherCreate").value;
    var email = document.getElementById("emailCreate").value;
    var password = document.getElementById("passwordCreate").value;
    
    if(last.length <= 1 || last === null ){
        $("#statTexts").html("Enter a valid last name");
        $("#statTexts").show();
        return;
    }
    if(first.length <= 1 || first === null ){
         $("#statTexts").html("Enter a valid first name");
        $("#statTexts").show();
        
        return;
    }
    if(other.length <= 1 || other === null ){
         $("#statTexts").html("Enter your other name");
        $("#statTexts").show();
        
        return;
    }
    if(email.length > 5 || email !== null ){
        
        if(email.indexOf("@") === -1 || email.indexOf(".") === -1){
        $("#statTexts").html("Enter a valid Email address");
        $("#statTexts").show();
            return;
        }
       
    }
    else{
         $("#statTexts").html("Enter an email address");
        $("#statTexts").show();
        return;
    }
    if(password.length <= 5 || password === null ){
         $("#statTexts").html("Enter a password with at least 5 characters");
        $("#statTexts").show();
        return;
    }
    
    
    
      
   
   
   var buildUrl = "email="+email+"&password="+password+ "&lastName="+last+"&firstName="+first+"&middleName="+other+"&gender="+"M";//"&institution="+institution+"&mobileNumber="+countryCode+mobile+"&gender="+gender+"&DOB="+month+"."+day+"."+year;
   
   
 
   
   var requestUrl = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/student/register?"+buildUrl;
   
    try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseData(asyncRequest);  //callBack( asyncRequest );
 }, false);
     
     
    asyncRequest.open( "POST", requestUrl, true );
 asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
 asyncRequest.send(); // send request
 

 } // end try
 catch ( exception )
 {
 alert ( "Request Failed" );
 } // end catch
  


function parseData(asyncRequest){
 
  if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object


 //var data = JSON.parse(asyncRequest.responseText);

 var data = JSON.parse(asyncRequest.responseText);
 
 if(data.indexOf("matric") !==  -1){
     var sep = data.split(":");
     if(sep[1].indexOf("\"") !== -1)
        log(sep[1].split("\"")[0],document.getElementById("passwordCreate").value);
     else{
        log(sep[1],document.getElementById("passwordCreate").value);
         }
     
 }else{
      $("#statTexts").html("Error Signing up, please contact administrator");
        $("#statTexts").show();
 }
 }
 }
 




    
    
}

function verify(){
  $("#next").show();
   $(".red").hide();
    $("#invalid").hide();
     $("#invalids").hide();
  user = document.getElementById("username").value;
  password =document.getElementById("pwd").value;
  
 localStorage.setItem("user", user);
 
 
 
 if(user === null || user.length === 0){
          $("#invalid").show();
  return;
 }
 
 if(password === null || password.length === 0){
          $("#invalid").show();
   return;
 }
 
 
 log();
 
 return;
    
}

function checkuserName(){
  
    
    
}




function log(matrics,passwords){
  
   
  
    $("#invalids").hide();
     $("#invalid").hide();
    
    
var login = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/student/matric";

  
  matricNumber = document.getElementById("username").value;
  var pass =document.getElementById("pwd").value;
var requestUrl;

    if(matrics !== undefined && passwords !== undefined){
     
     requestUrl = login+"?matric="+matrics+"&password="+passwords;
     
    }
    else{
       requestUrl = login+"?matric="+matricNumber+"&password="+pass;  
       
    }
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
      
      $("#nexts").hide();
      $("#next").hide();
         
         
       
if(data === "true"){
   
          
   
}
if(data === "Invalid password"){
     $("#invalid").show();
    
    return;
}
if(data ==="session active"){
    
     
      
    
      
  
    $("#invalids").show();
    
    return;
}
if(data === "false"){
    $("#invalids").show();
    
    
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
 