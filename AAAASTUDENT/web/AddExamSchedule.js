/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var requestUrl = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/schedule/examination/exams?status=1";

var str;


var enter;
var hides;




function start(){
    
  //  var now = new Date();
    //alert(now.getDate() +" "+(now.getMonth() +1)+" "+now.getFullYear());
    
    
    
 enter = document.getElementById("enters").addEventListener("click",post,false);
hides = document.getElementById("hide");
      //+ methodAndArguments;
        
    try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseData(asyncRequest);  //callBack( asyncRequest );
 }, false);
     
    asyncRequest.open( "GET", requestUrl, true );
    
// asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );

 asyncRequest.send(); // send request
 

 } // end try
 catch ( exception )
 {
 alert ( "Request Failed" );
 } // end catch
 

}   


function parseData( asyncRequest )
 {
   
 // if request has completed successfully, process the response
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object
 document.getElementById("startServer").addEventListener("click",startServer,false);
 document.getElementById("stopServer").addEventListener("click",stopServer,false);
 document.getElementById("viewServer").addEventListener("click",showLog,false);
 

      var registered= localStorage.getItem("RegisterFor"); 
    
     
     document.getElementById('exams').innerHTML = registered;
 var data = JSON.parse(asyncRequest.responseText);
 str = data.split(",");



 var examinationStart = localStorage.getItem("CurrentExams");
 
 document.getElementById("totalOngoing").innerHTML = localStorage.getItem("CurrentExams").toString().split(",").length - 1;
 examinationStart+= localStorage.getItem("CurrentExamination");
 
     
       
 

  if(localStorage.getItem("CurrentExamination") == null){
      
  }
 else{
  document.getElementById("totalScheduled").innerHTML = localStorage.getItem("CurrentExamination").toString().split(",").length - 2;
 }
 
 
 
        var enter = document.getElementById("subject");
  
  
  
 var add;
 var counter = 0;
 for( var c = 0; c < str.length; c++){
   
     if(examinationStart.toString().indexOf(str[c]) == -1){
  add+= "<option value='"+str[c]+"'>"+str[c]+"</option>" ;  
    counter++;
     }
   
     
 }
 
 document.getElementById("totalPending").innerHTML = counter;
 
 
 enter.innerHTML = add;
 
 
 }
 
 var hour = document.getElementById("hour");
 var minute = document.getElementById("minute");
 
 var aa;
 var bb;
 for( var c = 0; c < 12; c++){
      if( c < 9){
  aa+= "<option value='"+(c+1)+"'>"+"0"+(c+1)+"</option>";     
  }
  else{
  aa+= "<option value='"+(c+1)+"'>"+(c+1)+"</option>"; 
  }
 }
     
 hour.innerHTML = aa;
 
  for( var c = 0; c < 60; c++){
  if( c < 10){
  bb+= "<option value='"+c+"'>"+"0"+c+"</option>";     
  }
  else{
  bb+= "<option value='"+c+"'>"+c+"</option>"; 
  }
 }
 
 
 document.getElementById("multiple").addEventListener("click",hideOrShow,false);
  document.getElementById("excel").addEventListener("click",files,false);
 minute.innerHTML = bb;
 
 
    
    
     
       var url = document.URL;
       if(url.indexOf("?redirect") > 0){
           showLog();
       }
 
 }
 
 

 function hideOrShow(e){
   if(e.target.checked ){
        document.getElementById("hides").setAttribute("style","display:none");
        
     }
     else{
          document.getElementById("hides").setAttribute("style","display:show");
       
     }
 }
 
  function post()
 {
     
 
      document.getElementById("subject").setAttribute("style","border-color:grey; border-style:solid;");
       document.getElementById("duration").setAttribute("style","border-color:grey; border-style:solid;");
        document.getElementById("scheduleDate").setAttribute("style","border-color:grey; border-style:solid;");
         document.getElementById("amount").setAttribute("style","border-color:grey; border-style:solid;");
        
         document.getElementById("hour").setAttribute("style","border-color:grey; border-style:solid;");
          document.getElementById("minute").setAttribute("style","border-color:grey; border-style:solid;");
           document.getElementById("time").setAttribute("style","border-color:grey; border-style:solid;");
            document.getElementById("feedBack").setAttribute("style","border-color:grey; border-style:solid;");
   
     hides.setAttribute("style","display:none");
      document.getElementById("textDatas").setAttribute("style","color:green");
          document.getElementById("textDatas").innerHTML = "";
     var subject = document.getElementById("subject").value;
     var duration = document.getElementById("duration").value;
     var scheduleDate = document.getElementById("scheduleDate").value;
     var hour = document.getElementById("hour").value;
     var minute = document.getElementById("minute").value;
     var time = document.getElementById("time").value;
 var feedback = document.getElementById("feedBack").value;
 var amo = document.getElementById("amount").value;
     
     
     if(subject === null || subject.length === 0){
      hides.setAttribute("style","display:block");
      document.getElementById("subject").setAttribute("style","border-color:red; border-style:dotted;");
 }
 if(duration === null || duration.length === 0){
      hides.setAttribute("style","display:block");
       document.getElementById("duration").setAttribute("style","border-color:red; border-style:dotted;");
 }
 
    if(scheduleDate === null ||scheduleDate.length === 0){
      hides.setAttribute("style","display:block");
       document.getElementById("scheduleDate").setAttribute("style","border-color:red; border-style:dotted;");
 }
    if(feedback=== null || feedback.length === 0){
      hides.setAttribute("style","display:block");
       document.getElementById("feedBack").setAttribute("style","border-color:red; border-style:dotted;");
 }
    if(hour === null || hour.length === 0){
      hides.setAttribute("style","display:block");
       document.getElementById("hour").setAttribute("style","border-color:red; border-style:dotted;");
 }
 
    if(minute === null || minute.length === 0){
      hides.setAttribute("style","display:block");
       document.getElementById("minute").setAttribute("style","border-color:red; border-style:dotted;");
 }
 
  if(time === null || time.length === 0){
      hides.setAttribute("style","display:block");
       document.getElementById("time").setAttribute("style","border-color:red; border-style:dotted;");
 }
 
  if(amo === null || amo.length === 0){
      hides.setAttribute("style","display:block");
       document.getElementById("amount").setAttribute("style","border-color:red; border-style:dotted;");
 }
 
 if(hides.offsetParent === null){
      log();
      }
      else{
             document.getElementById("textDatas").setAttribute("style","color:red");
          document.getElementById("textDatas").innerHTML = "All details required";
      }
      
 }
 
 var login = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/activeExam/table/insert/test/query/inquery";
 


