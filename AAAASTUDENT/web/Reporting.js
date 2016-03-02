/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

//{student}/{matric}
function start(){
     
var login = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/student/matric";

  


var exam=  localStorage.getItem("ReportExam");
    var requestUrl = login+"?exam="+exam+"&status=1";
    
        //+ methodAndArguments;
        
  
    
   try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseLoggerrs(asyncRequest);  //callBack( asyncRequest );
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


function    parseLoggerrs(asyncRequest){
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object

 var data = JSON.parse(asyncRequest.responseText);
values = data;
startUp();
 }
}


var values = "";

function startUp(){
    
    
     
     var table = document.getElementById("tableReport");
     
     
     
     var sec = values.split("#");
     
     var tableAdd;
     
     var addUp;
 
     
     
     
     for( var c = 1; c < sec.length; c++){
        
       var split = sec[c].split(",");
       
      
     var join = "";
     var id="";
    
     
     
       for( var i = 0; i < split.length; i++){
         if(i == 0){
             join+="<td>"+c+"</td>";
         }
         
       
           
         join+="<td>"+split[i]+"</td>"; 
       }
       join+=  "  <td>  <input type='checkbox' id='"+id+"' /></td>";
       
     
     var addition ="<tr>";
     
     addition+=join;
      addition+="</tr>";
       addUp+=addition;
      
      
   //     totalStudentPool.push(addition+"*split");
         
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



start();

