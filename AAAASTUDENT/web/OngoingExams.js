/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

     
var logins = "/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b";
 var str;
 var user;
 var data = [];
 var percentage;
 var totalCandidates = 0;
 totalOngoing = [];
 totalActiveSubjects =[];
 
 
 
 function verify(){
     
    
 }
 
 function log(){

   
verify();
var send =location.host;
 
     var loc = location.protocol+"//";
    var requestUrl = sessionStorage.getItem("URL")+logins;
    
    
    alert(requestUrl +" "+sessionStorage.getItem("URL"));
    
    
    
    
    
    
    
    
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

   localStorage.setItem("OnGoingExams",str);
   localStorage.setItem("status","true");
     arrange();
     connect();   
   
        
 // display data on the page
 } // end if
 } //
 
 
 
 function arrange(){
 
 
 //alert("be Alert");
     
      totalActiveSubjects = [];
      
      document.getElementById("onGoing").addEventListener("click",reArrange,false);
      document.getElementById("regStudents").addEventListener("click",registered,false);
      document.getElementById("activePresent").addEventListener("click",requestPresent,false);
      document.getElementById("activeSubmit").addEventListener("click",requestSubmited,false);
      document.getElementById("createAccount").addEventListener("click",createAccountForm,false);
      document.getElementById("editAccount").addEventListener("click",editAccountForm,false);
      document.getElementById("butt").addEventListener("click",clics,false);
         document.getElementById("but").addEventListener("click",clic,false);
      
      
      
      


    document.getElementById("filter").addEventListener("keydown",keydowns,false);
      
     var table = document.getElementById("tableBody");
     
     var sec = str.split("#");
     
 
     
     
     
     var tableAdd;
     
     var addUp;
 
     var ids="i know";
     
     
     for( var c = 1; c < sec.length; c++){
     
        
        
       var split = sec[c].split(",");
       
        
     
  totalActiveSubjects.push(split[0]);
  
       
     var join = "";
   
     
     
     
       for( var i = 0; i < split.length; i++){
           
           if(i == 0){
             
               join+="<td>"+c+"</td>";
                data.push(split[i]);
                
        ids= split[i];
          
           }
           
          if(i == 1){
              
              localStorage.setItem(ids+"Schedule",split[i]);
          }
          
          if(i == 2){
              localStorage.setItem(ids+"Time",split[i]);
          }
          
          if(i == 3){
             
              var addd = parseInt(split[i]);
            //(addd);
            
             totalCandidates +=addd;
            
             localStorage.setItem(ids+"Candidates",split[i]); 
          }
          
          
          if(i == 4){
           localStorage.setItem(ids+"Duration",split[i]);
                 continue; 
          }
           join+="<td>"+split[i]+"</td>"; 
       } 
      
       
    join+= '<td> <a title="View '+ids+'" " href="OpenedExam.html"  data-hint="View Exam Details"  data-hint-position="top" class="fg-darkGreen" > <i  id="'+ids+'" class="icon-eye" data-hint="View Exam Details"  ></i></a></td>';
    
     var addition ="<tr>";
   
     addition+=join;
      addition+="</tr>";
       addUp+=addition;
   
         totalOngoing.push(addition+"*split");
         
       
        
         
     }
     
  
  
     localStorage.setItem("CurrentExams",totalActiveSubjects);
     
     
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
     
     
     
     
   
     
    
  
    table.innerHTML = splitAgain[1];
 
     
     document.getElementById("ongoingTotal").innerHTML = sec.length - 1;
     
     
     
       var t =   document.getElementById("spanner");
    
        
        var adds;
        var d;
        var e;
        
       
        d ="<datalist id='list'>";
        for( var i = 0; i < data.length; i++ ) {
         
           
            
            adds +="<option value='"+data[i]+"'>";
         
        }
        
        e="</datalist>";
   
     
   var conc = d+adds+e;
   
      t.innerHTML = conc;  
       localStorage.setItem("RegStudents",totalActiveSubjects);
      
  
      
 

 
 
 
     
     
 }
 
 function  arrangeSideBars(){
        
   
     if(localStorage.getItem("studentNumbers")){
            var ts =   document.getElementById("spanners");
            var cancelSession = document.getElementById("spannerss");
          var items = localStorage.getItem("studentNumbers");
         
          var spliff = items.split(",");
          var date = "<datalist id='studList'>";
          var dated = "<datalist id='studListt'>";
          var addUps;
          var jj;
         
          
          for( var cc = 0; cc < spliff.length; cc++){
              
        addUps+=    "<option value='"+spliff[cc]+"'>"; 
          }
             jj="</datalist>";
             
             var added = date+addUps+jj;
             ts.innerHTML = added;
             
             var sss = dated+addUps+jj;
             cancelSession.innerHTML = sss;
             
             
             document.getElementById("scheduled").innerHTML = totalCandidates;
             
             percentage = totalCandidates;
         
             
            document.getElementById("butClick").addEventListener("click",cancel,false);
           
      
     }
     else{
       
     }
      
      
       
 }
 
 
 
 
 
 
 
 function reArrange(){
    
     
      var table = document.getElementById("tableBody");
     
     var sec = str.split("#");
     
 
     
     
     
     var tableAdd;
     
     var addUp;
 
     var ids="i know";
     
     
     for( var c = 1; c < sec.length; c++){
     
        
        
       var split = sec[c].split(",");
       
       
  
     var join = "";
   
     
     
     
       for( var i = 0; i < split.length; i++){
          
           return;
           
           if(i == 0){
             
               join+="<td>"+c+"</td>";
          
                
        ids= split[i];
          
           }
           
          if(i == 1){
              
              localStorage.setItem(ids+"Schedule",split[i]);
          }
          
          if(i == 3){
             
              var addd = parseInt(split[i]);
            
             
             localStorage.setItem(ids+"Candidates",split[i]); 
          }
          
            if(i == 2){
              localStorage.setItem(ids+"Time",split[i]);
          }
          if(i == 4){
           localStorage.setItem(ids+"Duration",split[i]);
                 continue; 
          }
           join+="<td>"+split[i]+"</td>"; 
       } 
      
       
    join+= '<td> <a href="OpenedExam.html"  data-hint="View Exam Details"  data-hint-position="top" class="fg-darkGreen" > <i  id="'+ids+'" class="icon-open" data-hint="View Exam Details"  ></i></a></td>';
    
     var addition ="<tr>";
   
     addition+=join;
      addition+="</tr>";
       addUp+=addition;
      
        
         
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
     
     
     
     
   
   
     
    
  
    table.innerHTML = splitAgain[1];
    
      

 }
 
 
 
 
 function searchs(){
  noresult = false;
  nosearch = false;
   
     var filt = document.getElementById("filter");
    
     if( filt.value.length > 0 ){
           
         document.getElementById("tableBody").innerHTML = "<tr><td></td><td></td><td>Searching.............</td><td></td><td></td><td></td><td></td></tr>";    
         noresult = true;
       
         var sep =  totalOngoing.toString();
         
  
      
         
         var value = filt.value.trim();
         var splitteds =  sep.split("*split,");
        var check = false;
         var additioned;
         for(var c =0; c < splitteds.length; c++){
             if(splitteds[c].indexOf(value) >0){
              
                 additioned+=splitteds[c]+"*split";
                 check = true;
             }
         }
         
         if(check){
             
            noresult = false;
             var copy="";
     var addSplit = additioned.split("undefined");
   
   for(var ii =0; ii < addSplit.length; ii++){
       if(addSplit[ii].indexOf("undefined") >= 0){
         
       }
       else
           
           copy+=addSplit[ii];
           
       }
   }
   
  
    // var splitAgain = copy.split("");
     //i split with split,
     
  var seperator = copy.split("*split");

  var tabAdder="";
  for(var ii = 0; ii < seperator.length; ii++){
      
      if(seperator[ii] == "*split"){
          
      }
      else{
      tabAdder+=seperator[ii];
      }
  }

           document.getElementById("tableBody").innerHTML = tabAdder;   
           
         }
         else{
            
                      
               
              
          
         }
         
         
     
      
     }
     
     
   
     
     

 
 
 
 function clic(){
   //subject add or increase time
 
     var sub= document.getElementById("subject").value;
     var time = document.getElementById("timeValue").value;
     
     if(totalActiveSubjects.toString().indexOf(sub.toString()) == -1){
          document.getElementById("lab").setAttribute("style","color:red;  font-size: small;");
       document.getElementById("lab").innerHTML =sub+" does not exist";
         return;
     }
     else{
           document.getElementById("lab").setAttribute("style","color:green;  font-size: small;");
        if(time.toString().indexOf("-") != -1){
           document.getElementById("lab").innerHTML = sub+" time decreased with "+time +" minutes.";
      }
      else{
           document.getElementById("lab").innerHTML = sub+" time increased with "+time +" minutes.";
      }  document.getElementById("examT").click();
     }
     
   
     send(sub,time);
     
     
 }
 
 function clics(){
     //matric addtime or decrese time candidate
    
     
     
    var sub= document.getElementById("student").value;
     var time = document.getElementById("studentTime").value;
    
    if(localStorage.getItem("studentNumbers").toString().indexOf(sub.toString()) != -1){
      document.getElementById("labs").setAttribute("style","color:green;  font-size: small;");
      if(time.toString().indexOf("-") != -1){
           document.getElementById("labs").innerHTML = sub+" time decreased with "+time +" minutes.";
      }
      else{
           document.getElementById("labs").innerHTML = sub+" time increased with "+time +" minutes.";
      }
       document.getElementById("candidateT").click();
    }
    else{
        document.getElementById("labs").setAttribute("style","color:red;  font-size: small;");
       document.getElementById("labs").innerHTML =sub+" does not exist";
         return;
    }
     
     sendMatric(sub,time);  
 }
 
 
 function cancel(){
   
  
  
     var get = document.getElementById("studentt").value;
     
      if(localStorage.getItem("studentNumbers").toString().indexOf(get.toString()) != -1){
      document.getElementById("labss").setAttribute("style","color:green;  font-size: small;");
           document.getElementById("labss").innerHTML = get+" session has been cancelled";
       document.getElementById("candidateS").click();
    }
    else{
        document.getElementById("labss").setAttribute("style","color:red;  font-size: small;");
       document.getElementById("labss").innerHTML =get+" does not exist";
         return;
    }
     
    
    
     
    var req = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/candidate/cancelsession/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b?"+"id="+get; 
   
    
    
      try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parse(asyncRequest);  //callBack( asyncRequest );
 }, false);
     
    asyncRequest.open( "GET", req, true );
 asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
 asyncRequest.send(); // send request
 

 } // end try
 catch ( exception )
 {
 alert ( "Request Failed" );
 } // end catch
 
     }
    
 
 
 function parse(){
 //callback for the cancel session
 }
 
 function connect(){
    
    

wsocket = new WebSocket("ws://"+location.host+"/AAAACLIENT/endpoint?Administrator="+user);






wsocket.onmessage = onMessage;

}



