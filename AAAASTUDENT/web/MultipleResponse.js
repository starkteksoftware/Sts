/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var webServiceUrl = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/name?question=";

var login = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/student/matric";


var page;
var str="";

var time;
var times;
var matricNumber;
var pageChange;
var array = [];
var questionString = "";
var questionCount = 0;
var totalQuestions = [];
var pageVerifier = 0;
var feed;
var multipleAnswer;
var topic;



function callWebService( ){
    
  var url = document.URL;
  
 var matNumber = url.split("=");
  
  
  var sub = matNumber[1].split("&");
  var subject = sub[0];
  
  var last = matNumber[2].split("&");
  var first = matNumber[3].split("&");
  var mat = matNumber[4].split("&");
  
  var lastName = last[0];
  var firstName = first[0];
  var mats = mat[0];
  
  matricNumber = mats;
  
  topic = subject;
  
  
  
  
  document.getElementById("name").innerHTML = ""+lastName+" "+firstName+" | <small>"+subject+ "</small>";

  
  
var requestUrl = webServiceUrl+subject;
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
 
 
 if(localStorage.getItem("time")){
     var t = localStorage.getItem("time");
    times = t;
     
 }
 else{
     
 times =  data.questionTime;
 }
 
 
 
 feed = data.feedBack;
 
 
 
 
 var numbers = new Number(times);
 
 
 time = numbers;
 
 
 
 
  timer = setInterval(showRemaining,1000);
   
        
        
        
      
 setQuestions();
 
 // display data on the page
 } // end if
 } // 
 
 function setQuestions(){
    
    
    
    
  
    var sec = str.split("#question");
 var paginateDiv = document.getElementById("pagination");
    var paginateAdd ="";
    var parentNode = paginateDiv.parentNode;
    
    
    
if(localStorage.getItem("answers")){
     for(var c = 0; c < sec.length; c++){
       array.push(sec[c]);
      // totalQuestions.push(0);
    if(c == (sec.length - 1)){
           
       }
       else{
      paginateAdd += "<div class='pagination'  id='"+(c+1)+".'>"+(c+1)+" </div>"; 
       }

        } 
          var ans = localStorage.getItem("answers");
         
          
        var arrs = ans.split("0");
        
        
        
     
        
        
        
        
        for(var ii = 0; ii < arrs.length; ii++){
            
            
            
                
                 if(ii === 1){
                     
                 }
                 else{
               totalQuestions.push( "0"+arrs[ii]);
              
               
                 }
                 
               
               
             
             
             
             
            
             
               
           
        }
        
        
        
      
        
}
   else{
   for(var c = 0; c < sec.length; c++){
       array.push(sec[c]);
       totalQuestions.push(0);
       
         if(c == (sec.length - 1)){
           
       }
       else{
      paginateAdd += "<div class='pagination'  id='"+(c+1)+".'>"+(c+1)+" </div>"; 
       }
       
   }
   
   }
   
 paginateDiv.innerHTML = paginateAdd;
  
 var amountOfQuestions = document.getElementById("amount"); 
 amountOfQuestions.innerHTML = " "+array.length -1+" Questions";
 
 if(localStorage.getItem("time")){
       localStorage.removeItem("answers");
         localStorage.removeItem("time");
 }
 
 
         
      connect();
   page = 1;
   
    next();
}


