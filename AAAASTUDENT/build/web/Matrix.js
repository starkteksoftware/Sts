/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var webServiceUrl =sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/name?question="; 

var login = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/student/matric";

var page;


var option;//amount of options in the question;
var array = [];
var str = "";
var time;
var times;
var pageChange;
var matricNumber;
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
  
      
  
 
    //  parentNode.insertBefore(div,paginateDiv);

        }  
        
        var ans = localStorage.getItem("answers");
        var arr = ans.split(",");
        
        
        for(var ii = 0; ii < arr.length; ii++){
           
                 totalQuestions[ii] = arr[ii];
                 
             
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
            
            /*  var div = document.createElement('div');

  div.innerHTML =(c+1);
  div.setAttribute('class','pagination');
 //  div.setAttribute('id',(c+1));
  div.setAttribute('id',(c+1)+'.'); */
   
  
      
  
 
    //  parentNode.insertBefore(div,paginateDiv);

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
 amountOfQuestions.innerHTML = " "+array.length -1+" Questions";
 
   
   
   
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
  var pageC =    document.getElementById("number");
       
  pageC.innerHTML = page;
    //    startRotating();
 }
  
 pageVerifier = 1;

 
  var tab = document.getElementById("table");
     var answerss = document.getElementById("answers");
       var keepdatalist = false;
        var b ="";
        var ff ="";
        var options ="";
        var datalist ="";
        var answer = false;
        var answerMonitor;
          var questionv;
           var complete="";
           
         
           
     
    for(var c = 0; c < array.length; c++){
        if(c === questionCount){
         
     var split = array[c].toString().split("#option");
    for(var i = 0; i < split.length; i++){
        if( i === 0){
                   
                    
         b +="<p>"+split[i]+"</p>";
        }
        else{
        var optionSplit = split[i].split("#");
   
      // window.alert(" split ere" +answers);
        for(var s = 0; s < optionSplit.length; s++){
            if( s === 0){
         if(totalQuestions[page] != 0){
                    
          var ans = totalQuestions[page];
          
     
         
         
         if(ans.indexOf(i)){
      var start = ans.indexOf(i);
      var begin = ans.lastIndexOf("*",start);
      if(begin == -1){
       var assingFirstValue = ans.split("(");
      
      var sub = ans[start];
     
       if(sub == i){
        ff+="<p style='margin-left:40%'>"+optionSplit[s]+"</p>"+"   <p style='margin-left:40%'><input type='text'    "+"placeholder='"+ assingFirstValue[0]+"' name='jol' id='"+i+"' list='list' class='margin5'/>"+"</p> ";  
       }
       else{
          ff+="<p style='margin-left:40%'>"+optionSplit[s]+"</p>"+"   <p style='margin-left:40%'><input type='text'    "+" name='jol' id='"+i+"' list='list' class='margin5'/>"+"</p> ";               
     
                                            continue;
                                        }
                                        }else{
                                            
       var finalString = ans.indexOf("(",begin);
       
       var substrings = ans.substring((begin + 1),(finalString));
      var sub = ans[start];
 
       if(sub == i){
          
        ff+="<p style='margin-left:40%'>"+optionSplit[s]+"</p>"+"   <p style='margin-left:40%'><input type='text'    "+"placeholder='"+ substrings+"' name='jol' id='"+i+"' list='list' class='margin5'/>"+"</p> ";  
       }
       else{
          ff+="<p style='margin-left:40%'>"+optionSplit[s]+"</p>"+"   <p style='margin-left:40%'><input type='text'    "+" name='jol' id='"+i+"' list='list' class='margin5'/>"+"</p> ";               
     
                                            continue;
                                        }
      }
           
            
         }
        else{
         
      ff+="<p style='margin-left:40%'>"+optionSplit[s]+"</p>"+"   <p style='margin-left:40%'><input type='text'    "+" name='jol' id='"+i+"' list='list' class='margin5'/>"+"</p> ";            
         } 
                               
     //   ff+="<p style='margin-left:40%'>"+optionSplit[s]+"</p>"+"   <p style='margin-left:40%'><input type='text'   id='"+i+"' "+"placeholder='"+answer[i]+"' name='jol' id='"+s+"' list='list' class='margin5'/>"+"</p> ";            
   
         }
               // i used the outer i to set the id.
            else{   
                 
      //   b+= "<tr><td>"+optionSplit[s]+"</tr>"+"<tr><td><input type='text' id='"+i+"' name='jol' id='"+s+"' list='list'/></td></tr>";
       ff+="<p style='margin-left:40%'>"+optionSplit[s]+"</p>"+"   <p style='margin-left:40%'><input type='text'   id='"+i+"' ' name='jol' id='"+s+"' list='list' class='margin5'/>"+"</p> ";                
            }            
                    }
            else{
             if( i === 1){
                   
                 options +="<option value ='"+optionSplit[s]+"'/>";   
             }
            }
            
         
    
      
   
        }
        
         
     var first = "<datalist id='list'>";
   var end ="</datalist>";
     datalist= first + options + end;
     
         
            var concat = b;
    
 
                
complete = concat + datalist;

        }
   
     }
     break;
   
        }

   }
   
   tab.innerHTML = complete;
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
       var keepdatalist = false;
        var b ="";
        var ff ="";
        var options ="";
        var datalist ="";
        var answer = false;
        var answerMonitor;
          var questionv;
           var complete="";
           
         
           
     
    for(var c = 0; c < array.length; c++){
        if(c === questionCount){
         
     var split = array[c].toString().split("#option");
    for(var i = 0; i < split.length; i++){
        if( i === 0){
                   
                    
         b +="<p>"+split[i]+"</p>";
        }
        else{
        var optionSplit = split[i].split("#");
   
      // window.alert(" split ere" +answers);
        for(var s = 0; s < optionSplit.length; s++){
            if( s === 0){
         if(totalQuestions[page] != 0){
                    
          var ans = totalQuestions[page];
          
         
         
         if(ans.indexOf(i)){
      var start = ans.indexOf(i);
      var begin = ans.lastIndexOf("*",start);
      if(begin == -1){
       var assingFirstValue = ans.split("(");
      
      var sub = ans[start];
     
       if(sub == i){
        ff+="<p style='margin-left:40%'>"+optionSplit[s]+"</p>"+"   <p style='margin-left:40%'><input type='text'    "+"placeholder='"+ assingFirstValue[0]+"' name='jol' id='"+i+"' list='list' class='margin5'/>"+"</p> ";  
       }
       else{
          ff+="<p style='margin-left:40%'>"+optionSplit[s]+"</p>"+"   <p style='margin-left:40%'><input type='text'    "+" name='jol' id='"+i+"' list='list' class='margin5'/>"+"</p> ";               
     
                                            continue;
                                        }
                                        }else{
                                            
       var finalString = ans.indexOf("(",begin);
       
       var substrings = ans.substring((begin + 1),(finalString));
      var sub = ans[start];
 
       if(sub == i){
          
        ff+="<p style='margin-left:40%'>"+optionSplit[s]+"</p>"+"   <p style='margin-left:40%'><input type='text'    "+"placeholder='"+ substrings+"' name='jol' id='"+i+"' list='list' class='margin5'/>"+"</p> ";  
       }
       else{
          ff+="<p style='margin-left:40%'>"+optionSplit[s]+"</p>"+"   <p style='margin-left:40%'><input type='text'    "+" name='jol' id='"+i+"' list='list' class='margin5'/>"+"</p> ";               
     
                                            continue;
                                        }
      }
           
            
         }
        else{
         
      ff+="<p style='margin-left:40%'>"+optionSplit[s]+"</p>"+"   <p style='margin-left:40%'><input type='text'    "+" name='jol' id='"+i+"' list='list' class='margin5'/>"+"</p> ";            
         } 
                               
     //   ff+="<p style='margin-left:40%'>"+optionSplit[s]+"</p>"+"   <p style='margin-left:40%'><input type='text'   id='"+i+"' "+"placeholder='"+answer[i]+"' name='jol' id='"+s+"' list='list' class='margin5'/>"+"</p> ";            
   
         }
               // i used the outer i to set the id.
            else{   
                 
      //   b+= "<tr><td>"+optionSplit[s]+"</tr>"+"<tr><td><input type='text' id='"+i+"' name='jol' id='"+s+"' list='list'/></td></tr>";
       ff+="<p style='margin-left:40%'>"+optionSplit[s]+"</p>"+"   <p style='margin-left:40%'><input type='text'   id='"+i+"' ' name='jol' id='"+s+"' list='list' class='margin5'/>"+"</p> ";                
            }            
                    }
            else{
             if( i === 1){
                   
                 options +="<option value ='"+optionSplit[s]+"'/>";   
             }
            }
            
         
    
      
   
        }
        
         
     var first = "<datalist id='list'>";
   var end ="</datalist>";
     datalist= first + options + end;
     
         
            var concat = b;
    
 
                
complete = concat + datalist;

        }
   
     }
     break;
   
        }

   }
   
   tab.innerHTML = complete;
   answerss.innerHTML = ff; 
   
  
  

 
    
 
      
}





