/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var webServiceUrl = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/name?question=";


var login = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/student/matric";

var page;


var time;
var times;
var matricNumber;

var pageChange;

var feed;

var option;
var array = [];
var str = "";
var questionCount = 0;
var totalQuestions = [];
var pageVerifier = 0;


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
   
        
        
        
      option = 1;
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
            if(totalQuestions[e] != 0){
           
            
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

function next(){
    questionCount++;

 if(pageVerifier === 1){
 page++;
  var pageC =    document.getElementById("number");
  pageC.innerHTML = page;
     //   startRotating();
 }
  
 pageVerifier = 1;
 var tab = document.getElementById("table");
        var answerss = document.getElementById("answers");
       var ff ="";
       var keepdatalist = false;
        var b ="";
        var options ="";
        var datalist ="";
        var answer = false;
        var answerMonitor;
          var questionv;
          
           var complete="";
     
    for(var c = 0; c < array.length; c++){
        if(c === questionCount){
         
    var split = array[c].toString().split("#");
           
           
     
            
            
            if(totalQuestions[page] == 0){
      
           for( var i = 0; i < split.length; i++){
        if(split[i].indexOf("<") >= 0){
           ff+= "<p style='margin-left:40%'><input type='text' onblur='f("+i+")'  id='"+i+"' class='margin5' /></p>";
      }  else{
              var music = split[i].trim();         
        
             
               b+='<embed height="50" width="500" src="'+music+'">';
               
                       
      } 
      
           }
         
           
           
           tab.innerHTML = b;
           answerss.innerHTML = ff;
             return;  
             
             
      }
      
      
  
            
       else{
           
            var answers = totalQuestions[page];
           for( var i = 0; i < split.length; i++){
        if(split[i].indexOf("<") >= 0){
        
                 ff+= "<p style='margin-left:40%'><input type='text' onblur='f("+i+")' placeholder='"+answers+"' id='"+i+"' class='margin5' /></p>";
                    }  else{
              var music = split[i].trim();         
        
             
               b+='<embed height="50" width="100" src="'+music+'">';
               
                       
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
     questionCount--;
     page--;
     
      var pageC =    document.getElementById("number");
  pageC.innerHTML = page;
     
     var tab = document.getElementById("table");
        var answerss = document.getElementById("answers");
       var ff ="";
       var keepdatalist = false;
        var b ="";
        var options ="";
        var datalist ="";
        var answer = false;
        var answerMonitor;
          var questionv;
          
           var complete="";
     
    for(var c = 0; c < array.length; c++){
        if(c === questionCount){
         
    var split = array[c].toString().split("#");
           
           
     
            
            
            if(totalQuestions[page] == 0){
      
           for( var i = 0; i < split.length; i++){
        if(split[i].indexOf("<") >= 0){
            ff+= "<p style='margin-left:40%'><input type='text' onblur='f("+i+")'  id='"+i+"' class='margin5' /></p>";
      }  else{
              var music = split[i].trim();         
        
             
               b+='<embed height="50" width="100" src="'+music+'">';
               
                       
      } 
      
           }
         
           
           
           tab.innerHTML = b;
           answerss.innerHTML = ff;
             return;  
             
             
      }
      
      
  
            
       else{
           
            var answers = totalQuestions[page];
           for( var i = 0; i < split.length; i++){
        if(split[i].indexOf("<") >= 0){
           ff+= "<p style='margin-left:40%'><input type='text' onblur='f("+i+")' placeholder='"+answers+"' id='"+i+"' class='margin5' /></p>";
      }  else{
              var music = split[i].trim();         
        
             
               b+='<embed height="50" width="100" src="'+music+'">';
               
                       
      } 
      
           }
         
           
           
          
       }
         break;
        }
    }
     tab.innerHTML = b;
           answerss.innerHTML = ff;
}
            
         /*  var test =""; 
           
    for( var i = 0; i < split.length; i++){
        if(split[i].indexOf("<") >= 0){
                  
         if( answers[0] !=0 )  {
           
             
         for( var l = 0; l < answers.length; l++){
        var finAns = answers[l].split("#");
        
         if(finAns[0].indexOf(i)){
            if(finAns[1] === undefined){
                
            }
            else{
              
                if(test.length !== 0){
               if(test.indexOf(i) >=0){
              alert("this is test "+test+" we are saying it has an index of i"+ i); 
              
             
              }
              else{
                alert("this is fin "+finAns[0] + "the value "+finAns[1]);
                alert("this is test "+test+" this is i "+ i);
                test+=i+",";
      ff+= "<input type='text' placeholder='"+finAns[1]+"' onblur='f("+i+")'  id='"+i+"' />";      
                 
              }
                }
               
                else{
              alert("this is fin "+finAns[0] + "the value "+finAns[1] +"  id" +i);
             ff+= "<input type='text' placeholder='"+finAns[1]+"' onblur='f("+i+")'  id='"+i+"' />";            
               test+=i+",";
                                  }
           //formwr
                                }
         }
      
         }               
          
        }
        else{
       var music = split[i].trim();         
        
             
               b+='<embed height="50" width="100" src="'+music+'">';
        }
      
    }  
    break;
    
        }
        
    }
    
    
    tab.innerHTML = b;
    answerss.innerHTML = ff;
    
    */
            
    

      
    


function pages(e){
   
  
    page = parseInt(e);
    questionCount = parseInt(e);
    
   var pageC =    document.getElementById("number");
  pageC.innerHTML = page;
    
   var tab = document.getElementById("table");
        var answerss = document.getElementById("answers");
       var ff ="";
       var keepdatalist = false;
        var b ="";
        var options ="";
        var datalist ="";
        var answer = false;
        var answerMonitor;
          var questionv;
          
           var complete="";
     
    for(var c = 0; c < array.length; c++){
        if(c === questionCount){
         
    var split = array[c].toString().split("#");
           
           
     
            
            
            if(totalQuestions[page] == 0){
      
           for( var i = 0; i < split.length; i++){
        if(split[i].indexOf("<") >= 0){
           ff+= "<p style='margin-left:40%'><input type='text' onblur='f("+i+")'  id='"+i+"' class='margin5' /></p>";
      }  else{
              var music = split[i].trim();         
        
             
               b+='<embed height="50" width="100" src="'+music+'">';
               
                       
      } 
      
           }
         
           
           
           tab.innerHTML = b;
           answerss.innerHTML = ff;
             return;  
             
             
      }
      
      
  
            
       else{
           
            var answers = totalQuestions[page];
           for( var i = 0; i < split.length; i++){
        if(split[i].indexOf("<") >= 0){
          ff+= "<p style='margin-left:40%'><input type='text' onblur='f("+i+")' placeholder='"+answers+"' id='"+i+"' class='margin5' /></p>";
      }  else{
              var music = split[i].trim();         
        
             
               b+='<embed height="50" width="100" src="'+music+'">';
               
                       
      } 
      
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
 var totalNumbers =   array.length;
 for(var i = 0; i < totalQuestions.length; i++){
     if(totalQuestions[i] > 0){
         countt++;
     }
 }
if(confirm('are you sure you want to end exam\n\
you have attempted '+countt+' out of '+totalNumbers)){
        feedback();
        submitted();
        
    
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
      
       alert( markers.innerHTML );
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
        feedback();
        submitted();
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

 
   
    



  
 /*             function startRotating()
         {
          ele = document.getElementById("timer");
            setInterval(rotate, 1000);
     }
       function rotate(){
              
          var change =  ele.innerHTML; 
          
          var time = parseInt(change);
          time++;
          
         // ele.innerHTML = time;
          
         }   */

         
         
    

function f(e){
    
    
   var input =  document.getElementById(e);
   var temp = totalQuestions[page];
   var splitanswers;
   var strings;
    
    
   
   totalQuestions[page] = input.value;
   
 
   
   
   
      
        
  
  
         
      var markers =  document.getElementById(page+'.');
      
     
         markers.setAttribute("style","background-color: red");
         
  
    
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



     
    var wsocket;

function connect() {
    
 
 mm = time;
 
  
  
wsocket = new WebSocket("ws://localhost:8080/AAAASTUDENT/endpoint?matric="+matricNumber+"&time="+mm+"&answers="+totalQuestions+"&subject="+topic);

wsocket.onmessage = onMessage;

}
function onMessage(evt) {
   
    
   
   if(evt.data.indexOf("Instructor : ") != -1){
       
   }
   //please when you can add plus, just change dis == to !=
   if(evt.data.indexOf("+") != -1){
     
     
     
   var subString = evt.data.toString.substr(1,evt.data.length);
       
       var num = parseInt(subString);
       
       var number = mm+num;
       
       mm = number; 
   }
   
   if(evt.data.indexOf("-") != -1){
          var subString = evt.data.toString.substr(1,evt.data.length);
       
       var num = parseInt(subString);
      if(mm - num) {
            feedback();
            submitted();
        }
        else{
       var number = mm-num;
        
        
       
       mm = number; 
   }
   }


}

function sendMessage(){
   
    wsocket.send("matric="+matricNumber+"&time="+mm+"&answers="+totalQuestions+"&subject="+topic);
    
}


function submitted(){
     wsocket.send("matric="+matricNumber+"&time=0&answers="+totalQuestions+"&subject="+topic);
    
}


 
window.addEventListener("load",start,false);
document.addEventListener("click",clicked,false);