function totalSubmittedStudentsMethod(){
   
     
    var text ='<!DOCTYPE html> <html> <head>    <script src="totalSubmitedStudents.js" type="text/javascript"></script> </head> <body>'
      +'     <div class="span6">'
                    +'      <div>'
                      +'        <input type="search" id="filterSearchs" placeholder="Filter by name/student number"/><button id="clickedSearchs" ><i class="icon-search"></i></button>&nbsp;'
                           
                      +'    </div>'
                      +'    <div class="clear"></div>'
                      +'    <div id="examStudentHolder" class="vertical-scroll">'
                           +'   <table class="table striped bordered">'
                           +'       <thead>'
                              +'        <tr class="error fg-white">'
                                +'          <th>S/N</th>'
                                  +'        <th>Student Number</th>'
                            +'             <th>Subject(s)</th>'
                                  +'        <th>Session State</th>'
                               //    +'       <th>Student Number</th>'
                                   +'       <th>Actions</th>'
                                  +'    </tr>'
                                +' </thead>'
                             +'     <tbody class="hovered" id="tableBodysss">'
                               
                                   
                                    
                            +'      </tbody>'
                          +'    </table>'
                     

                 +'     </div>'
                  +'    <!--stats-->'
                   
 +' </body>'
 +' </html>';
  
    
    messageBox(text,"Submitted Students"); 
    
}

