/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var user;
var registeredStudents;
var currentExam ="";
var candidates="";
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

function messageBoxes(htmls,titles)
{
    $.Dialog({
        shadow:true,
        overlay:true,
        draggable:true,
        padding:10,
        width:400,
        flat:false,
        title:titles,
        content:htmls
        
    });
}

function dialogsInhere(htmls,titles){
    $.Dialog({
        shadow:true,
        overlay:true,
        draggable:true,
        padding:10,
        width:250,
        flat:false,
        title:titles,
        content:htmls
        
    });  
}

function verify(){
     localStorage.setItem("user","jolaade"); 
  user = localStorage.getItem("user");
 }
 
function start(){
    
    var ex = localStorage.getItem("ExamName");
    currentExam = ex;
    document.getElementById("explanation").innerHTML = ex;
    document.getElementById('pageTitle').innerHTML ="&nbsp;STS|&nbsp;"+ex;
    document.getElementById("subs").innerHTML = ex +"&nbsp;"+"Statistics";
    
      var url = document.referrer;


document.getElementById("backButton").href= url;
    //  if(i == 2){
     //         localStorage.setItem(ids+"Time",split[i]);
     //     }
   var scheduleDate = localStorage.getItem(ex+"Schedule");
    var schedule = localStorage.getItem(ex+"Time");
    var duration = localStorage.getItem(ex+"Duration");
    var regStudents = localStorage.getItem(ex+"Candidates");
    localStorage.setItem("ReportExam",ex);
    
    
    
    
    
  var sche =  document.getElementById("startTime");
  var dur =  document.getElementById("duration");
  var reg = document.getElementById("scheduled");
  
  
  sche.innerHTML = schedule;
  dur.innerHTML = duration +" mins";
  reg.innerHTML = regStudents;
  
  registeredStudents = regStudents;
  
    verify();
    document.getElementById("metadata").addEventListener("click",scheme,false);
    
    document.getElementById("viewStudents").addEventListener("click",students,false);
     document.getElementById("viewQuestions").addEventListener("click",questions,false);
    document.getElementById("time").addEventListener("click",addTime,false);
    document.getElementById("cancel").addEventListener("click",cancelExam,false);
    document.getElementById("end").addEventListener("click",endExam,false);
    document.getElementById("startDetails").addEventListener("click",startDetailsMethod,false);
    document.getElementById("presentCandidates").addEventListener("click",presentSocketCandidates,false);
        document.getElementById("candidatesSubmitted").addEventListener("click",allSubmittedCandidates,false);
           document.getElementById("presentStuds").addEventListener("click",allLoggedInCandidates,false);
          document.getElementById("inSessionsList").addEventListener("click",allInSessionCandidates,false);
                 document.getElementById("requestSchedule").addEventListener("click",students,false);
                  document.getElementById("inSessionsCancelled").addEventListener("click",sessCancelled,false);
                     document.getElementById("absentee").addEventListener("click",getSubmittedCandidates,false);
                    document.getElementById("getReport").addEventListener("click",getReports,false);  
              
              
              
                 
          
      
    
  if(localStorage.getItem(ex+"Name")){
         
         
 var splitted=  localStorage.getItem(ex+"Name");
 
 
 
  document.getElementById("cancelled").innerHTML= splitted.split(",").length;
  
    }
    
    
    
          
                
    
    
    
    
    
      connect();  
   
   
     var subject =  localStorage.getItem("ExamName");
  if(localStorage.getItem(subject+"Students")){
      str = localStorage.getItem(subject+"Students");
        populateSideBars();
      
       
        
     
  }
}

function addTime(){
    var text = "<html><head> <script src='OpenedExamTime.js' type='text/javascript'></script> </head> <body> <form> <input type='number'  id='number' />  <input type='button' id='button' value='Enter' /> </form> <div><label id='confirmation'></label></div>  </body> </html>";
    
      messageBox(text,localStorage.getItem("ExamName"));
}


