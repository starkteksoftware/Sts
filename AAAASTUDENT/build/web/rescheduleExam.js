/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var str="";
var login = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/updateTable/update/insert/query/form";


logged();

function logged(){
    
  

    var requestUrl = login+"?subject="+localStorage.getItem("currentE");//+"?question="+question+"&scheduleDate="+scheduleDate+"&duration="+duration+"&feedback="+feedback; //+"?matric="+matricNumber;
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
        arrangeData();
  }
 }
 
 function arrangeData(){
     var seperate = str.split("#");
     
     var commaValues = seperate[1].split(",");
  document.getElementById("subjectName").value = commaValues[0];
 var split = commaValues[2].split(":");

        document.getElementById("scheduleDate").value = commaValues[1];
         document.getElementById("duration").value = commaValues[6];
         document.getElementById("amount").value = commaValues[5];
            document.getElementById("feedBack").value = commaValues[4];
            
            
            
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
 
 
// document.getElementById("multiple").addEventListener("click",hideOrShow,false);
  //document.getElementById("excel").addEventListener("click",files,false);
 minute.innerHTML = bb;
   document.getElementById("hour").value = split[0];
        document.getElementById("minute").value = split[1];
       var spell = split[2].split(".");
       
       var am = spell[0]+spell[1];
       if(am.toString().indexOf("AM") != - 1){
              document.getElementById("time").value =1;
       }
       else{
            document.getElementById("time").value =2;
            
       }
     
        
        
        
 
 
    
     document.getElementById("enter").addEventListener("click",sendData,false);
 
            
     }
function sendData(){
   
     var date=     document.getElementById("scheduleDate").value;
     var duration =    document.getElementById("duration").value;
     var amount =    document.getElementById("amount").value;
     var feedback =  document.getElementById("feedBack").value;
      var hour=   document.getElementById("hour").value;
      var minute=   document.getElementById("minute").value;
       var time =   document.getElementById("time").value;
      
    document.getElementById("error").innerHTML ="";
             document.getElementById("amount").removeAttribute("style");
              document.getElementById("scheduleDate").removeAttribute("style");
              document.getElementById("feedBack").removeAttribute("style");
              document.getElementById("duration").removeAttribute("style");
              document.getElementById("hour").removeAttribute("style");//Attribute("style","border-color:red; border-style:dotted;");
             document.getElementById("minute").removeAttribute("style");
                  document.getElementById("time").removeAttribute("style");
      document.getElementById("error").setAttribute("style","color:red");
     
       if(hour===  null || hour.length < 1){
          document.getElementById("error").innerHTML ="All details are required";
             document.getElementById("hour").setAttribute("style","border-color:red; border-style:dotted;");
        
        
      }
  
         
     
       if(minute ===  null || minute.length < 1){
          document.getElementById("error").innerHTML ="All details are required";
             document.getElementById("minute").setAttribute("style","border-color:red; border-style:dotted;");
        
         
      }
       if(time ===  null || time.length < 1){
          document.getElementById("error").innerHTML ="All details are required";
             document.getElementById("time").setAttribute("style","border-color:red; border-style:dotted;");
        
      }
      if(date ===  null || date.length < 2){
          document.getElementById("error").innerHTML = "All details are required";
            document.getElementById("scheduleDate").setAttribute("style","border-color:red; border-style:dotted;");
        
          
      }
      
       if(duration===  null || duration.length < 1){
          document.getElementById("error").innerHTML ="All details are required";
            document.getElementById("duration").setAttribute("style","border-color:red; border-style:dotted;");
        
        
      }
     
     
     
      
       if(amount ===  null || amount.length < 1){
          document.getElementById("error").innerHTML ="All details are required";
            document.getElementById("amount").setAttribute("style","border-color:red; border-style:dotted;");
        
         
      }
       if(feedback ===  null || feedback.length < 1){
          document.getElementById("error").innerHTML ="All details are required";
          document.getElementById("feedBack").setAttribute("style","border-color:red; border-style:dotted;");
        
      }
           var text =  document.getElementById("error").innerHTML;
  
   if(text.toString().length > 3){
      
        return;
        
    }
    else{
        postData();
    }
}


function postData(){
    log();
}
 var login = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/activeExam/table/insert/test/query/inquery";
 


function log(){
   
   

    
    
    var question = document.getElementById("subjectName").value;
    
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
 
 
    var requestUrl = login+"?question="+question+"&scheduleDate="+scheduleDate+"&time="+timers+"&duration="+duration+"&feedback="+feedback+"&amount="+amo+"&status=status"; //+"?matric="+matricNumber;
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
     
    document.getElementById("feedBack").value = "";
    document.getElementById("duration").value = "";
      document.getElementById("scheduleDate").value ="";
    document.getElementById("hour").value ="";
     document.getElementById("minute").value ="";
   document.getElementById("time").value ="";   
   document.getElementById("amount").value ="";
 localStorage.setItem("ScheduleExam","false");
var data = JSON.parse(asyncRequest.responseText);
alert(data);
document.getElementById("error").setAttribute("style","color;green");
document.getElementById("error").innerHTML = data;
 }
 
 }