function absent(){
    
}

function editAccountForm(){
      var text ='<!DOCTYPE html> <html> <head>  <script src="editAccount.js" type="text/javascript"></script>  </head> <body>'
      +'     <div class="span6">'
                    +'   <form id="formSet"  method="POST"  >'
                      +'       <div class="forms vertical-scroll" id="invisible">'
                           
                      +'   <label>*Last Name:</label>    <div class="input-control text">  <input type="text" placeholder="Enter Last Name" required name="lastName" id="lastName"/>    </div> '
                      +'   <label>*First Name:</label>    <div class="input-control text">  <input type="text" placeholder="Enter First Name" required name="firstName" id="firstName"/>    </div>'
                      +'     <label>*Email:</label>    <div class="input-control text">  <input type="text" placeholder="Enter Valid Email" required name="email" id="email"/>    </div>'
                      //     +'    <label>*User Name:</label>    <div class="input-control text">  <input type="text" placeholder="Enter UserName"  required name="userName" id="userName"/>    </div>'
                   +'    <label>*Enter Former Password:</label>    <div class="input-control text">  <input type="password"  placeholder="Enter former Password" required name="password" id="password"/>    </div>'
                           +'    <label>*Enter New Password:</label>    <div class="input-control text">  <input type="password" placeholder="Enter New Password" required name="password" id="passwordss"/>    </div>'
                           +'  <label>*Re Enter Password:</label>    <div class="input-control text">  <input type="password" placeholder=" Re-Enter Password" required name="pass" id="pass"/>    </div>'
                            +'          <button class="bg-darkBlue fg-white" type="button" id="submitForm" ><i class="icon-new"></i>Submit</button>'
                                +'    <label id="error"></label> '
                           // +'             <th>Subject</th>'
                             //     +'        <th>Session State</th>'
                               //    +'       <th>Student Number</th>'
                               //    +'       <th>Actions</th>'
                                 // +'    </tr>'
                                //+' </thead>'
                             +'     </div>'
                               
                                   
                                    
                            +'      </form>'
                          +'    </div>'
                     

                
                  +'    <!--stats-->'
                   
 +' </body>'
 +' </html>';
  
    
    messageBox(text,"Edit Account&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>ALL DETAILS ARE REQUIRED</b>");
    
    
}