function questions(){
  
    var text ='<!DOCTYPE html> <html> <head>    <script src="Questions.js" type="text/javascript"></script> </head> <body>'
      +'     <div class="span6">'
                    +'      <div>'
                      +'        &nbsp;'
                           
                      +'    </div>'
                      +'    <div class="clear" id="info"></div>'
               +'    <div class="clear" ></div>'
                      +'    <div id="questionHolder" class="vertical-scroll">'
                           +' </div>  '
                           +'      '
                              +'        '
                                +'        '
                                  +'       '
                            +'        '
                                  +'        '
                                   +'       '
                                   +'      '
                                  +'    '
                                +' '
                             +'     '
                               
                                   
                                    
                            +'      </tbody>'
                          +'    </table>'
                     

                 +'     </div>'
                  +'    <!--stats-->'
                   
 +' </body>'
 +' </html>';
  
    
   
   
   
    messageBox(text,localStorage.getItem("ExamName")+" Questions");
}
function sessCancelled(){
    var string =localStorage.getItem(localStorage.getItem("ExamName")+"Name").split(",");
    var text="";
    for(var c=0; c <string.length; c++ ){
        text+="<div>"+string[c]+"</div>";
        
    }
   dialogsInhere(string,"Session Cancelled");
   
} 


function students(){
 
   
   var text ='<!DOCTYPE html> <html> <head>    <script src="ExamStudents.js" type="text/javascript"></script> </head> <body>'
      +'     <div class="span6">'
                    +'      <div>'
                      +'        <input type="search" id="filter" placeholder="Filter by name/student number"/><button id="clicked" ><i class="icon-search"></i></button>&nbsp;'
                           
                      +'    </div>'
                      +'    <div class="clear"></div>'
                      +'    <div id="examStudentHolder" class="vertical-scroll">'
                           +'   <table class="table striped bordered">'
                           +'       <thead>'
                              +'        <tr class="success fg-white">'
                                +'          <th>S/N</th>'
                                  +'        <th>Name</th>'
                            +'        <th>Middle Name</th>'
                                  +'        <th>Gender</th>'
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
  
    
   
   
   
    messageBox(text,"View Students");
    
 
}


function scheme(){
    
    var html = "<table><tbody><tr><td>Grade:</td><td><input id='grade' type='text' class='gaptext'  style='width:30px;' /></td><td></td></tr><tr><td>show answer:</td><td><input id='answer' type='checkbox'/></td><td></td></tr><tr><td>Level Adder</td><td><input id='level' type='text' class='gaptext'  style='width:30px;'  /></td><td></td></tr><tr><td></td><td><button onclick='meta();' >Enter</button></td><td></td></tr></tbody></table>";
    
    messageBox(html);
    
}


function meta(){
  // alert("yeah");
    
  var grade =  document.getElementById("grade").value;
  var showA =  document.getElementById("answer").checked;
  
  var levelA = document.getElementById("level").value;
  
  
  var log = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/admin/set/password";
  
    var requestUrl = log+"?subject="+localStorage.getItem("ExamName")+"&status=8&grade="+grade+"&showAnswer="+showA+"&level="+levelA;
    
    
        //+ methodAndArguments;
        
  
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseI(asyncRequest);  //callBack( asyncRequest );
 }, false);  
     
    asyncRequest.open( "POST", requestUrl, true );
 asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
 asyncRequest.send(); // send request
 
  
  
  
}

function parseI(asyncRequest){
 
 
}

