/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var logins = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b";

var login = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b";

var str;


 function log(){

    var url = document.referrer;


document.getElementById("backButton").href= url;


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
 
      //  arrange();
        
        arranged();
 
        
 // display data on the page
 } // end if
 } //
 
 
 function arrange(){
      
      var subj =   document.getElementById("subject");
 var amou =    document.getElementById("amount");
     var split = str.split("#");
   
   var ee =document.getElementById("end");
   
       
     var table = document.getElementById("tableBody");
     
     for(var c = 0; c < split.length; c++){
        var splii = split[c].split(",");
        
      for(var i = 0; i < splii.length; i++){
          
          if(i == 0){
           subj.innerHTML = splii[i];   
            ee.innerHTML = "View "+splii[i]+" Details";
          }
          if(i == 3){
            amou.innerHTML = splii[i];  
          }
          if(i == 1){
        
          table.innerHTML = splii[i];
          }
          
          
      }
     }
     
       
                                     
    table.innerHTML += '<tr><td></td><td></td><td></td><td> <a href="'+sessionStorage.getItem("URL")+'/AAAACLIENT/PdfFormat?subject='+subj.innerHTML+'&date='+amou.innerHTML+'" data-hint="Print" class="fg-green clicker"><i class="icon-file-pdf"></i></a> &nbsp;<a href="'+sessionStorage.getItem("URL")+'/AAAACLIENT/PdfFormat?subject='+subj.innerHTML+'&date='+amou.innerHTML+'" data-hint="Print" class="fg-white clicker"><i class="icon-open"></i></a> <a href="'+sessionStorage.getItem("URL")+'/AAAACLIENT/PdfFormat?subject='+subj.innerHTML+'&date='+amou.innerHTML+'" data-hint="Print" class="fg-darkGreen clicker"><i class="icon-file-excel"></i></a> </td></tr>';
 
 }
 
 function arranged(){
     
    
     
     
     var ee =document.getElementById("end");
   
  var subj =   document.getElementById("subject");

 var amou =    document.getElementById("amount");
     var strs = str.split("#split");
 
   
      var split = strs[0].split("#");
    
  var sep = strs[0].split("#");
    var listing =  document.getElementById("exams");   
 for(var i = 0; i < sep.length; i++){
   var index =  sep[i].split(",");
   for(var ii=3; ii < index.length; ii++){
       
     listing.innerHTML+="<li id='"+index[0]+"[split]"+index[3]+"'>"+index[0]+"</li>";
       continue;
       
   }
     
 }
    
  
      var splitt = strs[1].split("##");
      
      

       
      
   
    document.getElementById("totalReports").innerHTML = splitt.length - 1;
    
     var table = document.getElementById("tableBody");
     
     for(var c = 0; c < split.length; c++){
        var splii = split[c].split(",");
     
      
        
      for(var i = 0; i < splii.length; i++){
          
          if(i == 0){
           subj.innerHTML = splii[i];   
               ee.innerHTML = "View "+splii[i]+" Details";
          }
          if(i == 3){
            amou.innerHTML = splii[i];  
          }
          if(i == 1){
        
          table.innerHTML = splii[i];
          }
          
          
      }
     }
     
       
      
    table.innerHTML += '<tr><td></td><td></td><td></td><td> <a href="'+sessionStorage.getItem("URL")+'/AAAACLIENT/PdfFormat?subject='+subj.innerHTML+'&date='+amou.innerHTML+'" data-hint="Print" class="fg-green clicker"><i class="icon-file-pdf"></i></a> &nbsp;<a href="'+sessionStorage.getItem("URL")+'/AAAACLIENT/PdfFormat?subject='+subj.innerHTML+'&date='+amou.innerHTML+'" data-hint="Print" class="fg-white clicker"><i class="icon-open"></i></a> <a href="'+sessionStorage.getItem("URL")+'/AAAACLIENT/PdfFormat?subject='+subj.innerHTML+'&date='+amou.innerHTML+'" data-hint="Print" class="fg-darkGreen clicker"><i class="icon-file-excel"></i></a> </td></tr>';
 }



function clicked(e){
    
  if  (e.target.tagName === "LI"){
   sendSingleRep(e.target.id);
  }
 
    
  
    
}

function sendSingleRep(id){
    
    
   
   
    var requestUrl = login+"?sub="+id;
    
     //+ methodAndArguments;
        
   try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parse(asyncRequest);  //callBack( asyncRequest );
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

function parse(asyncRequest){
if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object

 var data = JSON.parse(asyncRequest.responseText);
str = data;
 
     arrange();
}
}
function con(e){
  //  window.alert("you have clicked me");
    
    e.preventDefault();
}




window.addEventListener("contextmenu",con,false);

window.addEventListener("load",log,false);
document.addEventListener("click",clicked,false);
