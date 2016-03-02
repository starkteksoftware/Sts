/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var str;
var exams =0;
var studentExam =0;
var seperator ="";
var scheduledExams = [];

function start(){
   
logged();


}


var login = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/updateTable/update/insert/query/form";



function logged(){
    
  

    var requestUrl = login;//+"?question="+question+"&scheduleDate="+scheduleDate+"&duration="+duration+"&feedback="+feedback; //+"?matric="+matricNumber;
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
 
 
 
 

 }
// end try
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
localStorage.setItem("SchedulePage",str);
localStorage.setItem("ScheduleExam","true");
 
 
 
 
   arrange();
        
        
 }
 }
 
 
 function arrange(){
    
     document.getElementById("divClick").addEventListener("click",totalPendingExams,false);
     document.getElementById("pending").addEventListener("click",pendingExam,false);
   //  document.getElementById("ScheduleExams").addEventListener("click",totalPendingExams,false);
     
     
 
  
     
     var topUp = document.getElementById("exams");
     var table = document.getElementById("examHolder");
     var storage = "";
     var sec = str.split("#");
     
     var emptyTable = sec.length;
     if (emptyTable == 1){
         table.innerHTML +="<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td><span><label style='font-size:small; color:red;'>No result found</label></span><td></td><td></td><td></td>";
         return;
     }
     
     
    localStorage.setItem("PendingStudents",str);
     
     var tableAdd;
     
     var addUp;
     
     var filter = document.getElementById("dateFilter");
     
     var filterBuilder= "";
 
    filterBuilder = '<option value="val">View All</option>';
     
     for( var c = 1; c < sec.length; c++){
        
       var split = sec[c].split(",");
     
      var ids = "";
     var join = "";
     
     var autoSchedule ="";
   
     exams++;
     document.getElementById("ScheduleExams").innerHTML = exams;
     
     
     
       for( var i = 0; i < split.length; i++){
           
           if(i == 0){
               join+="<td>"+c+"</td>";
              
             scheduledExams.push(split[i]+",");
             
           }
         
         
         if(i == 1){
             autoSchedule+=split[i];
           
                 
             if(filterBuilder.indexOf(split[i]) == -1){
                 
                 var sep = split[i].split("-");
              
                 if(sep[1] == "01"){
                 filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<label><sup>st</sup></label>,'+'January'+''+sep[0]+'</option>';    
                  
                 }
                   if(sep[1] == "02"){
                filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>nd</sup>,'+'February'+''+sep[0]+'</option>';          
                   
                 }
                   if(sep[1] == "03"){
                  filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>rd</sup>,'+'March'+''+sep[0]+'</option>';              
                   
                 }
                 
                   if(sep[1] == "04"){
                   filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>th</sup>,'+'April'+''+sep[0]+'</option>';             
                    
                 }
                   if(sep[1] == "05"){
                  filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>th</sup>'+'May'+''+sep[0]+'</option>';              
                   
                 }
                   if(sep[1] == "06"){
                 filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>th</sup>,'+'June'+''+sep[0]+'</option>';               
                    
                 }
                 
                   if(sep[1] == "07"){
                filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>th</sup>',+'July'+''+sep[0]+'</option>';                
                    
                 }
                    if(sep[1] == "08"){
                 filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>th</sup>,'+'August'+''+sep[0]+'</option>';               
                    
                 }
                 
                   if(sep[1] == "09"){
                 filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>th</sup>,'+'September'+''+sep[0]+'</option>';               
                    
                 }
                   if(sep[1] == "10"){
                 filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>th</sup>,'+'October'+''+sep[0]+'</option>';               
                   
                 }
                   if(sep[1] == "11"){
                   filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>th</sup>,'+'November'+''+sep[0]+'</option>';             
                    
                 }
                 
                   if(sep[1] == "12"){
                     filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>th</sup>,'+'December'+''+sep[0]+'</option>';           
                   
                 }
               
                 }
               
                 filter.innerHTML = filterBuilder;
         }
         if(i == 2){
               autoSchedule+=","+split[i];    
         }
        
           
          if(i == 3){
             var numb = parseInt(split[i]);
           studentExam+= numb;
          
           localStorage.setItem(ids+"candidates",split[i]);
            document.getElementById("ScheduleStudents").innerHTML = studentExam ;
           
           
          }
           
           if(i == 0){
              
          
               ids = split[i];
            
            topUp.innerHTML += '<li><a href="ScheduledStudents.html?exam='+ids+'"'+' >'+ids+'</a></li>';
               storage+='<li><a href="ScheduledStudents.html?exam='+ids+'"'+' >'+ids+'</a></li>';
 
                
           }
           
           
           
         join+="<td>"+split[i]+"</td>"; 
       }
    localStorage.setItem("RegisterFor",storage);
    localStorage.setItem("CurrentExamination",scheduledExams);
    
    
       
       join+= "<td> <a href='#' title='Start "+ids+"' data-hint='Start "+ids+"' class='fg-darkBlue'><i id='"+ids+"' class='icon-key'></i></a>&nbsp;<a href='#' title='Cancel "+ids+"' data-hint='Delete' class='fg-darkRed'><i  id='"+ids+"'  class='icon-cancel'></i></a>&nbsp; <a href='#' title='Reschedule "+ids+"' data-hint='Reschedule' class='fg-darkOrange'><i id='"+ids+"' class='icon-alarm-cancel'></i></a>&nbsp;<a title='Register Students for "+ids+"'  href='ScheduledStudents.html?exam="+ids+"' data-hint='View Candidates' class='fg-darkGreen'><i class='icon-user'></i></a></td>";
     
     
     var addition ="<tr>";
    
     addition+=join;
      addition+="</tr>";
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
     
     
   

   
 localStorage.setItem("ExamList",topUp.innerHTML);
  localStorage.setItem("ExamStudents", studentExam); 
  localStorage.setItem("ExamTotal", exams); 
     
     table.innerHTML = splitAgain[1];
     
       localStorage.setItem("pendingExamsTable",splitAgain[1]);
   
     
     
 }
 
 
 
 function arranged(){
       
     var topUp = document.getElementById("exams");
     var table = document.getElementById("examHolder");
     var storage = "";
     var sec = str.split("#");
     
    
     
     var tableAdd;
     
     var addUp;
     
     var filter = document.getElementById("dateFilter");
     
     var filterBuilder= "";
 
    filterBuilder = '<option value="val">View All</option>';
     
     for( var c = 1; c < sec.length; c++){
        
       var split = sec[c].split(",");
       
      var ids = "";
     var join = "";
     
     var autoSchedule ="";
   
  //   exams++;
    // document.getElementById("ScheduleExams").innerHTML = exams;
     
       for( var i = 0; i < split.length; i++){
           
           if(i == 0){
               join+="<td>"+c+"</td>";
               
           }
         
         
         if(i == 1){
             autoSchedule+=split[i];
             
             if(filterBuilder.indexOf(split[i]) == -1){
                 
                 var sep = split[i].split("-");
              
                 if(sep[1] == "01"){
                 filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<label><sup>st</sup></label>,'+'January'+''+sep[0]+'</option>';    
                  
                 }
                   if(sep[1] == "02"){
                filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>nd</sup>,'+'February'+''+sep[0]+'</option>';          
                   
                 }
                   if(sep[1] == "03"){
                  filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>rd</sup>,'+'March'+''+sep[0]+'</option>';              
                   
                 }
                 
                   if(sep[1] == "04"){
                   filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>th</sup>,'+'April'+''+sep[0]+'</option>';             
                    
                 }
                   if(sep[1] == "05"){
                  filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>th</sup>'+'May'+''+sep[0]+'</option>';              
                   
                 }
                   if(sep[1] == "06"){
                 filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>th</sup>,'+'June'+''+sep[0]+'</option>';               
                    
                 }
                 
                   if(sep[1] == "07"){
                filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>th</sup>',+'July'+''+sep[0]+'</option>';                
                    
                 }
                    if(sep[1] == "08"){
                 filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>th</sup>,'+'August'+''+sep[0]+'</option>';               
                    
                 }
                 
                   if(sep[1] == "09"){
                 filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>th</sup>,'+'September'+''+sep[0]+'</option>';               
                    
                 }
                   if(sep[1] == "10"){
                 filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>th</sup>,'+'October'+''+sep[0]+'</option>';               
                   
                 }
                   if(sep[1] == "11"){
                   filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>th</sup>,'+'November'+''+sep[0]+'</option>';             
                    
                 }
                 
                   if(sep[1] == "12"){
                     filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>th</sup>,'+'December'+''+sep[0]+'</option>';           
                   
                 }
               
                 }
               
                 filter.innerHTML = filterBuilder;
         }
         if(i == 2){
               autoSchedule+=","+split[i];    
         }
        
           
          if(i == 3){
         //    var numb = parseInt(split[i]);
           //studentExam+= numb;
           
            //document.getElementById("ScheduleStudents").innerHTML = studentExam ;
           
           
          }
           
           if(i == 0){
              
               
               ids = split[i];
        
            
        //    topUp.innerHTML += '<li><a href="ScheduledStudents.html?exam='+ids+'"'+' >'+ids+'</a></li>';
               storage+='<li><a href="ScheduledStudents.html?exam='+ids+'"'+' >'+ids+'</a></li>';
 
              
                 
           }
           
         join+="<td>"+split[i]+"</td>"; 
       }
    localStorage.setItem("RegisterFor",storage);
       
       join+= "<td> <a   data-hint='Start Exam' class='fg-darkBlue'><i id='"+ids+"' class='icon-key'></i></a>&nbsp;<a data-hint='Delete' class='fg-darkRed'><i  id='"+ids+"'  class='icon-cancel'></i></a>&nbsp; <a  data-hint='Reschedule' class='fg-darkOrange'><i id='"+ids+"' class='icon-alarm-cancel'></i></a>&nbsp;<a href='ScheduledStudents.html?exam="+ids+"' data-hint='View Candidates' class='fg-darkGreen'><i class='icon-open'></i></a></td>";
     
     var addition ="<tr>";
    
     addition+=join;
      addition+="</tr>";
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
     
     
   

   
 localStorage.setItem("ExamList",topUp.innerHTML);
  localStorage.setItem("ExamStudents", studentExam); 
  localStorage.setItem("ExamTotal", exams); 
     
     table.innerHTML = splitAgain[1];
     
    
     
 }
 
 var check = [];
 
 
 function reArrange(value){
       var topUp = document.getElementById("exams");
     var table = document.getElementById("examHolder");
     
     
        var storage="";
     var sec = str.split("#");
     
     var tableAdd;
     
     var addUp;
     
     var filter = document.getElementById("dateFilter");
     
     var filterBuilder= "";
 
    filterBuilder = '<option value="val">View All</option>';
     
     for( var c = 1; c < sec.length; c++){
        
        if(check[c].indexOf(sec[c]) != -1){
            alert("found im skipping");
            
            continue;
        }
        else{
       var split = sec[c].split(",");
       
      var ids = "";
     var join = "";
     
     var autoSchedule ="";
   
    // exams++;
    // document.getElementById("ScheduleExams").innerHTML = exams;
     
       for( var i = 0; i < split.length; i++){
           
           if(i == 0){
               join+="<td>"+c+"</td>";
               
           }
         
         
         if(i == 1){
             autoSchedule+=split[i];
             
             if(filterBuilder.indexOf(split[i]) == -1){
                 
                 var sep = split[i].split("-");
              
                 if(sep[1] == "01"){
                 filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<label><sup>st</sup></label>,'+'January'+''+sep[0]+'</option>';    
                  
                 }
                   if(sep[1] == "02"){
                filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>nd</sup>,'+'February'+''+sep[0]+'</option>';          
                   
                 }
                   if(sep[1] == "03"){
                  filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>rd</sup>,'+'March'+''+sep[0]+'</option>';              
                   
                 }
                 
                   if(sep[1] == "04"){
                   filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>th</sup>,'+'April'+''+sep[0]+'</option>';             
                    
                 }
                   if(sep[1] == "05"){
                  filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>th</sup>'+'May'+''+sep[0]+'</option>';              
                   
                 }
                   if(sep[1] == "06"){
                 filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>th</sup>,'+'June'+''+sep[0]+'</option>';               
                    
                 }
                 
                   if(sep[1] == "07"){
                filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>th</sup>',+'July'+''+sep[0]+'</option>';                
                    
                 }
                    if(sep[1] == "08"){
                 filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>th</sup>,'+'August'+''+sep[0]+'</option>';               
                    
                 }
                 
                   if(sep[1] == "09"){
                 filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>th</sup>,'+'September'+''+sep[0]+'</option>';               
                    
                 }
                   if(sep[1] == "10"){
                 filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>th</sup>,'+'October'+''+sep[0]+'</option>';               
                   
                 }
                   if(sep[1] == "11"){
                   filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>th</sup>,'+'November'+''+sep[0]+'</option>';             
                    
                 }
                 
                   if(sep[1] == "12"){
                     filterBuilder +='<option value="'+split[i]+'">'+sep[2]+'<sup>th</sup>,'+'December'+''+sep[0]+'</option>';           
                   
                 }
               
                 }
               
                 filter.innerHTML = filterBuilder;
         }
         if(i == 2){
               autoSchedule+=","+split[i];    
         }
        
           
          if(i == 3){
          var numb = parseInt(split[i]);
       studentExam+= numb;
           
          document.getElementById("ScheduleStudents").innerHTML = studentExam ;
           
           
          }
           
           if(i == 0){
              
               
               ids = split[i];
          
            
            topUp.innerHTML += '<li><a href="ScheduledStudents.html?exam='+ids+'"'+' >'+ids+'</a></li>';
           
                
               storage+='<li><a href="ScheduledStudents.html?exam='+ids+'"'+' >'+ids+'</a></li>';
 
           }
           
         join+="<td>"+split[i]+"</td>"; 
       }
    
       localStorage.setItem("RegisterFor",storage);
       join+= "<td> <a   data-hint='Start Exam' class='fg-darkBlue'><i id='"+ids+"' class='icon-key'></i></a>&nbsp;<a  data-hint='Delete' class='fg-darkRed'><i  id='"+ids+"'  class='icon-cancel' jol='ade' ></i></a>&nbsp; <a  data-hint='Reschedule' class='fg-darkOrange'><i id='"+ids+"' class='icon-alarm-cancel'></i></a>&nbsp;<a href='ScheduledStudents.html?exam="+ids+"' data-hint='View Candidates' class='fg-darkGreen'><i class='icon-open'></i></a></td>";
     
     var addition ="<tr>";
    
     addition+=join;
      addition+="</tr>";
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
     
     
   

   
 localStorage.setItem("ExamList",topUp.innerHTML);

 alert(studentExam);
  localStorage.setItem("ExamStudents", studentExam); 
  localStorage.setItem("ExamTotal", exams); 
     
     table.innerHTML = splitAgain[1];
     }
    
 }
 
 function errorDialog(htmls,titles)
{
    $.Dialog({
        shadow:true,
        overlay:true,
        draggable:true,
        padding:10,
        width:100,
        flat:true,
        title:titles,
        content:htmls
        
    });
}
 
 
 
 var logins = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b";
 var count = 0;
 
 
 function showDialogBox(e){
    localStorage.setItem("currentE",e);
 
     var text ='<!DOCTYPE html> <html> <head>  <script src="rescheduleExam.js" type="text/javascript"></script>  </head> <body>'
      +'     <div class="span6">'
                    +'   <form id="formSet"  method="POST"  >'
                      +'       <div class="forms vertical-scrollss" id="invisible">'
                           
                      +'   <label id="subjectName"><label> <div class="clear"></div>'
                  //    +'   <label>*First Name:</label>    <div class="input-control text">  <input type="text" placeholder="Enter First Name" required name="firstName" id="firstName"/>    </div>'
                      +'     <label>*Date:</label>    <div class="input-control text">  <input type="date" placeholder="only future and present dates are allowed"  id="scheduleDate" required /> </div>'
                      //     +'    <label>*User Name:</label>    <div class="input-control text">  <input type="text" placeholder="Enter UserName"  required name="userName" id="userName"/>    </div>'
                 +' <label> Exam Time(time exam starts, works with auto schedule):</label> <select id="hour"><option value="">-HH-</option>   '
         +'</select><select id="minute"> <option value="">-MM-</option></select><select id="time"><option value="">-Choose-</option>'
 +'<option value="1">AM</option><option value="2">PM</option></select>'
             +'    <label>*Time:</label>    <div class="input-control text">  <input placeholder="Enter the time frame in minutes" required type="number" id="duration" pattern="[0-9]+"/>    </div>'
                           +'    <label>*Amount of Questions:</label>    <div class="input-control text">  <input placeholder="Enter the amount of question posted to candidates " required type="number" id="amount" pattern="[0-9]+"/>    </div>'
                         
             +'  <label>*FeedBack:</label>    <div class="input-control text">   <textarea placeholder="FeedBack to be posted to students after exam conclusion" rows="5" cols="65"id="feedBack" required ></textarea>  <button class="bg-darkBlue fg-white" type="button" id="enter" ><i class="icon-new"></i>UPDATE EXAM</button>   </div>'
                            +'   <div> </div>'
                                +'   <div> <label id="error"></label> </div>'
                           // +'             <th>Subject</th>'
                             //     +'        <th>Session State</th>'
                               //    +'       <th>Student Number</th>'
                               //    +'       <th>Actions</th>'
                                 // +'    </tr>'
                                //+' </thead>'
                             +'     </div>'
                               
                                   
                                    
                            +'      </form>'
                          +'    </div>'
                     

                
                  +'    <!--stats-->'
                   
 +' </body>'
 +' </html>';
  
    
    messageBoxs(text,"Reschedule Exam&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>"+e+"</b>");
    
    
 }
 function clicked(e){

 
  
  if(e.target.tagName === "I"){
    
    if(e.target.className =="icon-open"){
  
       return;
   }
   
   if(e.target.className ==="icon-alarm-cancel"){
      
       showDialogBox(e.target.id);
       return;
       
   }
         
    if((e.target.className == "icon-cancel")){
   
   
     
           localStorage.setItem("ScheduleExam","false");
           var examination = e.target.id;
             endExam(examination);
             
           
           return;
    }
    
    if(e.target.className == "icon-key"){
        
        var candidateNumber = localStorage.getItem(e.target.id+"candidates");
       if(candidateNumber.toString() == "0"){
         document.getElementById("textData").setAttribute("style","color:red;");
  
      document.getElementById("textData").innerHTML = "Unable to start exam ... no candidate registered for "+e.target.id;
       e.target.setAttribute("style","display:none");
                errorDialog("please register at least one candidate to take "+e.target.id+" exam","error:no candidate registered");
        return;
       }
       
        localStorage.setItem("status","false");
        localStorage.setItem("ScheduleExam","false");
         e.target.setAttribute("style","display:none");
   
            
    }
   var login = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b";
     

   var requestUrl = login+"?sub="+e.target.id;
  
  
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
else{
       
      
}
    

 
 }
 
 function parseLogs( asyncRequest )
 {
  
  
   
 // if request has completed successfully, process the response
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object

 var data = JSON.parse(asyncRequest.responseText);
  document.getElementById("textData").setAttribute("style","color:green;");
  
  document.getElementById("textData").innerHTML = data;
       // messageBox(data,"status");
  document.getElementById('linked').click();
  
       // str = data;
       //callpopulator();
 // display data on the page
 } // end if
 } //
 
 
     
     
     
     
   function ver(){
         var url = document.referrer;
        document.getElementById("backButton").href= url;
       //   document.getElementById("image").src = "http://"+localStorage.getItem("Ip")+":8080/AAAACLIENT/ImageRetriever?image=images";
       if(localStorage.getItem("ScheduleExam")){
       var sch = localStorage.getItem("ScheduleExam");
       if( sch == "true"){
          
           str = localStorage.getItem("SchedulePage");
            arrange();
       }
       else{
             
           start();
       }
       }
       else{
         
         start();
         
       }
   }  
     
     
     function endExam(e){
    if(confirm('Are You Sure You Want To Cancel Exam ?\n\
')){
     
    
    var result = window.prompt("Please Enter Admin Password To Cancel Students ");
    
    //verify password
    if(result === "jolaade"){
     
   examEnd(e);
   
    }
    else{
        window.alert("You Have No Administrative  Rights To End Exam");
    }
}
}

function examEnd(e){

   var name = e;
 
 
  
       var login = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b?status=2";
     




   var requestUrl = login+"&subject="+name;
   

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
  
function changed(e){
   
    
 
 
 
 
 if(e.target.value == "val"){
   
    
    arranged();
    
     
     return;
 }
    
    
   
    
     var topUp = document.getElementById("exams");
     var table = document.getElementById("examHolder");
   
  var ss = localStorage.getItem("SchedulePage");
     var sec = ss.split("#");
    
     var tableAdd;
     
     var addUp;
     
     var counter = 0;
 
     for( var c = 1; c < sec.length; c++){
        
       var split = sec[c].split(",");
      
       
 
       
       if(split.indexOf(e.target.value) == -1){
          
         continue;
       }
      
      var ids = "";
     var join = "";
     
     var autoSchedule ="";
   var storage="";
    
     
       for( var i = 0; i < split.length; i++){
           
           if(i == 0){
               join+="<td>"+(++counter)+"</td>";
               
           }
         
         
         if(i == 1){
             autoSchedule+=split[i];
             
           
         }
         if(i == 2){
               autoSchedule+=","+split[i];    
         }
        
           
          if(i == 3){
         
          }
           
           if(i == 0){
              
               
               ids = split[i];
            
       //     topUp.innerHTML += '<li><a href="ScheduledStudents.html?exam='+ids+'"'+' >'+ids+'</a></li>';
                
        //        storage+='<li><a href="ScheduledStudents.html?exam='+ids+'"'+' >'+ids+'</a></li>';
           }
           
         join+="<td>"+split[i]+"</td>"; 
       }
  
   
       
    //   localStorage.setItem("RegisterFor",storage);
       join+= "<td> <a  data-hint='Start Exam' class='fg-darkBlue'><i id='"+ids+"' class='icon-key'></i></a>&nbsp;<a  data-hint='Delete' class='fg-darkRed'><i  id='"+ids+"'  class='icon-cancel'></i></a>&nbsp; <a data-hint='Reschedule' class='fg-darkOrange'><i class='icon-alarm-cancel'></i></a>&nbsp;<a href='ScheduledStudents.html?exam="+ids+"' data-hint='View Candidates' class='fg-darkGreen'><i class='icon-open'></i></a></td>";
     
     var addition ="<tr>";
    
     addition+=join;
      addition+="</tr>";
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
     
     
     
     
 
     
     
     table.innerHTML = splitAgain[1];
     
     
  
    
}  


function totalPendingExams(){
   
       var schedStud = document.getElementById("ScheduleExams").innerHTML;

 if(schedStud.toString() == "0"){
       document.getElementById("textData").setAttribute("style","color:red;");
  
  document.getElementById("textData").innerHTML = "No scheduled exam available";
   return;
 }
   document.getElementById("textData").setAttribute("style","color:black;");
  
  document.getElementById("textData").innerHTML = "";
   
   
   
   
     var table = document.getElementById("examHolder");
   
  var ss = localStorage.getItem("SchedulePage");
     var sec = ss.split("#");
    
     var tableAdd;
     
     var addUp;
     
     var counter = 0;
 
     for( var c = 1; c < sec.length; c++){
        
       var split = sec[c].split(",");
      
       
 
       
      
      
      var ids = "";
     var join = "";
     
     var autoSchedule ="";
   var storage="";
    
     
       for( var i = 0; i < split.length; i++){
           
           if(i == 0){
               join+="<td>"+(++counter)+"</td>";
               
           }
         
         
         if(i == 1){
             autoSchedule+=split[i];
             
           
         }
         if(i == 2){
               autoSchedule+=","+split[i];    
         }
        
           
          if(i == 3){
         
          }
           
           if(i == 0){
              
               
               ids = split[i];
            
       //     topUp.innerHTML += '<li><a href="ScheduledStudents.html?exam='+ids+'"'+' >'+ids+'</a></li>';
                
        //        storage+='<li><a href="ScheduledStudents.html?exam='+ids+'"'+' >'+ids+'</a></li>';
           }
           
         join+="<td>"+split[i]+"</td>"; 
       }
  
   
   
       
    //   localStorage.setItem("RegisterFor",storage);
       join+= "<td> <a data-hint='Start Exam' class='fg-darkBlue'><i id='"+ids+"' class='icon-key'></i></a>&nbsp;<a  data-hint='Delete' class='fg-darkRed'><i  id='"+ids+"'  class='icon-cancel'></i></a>&nbsp; <a data-hint='Reschedule' class='fg-darkOrange'><i class='icon-alarm-cancel'></i></a>&nbsp;<a href='ScheduledStudents.html?exam="+ids+"' data-hint='View Candidates' class='fg-darkGreen'><i class='icon-open'></i></a></td>";
    
        
     var addition ="<tr>";
    
     addition+=join;
      addition+="</tr>";
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
     
     
     
     
 
     
     
     table.innerHTML = splitAgain[1];
     
     
  
}


function con(e){

    
    e.preventDefault();
}

function errorBox(){
    
}

function pendingExam(e){
 var schedStud = document.getElementById("ScheduleStudents").innerHTML;

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
                           +'   <table class="table striped bordered">'
                           +'       <thead>'
                              +'        <tr class="success fg-white">'
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


function messageBoxs(htmls,titles)
{
    $.Dialog({
        shadow:true,
        overlay:true,
        draggable:true,
        padding:10,
        width:500,
        flat:true,
        title:titles,
        content:htmls
        
    });
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

window.addEventListener("load",ver,false);
  document.addEventListener("click",clicked,false);
  document.addEventListener("change",changed,false);



