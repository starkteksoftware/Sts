/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var login = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/student/exam/start/section/exam";


   
    


function log(){
 

var examInfo = document.URL;
var exam = examInfo.split("=");
  
  
  

 var cc = localStorage.getItem("matric");
    var requestUrl = login+"?matric="+cc+"&exam="+exam[1]+"&type="+localStorage.getItem("eType");
    
 
         
          
    
    document.getElementById("startExam").addEventListener("click",startExam,false);
    
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
 
     arrange(data);
     
 // display data on the page
 } // end if
 }


function arrange(data){
    var string = "";
    var split = data.split("#");
    
    for(var i = 1; i < split.length; i++){
        var id= "";
        var start = "<tr>";
        var add = "";
        var seperate = split[i].split(",");
        
        for(var c = 0; c < seperate.length; c++){
            
            if(c == 0){
                add+="<td>"+i+"</td>";
                
                id = seperate[0];
            }
            
            if(c == 2){
                add+="<td>not applicable</td>";
                
            }
            add+="<td>"+seperate[c]+"</td>";
            
              
            if(c == seperate.length - 1){
              
             localStorage.setItem(id+"attempt",seperate[c]);
             
            }
        }
        
        
        var end = " <td><span id='"+id+"' onClick='show();' class='label label-success'>Proceed</span></td> </tr>";
        
        string+= start + add+ end;
        
        
    }
    document.getElementById("registerBody").innerHTML = string;
    
    
}

function show(){
    document.getElementById("popUps").setAttribute("style", "display:block");
    document.getElementById("example1").setAttribute("style","display:none");
    
    
     
    
}

function parseValue()
 {
   
 // if request has completed successfully, process the response
 
 // convert the JSON string to an Object

/*
 var data =  localStorage.getItem("detail");
 value = data;
 
        
       
       

if(data.indexOf("session active") != -1){
    alert("session active ");
    
   
    return;
}



if( data === "false"){
    window.alert("please you have not registered");
     return;
    
    
}






    var splif = data.split("#");
    var spliffed = splif[1];
    var sect = spliffed.split(",");
  details = "&Last="+sect[0]+"&first="+sect[1]+"&matric="+sect[4];
  
    */
    log();

 // display data on the page
 }
 
  var examClicked = "";
 function clicked(e){
     
     
     if(e.target.tagName === "SPAN"){
         examClicked = e.target.id;
         
     }
 }


function startExam(){
    
    
    
    
    window.location.assign(sessionStorage.getItem("URL")+"/AAAASTUDENT/index.html?query="+examClicked+"&Last="+localStorage.getItem("lastName")+"&First="+localStorage.getItem("firstName")+"&matric="+localStorage.getItem("matric"));
    
     
      
        
}
window.addEventListener("load",parseValue,false);
document.addEventListener("click",clicked,false);
