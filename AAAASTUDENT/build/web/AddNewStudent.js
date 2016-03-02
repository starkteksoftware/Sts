/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
 var firstName;
    var lastName;
    var middle;
    var gen;
    var studNumber;

var hide;
function start(){
    
  
  hide = document.getElementById("invalid");
    hide.setAttribute("style","display:none");
    document.getElementById("totalStudents").innerHTML =  localStorage.getItem("TotalStudents");
    
  
    var sub = document.getElementById("submit").addEventListener("click",verify,false);

  
    
}

function getAction(){
   
    
    return sessionStorage.getItem("URL")+"/AAAACLIENT/FormServlet";
    
}

function loaded(){
 
   var p = document.getElementById("pic").value;
   alert(p.value);
   
}


function verify(){
     firstName = document.getElementById("fName").value;
     lastName = document.getElementById("lName").value;
     middle = document.getElementById("mName").value;
     gen = document.getElementById("gender").value;
     studNumber = document.getElementById("studentNo").value;
    
    if(firstName === null || firstName.length === 0){
      hide.setAttribute("style","display:block");
 }
     if(lastName === null || lastName.length === 0){
      hide.setAttribute("style","display:block");
 }
 
   if(middle === null || middle.length === 0){
      hide.setAttribute("style","display:block");
 }
 
     if(gen === null || gen.length === 0){
      hide.setAttribute("style","display:block");
 }
 
     if(studNumber === null || studNumber.length === 0){
      hide.setAttribute("style","display:block");
 }
 
 var string  = lastName+","+firstName+","+middle+","+studNumber+","+gender;
 localStorage.setItem("StudentName",string);
 
 if(hide.offsetParent === null){
       post();
        
       document.getElementById("form").action = getAction();
      
        
      }
 
 
 return;
    
    
}


var login = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/state/register/insert/test/query/student/registerStud";

function post(){
 
    localStorage.setItem("NewStudent","false");
    
      var requestUrl = login+"?first="+firstName+"&last="+lastName+"&middle="+middle+"&gender="+gen+"&number="+studNumber; 


    
 
 
 
// forms.submit();
       try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseLog(asyncRequest);  //callBack( asyncRequest );
 }, false);
     
    asyncRequest.open( "GET", requestUrl, true );
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
 
 document.getElementById("form").submit();
 
 var data = JSON.parse(asyncRequest.responseText);
 alert(data);

if(data == ""){
    alert("data is true");
}


 // display data on the page
 } // end if
 } //


function con(e){
  //  window.alert("you have clicked me");
    
    e.preventDefault();
}




window.addEventListener("contextmenu",con,false);

window.addEventListener("load",start,false);