function next(){
    
    if(page == (array.length - 1)){
        
        return;
    }

   
 questionCount++;

 if(pageVerifier === 1){
 page++;
       // startRotating();
       var pageC =    document.getElementById("number");
       
  pageC.innerHTML = page;
 }
  
 pageVerifier = 1;

       var tab = document.getElementById("table");
        var answerss = document.getElementById("answers");
       
        
         var ff ="";
         var b ="";
        var answer = false;
        
        var answerMonitor;
          var questionv;
     
    for(var c = 0; c < array.length; c++){
        if(c === questionCount){
     var split = array[c].toString().split("#");
     for(var i = 0; i < split.length; i++){
         
         if(i === 0){
            
         if(totalQuestions[c] !== 0){
             answer = true;
              questionv = totalQuestions[c];
              
             splitArray = [];
             
             splitArray = questionv.split(",");
         }
             b +="<p>"+split[i]+"</p>"; 
             
             
       //  b +="<tr><td>"+split[i]+" </td> </tr>";
         }
         else{
             if(answer){
            if(i == splitArray[1] || i == splitArray[2] || i == splitArray[3] || i == splitArray[4]|| i == splitArray[5] || i == splitArray[6] || i == splitArray[7] || i == splitArray[8] || i == splitArray[9] || i == splitArray[10]|| i == splitArray[11] || i == splitArray[12] || i == splitArray[13] || i == splitArray[14] || i == splitArray[15] || i == splitArray[16]|| i == splitArray[17] || i == splitArray[18] || i == splitArray[19] || i == splitArray[20] || i == splitArray[21] || i == splitArray[22]|| i == splitArray[23] || i == splitArray[24] || i == splitArray[25] || i == splitArray[26] || i == splitArray[27] || i == splitArray[28]|| i == splitArray[29] || i == splitArray[30] || i == splitArray[31] || i == splitArray[32] || i == splitArray[33] || i == splitArray[34]|| i == splitArray[35] || i == splitArray[36] || i == splitArray[37] || i == splitArray[38] || i == splitArray[39] || i == splitArray[40]|| i == splitArray[41] || i == splitArray[18] || i == splitArray[42] || i == splitArray[43] || i == splitArray[44] || i == splitArray[45]|| i == splitArray[46] || i == splitArray[47]  ){
          ff += "  <p style='margin-left:40%'><input type='checkbox' checked name='jol' id='"+i+"' class='margin5'/>"+split[i].substring(6,split[i].length)+"</p> ";                      
        //    b +="<tr><td><input type='checkbox'  checked='true' name='jol' id='"+i+"' /></td><td>"+split[i]+" </td> </tr>";      
              }
              else{
                    ff += "  <p style='margin-left:40%'><input type='checkbox'  name='jol' id='"+i+"' class='margin5'/>"+split[i].substring(6,split[i].length)+"</p> ";  
             //     b +="<tr><td><input type='checkbox' name='jol' id='"+i+"' /></td><td>"+split[i]+" </td> </tr>";     
              }
                    }
                    else{
             
   ff += "  <p style='margin-left:40%'><input type='checkbox'  name='jol' id='"+i+"' class='margin5'/>"+split[i].substring(6,split[i].length)+"</p> ";  
                    }
         }
     }
   break;
        }
       
       
    }
    
    
      tab.innerHTML = b;
       answerss.innerHTML = ff;
}




