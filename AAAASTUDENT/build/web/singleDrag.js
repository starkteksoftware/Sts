/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */









var login = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/student/matric";
var webServiceUrl = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/name?question=";

var page;

var time;
var times;
var matricNumber;

var pageChange;
var array = [];
var str = "";
var questionCount = 0;
var totalQuestions = [];
var pageVerifier = 0;
var feed;
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
    
    
    
    
   // var spl = array.split("#");
    var sec = str.split("#question");
    var paginateDiv = document.getElementById("pagination");
    var paginateAdd ="";
    var parentNode = paginateDiv.parentNode;
   
    
   
  //  window.alert(spl);
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
             if(arr[ii].length > 0){
                 totalQuestions.push(arr[ii]);
             }
        }
        
      
        
        
        
      
  }else{
   for(var c = 0; c < sec.length; c++){
       array.push(sec[c]);
       totalQuestions.push(0);
       coordinates.push(0);
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
    
  }
  
 
  

 paginateDiv.innerHTML = paginateAdd;
    
      for(var e = 0; e < (totalQuestions.length - 1); e++){
            if(totalQuestions[e] > 0){
           
            
            var markers =  document.getElementById(e+'.');
        markers.setAttribute("style","background-color: red");
            }
        }
  
  
 
  connect();
  
 var amountOfQuestions = document.getElementById("amount"); 
 amountOfQuestions.innerHTML = " "+array.length - 1 +" Questions";
 

   
 page = 1;
 
   
    next();
 
    
    
}

function pages(e){
   
  
    page = parseInt(e);
    questionCount = parseInt(e);
    
   var pageC =    document.getElementById("number");
  pageC.innerHTML = page;
  
     
       
      if(totalQuestions[page] !== 0){
   var xx =  totalQuestions[page];
  
   
  var splits =  xx.split("**");
  var split = splits[1].split("*");
 
 
  
   var a;
   var b;
   for(var c = 0; c < split.length; c++){
       if(c % 2== 0){
          a = split[c]; 
       }
       else{
         b= split[c];  
       }
   }
   
   
    var documented = document.getElementById("drag1");
    
    //ev.target.appendChild(document.getElementById(data));
    documented.setAttribute("style","position:absolute; top:"+a+'px;'+"left:"+b+'px;');
    
       }

    
   
     var tab = document.getElementById("table");
     var answerss = document.getElementById("answers");
     
        var b ="";
        var ff ="";
        
        var answer = false;
        var answerMonitor;
          var questionv;
         
    for(var c = 0; c < array.length; c++){
        if(c === questionCount){
           
     var split = array[c].toString().split("**");
       
          b+="<p>"+split[0]+"</p>";
           b+="<div style='margin-left:19%'>"+split[1]+"</div>";
          
 
     
   break;
        }
       
       
    }
    
      tab.innerHTML = b;
   
      
      
  //answerss.innerHTML = ff;
      
  
         
    
    
    
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


    if(totalQuestions[page] !== 0){
   var xx =  totalQuestions[page];
  
   
  var splits =  xx.split("**");
  var split = splits[1].split("*");
 
 
  
   var a;
   var b;
   for(var c = 0; c < split.length; c++){
       if(c % 2== 0){
          a = split[c]; 
       }
       else{
         b= split[c];  
       }
   }
   
   
    var documented = document.getElementById("drag1");
    
    //ev.target.appendChild(document.getElementById(data));
    documented.setAttribute("style","position:absolute; top:"+a+'px;'+"left:"+b+'px;');
    
       }




       var tab = document.getElementById("table");
       var answerss = document.getElementById("answers");
       var ff ="";
       
       
       
        var b ="";
        var answer = false;
        var answerMonitor;
          var questionv;
         
    for(var c = 0; c < array.length; c++){
        if(c === questionCount){
           
       var split = array[c].toString().split("**");
       
          b+="<p>"+split[0]+"</p>";
          b+="<div style='margin-left:19%'>"+split[1]+"</div>";
          
 
     
   break;
        }
       
       
    }
  
  
  
  
  
  
    
      tab.innerHTML = b;
    
    
      
}



function previous(){
 if(page == 1){
     return;
 }
 
 
 questionCount--;
  page--;
  
  
 var pageC =    document.getElementById("number");
  pageC.innerHTML = page;
   
      if(totalQuestions[page] !== 0){
   var xx =  totalQuestions[page];
  
   
  var splits =  xx.split("**");
  var split = splits[1].split("*");
 
 
  
   var a;
   var b;
   for(var c = 0; c < split.length; c++){
       if(c % 2== 0){
          a = split[c]; 
       }
       else{
         b= split[c];  
       }
   }
   
   
    var documented = document.getElementById("drag1");
    
    //ev.target.appendChild(document.getElementById(data));
    documented.setAttribute("style","position:absolute; top:"+a+'px;'+"left:"+b+'px;');
    
       }




  
  
       var tab = document.getElementById("table");
         var answerss = document.getElementById("answers");
         
       var ff ="";
        var b ="";
         var answer = false;
         var questionv;
         
    for(var c = 0; c < array.length; c++){
        if(c === questionCount){
 
     var split = array[c].toString().split("**");
       
          b+="<p>"+split[0]+"</p>";
         b+="<div style='margin-left:19%'>"+split[1]+"</div>";
          
 
     
   break;
        }
       
       
    }
      tab.innerHTML = b;
    
      
      
}



function arrange(){
   
    var tab = document.getElementById("table");
    var b ="";
    for(var c = 0; c < array.length; c++){
   b +="<tr><td>"+array[c]+" </td> </tr>" ;   
       
       
    }
   
    tab.innerHTML = b;
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

//var next = document.getElementById("next").addEventListener("click",hi,false);
}

function endExams(){
    var countt = 0;
 var totalNumbers =   array.length - 1;
 for(var i = 0; i < totalQuestions.length; i++){
     if(totalQuestions[i] > 0){
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
    
     for(var c = 1; c < array.length; c++){
      
          var string = ""; 
             var xx =  totalQuestions[c];
  
       var split = array[c].toString().split("**");
       
         string+="<p>"+split[0]+"</p>";
          
          string+="<div style='margin-left:19%'>"+split[1]+"</div>";
         
           var body =  document.getElementById("examBody");
 


    body.innerHTML += string;
    
    
    
    
 var sep =  split[2].split(",");
    
 
    
        
          document.getElementById(sep[0]).setAttribute("style","background-color:green");
          
          
   if(totalQuestions[c] != 0){
  var splits =  xx.split("**");
  var splitt = splits[1].split("*");
 
           
               document.getElementById(splits[0]).setAttribute("style","background-color:blue");
               
   }
          
 
     
 
     
       
       
    }
  
  
  
  
    
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
        if(e.target.getAttribute("type") === "radio"){
            totalQuestions[page] = e.target.id;
            
          
          
       
         
      var markers =  document.getElementById(page+'.');
      
      
         markers.setAttribute("style","background-color: red");
         
         
         
           
        }
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
 start();
 


window.addEventListener("load",start,false);
document.addEventListener("click",clicked,false);