function start(){
    
     
  
pageChange = document.getElementById("number").innerHTML;
 
 
   page = parseInt(pages);
 
   

    callWebService();


var subButs = document.getElementById("endExamination").addEventListener("click",endExams,false);
    var previous = document.getElementById("previous").addEventListener("click",previous,false);
  var next = document.getElementById("next").addEventListener("click",next,false);

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

 
   
    



function pages(e){
   
  
    page = parseInt(e);
    questionCount = parseInt(e);
    var pageC =    document.getElementById("number");
  pageC.innerHTML = page;
    
 
  var tab = document.getElementById("table");
     var answerss = document.getElementById("answers");
       var keepdatalist = false;
        var b ="";
        var ff ="";
        var options ="";
        var datalist ="";
        var answer = false;
        var answerMonitor;
          var questionv;
           var complete="";
           
         
           
     
    for(var c = 0; c < array.length; c++){
        if(c === questionCount){
         
     var split = array[c].toString().split("#option");
    for(var i = 0; i < split.length; i++){
        if( i === 0){
                   
                    
         b +="<p>"+split[i]+"</p>";
        }
        else{
        var optionSplit = split[i].split("#");
   
      // window.alert(" split ere" +answers);
        for(var s = 0; s < optionSplit.length; s++){
            if( s === 0){
         if(totalQuestions[page] != 0){
                    
          var ans = totalQuestions[page];
          
         
         
         if(ans.indexOf(i)){
      var start = ans.indexOf(i);
      var begin = ans.lastIndexOf("*",start);
      if(begin == -1){
       var assingFirstValue = ans.split("(");
      
      var sub = ans[start];
     
       if(sub == i){
        ff+="<p style='margin-left:40%'>"+optionSplit[s]+"</p>"+"   <p style='margin-left:40%'><input type='text'    "+"placeholder='"+ assingFirstValue[0]+"' name='jol' id='"+i+"' list='list' class='margin5'/>"+"</p> ";  
       }
       else{
          ff+="<p style='margin-left:40%'>"+optionSplit[s]+"</p>"+"   <p style='margin-left:40%'><input type='text'    "+" name='jol' id='"+i+"' list='list' class='margin5'/>"+"</p> ";               
     
                                            continue;
                                        }
                                        }else{
                                            
       var finalString = ans.indexOf("(",begin);
       
       var substrings = ans.substring((begin + 1),(finalString));
      var sub = ans[start];
 
       if(sub == i){
          
        ff+="<p style='margin-left:40%'>"+optionSplit[s]+"</p>"+"   <p style='margin-left:40%'><input type='text'    "+"placeholder='"+ substrings+"' name='jol' id='"+i+"' list='list' class='margin5'/>"+"</p> ";  
       }
       else{
          ff+="<p style='margin-left:40%'>"+optionSplit[s]+"</p>"+"   <p style='margin-left:40%'><input type='text'    "+" name='jol' id='"+i+"' list='list' class='margin5'/>"+"</p> ";               
     
                                            continue;
                                        }
      }
           
            
         }
        else{
         
      ff+="<p style='margin-left:40%'>"+optionSplit[s]+"</p>"+"   <p style='margin-left:40%'><input type='text'    "+" name='jol' id='"+i+"' list='list' class='margin5'/>"+"</p> ";            
         } 
                               
     //   ff+="<p style='margin-left:40%'>"+optionSplit[s]+"</p>"+"   <p style='margin-left:40%'><input type='text'   id='"+i+"' "+"placeholder='"+answer[i]+"' name='jol' id='"+s+"' list='list' class='margin5'/>"+"</p> ";            
   
         }
               // i used the outer i to set the id.
            else{   
                 
      //   b+= "<tr><td>"+optionSplit[s]+"</tr>"+"<tr><td><input type='text' id='"+i+"' name='jol' id='"+s+"' list='list'/></td></tr>";
       ff+="<p style='margin-left:40%'>"+optionSplit[s]+"</p>"+"   <p style='margin-left:40%'><input type='text'   id='"+i+"' ' name='jol' id='"+s+"' list='list' class='margin5'/>"+"</p> ";                
            }            
                    }
            else{
             if( i === 1){
                   
                 options +="<option value ='"+optionSplit[s]+"'/>";   
             }
            }
            
         
    
      
   
        }
        
         
     var first = "<datalist id='list'>";
   var end ="</datalist>";
     datalist= first + options + end;
     
         
            var concat = b;
    
 
                
complete = concat + datalist;

        }
   
     }
     break;
   
        }

   }
   
   tab.innerHTML = complete;
   answerss.innerHTML = ff; 
   
  
  

 
    
 
      
}


function changed(e){

   var id = e.target.id;
   var input = document.getElementById(id);
   var value = input.value.trim();
   
   
   
   var temp = totalQuestions[page];
   var splitanswers;
   var strings;
    
 
   
  
   if(temp == 0){
    
    totalQuestions[page] = value+"("+id+")*";
    
    
   }
   else{
         if(totalQuestions[page].indexOf(id) != -1){
         
         var sep;
         var spli = totalQuestions[page].split("*");
         
         for( var c = 0; c < spli.length; c++){
             if(spli[c].indexOf(id) != -1){
                sep+= value+"("+id+")*";
             }
             else {
               if(spli[c].length > 0){
                 
                 sep+=spli[c]+"*";
                   
               }
               else{
                  
                   continue;
               }
             }
         }
         
       if(sep.indexOf(undefined) != -1){
           
        
           var index = sep.indexOf(undefined);
         var second = sep.indexOf("ed",index);
         
       
         var substring = sep.substring((second+2),(sep.length) );
          
          
          totalQuestions[page] = substring;
          
        
          
           
       }
         
         
           }
           else{
            totalQuestions[page] += value+"("+id+")*";    
           
       }
      
 
      
      
       
       
   }
    
   
 
   
 
   
   
   
      
        
  
 
       
      var markers =  document.getElementById(page+'.');
      
     
         markers.setAttribute("style","background-color: red");
    
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
    
    var string = "";
      for(var c = 0; c < array.length; c++){
     
     
         
     var split = array[c].toString().split("#option");
    for(var i = 0; i < split.length; i++){
        if( i === 0){
                   
                    
         string +="<p>"+split[i]+"</p>";
        }
        else{
        var optionSplit = split[i].split("#");
   
      // window.alert(" split ere" +answers);
        for(var s = 0; s < optionSplit.length; s++){
            if( s === 0){
         if(totalQuestions[c] != 0){
                    
          var ans = totalQuestions[c];
          
     
         
         
         if(ans.indexOf(i)){
      var start = ans.indexOf(i);
      var begin = ans.lastIndexOf("*",start);
      if(begin == -1){
       var assingFirstValue = ans.split("(");
      
      var sub = ans[start];
     
       if(sub == i){
        string+="<p style='margin-left:40%'>"+optionSplit[s]+"</p>"+"   <p style='margin-left:40%'><input type='text'    "+"placeholder='"+ assingFirstValue[0]+"' name='jol' id='"+i+"' list='list' class='margin5'/>"+"</p> ";  
       }
       else{
          string+="<p style='margin-left:40%'>"+optionSplit[s]+"</p>"+"   <p style='margin-left:40%'><input type='text'    "+" name='jol' id='"+i+"' list='list' class='margin5'/>"+"</p> ";               
     
                                            continue;
                                        }
                                        }else{
                                            
       var finalString = ans.indexOf("(",begin);
       
       var substrings = ans.substring((begin + 1),(finalString));
      var sub = ans[start];
 
       if(sub == i){
          
        string+="<p style='margin-left:40%'>"+optionSplit[s]+"</p>"+"   <p style='margin-left:40%'><input type='text'    "+"placeholder='"+ substrings+"' name='jol' id='"+i+"' list='list' class='margin5'/>"+"</p> ";  
       }
       else{
          string+="<p style='margin-left:40%'>"+optionSplit[s]+"</p>"+"   <p style='margin-left:40%'><input type='text'    "+" name='jol' id='"+i+"' list='list' class='margin5'/>"+"</p> ";               
     
                                            continue;
                                        }
      }
           
            
         }
        else{
         
      string+="<p style='margin-left:40%'>"+optionSplit[s]+"</p>"+"   <p style='margin-left:40%'><input type='text'    "+" name='jol' id='"+i+"' list='list' class='margin5'/>"+"</p> ";            
         } 
                               
     //   ff+="<p style='margin-left:40%'>"+optionSplit[s]+"</p>"+"   <p style='margin-left:40%'><input type='text'   id='"+i+"' "+"placeholder='"+answer[i]+"' name='jol' id='"+s+"' list='list' class='margin5'/>"+"</p> ";            
   
         }
               // i used the outer i to set the id.
            else{   
                 
      //   b+= "<tr><td>"+optionSplit[s]+"</tr>"+"<tr><td><input type='text' id='"+i+"' name='jol' id='"+s+"' list='list'/></td></tr>";
       string+="<p style='margin-left:40%'>"+optionSplit[s]+"</p>"+"   <p style='margin-left:40%'><input type='text'   id='"+i+"' ' name='jol' id='"+s+"' list='list' class='margin5'/>"+"</p> ";                
            }            
                    }
            else{
             if( i === 1){
                   
               //  options +="<option value ='"+optionSplit[s]+"'/>";   
             }
            }
            
         
    
      
   
        }
        
   /*      
     var first = "<datalist id='list'>";
   var end ="</datalist>";
     datalist= first + options + end;
     
         
            var concat = b;
    
 
                
complete = concat + datalist;*/
        }
   
     }
  //   break;
   
        

   }
   
 //  tab.innerHTML = complete;
   //answerss.innerHTML = ff; 
   
     var body =  document.getElementById("examBody");
 
 var percentage = 4;
var realNumber =  percentage * 100 / array.length;
  var st = "<p>Your percentage is "+realNumber +" %</p> <button style='float:right;'>Next Page </button>";
  body.innerHTML += st;
    body.innerHTML += string;
    
    
    
    
    
  
  

    
    
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
window.addEventListener("load",start,false);
document.addEventListener("change",changed,false);
document.addEventListener("click",clicked,false);