function previous(){
  
     if(page == 1){
     return;
 }
 
 
 questionCount--;
  page--;
  
   var pageC =    document.getElementById("number");
  pageC.innerHTML = page;
   
  
       var tab = document.getElementById("table");
        var answerss = document.getElementById("answers");
         
       var ff ="";
        var b ="";
         var answer = false;
         var questionv;
         
    for(var c = 0; c < array.length; c++){
        if(c === questionCount){
 
     var split = array[c].toString().split("#");
     for(var i = 0; i < split.length; i++){
         
         if(i === 0){
           if(totalQuestions[c] !== 0){
             answer = true;
             questionv = totalQuestions[c];
            
             splitArray = [];
             
             splitArray = questionv.split(",");
             
            
           
             
             
         }
           b +="<p>"+split[i]+"</p>"; 
       //  b +="<tr><td>"+split[i]+" </td> </tr>";
         }
         else{
             
             if(answer){
           if(i == splitArray[1] || i == splitArray[2] || i == splitArray[3] || i == splitArray[4]|| i == splitArray[5] || i == splitArray[6] || i == splitArray[7] || i == splitArray[8] || i == splitArray[9] || i == splitArray[10]|| i == splitArray[11] || i == splitArray[12] || i == splitArray[13] || i == splitArray[14] || i == splitArray[15] || i == splitArray[16]|| i == splitArray[17] || i == splitArray[18] || i == splitArray[19] || i == splitArray[20] || i == splitArray[21] || i == splitArray[22]|| i == splitArray[23] || i == splitArray[24] || i == splitArray[25] || i == splitArray[26] || i == splitArray[27] || i == splitArray[28]|| i == splitArray[29] || i == splitArray[30] || i == splitArray[31] || i == splitArray[32] || i == splitArray[33] || i == splitArray[34]|| i == splitArray[35] || i == splitArray[36] || i == splitArray[37] || i == splitArray[38] || i == splitArray[39] || i == splitArray[40]|| i == splitArray[41] || i == splitArray[18] || i == splitArray[42] || i == splitArray[43] || i == splitArray[44] || i == splitArray[45]|| i == splitArray[46] || i == splitArray[47]  ){
       ff += "  <p style='margin-left:40%'><input type='checkbox' checked name='jol' id='"+i+"' class='margin5'/>"+split[i].substring(6,split[i].length)+"</p> ";   
                            //  b +="<tr><td><input type='checkbox' checked='true' name='jols'  id='"+i+"' /></td><td>"+split[i]+" </td> </tr>";      
              }
              else{
               ff += "  <p style='margin-left:40%'><input type='checkbox' name='jol' id='"+i+"' class='margin5'/>"+split[i].substring(6,split[i].length)+"</p> ";         
             //     b +="<tr><td><input type='checkbox'  id='"+i+"' /></td><td>"+split[i]+" </td> </tr>";     
              }
                    }
                    
                      else{
            ff += "  <p style='margin-left:40%'><input type='checkbox' name='jol' id='"+i+"' class='margin5'/>"+split[i].substring(6,split[i].length)+"</p> ";       
    //    b +="<tr><td><input type='checkbox'  id='"+i+"' /></td><td>"+split[i]+" </td> </tr>";   
                    }
             
        //   b +="<tr><td><input type='radio' name='jol' id='"+i+"' /></td><td>"+split[i]+" </td> </tr>";   
           
         
         }
     }
   break;
        }
       
       
    }
      tab.innerHTML = b;
      
       answerss.innerHTML = ff;
      
}






 
 
 function start(){
    
      
pageChange = document.getElementById("number").innerHTML;
//var  pages = document.getElementById("number").innerHTML;
 
   page = parseInt(pages);
 
    callWebService();

 var subButs = document.getElementById("endExamination").addEventListener("click",endExams,false);
    var previous = document.getElementById("previous").addEventListener("click",previous,false);
  var next = document.getElementById("next").addEventListener("click",next,false);
}

function endExams(){
    var countt = 0;
 var totalNumbers =   array.length;
 for(var i = 0; i < totalQuestions.length -1; i++){
     if(totalQuestions[i] != 0){
         countt++;
         
     }
 }
if(confirm('are you sure you want to end exam\n\
you have attempted '+countt+' out of '+totalNumbers)){
        submitted();
        feedback();
        cancelLogin();
        
        
    
}
else{
        alert("no");
}



    
}
function feedback(){
  var body =  document.getElementById("examBody");
  body.innerHTML = feed;
  
  
  if(show){
        showAnswer();
  }
  
}

