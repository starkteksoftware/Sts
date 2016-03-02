/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var str;
var webServiceUrl = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/name?question="+localStorage.getItem("ExamName");
 var ex = localStorage.getItem("ExamName");
var schedule = localStorage.getItem(ex+"Schedule");
    var duration = localStorage.getItem(ex+"Duration");
    var regStudents = localStorage.getItem(ex+"Candidates");
function start(){
   
 var requestUrl = webServiceUrl;
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


function parseData( asyncRequest )
 {
   
 // if request has completed successfully, process the response
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object


 var data = JSON.parse(asyncRequest.responseText);
       
      
 str = data.question.toString();
   
        arrangeText();
    
}
 }

function arrangeText(){
 var info = document.getElementById("info");
 info.innerHTML += "<b>Start Time:</b>"+schedule+" <b>Candidates :</b>"+regStudents+" <div><b>Duration</b>: "+duration+"mins </div>";
   var div = document.getElementById("questionHolder");
   var concat = "<div></div>";
    var sec = str.split("#question");

    for(var c = 1; c < sec.length; c++){
       
       
       var sep = sec[c].split("#");
     
       for(var i = 0; i < sep.length; i++){
           if(i == 0){
              concat+="  <div><b>("+c+")."+sep[i] +"</b>&nbsp;<a href='#' title='Flag Question'> <i class='icon-flag fg-green' id='"+c+"'  data-hint='Flag Question'></i>&nbsp; </a><a href='#' title='Cancel Question'><i class=' icon-cancel-2 fg-red'data-hint='cancel Question'  ></i></a></div>  ";  
           }
           else{
          concat+="<div><input type='radio' checked />&nbsp;&nbsp; "+sep[i].substring(6,sep[i].length) +"</div>"; 
           }
       }
    }
   
    div.innerHTML = concat;
}
start();


function clicked(e){
   if(e.target.tagName == "I"){
      
       var send ="#flag#"+ex+"#"+e.target.id;
        sendFlag(send); 
       
        
 }
 
 
    
}
document.addEventListener("click",clicked,false);