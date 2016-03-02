/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
//var logins = "http://localhost:8080/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b";
var mat;
var regCourses="";
var completedCourses="";
var missedExamsCourses = "";
function start(){
   document.getElementById("totalStudents").innerHTML = localStorage.getItem("TotalStudents");
  var student = localStorage.getItem("StudentName");
    var url = document.referrer;


document.getElementById("backButton").href= url;
 
  var split = student.split(",");
  


  document.getElementById("explanation").innerHTML = split[0]+" "+split[1]; 
   document.getElementById("student").innerHTML = split[3];
   
  document.getElementById("pageTitle").innerHTML = "&nbsp;STS|  &nbsp;"+split[0]+" "+split[1]; 
  
mat = split[3];

 
 document.getElementById("studentImage").src =  sessionStorage.getItem("URL")+"/AAAACLIENT/ImageRetriever?image="+mat;



document.getElementById("deleteStudent").addEventListener("click",deleted,false);
document.getElementById("registeredTotal").addEventListener("click",showRegisteredExamsTable,false);
document.getElementById("completedTotal").addEventListener("click",showCompletedExamsTable,false);
document.getElementById("missedTotal").addEventListener("click",missedExamsTable,false);





  getRegisteredExamFromObject();
  getCompletedExams();
    missedExam();
    
  
   }
   
   function missedExam(){
          var login = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b"; 
 
  var requestUrl = login+"?matric="+mat+"&examName=jols&status=2";
    
    
        //+ methodAndArguments;
        
  
    
   try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseLogInfos(asyncRequest);  //callBack( asyncRequest );
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
   
    function parseLogInfos(asyncRequest ){
   if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object

 var data = JSON.parse(asyncRequest.responseText);

missedExamsCourses = data;


       document.getElementById("totalMissed").innerHTML = missedExamsCourses.split("#").length-1;
       
        var student = localStorage.getItem("StudentName");
   var split = student.split(",");
   
   
   
       localStorage.setItem(split[3]+"MissedCourses",missedExamsCourses);
     
 }
 
   }   
   
   
   function getCompletedExams(){
        var login = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b"; 
 
  var requestUrl = login+"?matric="+mat+"&examName=jols&status=1";
    
    
    
    
        //+ methodAndArguments;
        
  
    
   try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseLogInfo(asyncRequest);  //callBack( asyncRequest );
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
   
   function parseLogInfo(asyncRequest ){
   if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object

 var data = JSON.parse(asyncRequest.responseText);
 completedCourses = data;
    
       document.getElementById("totalCompleted").innerHTML = completedCourses.split("#").length-1;
       
        var student = localStorage.getItem("StudentName");
   var split = student.split(",");
   
   
   
       localStorage.setItem(split[3]+"CompletedCourses",completedCourses);
       
       
 }
 
   }   
   function getRegisteredExamFromObject(){
       var login = location.protocol+"//"+location.hostname+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b";




  var requestUrl = login+"?id="+mat;
    
    
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
 
        regCourses = data;
      // callpopulator();
    //   alert(regCourses);
       document.getElementById("totalRegistered").innerHTML = regCourses.split("#").length-1;
       
        var student = localStorage.getItem("StudentName");
   var split = student.split(",");
   
   
   
       localStorage.setItem(split[3]+"Courses",regCourses);
       
 
        
        
       
 // display data on the page
 } // end if
 } //
 
 function missedExamsTable(){
     var text ='<!DOCTYPE html> <html> <head>    <script src="missedExamStudent.js" type="text/javascript"></script> </head> <body>'
      +'     <div class="span6">'
                    +'      <div>'
                      +'        <input type="search" id="filter" placeholder="Filter by name/student number"/><button id="clicked" ><i class="icon-search"></i></button>&nbsp;'
                           
                      +'    </div>'
                      +'    <div class="clear"></div>'
                      +'    <div id="examStudentHolder" class="vertical-scrolls">'
                           +'   <table class="table striped bordered">'
                           +'       <thead>'
                              +'        <tr class="error fg-white">'
                                +'          <th>S/N</th>'
                                  +'        <th>Exam Subject</th>'
                            +'             <th>Start-Date</th>'
                                  +'        <th>Start-Time</th>'+'<th>Candidates</th>'
                             +'       <th>Time Available in minutes</th>'
                                   +'       <th>Actions</th>'
                                  +'    </tr>'
                                +' </thead>'
                             +'     <tbody class="hovered" id="tableBodySystemss">'
                               
                                   
                                    
                            +'      </tbody>'
                          +'    </table>'
                     

                 +'     </div>'
                  +'    <!--stats-->'
                   
 +' </body>'
 +' </html>';
  
    
    messageBox(text,"Missed Exams"); 
    
     
 }
 
 
 function showCompletedExamsTable(){
     
    var text ='<!DOCTYPE html> <html> <head>    <script src="totalExamsCompleted.js" type="text/javascript"></script> </head> <body>'
      +'     <div class="span6">'
                    +'      <div>'
                      +'        <input type="search" id="filter" placeholder="Filter by name/student number"/><button id="clicked" ><i class="icon-search"></i></button>&nbsp;'
                           
                      +'    </div>'
                      +'    <div class="clear"></div>'
                      +'    <div id="examStudentHolder" class="vertical-scrolls">'
                           +'   <table class="table striped bordered">'
                           +'       <thead>'
                              +'        <tr class="warning fg-white">'
                                +'          <th>S/N</th>'
                                  +'        <th>Exam Subject</th>'
                            +'             <th>Start-Date</th>'
                                  +'        <th>Start-Time</th>'+'<th>Candidates</th>'
                             +'       <th>Time Available in minutes</th>'
                                   +'       <th>Actions</th>'
                                  +'    </tr>'
                                +' </thead>'
                             +'     <tbody class="hovered" id="tableBodySystems">'
                               
                                   
                                    
                            +'      </tbody>'
                          +'    </table>'
                     

                 +'     </div>'
                  +'    <!--stats-->'
                   
 +' </body>'
 +' </html>';
  
    
    messageBox(text,"Completed Exams"); 
    
    
 }
 
 
   function showRegisteredExamsTable(){
                
 
    var text ='<!DOCTYPE html> <html> <head>    <script src="totalExamsRegisteredFor.js" type="text/javascript"></script> </head> <body>'
      +'     <div class="span6">'
                    +'      <div>'
                      +'        <input type="search" id="filter" placeholder="Filter by name/student number"/><button id="clicked" ><i class="icon-search"></i></button>&nbsp;'
                           
                      +'    </div>'
                      +'    <div class="clear"></div>'
                      +'    <div id="examStudentHolder" class="vertical-scrolls">'
                           +'   <table class="table striped bordered">'
                           +'       <thead>'
                              +'        <tr class="info fg-white">'
                                +'          <th>S/N</th>'
                                  +'        <th>Exam Subject</th>'
                            +'             <th>Start-Date</th>'
                                  +'        <th>Start-Time</th>'+'<th>Candidates</th>'
                             +'       <th>Time Available in minutes</th>'
                                   +'       <th>Actions</th>'
                                  +'    </tr>'
                                +' </thead>'
                             +'     <tbody class="hovered" id="tableBodySystem">'
                               
                                   
                                    
                            +'      </tbody>'
                          +'    </table>'
                     

                 +'     </div>'
                  +'    <!--stats-->'
                   
 +' </body>'
 +' </html>';
  
    
    messageBox(text,"Registered Exams"); 
    
    
   }
   function deleted(){
       
      if (confirm('All Information Of Candidate Will Be Lost \n\
Are You Sure You Want To Proceed?')){
     
    
    var result = window.prompt("Please Enter Admin Password To DeleteStudent ");
    
    
    if(result === "jolaade"){
        // you can make specific people able to delete students;
    var logins = location.protocol+"//"+location.hostname+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b";
          
          
 var requestUrl = logins+"?matric="+mat;
    
            alert("sent");
            
  
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
    else{
        alert("You Have No Administrative Rights To Delete A Student \n\
 Please Contact Administratot");
    }
     
 }
 else{
     
 }

   }
   
   function parseLogs(asyncRequest){
   alert(asyncRequest.toString());
   
   
   }
   function con(e){
  //  window.alert("you have clicked me");
    
    e.preventDefault();
}



function messageBox(htmls,titles)
{
    $.Dialog({
        shadow:true,
        overlay:true,
        draggable:true,
        padding:10,
        width:620,
        flat:true,
        title:titles,
        content:htmls
        
    });
}
 

window.addEventListener("contextmenu",con,false);

window.addEventListener("load",start,false);