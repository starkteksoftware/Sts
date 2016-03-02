/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function start(){
    document.getElementById("emailError").setAttribute("style","display:none");
        document.getElementById("lastError").setAttribute("style","display:none");
         document.getElementById("passwordError").setAttribute("style","display:none");
         document.getElementById("repasswordError").setAttribute("style","display:none");
      
         document.getElementById("firstError").setAttribute("style","display:none");
           document.getElementById("middleError").setAttribute("style","display:none");
           document.getElementById("mobileError").setAttribute("style","display:none");
           document.getElementById("genderError").setAttribute("style","display:none");
            document.getElementById("dateError").setAttribute("style","display:none");
            
    document.getElementById("signUp").addEventListener("click",sign,false);
    
    
}


function sign(){
    
   var error = false;
     document.getElementById("emailError").setAttribute("style","display:none");
       document.getElementById("passwordError").setAttribute("style","display:none");
         document.getElementById("repasswordError").setAttribute("style","display:none");
      document.getElementById("lastError").setAttribute("style","display:none");
         document.getElementById("firstError").setAttribute("style","display:none");
           document.getElementById("middleError").setAttribute("style","display:none");
           document.getElementById("mobileError").setAttribute("style","display:none");
           document.getElementById("genderError").setAttribute("style","display:none");
            document.getElementById("dateError").setAttribute("style","display:none");
            
            
     
      
    
   
     
    
    
    
 var email =   document.getElementById("email").value;
 var password = document.getElementById("password").value;
 var repassword = document.getElementById("repassword").value;
 
 
 var lastName=   document.getElementById("lastName").value;
  var firstName =  document.getElementById("firstName").value;
var middleName=    document.getElementById("middleName").value;
 var institution =   document.getElementById("institution").value;
 var countryCode =   document.getElementById("countryCode").value;
 var mobile = document.getElementById("mobile").value;
 
 var gender =   document.getElementById("gender").value;
 var month =   document.getElementById("month").value;
  var day =  document.getElementById("day").value;
 var year =   document.getElementById("year").value;
 
 
 
 
 
 
 if(email === null || email == ""){
     
     
     
     document.getElementById("emailError").setAttribute("style","display:block");
     error = true;
    
 }
  if(email.indexOf("@") > 0  && email.indexOf(".") > 0){
      
  }
  else{
      
      
     
     document.getElementById("emailError").setAttribute("style","display:block");
     error = true;
    
  }
 
 
 if(password === null || password == ""){
     document.getElementById("passwordError").setAttribute("style","display:block");
        error = true;
 }
 
 if(repassword === null || repassword == ""){
      document.getElementById("repasswordError").setAttribute("style","display:block");
      error = true;
      
 }
 
 
 if(password  != repassword){
         document.getElementById("repasswordError").setAttribute("style","display:block");
      error = true;
      
 }
 if(lastName === null || lastName == "" ){
     
     document.getElementById("lastError").setAttribute("style","display:block");
     
     error = true;
 }
 
 
 if(firstName === null  || firstName == ""){
     
     document.getElementById("firstError").setAttribute("style","display:block");
     error = true;
     
 }
 
 if(middleName === null  || middleName == "" ){
     document.getElementById("middleError").setAttribute("style","display:block");
     
     error = true;
 }
 
 if(institution === null   || institution == ""){
     
   //  document.getElementById("emailError").setAttribute("style","display:block");
     
      error = true;
 }
 
 if(countryCode === null){
    
       
 }
 
   if(mobile === null  || mobile == "" ){
      document.getElementById("mobileError").setAttribute("style","display:block");
      
     error = true;
   }
 if(gender === null   || gender == ""){
     document.getElementById("genderError").setAttribute("style","display:block");
     
      error = true;
 }
 
 if(month === null  || month == ""  ){
     document.getElementById("dateError").setAttribute("style","display:block");
     
   
     error = true;
 }
 
 
 if(day === null || day == ""  ){
     document.getElementById("dateError").setAttribute("style","display:block");
   
     
     
     error = true;
 }
 
 if(year === null  || year == "" ){
     document.getElementById("dateError").setAttribute("style","display:block");
   
     
     
     error = true;
     
 }
 
 
 if(error)
   return;
   
   
   
   
   var buildUrl = "email="+email+"&password="+password+ "&lastName="+lastName+"&firstName="+firstName+"&middleName="+middleName+"&institution="+institution+"&mobileNumber="+countryCode+mobile+"&gender="+gender+"&DOB="+month+"."+day+"."+year;
   
   
 
   
   var requestUrl = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/student/register?"+buildUrl;
   
   
   alert(requestUrl);
   
  
  
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
