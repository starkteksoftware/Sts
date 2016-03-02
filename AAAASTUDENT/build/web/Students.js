/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var totalStudents = [];
var submit;
var logins = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b";
 var str;
 var totalS = 0;
 var noresult = false;
 var nosearch = false;
 
 function log(){



  
    var requestUrl = logins;
    
    
    
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
str = data;


  localStorage.setItem("AllStudents",str);
 localStorage.removeItem("StudentName");
 localStorage.setItem("NewStudent","true");
  
        arrange();
        
        
 
        
 // display data on the page
 } // end if
 } //
 
 function parseData(asyncRequest){
   // if request has completed successfully, process the response
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object

 var data = JSON.parse(asyncRequest.responseText);
 document.getElementById("textData").setAttribute("style","color:green");
 
document.getElementById("textData").innerHTML = data;
 
        
 // display data on the page
 } 
 }
 
 
 function reArrange(){
     
    
   
     
       var table = document.getElementById("tableBody");
    
     
     
     var sec = str.split("#");
     
     
     
     
     
     var tableAdd;
     
     var addUp;
 
    
     
     
     for( var c = 1; c < sec.length; c++){
        
        
      var ids="";   
      var detail="";
       var split = sec[c].split(",");
       //split is the current detail 
  
     var join = "";
   
   
     
     
       for( var i = 0; i < split.length; i++){
           //index values
           if(i == 0){
              
               join+="<td>"+c+"</td>";
               
               
              
               
           }
           
         
           
           ids+=split[i]+",";
           
           if(i == 3){
             detail = split[i];
             
           }
           
        
           
         join+="<td>"+split[i]+"</td>"; 
       }
   
      
       
       join+= "<td> <a onclick='deleted("+detail+");' data-hint='Delete Students' class='fg-darkRed'><i id='"+ids+"' class='icon-cancel'></i></a>&nbsp;<a href='ViewStudentProfile.html'data-hint='Delete Students' class='fg-darkGreen'><i id='"+ids+"' class='icon-open'></i></a></td>";
 
       
         
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
 
 function files(){
    var c = document.getElementById("fileAdder").value;
 
   
   var splitter = c.split("\\");
   alert(splitter[2]);
   
  
    var logUser = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b?file="+splitter[2];
 
 
   var requestUrl = logUser;
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
 function arrange(){
    
       
     document.getElementById("studentsRefresh").addEventListener("click",reArrange,false);
     document.getElementById("excel").addEventListener("click",files,false);
     
     
        submit = document.getElementById("clicked");
    submit.addEventListener("click",search,false);
   document.getElementById("filter").addEventListener("keydown",keydown,false);

     var table = document.getElementById("tableBody");
     
     
     var sec = str.split("#");
     
     
     
     
     
     var tableAdd;
     
     var addUp;
 
    
     
     
     for( var c = 1; c < sec.length; c++){
        
        
      var ids="";   
      var detail="";
       var split = sec[c].split(",");
       //split is the current detail 
  
     var join = "";
   
   
     
     
       for( var i = 0; i < split.length; i++){
           //index values
           if(i == 0){
              
               join+="<td>"+c+"</td>";
               
               
              totalS++;
               
           }
           
         
           
           ids+=split[i]+",";
           
           if(i == 3){
             detail = split[i];
             
           }
           
        
           
         join+="<td>"+split[i]+"</td>"; 
       }
   
      
       
       join+= "<td> <a href='#' title='Delete student and all details' onclick='deleted("+detail+");' data-hint='Delete Students' class='fg-darkRed'><i id='"+ids+"' class='icon-cancel'></i></a>&nbsp;<a title='View student profile' href='ViewStudentProfile.html'data-hint='Delete Students' class='fg-darkGreen'><i id='"+ids+"' class='icon-eye'></i></a></td>";
 
       
         
     var addition ="<tr>";
  
     addition+=join;
      addition+="</tr>";
    
      totalStudents.push(addition+"*split");
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
     
     
     localStorage.setItem("AvailableStudents",splitAgain[1]);
     
     
     document.getElementById("totalStudents").innerHTML = totalS;
     localStorage.setItem("TotalStudents",totalS);
     
     
     
     
     
 }
 
 function search(){
  noresult = false;
  nosearch = false;
   
     var filt = document.getElementById("filter");
    
     if( filt.value.length > 0 ){
           
         document.getElementById("tableBody").innerHTML = "<tr><td></td><td></td><td>Searching.............</td><td></td><td></td><td></td><td></td></tr>";    
         noresult = true;
       
         var sep = totalStudents.toString();
         
  
      
         
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
             
            noresult = false;
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

           document.getElementById("tableBody").innerHTML = tabAdder;   
           
         }
         else{
            
                      
               
              
          
         }
         
         
     
      
     }
     
     
   
     
     

 
 function clicked(e){
     
     if(e.target.tagName === "I"){
         
  localStorage.setItem("StudentName",e.target.id);
     }
     
     if(e.target.className =="icon-cancel"){
         e.target.setAttribute("style","display:none");
          localStorage.setItem("NewStudent","false");
    
         
     }
    
     
 }
 
 function deleted(e){
      if (confirm('All Information Of Candidate Will Be Lost \n\
Are You Sure You Want To Proceed?')){
     
    
    var result = window.prompt("Please Enter Admin Password To DeleteStudent ");
    
    
    if(result === "jolaade"){
        // you can make specific people able to delete students;
       
      localStorage.setItem("NewStudent","false");
     
             var logins = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b";
          
 var requestUrl = logins+"?matric="+e;
    
    
    
    
    
    
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
 
 
 function ver(){
     
     
    
     
   var url = document.referrer;


document.getElementById("backButton").href= url;
  if(localStorage.getItem("NewStudent")){
      
      var decide = localStorage.getItem("NewStudent");
   
    //not working as planned
   //  alert("hey");
     
      if(decide == "true"){
           
      str = localStorage.getItem("AllStudents"); 
    
     localStorage.removeItem("StudentName");
            log();
            
      }
      else{
   
          log();
      }
      
  }
  else{
      
   
      log(); 
  }
 
 
 }
 
 
 function keydown(e){
    
    
    
     search();
   
     
     
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
        width:400,
        flat:true,
        title:titles,
        content:htmls
        
    });
}


window.addEventListener("contextmenu",con,false);

window.addEventListener("load",ver,false);
document.addEventListener("click",clicked,false);