function cancelExam(){
  if(confirm('This Exam Will Not Produce Results If Terminated \n\
Are You Sure You Want To Proceed')){
     
    
    var result = window.prompt("Please Enter Admin Password To Cancel Exam ");
    
    
    if(result === "jolaade"){
        
        
    var text =  '<html> <body>  <label>Please Enter A Reason For Cancelling The Exam</label>' +
               '  <form id="form" action="'+sessionStorage.getItem("URL")+'/AAAASTUDENT/OngoingExams.html" >'+
                      '<input type="text" id="reason" required />' +
                      '<label>Cancel Exam</label>' +
                     '<div class="input-control switch"><label><input type="checkbox" id="enableAuto" /><span class="check"></span></label></div>'+
                      '<br/><br/><input type="button" onclick="cancelled();" id="button" value="Cancel Exam" />  </form></body></html> ';   
    
       messageBox(text,"Cancel Exam");
    }
    else{
        window.alert("You Have No Administrative  Rights To Cancel The Exam");
    }
}
else{
        alert("no");
}
}
function endExam(){
    if(confirm('Are You Sure You Want To End Exam And Grade Students ?\n\
')){
     
    
    var result = window.prompt("Please Enter Admin Password To Grade Students ");
    
    //verify password
    if(result === "jolaade"){
        
        
    var text =  '<html> <body>  <label>All Students Wil Be Graded</label>' +
               '  <form id="form" action="'+sessionStorage.getItem("URL")+'/AAAASTUDENT/OngoingExams.html" >'+
                   
                     '<div class="input-control switch"><label><input type="checkbox" id="enableAuto" /><span class="check"></span></label></div>'+
                      '<br/><br/><input type="button" onclick="examEnd();" id="button" value="Grade Students" />  </form></body></html> ';   
    
       messageBox(text,"Grade Exam");
    }
    else{
        window.alert("You Have No Administrative  Rights To End Exam");
    }
}
}

function examEnd(){
  var val = document.getElementById("enableAuto"); 
 
 if(val.checked){
     
     
   var name = localStorage.getItem("ExamName");  
   
   var subString = name.substring(name.length - 3,name.length);
   
  
   
 
   
  grade("grade:"+name+":"+subString);
     send(name,0);
     
     
     
      var logins = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b";
 
    var requestUrl = logins+"?subject="+name+"&status=2";
    
    
    
        //+ methodAndArguments;
        
  
    
   try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
/* asyncRequest.addEventListener("readystatechange",
 function() { 
            parseLogs(asyncRequest);  //callBack( asyncRequest );
 }, false);  */
     
    asyncRequest.open( "GET", requestUrl, true );
 asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
 asyncRequest.send(); // send request
 

 } // end try
 catch ( exception )
 {
 alert ( "Request Failed" );
 } // end catch
 

     
     
     document.getElementById("form").submit();
 }   
}

//to canel Exam
function cancelled(){
 var val = document.getElementById("enableAuto"); 
 
 if(val.checked){
   var name = localStorage.getItem("ExamName");  
     send(name,0);
     
     
       
      var logins = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b";
 

   var requestUrl = logins+"?subject="+name+"&status=3";
    
    
    
        //+ methodAndArguments;
        
  
    
   try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
/* asyncRequest.addEventListener("readystatechange",
 function() { 
            parseLogs(asyncRequest);  //callBack( asyncRequest );
 }, false);  */
     
    asyncRequest.open( "GET", requestUrl, true );
 asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
 asyncRequest.send(); // send request
 

 } // end try
 catch ( exception )
 {
 alert ( "Request Failed" );
 } // end catch
 

     
     
     document.getElementById("form").submit();
 }



}
function getActivePresentCandidates(){

 
   
    
    var text ='<!DOCTYPE html> <html> <head>    <script src="presentActiveStudents.js" type="text/javascript"></script> </head> <body>'
      +'     <div class="span6">'
                    +'      <div>'
                      +'        <input type="search" id="filterFind" placeholder="Filter by name/student number"/><button id="clickedFind" ><i class="icon-search"></i></button>&nbsp;'
                           
                      +'    </div>'
                      +'    <div class="clear"></div>'
                      +'    <div id="examStudentHolder" class="vertical-scroll">'
                           +'   <table class="table striped bordered">'
                           +'       <thead>'
                              +'        <tr class="info fg-white">'
                                +'          <th>S/N</th>'
                                  +'        <th>Student Number</th>'
                            +'             <th>Subject(s)</th>'
                                  +'        <th>Session State</th>'
                               //    +'       <th>Student Number</th>'
                                   +'       <th>Actions</th>'
                                  +'    </tr>'
                                +' </thead>'
                             +'     <tbody class="hovered" id="tableFind">'
                               
                                   
                                    
                            +'      </tbody>'
                          +'    </table>'
                     

                 +'     </div>'
                  +'    <!--stats-->'
                   
 +' </body>'
 +' </html>';
  
    
    messageBoxes(text,"Active Students"); 
    
   
}