function log(){
    
    
   
    
    
    
    var question = document.getElementById("subject").value;
    var scheduleDate = document.getElementById("scheduleDate").value;
    var duration = document.getElementById("duration").value;
    var feedback = document.getElementById("feedBack").value;
    var amo = document.getElementById("amount").value;
     
      
   
     
     var timerAppend ="";
     
      var j = document.getElementById("hour").value;
    timerAppend+=h+":";
         var mi = document.getElementById("minute").value;
        timerAppend+=h+":";
            var h = document.getElementById("time").value;
            var realH = parseInt(j);
         
            var realT = 0;    
          if(h == 1){
          timerAppend+="A.M";
           realT=realH;
          }
          else{
               timerAppend+="P.M";
               var sec = realH + 12;
             
               realT=(realH+12);
               
          }
          
       var timers =  realT+":"+mi+":00";
 
 localStorage.setItem("ScheduleExam","false");
 
 
    var requestUrl = login+"?question="+question+"&scheduleDate="+scheduleDate+"&time="+timers+"&duration="+duration+"&feedback="+feedback+"&amount="+amo; //+"?matric="+matricNumber;
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
      var data = JSON.parse(asyncRequest.responseText);
    document.getElementById("feedBack").value = "";
    document.getElementById("duration").value = "";
      document.getElementById("scheduleDate").value ="";
    document.getElementById("hour").value ="";
     document.getElementById("minute").value ="";
   document.getElementById("time").value ="";   document.getElementById("amount").value ="";
 localStorage.setItem("ScheduleExam","false");
 document.getElementById("textDatas").setAttribute("style","color:green");
 document.getElementById("textDatas").innerHTML = data;
 }
 
 }
 