var show = true;
function showAnswer(){
    
    var percentage = 0;
   var string = "";   
      for(var c = 1; c < array.length; c++){
          var split = array[c].split("#");
           for(var i = 0; i < split.length; i++){
         
         if(i === 0){
            
         if(totalQuestions[c] !== 0){
             answer = true;
              questionv = totalQuestions[c];
               splitArray = [];
             
             splitArray = questionv.split(",");
             
         }
     
         
         
           string +='<div style="border-top:2px solid blue; margin-top:30px;"></div><p style="color:blue;">('+c+').<b>'+split[i]+'</b></p>';
        
         //b +="<tr><td>"+split[i]+" </td> </tr>";
         }
         else{
             if(answer){
               
               
                  
                  
                  
                  
                                if(i == splitArray[1] || i == splitArray[2] || i == splitArray[3] || i == splitArray[4]|| i == splitArray[5] || i == splitArray[6] || i == splitArray[7] || i == splitArray[8] || i == splitArray[9] || i == splitArray[10]|| i == splitArray[11] || i == splitArray[12] || i == splitArray[13] || i == splitArray[14] || i == splitArray[15] || i == splitArray[16]|| i == splitArray[17] || i == splitArray[18] || i == splitArray[19] || i == splitArray[20] || i == splitArray[21] || i == splitArray[22]|| i == splitArray[23] || i == splitArray[24] || i == splitArray[25] || i == splitArray[26] || i == splitArray[27] || i == splitArray[28]|| i == splitArray[29] || i == splitArray[30] || i == splitArray[31] || i == splitArray[32] || i == splitArray[33] || i == splitArray[34]|| i == splitArray[35] || i == splitArray[36] || i == splitArray[37] || i == splitArray[38] || i == splitArray[39] || i == splitArray[40]|| i == splitArray[41] || i == splitArray[18] || i == splitArray[42] || i == splitArray[43] || i == splitArray[44] || i == splitArray[45]|| i == splitArray[46] || i == splitArray[47]  ){
    
                          if(split[i].indexOf("option") != -1) { 
             string += "  <p style=' background-color:red;'><input type='checkbox' checked  id='"+i+"' class='margin5'/>"+split[i].substring(6,split[i].length)+"</p> ";                         
          //  b +="<tr><td><input type='radio' checked name='jol' id='"+i+"' /></td><td>"+split[i]+" </td> </tr>";      
                          }
                          else{
                              percentage ++;
                            string += "  <p style=' background-color:green;'><input type='checkbox' checked  id='"+i+"' class='margin5'/>"+split[i].substring(6,split[i].length)+"</p> ";                         
               
                          }
                        }
              else{
                 if(split[i].indexOf("option") != -1) { 
             string += "  <p ><input type='checkbox'   id='"+i+"' class='margin5'/>"+split[i].substring(6,split[i].length)+"</p> ";                         
          //  b +="<tr><td><input type='radio' checked name='jol' id='"+i+"' /></td><td>"+split[i]+" </td> </tr>";      
                          }
                     
                        else{
                            string += "  <p style='background-color:green;'><input type='checkbox'   id='"+i+"' class='margin5'/>"+split[i].substring(6,split[i].length)+"</p> ";                         
                          }  //  b +="<tr><td><input type='radio' name='jol' id='"+i+"' /></td><td>"+split[i]+" </td> </tr>";     
              }
                    }
                    else{
                        
                           if(split[i].indexOf("option") != -1) { 
             string += "  <p style=' '><input type='checkbox'   id='"+i+"' class='margin5'/>"+split[i].substring(6,split[i].length)+"</p> ";                         
          //  b +="<tr><td><input type='radio' checked name='jol' id='"+i+"' /></td><td>"+split[i]+" </td> </tr>";      
                          }
                          else{
                            string += "  <p style=' background-color:green;'><input type='checkbox' checked  id='"+i+"' class='margin5'/>"+split[i].substring(6,split[i].length)+"</p> ";                         
               
                          } 
                       
             //  string += "  <p style='margin-left:40%'><input type='radio'  name='jol' id='"+i+"' class='margin5'/>"+split[i].substring(6,split[i].length)+"</p> ";                         
      //  b +="<tr><td><input type='radio' name='jol' id='"+i+"' /></td><td>"+split[i]+" </td> </tr>";   
                    }
         }
     }
      }
      var body =  document.getElementById("examBody");
 
 
 
var realNumber =  percentage * 100 / array.length;
  var st = "<p>Your percentage is "+realNumber +" %</p> <button style='float:right;'>Next Page </button>";
  body.innerHTML += st;
    body.innerHTML += string;
    
    
}