function createAccountForm(){
       var text ='<!DOCTYPE html> <html> <head>  <script src="createAccount.js" type="text/javascript"></script>  </head> <body>'
      +'     <div class="span6">'
                    +'   <form id="formUp"  method="POST"  >'
                      +'       <div class="forms vertical-scroll">'
                           
                      +'   <label>*Last Name:</label>    <div class="input-control text">  <input type="text" placeholder="Enter Last Name" required name="lastName" id="lastName"/>    </div> '
                      +'   <label>*First Name:</label>    <div class="input-control text">  <input type="text" placeholder="Enter First Name" required name="firstName" id="firstName"/>    </div>'
                      +'     <label>*Email:</label>    <div class="input-control text">  <input type="text" placeholder="Enter Valid Email" required name="email" id="email"/>    </div>'
                           +'    <label>*User Name:</label>    <div class="input-control text">  <input type="text" placeholder="Enter UserName" required name="userName" id="userName"/>    </div>'
                           +'    <label>*Password:</label>    <div class="input-control text">  <input type="password" placeholder="Enter Password" required name="password" id="password"/>    </div>'
                           +'  <label>*Re Enter Password:</label>    <div class="input-control text">  <input type="password" placeholder=" Re-Enter Password" required name="pass" id="pass"/>    </div>'
                            +'          <button class="bg-darkBlue fg-white" type="button" id="submit" ><i class="icon-new"></i>Submit</button>'
                                +'    <label id="error"></label> '
                           // +'             <th>Subject</th>'
                             //     +'        <th>Session State</th>'
                               //    +'       <th>Student Number</th>'
                               //    +'       <th>Actions</th>'
                                 // +'    </tr>'
                                //+' </thead>'
                             +'     </div>'
                               
                                   
                                    
                            +'      </form>'
                          +'    </div>'
                     

                
                  +'    <!--stats-->'
                   
 +' </body>'
 +' </html>';
  
    
    messageBox(text,"Create Account&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>ALL DETAILS ARE REQUIRED</b>");
    
    
}



