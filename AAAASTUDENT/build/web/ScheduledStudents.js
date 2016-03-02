/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var str="";
var logins = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/state/register/insert/test/query/student/registerStud/totalStudents/students/results/form?Exam=";
var studentData = [];
var totalScheduledStudents =[];
var submit;
function start(){
 
   var urls = document.URL;
   
   var index = urls.indexOf("=");
   var second = urls.substring((index+1),urls.length);
   
   
   
   localStorage.setItem("ExamName",second);
   
   
   
   var requestUrl = logins+second;
 
      
    
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

 var data = JSON.parse(asyncRequest.responseText);
 
        
       
str = data.toString();



  var url = document.referrer;


document.getElementById("backButton").href= url;
var examN = localStorage.getItem("ExamName");

document.getElementById("pageTitle").innerHTML ="&nbsp;STS|&nbsp; Scheduled students for "+examN;
document.getElementById("explanation").innerHTML ="<b>"+examN+"</b>";


        arrange();
        
        
 // display data on the page
 } // end if
 } //  
 
 
 function arrange(){
     
    
     submit = document.getElementById("clicked");
    submit.addEventListener("click",search,false);
   document.getElementById("filter").addEventListener("keydown",keydown,false);
    document.getElementById("excel").addEventListener("click",files,false);
    document.getElementById("showPendingExam").addEventListener("click",show,false);
    document.getElementById("pending").addEventListener("click",pendingExam,false);
     
     
     
      var table = document.getElementById("studentTable");
     var sec = str.split("#");
     
     var tableAdd;
     
     var addUp;
 var topUp = document.getElementById("exams");
 topUp.innerHTML = localStorage.getItem("ExamList");
  document.getElementById("totalPendingStudent").innerHTML =  localStorage.getItem("ExamStudents"); 
    document.getElementById("totalPending").innerHTML=   localStorage.getItem("ExamTotal");  
     for( var c = 1; c < sec.length; c++){
        
       var split = sec[c].split(",");
       
      
     var join = "";
   
     var ids="";
     var mat="";
     
       for( var i = 0; i < split.length; i++){
        
             
           if(i == 0){
             join+="<td>"+c+"</td>";   
               ids+=split[0]+","+split[1]+","+split[2]+","+split[4]+","+split[3]+",";
           }
           
            if(i == 1){
             join+="<td>"+split[0]+" "+split[i]+"</td>";   
           }
          
               //did this so i can get the write matric at view student profile
          
           
         if(i == 4){
             mat= split[i];
            
         }
           
           
           if(i == 4){
         join+="<td>"+split[i]+"</td>"; 
         studentData.push(split[i]);
           }
       }
       //join+= "<td> <a href='#' data-hint='Start Exam' class='fg-darkBlue'><i class='icon-key'></i></a>&nbsp;<a href='#' data-hint='Delete' class='fg-darkRed'><i class='icon-cancel'></i></a>&nbsp; <a href='#' data-hint='Reschedule' class='fg-darkOrange'><i class='icon-alarm-cancel'></i></a>&nbsp;<a href='#' data-hint='View Candidates' class='fg-darkGreen'><i class='icon-open'></i></a></td>";
      join+='<td><a href="#" title="Unregister '+mat+'" data-hint="Unregister Student From Exam" class="fg-darkRed"><i id="'+mat+'" class="icon-cancel"></i></a>&nbsp; <a title="View Student Profile" href="ViewStudentProfile.html" data-hint="View Profile" class="fg-darkGreen"><i id="'+ids+'" class="icon-eye"></i></a></td>';
     var addition ="<tr>";
  
     addition+=join;
      addition+="</tr>";
       addUp+=addition;
      
          totalScheduledStudents.push(addition+"*split");
         
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
     
     localStorage.setItem("RegisteredExam",splitAgain[1]);
     
  
     localStorage.setItem("student",studentData);
     
     
     
 }
    
function clicked(e){
    
    
    if(e.target.className =="icon-cancel"){
     
        
       e.target.setAttribute("style","display:none");
     localStorage.setItem("ScheduleExam","false");
     
   
     
     var exam =  localStorage.getItem("ExamName");
    
     
    
     
     var deletes = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b";
      
   var requestUrl = deletes+"?matric="+e.target.id+"&examName="+exam;
 
      
    
       try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseLogss(asyncRequest);  //callBack( asyncRequest );
 }, false);
     
    asyncRequest.open( "GET", requestUrl, true );
 asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );

 asyncRequest.send();
 
 
 
 

   
    }
    catch(exception ){
     alert(exception);
    }
    }
    if(e.target.className =="icon-eye"){
         localStorage.setItem("StudentName",e.target.id);
         
        return;
    }
   
}

function parseLogss(){

   
}

 function search(){
    
     
      var filt = document.getElementById("filter");
    
     if( filt.value.length > 0 ){
           
         document.getElementById("studentTable").innerHTML = "<tr><td></td><td></td><td>Searching.............</td><td></td><td></td><td></td></tr>";    
       //  noresult = true;
       
         var sep = totalScheduledStudents.toString();
         
  
      
         
         var value = filt.value.trim();
         var splitteds =  sep.split("*split,");
        var check = false;
         var additioned;
         for(var c =0; c < splitteds.length; c++){
             if(splitteds[c].indexOf(value) >0){
              
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
function keydown(e){
    
    
    
     search();
   
     
     
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
 
 
 function smallDialog(htmls,titles)
{
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

function con(e){
  //  window.alert("you have clicked me");
    
    e.preventDefault();
}


function show(){
     var text ='<!DOCTYPE html> <html> <head>    <script src="pendingExamDialog.js" type="text/javascript"></script> </head> <body>'
      +'     <div class="span6">'
                    +'      <div>'
                      +'        <input type="search" id="filters" placeholder="Filter by name/student number"/><button id="clickeds" ><i class="icon-search"></i></button>&nbsp;'
                           
                      +'    </div>'
                      +'    <div class="clear"></div>'
                      +'    <div id="examStudentHolder" class="vertical-scroll">'
                           +'   <table class="table ">'
                           +'       <thead>'
                              +'        <tr class="selected fg-black">'
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
  
document.getElementById("errorFile").innerHTML=data;

    
if(data.toString().indexOf("1") == -1){
       document.getElementById('hiddenLink').href = "ScheduledStudents.html?exam="+localStorage.getItem("ExamName");
    document.getElementById('hiddenLink').click();  
}
else{

}

 }
 
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
                              +'        <tr class="selected fg-black">'
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


window.addEventListener("contextmenu",con,false);

window.addEventListener("load",start,false);
document.addEventListener("click",clicked,false);

  