function getSubmittedCandidates(){
    var logins = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b";

  var exam = localStorage.getItem("ExamName");


     
    var requestUrl = logins+"?subject="+exam;
   
    
      //+ methodAndArguments;
    try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseLoggerInfo(asyncRequest);  //callBack( asyncRequest );
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

function  parseLoggerInfo( asyncRequest )
 {
   
 // if request has completed successfully, process the response
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object

 var data = JSON.parse(asyncRequest.responseText);
candidates = data;




 
 
      
       localStorage.setItem("Absentee",candidates);
       
        
 
    var text ='<!DOCTYPE html> <html> <head>    <script src="absenteeTable.js" type="text/javascript"></script> </head> <body>'
      +'     <div class="span6">'
                    +'      <div>'
                      +'        <input type="search" id="filtersLook" placeholder="Filter by name/student number"/><button id="clickedsLook" ><i class="icon-search"></i></button>&nbsp;'
                           
                      +'    </div>'
                      +'    <div class="clear"></div>'
                      +'    <div id="examStudentHolder" class="vertical-scroll">'
                           +'   <table class="table striped bordered">'
                           +'       <thead>'
                              +'        <tr class="info fg-white">'
                                +'          <th>S/N</th>'
                                  +'        <th>Student Number</th>'
                            +'             <th>Subject(s)</th>'
                                  +'        <th>Session State</th>'
                                   +'       <th>Student Number</th>'
                                   +'       <th>Actions</th>'
                                  +'    </tr>'
                                +' </thead>'
                             +'     <tbody class="hovered" id="tableLook">'
                               
                                   
                                    
                            +'      </tbody>'
                          +'    </table>'
                     

                 +'     </div>'
                  +'    <!--stats-->'
                   
 +' </body>'
 +' </html>';
  
    
    messageBoxes(text,"Absent Students"); 
    
 
        
 // display data on the page
 } // end if
 } 
 

 var wsocket;

function connect(){
    var ex = localStorage.getItem("ExamName");   
   


wsocket = new WebSocket("ws://"+location.hostname+"/AAAACLIENT/endpoint?Supervisor="+user+"&subject="+ex);

wsocket.onmessage = onMessage;
}



function onMessage(e){
    
    var dat = e.data;
    
    
      if(dat.indexOf("submitCandidates*") != -1){
            var sep = e.data.toString().split("*");
   
    
 localStorage.setItem("submitActive",sep[1]);
        submittedRecieved();
 return;
          
      }
        if(dat.indexOf("AllPresent*") != -1){
           var sep = e.data.toString().split("*");
   
    
 localStorage.setItem("presentTotal",sep[1]);  
        presentSocketRecieved();
           return;
        }
          if(dat.indexOf("session*") != -1){
                 var sep = e.data.toString().split("*");
   
    
 localStorage.setItem("presentActive",sep[1]);  
        activeSockedRecieved();
        
           return;
          }
    
    if(dat.indexOf("activeCandidates*") != -1){
        
   
   
  
    var sep = e.data.toString().split("*");
   
    
 localStorage.setItem("activePresent",sep[1]);

        getActivePresentCandidates();
        
 

        return;
    }
   
    if(dat.indexOf("started") != -1){
  var spl = dat.split(":");
  
 var addUp = document.getElementById("startStudents").innerHTML;
  
 var number =  parseInt(addUp);
 var converter = parseInt(spl[1]);
   var result = number + converter;
   

   
   document.getElementById("startStudents").innerHTML = result;
   document.getElementById("startStudent").innerHTML = result;
   
 var pr = result;
 
 

var sum = 100 / registeredStudents;
var multiply = parseInt(pr);

var entity = multiply * sum;

  document.getElementById("attendance").innerHTML = entity+"%";
  
  
 var abs = registeredStudents - result;
 
 document.getElementById("absent").innerHTML = abs;
 
 
 
 var submit = document.getElementById("submitted").innerHTML;
      
       
       var subb = parseInt(submit);
     var sess =  result - subb;
       
        document.getElementById("inSession").innerHTML = sess;
        
 
  
   
    }
    
    if(dat.indexOf("submitted") != -1){
         var spl = dat.split(":");
         
        
         
         var submitteds = document.getElementById("submitted").innerHTML;
         
         var sub = parseInt(submitteds);
         var convert = parseInt(spl[1]);
         
         var report = sub + convert;
         
         document.getElementById("submitted").innerHTML = spl[1];
         
         
         var present =  document.getElementById("startStudents").innerHTML;
          
        
        var pres = parseInt(present);
        
        var sess = pres - report;
            document.getElementById("inSession").innerHTML = sess;
            
         
        
    }
}

