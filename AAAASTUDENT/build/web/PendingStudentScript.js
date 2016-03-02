/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function start(){
    
}
var totalStudents;
var items;
var str="";
var logins = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b";
 var totalSubjects = [];
 function log(){

  
    var requestUrl = logins+"?subject="+totalSubjects;
    
    
    
    
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
 
 function parseLogs( asyncRequest )
 {
   
 // if request has completed successfully, process the response
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object

 var data = JSON.parse(asyncRequest.responseText);
items = data;



 
        arranged();
        
 
        
 // display data on the page
 } // end if
 } 

function arrange(){
      
     
     
  var str = localStorage.getItem("PendingStudents");
 
  
     var sec = str.split("#");
      for( var c = 1; c < sec.length; c++){
        
        
        
       var split = sec[c].split(",");
       
       for( var i = 0; i < split.length; i++){
           
           if(i == 0){
              
             totalSubjects.push(split[i]);
             
            continue;   
           }
     
      }
     
      }
      
     log();
     
   
   
      
      
      
}

function arranged(){
    totalStudents = [];
    
    
      var table = document.getElementById("tableBody");
     
      
      var sec = items.split("#");
 
      
     var tableAdd;
     
     
     var addUp;
 
     var ids="";
     
     
     for( var c = 1; c < sec.length; c++){
        
        
        
       var split = sec[c].split(",");
       
  
     var join = "";
   
     
     
       for( var i = 0; i < split.length; i++){
           
           if(i == 0){
              
               join+="<td>"+c+"</td>";
               
               var splitted = split[0].split(" ");
  ids= splitted[0]+","+splitted[1]+","+split[2]+","+split[3]+","+split[1];
           
             
           }
           
           
          // if(i == 3){
           //    ids=split[i];
           //}
           
          
           
        
           
         join+="<td>"+split[i]+"</td>"; 
       }
   
       
       join+=     '<td>  '

                                       +'     <a href="ViewStudentProfile.html" data-hint="Add/Remove Time" class="fg-darkGreen"><i  id="'+ids+'" class="icon-open" data-hint="View Exam Details" ></i></a>&nbsp;'
                                        //  +'     <a href="#" data-hint="End Exam Session" class="fg-darkOrange"><i id="'+ids+'" class="icon-flag-2"></i></a>&nbsp;'
                                          +'     <a href="#" data-hint="Cancel Exam" class="fg-darkRed"><i id="'+ids+'" class="icon-remove"></i></a>';
         
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
 arrange();
 
 
 function clickedHere(e){
      if(e.target.className =="icon-open"){
         localStorage.setItem("StudentName",e.target.id);
         
        return;
    }
    
    
    if (e.target.className == "icon-remove"){
    
        localStorage.setItem("status","false");
        localStorage.setItem("ScheduleExam","false");
        e.target.setAttribute("style","display:none");
       var seperate = e.target.id.toString().split(",");
       var matric = seperate[3];
       var subject = seperate[4];
       
       
       
     
        unregisterStudentsInHere(matric,subject);
       
      return;
    }
 }
 
 
 function unregisterStudentsInHere(matric,subject){
  var unreg =sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b";

   var requestUrl = unreg+"?matric="+matric+"&examName="+subject;
  
   
   
 
   
       
   try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseLogger(asyncRequest);  //callBack( asyncRequest );
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
 
 
 function parseLogger(){
 
 }
 document.addEventListener("keypress",changed,false);
 document.addEventListener("click",clickedHere,false);
 