function con(e){
  //  window.alert("you have clicked me");
    
    e.preventDefault();
}


function files(){
    var c = document.getElementById("fileAdder").value;
 
 
var checkBox= document.getElementById("multiple");

if(checkBox.checked){
    alert("checked");
}
else{
    alert("not checked");
    
}
  
   var splitter = c.split("\\");
   alert(splitter[2]);
   
  
    var logUser = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b?file="+splitter[2];
 
 
 
 
   var requestUrl = logUser+"&multiple="+"multiples";
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
 }
 }



var server = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/admin/set/password?status=";



function startServer(){
 
 
 var serverSend = server+"1";
      try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
           parseLogInformation(asyncRequest);  //callBack( asyncRequest );
 }, false);
     
    asyncRequest.open( "POST",serverSend, true );
 asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
 asyncRequest.send(); // send request
 

 } // end try
 catch ( exception )
 {
 alert ( "Request Failed" );
 } // end catch
 
 
 

}

function parseLogInformation(){

}

function stopServer(){
    
      try
 {
     
      var serverSend = server+"2";
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
           parseLogInformation(asyncRequest);  //callBack( asyncRequest );
 }, false);
     
    asyncRequest.open( "POST",serverSend, true );
 asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
 asyncRequest.send(); // send request
 

 } // end try
 catch ( exception )
 {
 alert ( "Request Failed" );
 } // end catch
 
 
 
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
 

function showLog(){
     var text ='<!DOCTYPE html> <html> <head>    <script src="ServerData.js" type="text/javascript"></script> </head> <body>'
      +'     <div class="span6">'
                    +'      <div>'
            +'<form id="forms" method="POST" enctype="multipart/form-data">'
               +'        <input type="file" id="files" placeholder="upload file to server" name="file"/> <input type="button" value="submit" onClick="uploadData();" id="uploadeFile"/>  &nbsp;'
                           +'</form>'
                      +'        <input type="search" id="filter" placeholder="Filter by name/student number"/><button id="clicked" ><i class="icon-search"></i></button>&nbsp;'
                           
                      +'    </div>'
                      +'    <div class="clear"></div>'
                      +'    <div id="examStudentHolder" class="vertical-scrolls">'
                           +'   <table class="table striped bordered">'
                           +'       <thead>'
                              +'        <tr class="success fg-white">'
                                +'          <th>S/N</th>'
                                  +'        <th>File</th>'
                            +'             <th>Size</th>'
                                  +'        <th>Date Created</th>'
                                //   +'       <th>Admin </th>'
                                   +'       <th>Actions</th>'
                                  +'    </tr>'
                                +' </thead>'
                             +'     <tbody class="hovered" id="tableBodying">'
                               
                                   
                                    
                            +'      </tbody>'
                          +'    </table>'
                     

                 +'     </div>'
                  +'    <!--stats-->'
                   
 +' </body>'
 +' </html>';
  
    
   
   
    
  return text;
}

function uploadData(){
  
     document.getElementById("forms").action = getAction(); 
    document.getElementById("forms").submit();
    
    
}

 function getAction(){
     
     return sessionStorage.getItem("URL")+"/AAAACLIENT/UploadServlet";
     
     
     
     
 }

function upload(){
    alert("click");
    
}
window.addEventListener("contextmenu",con,false);

window.addEventListener("load",start,false);