function send(exam,time){
    var string = "^"+exam+":"+time;
    wsocket.send(string);
}


function sendMatriculation(matric,time){
  
    var string = "*"+matric+":"+time;
    wsocket.send(string);
    
}

function grade(string){
      wsocket.send(string);
}

function sendMatric(matric,time){
   
    
    var string = "*"+matric+":"+time;
    wsocket.send(string);
}

function sendFlag(string){

    wsocket.send(string);
}
function con(e){
  //  window.alert("you have clicked me");
    
    e.preventDefault();
}

function startDetailsMethod(){

 var startDate  = localStorage.getItem(currentExam+"Schedule");
    var startTime = localStorage.getItem(currentExam+"Time"); 
    var durationTime = localStorage.getItem(currentExam+"Duration");
    var context = "<b>Start Time:</b> "+startTime+" <br/> <b>End Time:</b>10:00pm <br/> <b>Start Date: </b>"+startDate+" <br/> <b>End Date :</b>"+"2012-23-23"+"<br/><b>Duration :</b>"+durationTime+"mins";
    
    
    
    
    dialogsInhere(context,"Exam Details");
    
    
    
    
}

function activeSockedRecieved (){
    
    
    var text ='<!DOCTYPE html> <html> <head>    <script src="presentActiveCandidatesSupervisor.js" type="text/javascript"></script> </head> <body>'
      +'     <div class="span6">'
                    +'      <div>'
                      +'        <input type="search" id="filterFindss" placeholder="Filter by name/student number"/><button id="clickedFindss" ><i class="icon-search"></i></button>&nbsp;'
                           
                      +'    </div>'
                      +'    <div class="clear"></div>'
                      +'    <div id="examStudentHolder" class="vertical-scroll">'
                           +'   <table class="table striped bordered">'
                           +'       <thead>'
                              +'        <tr class="info fg-white">'
                                +'          <th>S/N</th>'
                                  +'        <th>Student Number</th>'
                            +'             <th>Subject(s)</th>'
                                  +'        <th>Session State</th>'
                               //    +'       <th>Student Number</th>'
                                   +'       <th>Actions</th>'
                                  +'    </tr>'
                                +' </thead>'
                             +'     <tbody class="hovered" id="tableFindss">'
                               
                                   
                                    
                            +'      </tbody>'
                          +'    </table>'
                     

                 +'     </div>'
                  +'    <!--stats-->'
                   
 +' </body>'
 +' </html>';
  
    
    messageBoxes(text,"Active Students"); 
}