function pages(e){
  
  
      page = parseInt(e);
       questionCount = parseInt(e);
    
     var pageC =    document.getElementById("number");
  pageC.innerHTML = page;
    
    
     var tab = document.getElementById("table");
       var answerss = document.getElementById("answers");
       
        var b ="";
        var ff ="";
        var answer = false;
        var answerMonitor;
          var questionv;
         
     
    for(var c = 0; c < array.length; c++){
        if(c === questionCount){
     var split = array[c].toString().split("#");
     for(var i = 0; i < split.length; i++){
         
         if(i === 0){
            
         if(totalQuestions[c] !== 0){
             answer = true;
              questionv = totalQuestions[c];
              
             splitArray = [];
             
             splitArray = questionv.split(",");
         }
             
         b +="<p>"+split[i]+"</p>";
         }
         else{
             if(answer){
            if(i == splitArray[1] || i == splitArray[2] || i == splitArray[3] || i == splitArray[4]|| i == splitArray[5] || i == splitArray[6] || i == splitArray[7] || i == splitArray[8] || i == splitArray[9] || i == splitArray[10]|| i == splitArray[11] || i == splitArray[12] || i == splitArray[13] || i == splitArray[14] || i == splitArray[15] || i == splitArray[16]|| i == splitArray[17] || i == splitArray[18] || i == splitArray[19] || i == splitArray[20] || i == splitArray[21] || i == splitArray[22]|| i == splitArray[23] || i == splitArray[24] || i == splitArray[25] || i == splitArray[26] || i == splitArray[27] || i == splitArray[28]|| i == splitArray[29] || i == splitArray[30] || i == splitArray[31] || i == splitArray[32] || i == splitArray[33] || i == splitArray[34]|| i == splitArray[35] || i == splitArray[36] || i == splitArray[37] || i == splitArray[38] || i == splitArray[39] || i == splitArray[40]|| i == splitArray[41] || i == splitArray[18] || i == splitArray[42] || i == splitArray[43] || i == splitArray[44] || i == splitArray[45]|| i == splitArray[46] || i == splitArray[47]  ){
                            
            ff +="<p style='margin-left:40%'><input type='checkbox' checked name='jol' id='"+i+"' class='margin5'/>"+split[i].substring(6,split[i].length)+"</p> ";            
              }
              else{
                       ff +="<p style='margin-left:40%'><input type='checkbox'  name='jol' id='"+i+"' class='margin5'/>"+split[i].substring(6,split[i].length)+"</p> "; 
              }
                    }
                    else{
             
   ff +="<p style='margin-left:40%'><input type='checkbox'  name='jol' id='"+i+"' class='margin5'/>"+split[i].substring(6,split[i].length)+"</p> ";   
                    }
         }
     }
   break;
        }
       
       
    }
      tab.innerHTML = b;
        
  answerss.innerHTML = ff;
      
      
    
}


function clicked(e){
    
  
  
  
   /*    if(e.target.id ==="pagination"){
        var number = parseInt(e.target.innerHTML);
       
        pages(number);
        return;
    }  */
if(e.target.tagName ==="DIV"){
        
       
        var pageCounter = parseInt(e.target.id);
        
   
      
        
     
        
      
       
       if(pageCounter >= 0){
        var number = parseInt(e.target.innerHTML);
     
        pages(number);
        return;
       }
        
        
        return;
    }
    
    
     if(e.target.tagName ==="INPUT" ){
      
        if(e.target.getAttribute("type") === "checkbox"){
           if(e.target.checked){
               
           
               
           multipleAnswer = totalQuestions[page];
         
              
                
                
           var newAnswer = multipleAnswer +","+e.target.id;
           
           
         
           
           totalQuestions[page] = newAnswer;
           var markers =  document.getElementById(page+'.');
      
      
         markers.setAttribute("style","background-color: red");
           }
           else{
            multipleAnswer = totalQuestions[page]; 
             var ans = [];
          
             
             ans = multipleAnswer.split(",");
            
            
           var index = ans.indexOf(e.target.id);
             ans.splice(index,1);
             
             var str ="";
             for(var a = 0; a < ans.length; a++){
                str+= ans[a]+","; 
             }
             
           
             
             
             
           
             totalQuestions[page] =str;
             
             alert("answer for this page "+str);
             
       var markers =  document.getElementById(page+'.');
      
 
         markers.setAttribute("style","background-color: red");
           }
                
            
        
       
      
       
        }
     
    
}
}


var wsocket;



