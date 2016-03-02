/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var webServiceUrl = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/name?question=";

var login = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/student/matric";

 

var saveAnswers = [];
 
var time;
var times;
var matricNumber;

var pageChange;

var feed;

var page;
var array = [];
var str = "";
var questionCount = 0;
var totalQuestions = [];
var pageVerifier = 0;
var topic;


function storeAnswer(){
    
     
        for(var c = 0; c < array.length; c++){
    
     
      
       var split = array[c].toString().split("#");
    for(var i = 0; i < split.length; i++){
          
          if(split[i].indexOf("answer") !== -1 ){
                
                  var st =   split[i].substring(6,split[i].length);
                    
   var find = '&nbsp;';
   var re = new RegExp(find, 'g');

   var   str = st.replace(re, '');
      saveAnswers.push(str);
      
                   

             }

       }


}
}

function callWebService(){


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
 
 minuting = data.questionTime;
 seconding = 59;
 
  
   
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
    
    
    
    
    if(localStorage.getItem("answers")){
     
        
     for(var c = 0; c < sec.length; c++){
       array.push(sec[c]);
      // totalQuestions.push(0);
     if(c == (sec.length - 1)){
           
       }
       else{
      paginateAdd += "<div class='pagination'  id='"+(c+1)+".'>"+(c+1)+" </div>"; 
       }
            
            /*  var div = document.createElement('div');

  div.innerHTML =(c+1);
  div.setAttribute('class','pagination');
 //  div.setAttribute('id',(c+1));
  div.setAttribute('id',(c+1)+'.'); */
   
  
      
  
 
    //  parentNode.insertBefore(div,paginateDiv);

        }  
        
        var ans = localStorage.getItem("answers");
        var arr = ans.split(",");
       
        
        for(var ii = 0; ii < arr.length; ii++){
           
         
              totalQuestions[ii] = (arr[ii]);  
              
         
        }
        
      
        
        
        
 localStorage.removeItem("answers");
 localStorage.removeItem("time");
 
 
  }else{
    
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
  
   
   for(var e = 0; e < totalQuestions.length; e++){
            if(totalQuestions[e] != 0){
           var markers =  document.getElementById(e+'.');
        markers.setAttribute("style","background-color: red");
            }
        }
        
        
        
        connect();
        
        
  var amountOfQuestions = document.getElementById("amount"); 
 amountOfQuestions.innerHTML = " "+(array.length -1 )+" Questions";
 
 
   page = 1;
    storeAnswer();
     
    next();
}



function next(){
     if(page == (array.length - 1)){
        
        return;
    }
   questionCount++;
   

 if(pageVerifier === 1){
       
      
  
 page++;
       
   //     startRotating();
   var pageC =    document.getElementById("number");
       
  pageC.innerHTML = page;
 }
  
 pageVerifier = 1;

  
     var tab = document.getElementById("table");
        var b ="";
        var options ="";
        var answer = false;
        var answerMonitor;
          var questionv="";
     //loop through the question and check for c.. variable c is the current page
     
    for(var c = 0; c < array.length; c++){
        if(c === questionCount){
     var split = array[c].toString().split("#");
     for(var i = 0; i < split.length; i++){
         
         if(i === 0){
            
         if(totalQuestions[c] !== 0){
             answer = true;
              questionv = totalQuestions[c];
             
              
         }
           
           if(totalQuestions[c] == 0){
         b +="<tr><td>"+split[i]+" </td> </tr>"+"<tr><td><input type='text' name='jol' list=''/></td></tr>";
      //   b +="<tr><td>"+split[i]+" </td></tr>";
           }
           else{
                b +="<tr><td>"+split[i]+" </td></tr>";
                     b+="<tr><td><input type='text' placeholder='"+questionv+"' name='jol' list=''/></td></tr>";            
        
           }
                }
         else{
             if(answer){
                  
         options +="<option value ='"+split[i].substring(6,split[i].length)+"'/>";  
          
          
                    }
                    
                    else{
             
         options +="<option value ='"+split[i].substring(6,split[i].length)+"'/>";  
        
                  
                      
                    }
         }
     }
   break;
        }
       
       
    }
    
    var concat = b;
    
   
    var first = "<datalist id='list'>";
    
    var end ="</datalist>";
    
   var complete = concat + first +options + end;
      tab.innerHTML = complete;
    
    
  
  
  
    
    
    
}

function previous(){
     if(page == 1){
     return;
 }
    questionCount--;
    page--;
       
   //     startRotating();
   var pageC =    document.getElementById("number");
       
  pageC.innerHTML = page;
  
      var tab = document.getElementById("table");
        var b ="";
        var options ="";
        var answer = false;
        var answerMonitor;
          var questionv ="";
     
    for(var c = 0; c < array.length; c++){
        if(c === questionCount){
     var split = array[c].toString().split("#");
     for(var i = 0; i < split.length; i++){
         
         if(i === 0){
            
         if(totalQuestions[c] !== 0){
             answer = true;
              questionv = totalQuestions[c];
             
              
         }
           
           if(totalQuestions[c] == 0){
         b +="<tr><td>"+split[i]+" </td> </tr>"+"<tr><td><input type='text' name='jol' list=''/></td></tr>";
      //   b +="<tr><td>"+split[i]+" </td></tr>";
           }
           else{
                b +="<tr><td>"+split[i]+" </td></tr>";
                     b+="<tr><td><input type='text' placeholder='"+questionv+"' name='jol' list=''/></td></tr>";            
        
           }
                }
         else{
             if(answer){
                  
         options +="<option value ='"+split[i].substring(6,split[i].length)+"'/>";  
          
          
                    }
                    
                    else{
             
         options +="<option value ='"+split[i].substring(6,split[i].length)+"'/>";  
        
                  
                      
                    }
         }
     }
   break;
        }
       
       
    }
    
    var concat = b;
    
   
    var first = "<datalist id='list'>";
    
    var end ="</datalist>";
    
   var complete = concat + first +options + end;
      tab.innerHTML = complete;
    
    
    
}





function start(){
 
    
  
pageChange = document.getElementById("number").innerHTML;
 
 
   page = parseInt(pages);
 
    //connect();
  /*  worker.addEventListener('message',function(e){
        alert("worker said"+ e.data);
},false);  */



    callWebService();

 // var enter = document.getElementById("enterButton").addEventListener("click",log,false);
 



var subButs = document.getElementById("endExamination").addEventListener("click",endExams,false);
    var previous = document.getElementById("previous").addEventListener("click",previous,false);
  var next = document.getElementById("next").addEventListener("click",next,false);

}


function pages(e){
   
   
   
  
    page = parseInt(e);
    questionCount = parseInt(e);
    
    var pageC =    document.getElementById("number");
       
       
       
  pageC.innerHTML = page;
  
     var tab = document.getElementById("table");
        var b ="";
        var options ="";
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
             
              
         }
           
           if(totalQuestions[c] == 0){
         b +="<tr><td>"+split[i]+" </td> </tr>"+"<tr><td><input type='text' name='jol' list=''/></td></tr>";
      //   b +="<tr><td>"+split[i]+" </td></tr>";
           }
           else{
                b +="<tr><td>"+split[i]+" </td></tr>";
                     b+="<tr><td><input type='text' placeholder='"+questionv+"' name='jol' list=''/></td></tr>";            
      
                        
                        
           }
                }
         else{
             if(answer){
                  
         options +="<option value ='"+split[i].substring(6,split[i].length)+"'/>";  
          
          
                    }
                    
                    else{
             
         options +="<option value ='"+split[i].substring(6,split[i].length)+"'/>";  
        
                  
                      
                    }
         }
     }
   break;
        }
       
       
    }
    
    var concat = b;
    
   
    var first = "<datalist id='list'>";
    
    var end ="</datalist>";
    
   var complete = concat + first +options + end;
      tab.innerHTML = complete;
    
    
    
}

 
 