function totalPresentActive(){
     var text ='<!DOCTYPE html> <html> <head>    <script src="totalPresentStudents.js" type="text/javascript"></script> </head> <body>'
      +'     <div class="span6">'
                    +'      <div>'
                      +'        <input type="search" id="filterSearch" placeholder="Filter by name/student number"/><button id="clickedSearch" ><i class="icon-search"></i></button>&nbsp;'
                           
                      +'    </div>'
                      +'    <div class="clear"></div>'
                      +'    <div id="examStudentHolder" class="vertical-scroll">'
                           +'   <table class="table striped bordered">'
                           +'       <thead>'
                              +'        <tr class="success fg-white">'
                                +'          <th>S/N</th>'
                                  +'        <th>Student Number</th>'
                            +'             <th>Subject</th>'
                                  +'        <th>Session State</th>'
                               //    +'       <th>Student Number</th>'
                                   +'       <th>Actions</th>'
                                  +'    </tr>'
                                +' </thead>'
                             +'     <tbody class="hovered" id="tableBodyss">'
                               
                                   
                                    
                            +'      </tbody>'
                          +'    </table>'
                     

                 +'     </div>'
                  +'    <!--stats-->'
                   
 +' </body>'
 +' </html>';
  
    
    messageBox(text,"Present Students");
    
}

function onMessage(evt) {
   
  
var arraypv = evt.data;

if(arraypv.indexOf("connectionStatus:") != -1){
   var sep = evt.data.toString().split(":");
   
   if(sep[1].toString().indexOf("error") != -1){
            errorDialog(sep[1],"Error");
            //this guy has to be red
   }else{
    smallDialog(sep[1],"status:");
   }
     return;
}



if(arraypv.indexOf("SubmittedStudents*") != -1){
  
    
    var sep = evt.data.toString().split("*");
   
    
 localStorage.setItem("activeSubmitted",sep[1]);

 
   totalSubmittedStudentsMethod();
        
       
   
   
   
   
    
    return;
}


if(arraypv.indexOf("PresentStudents*") != -1){
    var sep = evt.data.toString().split("*");
 localStorage.setItem("activeStudents",sep[1]);
        totalPresentActive();
        
        
    
     
    
   
    
    return;
}

if(arraypv.indexOf("submitted") != -1){
    
    
    arraypv = evt.data.split(":");
 document.getElementById("submitted").innerHTML = arraypv[1];   
 return;
}

if(arraypv.indexOf("presentStats:") != -1){
    var sep = evt.data.toString().split(":");
 document.getElementById("present").innerHTML = sep[1];
var numberIn = document.getElementById("present").innerHTML;
var sum = 100 / percentage;
var multiply = parseInt(numberIn);

var entity = multiply * sum;

  document.getElementById("attendance").innerHTML = entity+"%";


}


if(arraypv.indexOf("allStudents:") != - 1){
   
  var sep = evt.data.toString().split(":");
  localStorage.setItem("studentNumbers",sep[1]);
   arrangeSideBars();
   
}


}


function send(exam,time){
    var string = "^"+exam+":"+time;
    wsocket.send(string);
}

function sendMatric(matric,time){
    var string = "*"+matric+":"+time;
    wsocket.send(string);
    
}

function requestPresent(){
  var c = document.getElementById("present").innerHTML;
  var int = parseInt(c);
  if(int == 0){
        errorDialog("No Logged In student","status");
      return;
  }
  
    wsocket.send("presentStudentsmethod");
    
}

function requestSubmited(){
  var c = document.getElementById("submitted").innerHTML;
  var int = parseInt(c);
  if(int == 0){
    errorDialog("No submitted candidate","status");
      return;
  }
   
     wsocket.send("submittedStudents");
     
}

function clicked(e){
   
   if(e.target.tagName === "I"){
       
       var second = e.target.id;
        localStorage.setItem("ExamName",second);
        
   }
   
   
  
}


function getAction(){
    return "";
}

function ver(){
    var url = document.referrer;


document.getElementById("backButton").href= url;


       //document.getElementById("image").src = "http://"+localStorage.getItem("Ip")+":8080/AAAACLIENT/ImageRetriever?image=images";
    var now = new Date();
    //alert(now.getDate() +" "+(now.getMonth() +1)+" "+now.getFullYear());
document.getElementById("dateScheduled").innerHTML = "Date : "+now.getDate()+"-"+(now.getMonth() +1)+"-"+now.getFullYear(); 
  
    if( localStorage.getItem("status")){
        var stat = localStorage.getItem("status");
        if(stat == "true"){
        
        str = localStorage.getItem("OnGoingExams");
        connect();
        arrange();
            arrangeSideBars();
        }
        else{
          
            log();
        }
    }
    else{
        log();
    }
}