function connect() {
    
 
 mm = time;
 
  
  
wsocket = new WebSocket("ws://"+location.hostname+"/AAAACLIENT/endpoint?matric="+matricNumber+"&time="+mm+"&answers="+totalQuestions+"&subject="+topic);

wsocket.onmessage = onMessage;

}
function onMessage(evt) {
 

 


  var res =  parseInt(evt.data);
  if(res === 0){
    
      
         mm = res;
           feedback();
            
            submitted();
            cancelLogin();
             messageDisplay("Your Instructor has ended the exam");
        return;
  }
    
   if(evt.data.indexOf("Instructor") != -1){
     
     
       
        var string = evt.data.split(":");
        messageDisplay(string[1]);

   return;
   }
   
 
   
   
   
     if( evt.data.indexOf("*") != -1){
     
         
      var split = evt.data.split(":");
      if(split[1].indexOf("-") !== -1){
           var num = parseInt(split[1]);
       
       var report = mm + num;
      
             
      if( report <= 0 )  {
            feedback();
           
            submitted();
            cancelLogin();
             messageDisplay("Your Instructor has ended the exam");
        }
        
         mm = report;
          messageDisplay(num +"minutes has been subtracted from your time. \n You have "+report +" minutes left.");
     
            return;
      }
      
        var num = parseInt(split[1]);
       
       var report = mm + num;
       mm = report;
     messageDisplay(num +"minutes has been added to your time. \n You have "+report +" minutes left.");
       
     
      
      return;
  }
  
   //please when you can add plus, just change dis == to !=
   if(evt.data.indexOf("+") != -1){
     

     
   var subString = evt.data.substr(1,evt.data.length);
      
        
       var num = parseInt(subString);
       
       var report = mm+num;
    
       
       mm =report; 
         messageDisplay(mm +"minutes has been added to your time. \n You have "+report +" minutes left.");
      
        
       return;
   }
   
   if(evt.data.indexOf("-") != -1){
       
      
      
          var subString = evt.data.substr(1,evt.data.length);
        
        
       var num = parseInt(subString);
      
       
       var report = mm - num;
  
         
         
      
    

       
       
      if( report <= 0 )  {
            feedback();
            submitted();
            cancelLogin();
             messageDisplay("Your Instructor has ended the exam");
             return;
        }
        else{
            
      
              mm = report; 
       messageDisplay(num+"minutes has been deducted from your time. \n You have "+report +" minutes left.");
     
       
       return;
   }
   
   return;
   }


     

}

function sendMessage(){
   
    wsocket.send("matric="+matricNumber+"&time="+mm+"&answers="+totalQuestions+"&subject="+topic);
    
}



function submitted(){
     wsocket.send("matric="+matricNumber+"&time=0&answers="+totalQuestions+"&subject="+topic);
    
}


 
var end = new Date('7 Apr 2014 00:00:00');


var second = 1000;
var minute = second * 60;
var hour = minute * 60;
var day = hour * 24;
var timer;
var tt = 60;



var mm = 0;//where i set the time
var checkTimer = 0;
var maintainvalue = 0;







 

 
 

function showRemaining(){
    if(checkTimer >= 1){
        
    }
    else{
        mm = time;
    }
    checkTimer++;
  
   var now = new Date();
    var distance = end - now;
    if(distance < 0){
        //handle expiry
    }
    var days = Math.floor(distance / day);
    var hours = Math.floor((distance % day)/hour);
    var minutes = Math.floor((distance % hour )/minute );
    var seconds = Math.floor((distance % minute)/second);
    var milliseconds = distance % second;
    
  var ele = document.getElementById("timer");
  // ele.innerHTML = minutes+'m'+seconds+'s'+milliseconds+'ms';
   tt--;
   if(tt == 0){
      mm--
      ele.innerHTML =  mm+'m' +" : " +tt +'s' ;   
      tt = 60;
   }
   
   else{
    ele.innerHTML =  mm+'m' +" : " +tt +'s' ;
  
   }
   
   if(mm <= 5){
       if(tt % 2==0){
       ele.style.color = "red";
       }
       else{
       ele.style.color = "gray";    
       }
   }
   
   if(mm < 0){
        submitted();
        feedback();
        cancelLogin();
        
        
   }
   
   if( mm % 2 == 0){
       //time to send answers;
     if(maintainvalue !== mm){
            sendMessage();
     }
     maintainvalue = mm;
     
   }
   else{
       
   }
   
}

 
   
    



function cancelLogin(){
 
    
    var removeId= sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b?id="+matricNumber+"&course="+topic;
var requestUrl = removeId;
        //+ methodAndArguments;
        
    
    
   try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseDatas(asyncRequest);  //callBack( asyncRequest );
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

function parseDatas(asyncRequest){

}







start();
//window.addEventListener("load",callWebService(),false);
window.addEventListener("load",start,false);
document.addEventListener("click",clicked,false);

