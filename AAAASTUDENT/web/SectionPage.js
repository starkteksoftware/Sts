/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var str;
var value="";

var matriculation ="";
var subjectExam ="";

var login = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b";
var activeStudent = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b";
var logins = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/student/matric";
var details;
function logs(){

 
  var cc = localStorage.getItem("name");

  
 
  
  
var matricNumber = cc;

    var requestUrl = logins+"?matric="+matricNumber;
    
    
        //+ methodAndArguments;
        
  
    
   try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseLogs(asyncRequest);  //callBack( asyncRequest );
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
function parseValue()
 {
   
 // if request has completed successfully, process the response
 
 // convert the JSON string to an Object


 var data =  localStorage.getItem("detail");
 value = data;
 
        
       
       

if(data.indexOf("session active") != -1){
    alert("session active ");
    
   
    return;
}



if( data === "false"){
    window.alert("please you have not registered");
     return;
    
    
}






    var splif = data.split("#");
    var spliffed = splif[1];
    var sect = spliffed.split(",");
  details = "&Last="+sect[0]+"&first="+sect[1]+"&matric="+sect[4];
  
    
    log();

 // display data on the page
 } // end if
 








function log(){
 


 var cc = localStorage.getItem("name");
    var requestUrl = login+"?id="+cc;
    
    
        //+ methodAndArguments;
        
  
    
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
 asyncRequest.send(); // send request
 

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
 
        str = data;
      // callpopulator();
        arrange();
 // display data on the page
 } // end if
 } //
 
 function parseLogging( asyncRequest )
 {
   
 // if request has completed successfully, process the response
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object

 var data = JSON.parse(asyncRequest.responseText);
 

 
     if(data.indexOf("#false") != -1){
         alert("candidate has  failed to complete an exam, please submit previous exam before starting a new one ");
         window.location.assign(sessionStorage.getItem("URL")+"/AAAASTUDENT/SectionPage.html");
         
       
             
     }
 
 
 
 
      if(data === "false"){
          alert(" candidate may have finished exam");
          
      }  
      else{
         
         if(data.indexOf("time=") == -1){
             
            
              return;
              
         }
          var time1 = data.split("time=");
          
       
          var time2 = time1[1].split("&");
          
          var time = time2[0];
          
         
          
          localStorage.setItem("time",time);
          
          var answers = time1[1].split("&answers=");
          var answer = answers[1];
         
          
          localStorage.setItem("answers",answer);
          
         
         
          
          
          
           // log();
          
          
          
          
      }
 }
 }
 
 
 function callpopulator(){
     
    

 
  
    
   

  
     
     
  var lists =   document.getElementById("list");
  
  var split = str.split(",");
  var add="";
  
  for(var c = 0; c < split.length; c++){
    // add+="<li id='lister'>" +split[c]+"</li>"; 
    add+="<li>"+"<a href='index.html?query="+split[c]+details+"'>"+split[c]+"</a></li>";
    
      
  }
  
  lists.innerHTML = add;
  
  
  
 }




function clicked(e){
    
   
    
    if(e.target.tagName == "I"){
      
        
      //  localStorage.setItem("LogInDetails",e.target.id);
     if ( value.indexOf("*") != -1){
        
           var splitted = e.target.id.toString().split("&");
      var subject = splitted[0];
      var splitter = splitted[3].split("=");
      var mat = splitter[1];
      matriculation = mat;
      subjectExam = subject;
      getActiveStudents();
    
      
     }
         
         
         alert(e.target.id);
         
        document.getElementById("picker").setAttribute("style","display:none");
        document.getElementById("rules").setAttribute("style","display:block");
        document.getElementById("linkage").href = "index.html?query="+e.target.id;
        
        
        
        
    }
    
    
}

function arrange(){
    
    alert(str);
    
      var table = document.getElementById("tableBody");  
     
     var sec = str.split("#");
    
     
     var tableAdd;
     
     var addUp;
 
     var ids="i know";
     
     
     for( var c = 1; c < sec.length; c++){
        
        
        
       var split = sec[c].split(",");
       
  
     var join = "";
   
     
     
       for( var i = 0; i < split.length; i++){
           
           if(i == 0){
              
               join+="<td>"+c+"</td>";
               
               ids=split[i]+details;
               
           }
           
          
           
        
           
         join+="<td>"+split[i]+"</td>"; 
       }
      
       
       join+= "<td><a href='#'data-hint='Start Exam' title='start Exam' class='fg-darkGreen'><i id='"+ids+"' class='icon-open'></i></a></td>";
 
         
     var addition ="<tr>";
    
     addition+=join;
      addition+="</tr>";
    //  totalStudents.push(addition);
       addUp+=addition;
      
        
         
     }
     
  
     
     
     var copy;
     var addSplit = addUp.split("undefined");
   for(var ii =0; ii < addSplit.length; ii++){
       if(addSplit[ii].indexOf("undefined") >= 0){
           
       }
       else{
           copy+=addSplit[ii];
           
       }
   }
     
     var splitAgain = copy.split("undefined");
     
     
     
     

     
    
     
     table.innerHTML += splitAgain[1];
     
     
     
     
     
     
     
     
     
 }
 
 
 
 
 
function con(e){
  //  window.alert("you have clicked me");
    
    e.preventDefault();
}

function getActiveStudents(){
    alert(matriculation +" "+subjectExam);
      var requestUrl = activeStudent+"?matric="+matriculation+"&subject="+subjectExam;
        //+ methodAndArguments;
        
    
   try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseLogging(asyncRequest);  //callBack( asyncRequest );
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


//window.addEventListener("contextmenu",con,false);


window.addEventListener("load",parseValue,false);
document.addEventListener("click",clicked,false);