function con(e){
  //  window.alert("you have clicked me");
    
    e.preventDefault();
}


function mouse(e){
    
     //  var mousex = e.clientX;
  //  var mousey = e.clientY;
  //var mousex = e.layerX;
    //var mousey = e.layerY;
  //  alert(mousex +" y"+mousey);
    //mozilla supports d e.layer//chrom suuprtse.offsetY
    if(e.target.id == "examT" ){
      e.target.setAttribute("Class","heading bg-grayDark fg-white ");
      return;
 } 

if(e.target.id =="candidateT"){
      e.target.setAttribute("Class","heading bg-grayDark fg-white ");
      document.getElementById("candidateS").setAttribute("Class","heading bg-gray fg-lightBlue ");
      return;
}
if(e.target.id == "candidateS"){
     e.target.setAttribute("Class","heading bg-grayDark fg-white ");
     return;
}
    
    
    if(e.target.tagName == "I"){
     
       
       
        
         
          
        
    }
}


function keydowns(e){
    
   
    
    
     searchs();
   
     
     
 }
 
 
 
 function registered(){
 
  

      var c = document.getElementById("scheduled").innerHTML;
  var int = parseInt(c);
  if(int == 0){
        errorDialog("No Registered student","status");
      return;
  }
   
   
   var text ='<!DOCTYPE html> <html> <head>    <script src="registeredStudents.js" type="text/javascript"></script> </head> <body>'
      +'     <div class="span6">'
                    +'      <div>'
                      +'        <input type="search" id="filters" placeholder="Filter by name/student number"/><button id="clickeds" ><i class="icon-search"></i></button>&nbsp;'
                           
                      +'    </div>'
                      +'    <div class="clear"></div>'
                      +'    <div id="examStudentHolder" class="vertical-scroll">'
                           +'   <table class="table striped bordered">'
                           +'       <thead>'
                              +'        <tr class="success fg-white">'
                                +'          <th>S/N</th>'
                                  +'        <th>Name</th>'
                            +'             <th>Subject</th>'
                                  +'        <th>Session State</th>'
                                   +'       <th>Student Number</th>'
                                   +'       <th>Actions</th>'
                                  +'    </tr>'
                                +' </thead>'
                             +'     <tbody class="hovered" id="tableBodys">'
                               
                                   
                                    
                            +'      </tbody>'
                          +'    </table>'
                     

                 +'     </div>'
                  +'    <!--stats-->'
                   
 +' </body>'
 +' </html>';
  
    
   
   
 
    messageBox(text,"Registered Exam Students");
    
    
    
    
}


function messageBox(htmls,titles)
{
    $.Dialog({
        shadow:true,
        overlay:true,
        draggable:true,
        padding:10,
        width:400,
        flat:true,
        title:titles,
        content:htmls
        
    });
}
 
 
 function smallDialog(htmls,titles)
{
    $.Dialog({
        shadow:true,
        overlay:true,
        draggable:true,
        padding:10,
        width:200,
        flat:false,
        title:titles,
        content:htmls
        
    });
}
function errorDialog(htmls,titles)
{
    $.Dialog({
        shadow:true,
        overlay:true,
        draggable:true,
        padding:10,
        width:100,
        flat:true,
        title:titles,
        content:htmls
        
    });
}
 
 
 function mouseOut(e){
     
     if(e.target.id == "examT" ){
      e.target.setAttribute("Class","heading bg-gray fg-amber ");
         
      return;
 } 

if(e.target.id =="candidateT"){
      e.target.setAttribute("Class","heading bg-gray fg-lightBlue ");
       document.getElementById("candidateS").setAttribute("Class","heading bg-gray fg-white ");
     
      return;
}
if(e.target.id == "candidateS"){
     e.target.setAttribute("Class","heading bg-gray fg-white ");
     return;
}
    
 }
 
window.addEventListener("load",ver,false);
document.addEventListener("click",clicked,false);
document.addEventListener("mouseover",mouse,false);
window.addEventListener("contextmenu",con,false);

document.addEventListener("mouseout",mouseOut,false);



