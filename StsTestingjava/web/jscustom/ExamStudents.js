/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var totalStudents = [];
var cancelSession = [];
var submit;
var str;
var subs;

 function log(){
    
       submit = document.getElementById("clicked");
       submit.addEventListener("click",search,false);
    
       var subject =  localStorage.getItem("ExamName");
       subs = subject;
     
  
    if(localStorage.getItem(subs+"Name")){
            var splitter =  localStorage.getItem(subs+"Name").split(",");
            for(var c=0; c<splitter.length; c++){
                cancelSession.push(splitter[c]);
            }

        }
        var logins = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b";

    var requestUrl = logins+"?exam="+subject;
      
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
 
 function parseLogs( asyncRequest )
 {
   
 // if request has completed successfully, process the response
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object

 var data = JSON.parse(asyncRequest.responseText);
str = data;

//var subject =  localStorage.getItem("ExamName");

localStorage.setItem(subs+"Students",str);
//localStorage.setItem("student",str);
        arrange();
        
        
 
        
 // display data on the page
 } // end if
 } //
 
 
 function arrange(){
     var ex =  localStorage.getItem("ExamName");
   if(localStorage.getItem(ex+"Name")){
         
         
 var splitter =  localStorage.getItem(ex+"Name").split(",");
 for(var c=0; c<splitter.length; c++){
     cancelSession.push(splitter[c]);
 }
 
   }
    
    
    
  
     
      
    
        
     
     
     var table = document.getElementById("tableBody");
     var sec = str.split("#");
     var length = sec.length;
     var remainder= Math.floor(length / 10);
     var nums = 1;
     var stri = "";
     document.getElementById("candidateCount").innerHTML = (sec.length -1);
     
     for(var ii = 0; ii <= remainder; ii++){
          stri+='<button class="btn ade btn-info" id="pg'+ii+'" type="button">'+(ii + 1)+'</button>';
      }
      $("#candidatePg").html(stri);
       $(".ade").click(function (e){
           $(".ade").removeClass("active");
           
              var addUp = "";
              nums =   parseInt(e.target.innerHTML);
                 
                  
                   var val = nums * 10;
                var c = val - 10;
            if(c== 0){
                c=1;
            }
             
                 for( c; c < val; c++){
         if(sec[c] === undefined){
            break;
        }
             
               var split = sec[c].split(",");
       
        
     
     var join = "";
   
     
     
     var sp = split.length;
       for( var i = 0; i < sp; i++){
           
           
           
           
           
       //    var exams = new exam(split[0],split[1],split[2],split[3],split[4]);
           
           
          
         //  var pp =JSON.stringify(exams);
           
           //examination.push(pp);
          
            
              
           if(i == 0){
              
               join+="<td>"+c+"</td>";
               
               var splitted = split[0].split(" ");
          ids= splitted[0]+","+splitted[1]+","+split[2]+","+split[3]+","+split[1];
            }
          join+="<td>"+split[i]+"</td>"; 
         
       }
        
    
      join+="<td> <a href='javascript::' ><i class='fa fa-user'></i> </a> <a href='javascript::' ><i class='fa fa-clock'></i> </a>  "+"</td>"; 
       
     var addition ="<tr>";
    
     addition+=join;
      addition+="</tr>";
    
     totalStudents.push(addition);
    
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
       
      });
      
        
      
      
     
     
     
     
     
     var tableAdd;
     var addUp = "";
 
     var ids="i know";
     var vp = "";
    
     
     sec = str.split("#");
     
      var val = nums * 10;
     for( var c = nums; c < val; c++){
     var split = sec[c].split(",");
     var join = "";
     for( var i = 0; i < split.length; i++){
         if(i == 0){
              
            join+="<td>"+c+"</td>";
            vp =  split[0]+","+split[1]+","+split[2]+","+split[3]+","+split[1];
        }
           
           
           if(i == 3){
               ids=split[i];
           }
           
          
           
        
           
         join+="<td>"+split[i]+"</td>"; 
       }
   
       
       join+= '<td>  <a href="#" title="Cancel Exam Session" data-hint="Restore Session" ><i onclick="cancel('+ids+');" id="'+ids+'" class="fa fa-clock"></i></a>&nbsp;'

                                       +'     <a href="#" title="Add 10 minutes to '+ids+'" data-hint="Add/Remove Time" class="fg-darkGreen"><i onclick="timeFunction('+ids+');" id="'+ids+'" class="icon-clock"></i></a>&nbsp;'
                                          +' <a href="#" title="Reschedule exam" data-hint="End Exam Session" class="fg-darkOrange"><i id="'+ids+'" class="icon-flag-2"></i></a>'
                                          +'<a title="View Student Profile" href="ViewStudentProfile.html" data-hint="View profile" ><i  id="'+vp+'" class="fa fa-user"></i></a>';
                                          
         
     var addition ="<tr>";
    
     addition+=join;
      addition+="</tr>";
      totalStudents.push(addition);
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
     
     
     // populateSideBars();
     
     
     
     
     
     
 }
 
 function search(){
     
     
     var filt = document.getElementById("filter");
     
     if(filt.length > 0){
         
     }
     else{
       
         
         var sep = totalStudents.toString();
         
        
         
         var value = filt.value;
         var splitteds =  sep.split(",");
        var check = false;
         var additioned;
         for(var c =0; c < splitteds.length; c++){
             if(splitteds[c].indexOf(value) >0){
              
                 additioned+=splitteds[c];
                 check = true;
             }
         }
         
         if(check){
             var copy;
     var addSplit = additioned.split("undefined");
   for(var ii =0; ii < addSplit.length; ii++){
       if(addSplit[ii].indexOf("undefined") >= 0){
           
       }
       else{
           copy+=addSplit[ii];
           
       }
   }
     
     var splitAgain = copy.split("undefined");
     
  
           document.getElementById("tableBody").innerHTML =splitAgain[1];   
           
         }
      
     }
     
     
     
 }





ver();


function setName(e){
  
  
    localStorage.setItem("StudentName",e.target.id);
    
}

function changed(){
    
   
     var filt = document.getElementById("filter");
     
     if(filt.length > 0){
         
     }
     else{
       
         
         var sep = totalStudents.toString();
         
        
         
         var value = filt.value;
         var splitteds =  sep.split(",");
        var check = false;
         var additioned;
         for(var c =0; c < splitteds.length; c++){
             if(splitteds[c].indexOf(value) >0){
              
                 additioned+=splitteds[c];
                 check = true;
             }
         }
         
         if(check){
             var copy;
     var addSplit = additioned.split("undefined");
   for(var ii =0; ii < addSplit.length; ii++){
       if(addSplit[ii].indexOf("undefined") >= 0){
           
       }
       else{
           copy+=addSplit[ii];
           
       }
   }
     
     var splitAgain = copy.split("undefined");
     
  
           document.getElementById("tableBody").innerHTML =splitAgain[1];   
           
         }
      
     }
     
    
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

function timeFunction(e){
    
   
    sendMatriculation(e,"+10");
}

function timeFunctions(e){
    
   
    sendMatriculation(e,"0");
}

     
function cancel(e){
 
  if(cancelSession.toString().indexOf(e) == -1){
      
    cancelSession.push(e);  
   
    
    var subject =  localStorage.getItem("ExamName");
  localStorage.setItem(subject+"Name",cancelSession);

 
  document.getElementById("cancelled").innerHTML= cancelSession.length;
  
  
      
  }
  else{
 
  
  }
  
 
     var get = e;
     
     
    var req = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/candidate/cancelsession/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b?"+"id="+get; 
    
    
      try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parse(asyncRequest);  //callBack( asyncRequest );
 }, false);
     
    asyncRequest.open( "GET", req, true );
 asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
 asyncRequest.send(); // send request
 

 } // end try
 catch ( exception )
 {
 alert ( "Request Failed" );
 } // end catch
 
     }
    
 
 
 function parse(){
 //callback for the cancel session
 }
 
 function populateSideBars(){
    var subject =  localStorage.getItem("ExamName"); 
    var string =  localStorage.getItem(subject+"Students");
    var splitt = string.split("#");
    var concat = "";
    for(var c = 0; c < splitt.length; c++){
    
        var sep = splitt[c].split(",");
        
        for(var i = 0; i < sep.length; i++){
            if(i== 3){
                concat+= '<li><a href="#" onclick="cancel('+sep[i]+');" class="cancel-exam">'+ sep[i]+'</a></li>';
            }
        }
    
    }
    document.getElementById("exams2").innerHTML = concat;
    
      var subject =  localStorage.getItem("ExamName"); 
    var string =  localStorage.getItem(subject+"Students");
    var splitt = string.split("#");
    var concat = "";
    for(var c = 0; c < splitt.length; c++){
    
        var sep = splitt[c].split(",");
        
        for(var i = 0; i < sep.length; i++){
            if(i== 3){
                concat+= '<li><a href="#" onclick="awardTime('+sep[i]+');" class="cancel-exam">'+ sep[i]+'</a></li>';
            }
        }
    
    }
     
     document.getElementById("exams1").innerHTML = concat;
     
    
    
 }
 
 function awardTime(e){
     
     var string = "<html><head> <script src='OpenedExamTime.js' type='text/javascript'></script> </head> <body> <div><span><label>Candidate Id:</label> <label id='confirmations'>"+e+"</label><span></div>  <form><span> <label>Time:</label> <input type='number'  id='numbers' /> <span> <input type='button' id='buttons' value='Enter' /> </form> <div><label id='conclusion'></label></div>  </body> </html>";
    messageBox(string,"Increase candidates time");
    
     
 }
 
 function ver(){
     
 }

function con(e){
  //  window.alert("you have clicked me");
    
    e.preventDefault();
}




window.addEventListener("contextmenu",con,false);


document.addEventListener("click",setName,false);

document.addEventListener("keypress",changed,false);
log();