function presentSocketRecieved(){
  
  
    var text ='<!DOCTYPE html> <html> <head>    <script src="totalpresentCandidatesSupervisor.js" type="text/javascript"></script> </head> <body>'
      +'     <div class="span6">'
                    +'      <div>'
                      +'        <input type="search" id="filterFinds" placeholder="Filter by name/student number"/><button id="clickedFinds" ><i class="icon-search"></i></button>&nbsp;'
                           
                      +'    </div>'
                      +'    <div class="clear"></div>'
                      +'    <div id="examStudentHolder" class="vertical-scroll">'
                           +'   <table class="table striped bordered">'
                           +'       <thead>'
                              +'        <tr class="info fg-white">'
                                +'          <th>S/N</th>'
                                  +'        <th>Student Number</th>'
                            +'             <th>Subject(s)</th>'
                                  +'        <th>Session State</th>'
                               //    +'       <th>Student Number</th>'
                                   +'       <th>Actions</th>'
                                  +'    </tr>'
                                +' </thead>'
                             +'     <tbody class="hovered" id="tableFinds">'
                               
                                   
                                    
                            +'      </tbody>'
                          +'    </table>'
                     

                 +'     </div>'
                  +'    <!--stats-->'
                   
 +' </body>'
 +' </html>';
  
    
    messageBoxes(text,"Present Students"); 
    
}

function submittedRecieved(){
   
   
    
    var text ='<!DOCTYPE html> <html> <head>    <script src="submittedCandidatesSupervisor.js" type="text/javascript"></script> </head> <body>'
      +'     <div class="span6">'
                    +'      <div>'
                      +'        <input type="search" id="filterFindsss" placeholder="Filter by name/student number"/><button id="clickedFindsss" ><i class="icon-search"></i></button>&nbsp;'
                           
                      +'    </div>'
                      +'    <div class="clear"></div>'
                      +'    <div id="examStudentHolder" class="vertical-scroll">'
                           +'   <table class="table striped bordered">'
                           +'       <thead>'
                              +'        <tr class="info fg-white">'
                                +'          <th>S/N</th>'
                                  +'        <th>Student Number</th>'
                            +'             <th>Subject(s)</th>'
                                  +'        <th>Session State</th>'
                               //    +'       <th>Student Number</th>'
                                   +'       <th>Actions</th>'
                                  +'    </tr>'
                                +' </thead>'
                             +'     <tbody class="hovered" id="tableFindsss">'
                               
                                   
                                    
                            +'      </tbody>'
                          +'    </table>'
                     

                 +'     </div>'
                  +'    <!--stats-->'
                   
 +' </body>'
 +' </html>';
  
    
    messageBoxes(text,"Submitted Students");  
}


function presentSocketCandidates(){
   
   
    
    var string = "Active:"+currentExam;
    wsocket.send(string);
    
}

function allLoggedInCandidates(){
  var string = "AllPresent:"+currentExam;
    wsocket.send(string);  
}
function allSubmittedCandidates(){
   
   var string = "submitAll:"+currentExam;
    wsocket.send(string);  
}
function allInSessionCandidates(){
      var string = "AllSession:"+currentExam;
    wsocket.send(string);  
    
}

function getReports(){
    
      var text ='<!DOCTYPE html> <html> <head>    <script src="Reporting.js" type="text/javascript"></script> </head> <body>'
      +'     <div class="span6">'
                    +'      <div>'
                      +'        <input type="search" id="TableReports" placeholder="Filter by name/student number"/><button id="clickedFindsss" ><i class="icon-search"></i></button>&nbsp;'
                           
                      +'    </div>'
                      +'    <div class="clear"></div>'
                      +'    <div id="examStudentHolder" class="vertical-scroll">'
                           +'   <table class="table striped bordered">'
                           +'       <thead>'
                              +'        <tr class="info fg-white">'
                                +'          <th>S/N</th>'
                                  +'        <th>Exam Name</th>'
                            +'             <th>Date/ Time</th>'
                             
                                   +'       <th>Actions</th>'
                                  +'    </tr>'
                                +' </thead>'
                             +'     <tbody class="hovered" id="tableReport">'
                               
                                   
                                    
                            +'      </tbody>'
                          +'    </table>'
                     

                 +'     </div>'
                  +'    <!--stats-->'
                   
 +' </body>'
 +' </html>';
  
    
    messageBoxes(text,"Result Sheet"); 
    
    
}


window.addEventListener("contextmenu",con,false);

window.addEventListener("load",start,false);