function clicked(e){
    
    
    
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
        if(e.target.getAttribute("type") === "text"){
            
         
      //      totalQuestions[page] = e.target.id;
        //      window.alert(e.target.id); 
           
        }
        }
    
}


 function endExams(){
    var countt = 0;
 var totalNumbers =   array.length;
 for(var i = 0; i < totalQuestions.length - 1; i++){
     if(totalQuestions[i] != 0){
         countt++;
         
     }
 }
if(confirm('are you sure you want to end exam\n\
you have attempted '+countt+' out of '+totalNumbers)){
        feedback();
        submitted();
        cancelLogin();
    
}
else{
        alert("no");
}



    
}

/*function hi(){
    worker.postMessage("jol");
    alert("posted");
}   */

function feedback(){
  var body =  document.getElementById("examBody");
  body.innerHTML = feed;
  
    
     
  if(show){
      showAnswer();
  }
  
}

var show = true;


function showAnswer(){
    
    
     document.getElementById("result").setAttribute("style","display:block");
    
     
    
      
    var score = 0;
     var percentage = 0;
    var main = "";
    var b = "";
    var options;
    var answer = false;
    var questionv ;
     for(var c = 1; c < array.length; c++){
       b+="<br/>";
       
        
     var split = array[c].toString().split("#");
     for(var i = 0; i < split.length; i++){
         
         if(i === 0){
            
         if(totalQuestions[c] !== 0){
             answer = true;
              questionv = totalQuestions[c];
             
              
         }
           
           if(totalQuestions[c] == 0){
          b += "("+(c)+") <tr><td>"+split[i]+" </td> </tr>"+"<tr><td><input type='text' name='jol' list='list'/></td></tr>";
      //   b +="<tr><td>"+split[i]+" </td></tr>";
           b+="<p style='background-color:red;'>"+saveAnswers[c -1]+"</p>";
    
     
                }
           else{
                b += "("+c+")<tr><td>"+split[i]+" </td></tr>";
                     b+="<tr><td><input type='text' placeholder='"+questionv+"' name='jol' list='list'/></td></tr>";            
               if(saveAnswers[c - 1].toString().toLowerCase().trim() === questionv.toString().toLowerCase().trim()){
               
                         b+="<p style='background-color:green;'>"+saveAnswers[c -1]+"</p>";
                  score+=5;
                  percentage++;
                  
                      
                   
                    
                   
             }else{
                
                   b+="<p style='background-color:red;'>"+saveAnswers[c -1]+"</p>";
    
                   
             }
             
             
           }
                }
         else{
             if(answer){
                  
       //  options +="<option value ='"+split[i].substring(6,split[i].length)+"'/>";  
          
          
                    }
                    
                    else{
             
      //   options +="<option value ='"+split[i].substring(6,split[i].length)+"'/>";  
        
                  
                      
                    }
         }
     }
 // break;
 
   
 // alert(saveAnswers[c - 1] +" "+c);
   
    
       
        
     
   
  var concat = b;
    
   
    var first = "<datalist id='list'>";
    
    var ends ="</datalist>";
    
   var complete = concat + first +options + ends;
   
   main= b;
   
   
        }
       
    
  var body =  document.getElementById("resultBody");
    
     
      
      
        
             
 

var realNumber =  percentage * 100 / array.length;
  var st = "<p>Your percentage is "+realNumber +" %</p> And your score is  " +score+ " <button style='float:right;'>Next Page </button>";
  body.innerHTML += st;
    body.innerHTML += main;
    
    
    
    
        
         
  
      //tab.innerHTML = complete;
    
 var body =  document.getElementById("examBody");
     body.setAttribute("style","display:none");
        
    
     
  var login = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/student/exam/start/section/exam"; 
    
     var requestUrl = login+"?matric="+matricNumber+"&exam="+topic+"&type="+localStorage.getItem("eType")+"&status=result"+"&time="+mm+":"+tt+"&score="+realNumber+"&attempt="+localStorage.getItem(topic+"attempt");
     
     
     
     
       alert(requestUrl);
          
           
            
  var body =  document.getElementById("examBody");
 body.setAttribute("style","display:none");
  
  
   
    
        
    
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
 
  
 
   alert(data);
   
   var split = data.split(":");
  
   
        messageDisplay("you ranked "+split[1] +" position in "+topic +" \n "+"You are ranked "+split[2]+" in the overall subject ranking ");

   
    
         
   
 }
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
        feedback();
        submitted();
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

 
   
    


         
         
    var wsocket;


function connect() {
    
 
 mm = time;
 
  
  
wsocket = new WebSocket("ws://"+location.host+"/AAAACLIENT/endpoint?matric="+matricNumber+"&time="+mm+"&answers="+totalQuestions+"&subject="+topic);

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


 

function change(e){
    
   if(e.target.getAttribute("name") === "jol"){
     
  
      var tr = e.target.value.toString();
      
 
       totalQuestions[page] = tr;
       
       
        var markers =  document.getElementById(page+'.');
      
      
         markers.setAttribute("style","background-color: red");
         
      
       
       
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



 function exams(){
      window.location.assign(sessionStorage.getItem("URL")+"/AAAASTUDENT/studentSection.html");
      
      
      
       
      
 }
 
 function dashboard(){
      window.location.assign(sessionStorage.getItem("URL")+"/AAAASTUDENT/DashBoardHome.html?type=5");
      
      
       
        
      
    
 }

 


start();
//uncomment this to make dis page functipn and comment multiple response
 window.addEventListener("load",start,false);


document.addEventListener("click",clicked,false);
document.addEventListener("change",change,false);




