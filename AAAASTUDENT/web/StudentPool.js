/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var str;
var login = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/state/register/insert/test/query/student/registerStud/totalStudents";
var totalStudents = [];
var logins = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/state/register/insert/test/query/student/registerStud/totalStudents/students";
var  totalStudentPool =[];
function sub(){
  
    
    localStorage.setItem("ScheduleExam","false");
var subject = localStorage.getItem("ExamName");


 var requestUrl = logins+"?students="+totalStudents+"&exam="+subject;
 
 
 
 

 
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

 asyncRequest.send();
 
 
 
 

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
 localStorage.setItem("ScheduleExam","false");
 
        
        var data = JSON.parse(asyncRequest.responseText);
 
        
 
  




 // display data on the page
 } // end if
 } //
 


function post(){
    
    document.getElementById("enter").addEventListener("click",sub,false);
    var subject = localStorage.getItem("ExamName");
    document.getElementById("pageTitle").innerHTML = "&nbsp;STS|&nbsp;"+subject;
      document.getElementById("totalPendingStudent").innerHTML =  localStorage.getItem("ExamStudents"); 
    document.getElementById("totalPending").innerHTML=   localStorage.getItem("ExamTotal");  
     document.getElementById("showPendingExam").addEventListener("click",show,false);
 document.getElementById("pending").addEventListener("click",pendingExam,false);
 document.getElementById("examRegistered").innerHTML+= "&nbsp;"+subject;
 if(localStorage.getItem("student") !== null)
 document.getElementById("examRegisteredCount").innerHTML =localStorage.getItem("student").toString().split(",").length;
else  document.getElementById("examRegisteredCount").innerHTML = "0";
    document.getElementById("examStudents").addEventListener("click",popUp,false);
    
    
     var url = document.referrer;


document.getElementById("backButton").href= url;
document.getElementById("explanation").innerHTML = subject;

      var requestUrl = login+"?examName="+subject; 
      
    
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

 var data = JSON.parse(asyncRequest.responseText);
 
        
       

str = data.toString();


        arrange();


 // display data on the page
 } // end if
 } //
 
 
 
 function arrange(){
     
    var t =  document.getElementById("checkall").addEventListener("click",clickedBox,false);
     
      var registered= localStorage.getItem("RegisterFor"); 
    
     
     document.getElementById('exams').innerHTML = registered;
     var   submit = document.getElementById("clicked");
    submit.addEventListener("click",search,false);
   document.getElementById("filter").addEventListener("keydown",keydown,false);
    document.getElementById("excel").addEventListener("click",files,false);



     
     var table = document.getElementById("studentTable");
     
     var sec = str.split("#");
     
     var tableAdd;
     
     var addUp;
 
     
     
     
     for( var c = 1; c < sec.length; c++){
        
       var split = sec[c].split(",");
       
      
     var join = "";
     var id="";
    
     
     
       for( var i = 0; i < split.length; i++){
         if(i == 0){
             join+="<td>"+c+"</td>";
         }
         
         if(i == 4){
             
         
          id = split[i];   
         }
           
         join+="<td>"+split[i]+"</td>"; 
       }
       join+=  "  <td>  <input type='checkbox' id='"+id+"' /></td>";
       
     
     var addition ="<tr>";
     
     addition+=join;
      addition+="</tr>";
       addUp+=addition;
      
      
        totalStudentPool.push(addition+"*split");
         
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


function clickedBox(e){
   
    if(e.target.checked){
      
        var c =   document.getElementById("studentTable").innerHTML;
        
       var splits = c.toString().split("</tr>");
       
       for(var i = 0; i < splits.length; i++){
          var splitId = splits[i].split('"');
            totalStudents.push(splitId[3]);
            
            document.getElementById(splitId[3]).checked = true;
            
             
       }
       
    }
    else{
        var c =   document.getElementById("studentTable").innerHTML;
       var splits = c.split("</tr>");
       
       for(var i = 0; i < splits.length; i++){
          var splitId = splits[i].split('"');
         
            var index = totalStudents.indexOf(splitId[3]);
              totalStudents.splice(index,1);
            document.getElementById(splitId[3]).checked = false;
            
            
            
       } 
    }
}


function check(e){
    
    
   var index = totalStudents.indexOf(e.target.id);
  
   
   if(index >= 0){
      totalStudents.splice(index,1);
  }
   else{
        
    totalStudents.push(e.target.id);
    
   }
    
    
    
}


function keydown(e){
    
    
    
     search();
   
     
     
 }
 
 function search(){
     
     
     
      var filt = document.getElementById("filter");
    
     if( filt.value.length > 0 ){
           
         document.getElementById("studentTable").innerHTML = "<tr><td></td><td></td><td>Searching.............</td><td></td><td></td><td></td></tr>";    
       //  noresult = true;
       
         var sep = totalStudentPool.toString();
         
  
      
         
         var value = filt.value.trim();
         var splitteds =  sep.split("*split,");
        var check = false;
         var additioned;
         for(var c =0; c < splitteds.length; c++){
             if(splitteds[c].indexOf(value) >0){
                 //need to get the id for all checkboxes
              
             // var splitId = splitteds[c].split("'");
              //alert(splitId[3]);
                 additioned+=splitteds[c]+"*split";
                 check = true;
             }
         }
         
         if(check){
             
         //  noresult = false;
             var copy="";
     var addSplit = additioned.split("undefined");
   
   for(var ii =0; ii < addSplit.length; ii++){
       if(addSplit[ii].indexOf("undefined") >= 0){
         
       }
       else
           
           copy+=addSplit[ii];
           
       }
   }
   
  
    // var splitAgain = copy.split("");
     //i split with split,
     
  var seperator = copy.split("*split");

  var tabAdder="";
  for(var ii = 0; ii < seperator.length; ii++){
      
      if(seperator[ii] == "*split"){
          
      }
      else{
      tabAdder+=seperator[ii];
      }
  }

           document.getElementById("studentTable").innerHTML = tabAdder;   
           
         }
         else{
            
                      
               
              
          
         }
         
 }
 
function con(e){
  //  window.alert("you have clicked me");
    
    e.preventDefault();
}



 function files(){
    var c = document.getElementById("fileAdder").value;
 
   
   var splitter = c.split("\\");
   alert(splitter[2]);
   
   
  
  
  
    var logUser = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b?file="+splitter[2];
   var exam =  localStorage.getItem("ExamName");
 
 
 
   var requestUrl = logUser+"&exam="+exam;
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
var data = JSON.parse(asyncRequest.responseText);
 localStorage.setItem("ScheduleExam","false");
document.getElementById("errorFile").innerHTML=data;
 }
 }
 
 
 

function show(){
     var text ='<!DOCTYPE html> <html> <head>    <script src="pendingExamDialog.js" type="text/javascript"></script> </head> <body>'
      +'     <div class="span6">'
                    +'      <div>'
                      +'        <input type="search" id="filters" placeholder="Filter by name/student number"/><button id="clickeds" ><i class="icon-search"></i></button>&nbsp;'
                           
                      +'    </div>'
                      +'    <div class="clear"></div>'
                      +'    <div id="examStudentHolder" class="vertical-scroll">'
                           +'   <table class="table bordered">'
                           +'       <thead>'
                              +'        <tr class="error fg-white">'
                                +'          <th>S/N</th>'
                                  +'        <th>Exam</th>'
                            +'             <th>Exam-Date</th>'
                                  +'        <th>Time</th>'
                                   +'       <th>Candidates</th>'
                                   +'       <th>Duration</th>'
                               +'       <th>Action</th>'
                                  +'    </tr>'
                                +' </thead>'
                             +'     <tbody class="hovered" id="tableBodys">'
                               
                                   
                                    
                            +'      </tbody>'
                          +'    </table>'
                     

                 +'     </div>'
                  +'    <!--stats-->'
                   
 +' </body>'
 +' </html>';
  
    
   
   
 
    messageBox(text,"Pending exams");
    
}



 function pendingExam(){
     
var schedStud = document.getElementById("totalPendingStudent").innerHTML;

 if(schedStud.toString() == "0"){
       document.getElementById("textData").setAttribute("style","color:red;");
  
  document.getElementById("textData").innerHTML = "No available scheduled candidate";
   return;
 }
   document.getElementById("textData").setAttribute("style","color:black;");
  
  document.getElementById("textData").innerHTML = "";
   
   
   
   var text ='<!DOCTYPE html> <html> <head>    <script src="PendingStudentScript.js" type="text/javascript"></script> </head> <body>'
      +'     <div class="span6">'
                    +'      <div>'
                      +'        <input type="search" id="filter" placeholder="Filter by name/student number"/><button id="clicked" ><i class="icon-search"></i></button>&nbsp;'
                           
                      +'    </div>'
                      +'    <div class="clear"></div>'
                      +'    <div id="examStudentHolder" class="vertical-scroll">'
                           +'   <table class="table hovered">'
                           +'       <thead>'
                              +'        <tr class="error fg-white">'
                                +'          <th>S/N</th>'
                                  +'        <th>Name</th>'
                            +'             <th>Subject</th>'
                                  +'        <th>Session State</th>'
                                   +'       <th>Student Number</th>'
                                   +'       <th>Actions</th>'
                                  +'    </tr>'
                                +' </thead>'
                             +'     <tbody class="hovered" id="tableBody">'
                               
                                   
                                    
                            +'      </tbody>'
                          +'    </table>'
                     

                 +'     </div>'
                  +'    <!--stats-->'
                   
 +' </body>'
 +' </html>';
  
    
   
   
 
    messageBox(text,"Pending Exam Students");
    
    
    
 }


function popUp(){
   var schedStud = document.getElementById("examRegisteredCount").innerHTML;

 if(schedStud.toString() == "0"){
       document.getElementById("textData").setAttribute("style","color:red;");
  
  document.getElementById("textData").innerHTML = "No available scheduled candidate";
   return;
 }
   document.getElementById("textData").setAttribute("style","color:black;");
  
  document.getElementById("textData").innerHTML = "";
   
   
   
   var text ='<!DOCTYPE html> <html> <head>    <script src="ExamCandidateScript.js" type="text/javascript"></script> </head> <body>'
      +'     <div class="span6">'
                    +'      <div>'
                      +'        <input type="search" id="filterS" placeholder="Filter by name/student number"/><button id="clicked" ><i class="icon-search"></i></button>&nbsp;'
                           
                      +'    </div>'
                      +'    <div class="clear"></div>'
                      +'    <div id="examStudentHolder" class="vertical-scroll">'
                           +'   <table class="table hovered">'
                           +'       <thead>'
                              +'        <tr class="error fg-white">'
                                +'          <th>S/N</th>'
                                  +'        <th>Student Name</th>'
                            +'             <th>Student Number</th>'
                                  +'        <th>Actions</th>'
                               //    +'       <th>Student Number</th>'
                                 //  +'       <th>Actions</th>'
                                  +'    </tr>'
                                +' </thead>'
                             +'     <tbody class="hovered" id="tableBodySE">'
                               
                                   
                                    
                            +'      </tbody>'
                          +'    </table>'
                     

                 +'     </div>'
                  +'    <!--stats-->'
                   
 +' </body>'
 +' </html>';
  
    
   
   
 
    messageBox(text,"Pending Exam Students");
    
    
    
}


function messageBox(htmls,titles)
{
    $.Dialog({
        shadow:true,
        overlay:true,
        draggable:true,
        padding:10,
        width:400,
        flat:true,
        title:titles,
        content:htmls
        
    });
}
 
 


window.addEventListener("contextmenu",con,false);

window.addEventListener("load",post,false);
document.addEventListener("click",check,false);