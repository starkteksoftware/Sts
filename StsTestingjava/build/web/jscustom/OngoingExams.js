/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var examination = [];
var logins = "/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b";
 var str;
 var user;
 var data = [];
 var collate = [];
 var percentage;
 var totalCandidates = 0;
 var totalOngoing = [];
 totalActiveSubjects =[];
 
 
 
 
 
   
 function log(){
   
     var requestUrl = sessionStorage.getItem("URL")+logins;
    console.log(requestUrl +" "+sessionStorage.getItem("URL"));
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
 console.log ( exception);
 
 } // end catch
 


    

 
 }
 
 function parseLogs( asyncRequest )
 {
   
 // if request has completed successfully, process the response
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object
 try{
 var data = JSON.parse(asyncRequest.responseText);
  str = data;
   

   localStorage.setItem("OnGoingExams",str);
   localStorage.setItem("Institution","Model College");
   var user = localStorage.getItem("user");
   var session = sessionStorage.getItem("URL");
  if(user == null || session == null){
       
     window.location.assign("index.html");
 }

  $("#pName").html(user);
  $("#name").html(user);
  document.getElementById("smallImage").src = sessionStorage.getItem("URL")+"/AAAACLIENT/ImageRetriever?image="+user;
  
  document.getElementById("fullImage").src = sessionStorage.getItem("URL")+"/AAAACLIENT/ImageRetriever?image="+user;
  
   
   
  $("#logout").click(function (){
      localStorage.clear();
     
      
        window.location.assign("index.html");
  })
  $("#logout2").click(function (){
      localStorage.clear();
     
      
        window.location.assign("index.html");
  })
   
  
   //localStorage.setItem("status","true");
   
   
   if(condition){
       arrangeOff();
            connect();
   }
   else{
     arrange();
 }
    // connect();   
 }
 catch(exc){
     console.log(exc)
 }
        
 // display data on the page
 } // end if
 } //
 
 
 
 
  function specialSubmitWizardOngoing(){
     
      console.log("can be called from jquerry smart wizard line 114");
         
         var firstName = $("#firstNameF").val();
         var lastName = $("#lastNameF").val();
         
         if(firstName === null || firstName.length <=0){
              new PNotify({
                                title: 'Profile Error',
                                text: 'Enter first name',
                                type: 'error'
                            });
        return;
         }
         
            if(lastName === null || lastName.length <=0){
              new PNotify({
                                title: 'Profile Error',
                                text: 'Enter last name',
                                
                                type: 'error'
                            });
      return;
         }
         var middleName = $("#middleNameF").val();
         var initials = $("#initials").val();
        var gender = "";
       
      if(document.getElementById("gender1").checked){
       gender = "M";
          
      }
       if(document.getElementById("gender2").checked){
           
          gender = "F";
      }
         
         var email = $("#email2").val();
         var contact = $("#contact").val();
         var address = $("#address").val();
         var contact2 = $("#contact2").val();
         var address2 = $("#address2").val();
         
         
            if(email === null || email.length <=0 || email.indexOf("@") === -1 || email.indexOf("@") === -1){
              new PNotify({
                                title: 'Profile Error',
                                text: 'Invalid Email',
                                
                                type: 'error'
                            });
      return;
         }
         
                        var requestUrl = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b?status=4&userName="+localStorage.getItem("user")+"&firstName="+firstName+"&email="+email+"&lastName="+lastName+"&middleName="+middleName+"&initials="+initials+"&gender="+gender+"&contact="+contact+"&address="+address+"&address2="+address2+"&contact2="+contact2;
 
         
           
      
             
   try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parse(asyncRequest);  //callBack( asyncRequest );
 }, false);
     
    asyncRequest.open( "POST", requestUrl, true );
 asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
 asyncRequest.send(); // send request
 
 
 } // end try
 catch ( exception )
 {
 console.log(exception);
 
 } // end catch
 
  function parse(asyncRequest ){
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 var data = JSON.parse(asyncRequest.responseText);
 
 
  if(data.indexOf("1:") !== -1){
  
               document.getElementById("urlP").value=   sessionStorage.getItem("URL")+"/StsTestingjava/OngoingExams.html";
               document.getElementById("nameP").value = localStorage.getItem("user");
               document.getElementById("formTutor").action = getAction();
               
                 function getAction(){
   
    
                return sessionStorage.getItem("URL")+"/AAAACLIENT/FormServlet";
    
}
               document.getElementById("formTutor").submit();
               
   

      }
  }
  else{
      /*  new PNotify({
                                title: 'Update Admin',
                                text: 'Update admin not successful',
                                type: 'error'
                            });
                            return; */
  } 
  }
         
         
         
         
         
         
  }
 
 
 function editProfile(){
     $("#profile").click(function (e){
         document.getElementById('LClick').addEventListener('change', handleFileSelectAdmin, false);
        
        
         
             function handleFileSelectAdmin(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
            
            document.getElementById("sClick").src = e.target.result;
            
          // Render thumbnail.
          //var span = document.createElement('span');
          //span.innerHTML = ['<img class="thumb" src="', e.target.result,
           //                 '" title="', escape(theFile.name), '"/>'].join('');
         // document.getElementById('list').insertBefore(span, null);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }

        
         
         
         
         e.stopPropagation();
         
         
         
         
         //on return formTutor.formSubmit();
         
     })
     
     
     $("#getProfile").click( function (){
         
       var requestUrl = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b?status=5&userName="+localStorage.getItem("user");
               
               
   try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parse(asyncRequest);  //callBack( asyncRequest );
 }, false);
     
    asyncRequest.open( "POST", requestUrl, true );
 asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
 asyncRequest.send(); // send request
 
 
 } // end try
 catch ( exception )
 {
 console.log(exception);
 
 } // end catch
 
  function parse(asyncRequest ){
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 var data = JSON.parse(asyncRequest.responseText).split("#");

 
var seperate = data[1].split(",");

       $("#firstNameF").val(seperate[2]);
       $("#lastNameF").val(seperate[3]);
        $("#email2").val(seperate[4]);
        
          
        if(seperate[5] != "null" )
        $("#middleNameF").val(seperate[5]);
       
         if(seperate[8] != "null")
        $("#contact").val(seperate[8]);
    
         if(seperate[7] !== "null")
         $("#initials").val(seperate[7]);
        
       
    
         if(seperate[9] != "null")
        $("#address").val(seperate[9]);
        
           if(seperate[11] !== "null")
         $("#address2").val(seperate[11]);
     
       
         if(seperate[10] != "null")
        $("#contact2").val(seperate[10]);
    
     
        
        
         
        if(seperate[11] != "null"){
            
            if(seperate[11].toString().toLowerCase() == "m"){
              $("#gender1").prop("checked", true)
             $("#gender1").attr('checked', 'checked');
            }
            else{
                    $("#gender2").prop("checked", true)
          $("#gender1").attr('checked', 'checked');
            }
        }
         
       
   document.getElementById("sClick").src = sessionStorage.getItem("URL")+"/AAAACLIENT/ImageRetriever?image="+localStorage.getItem("user");
 
  

  $("#profile").modal();
  
    
                   
      }
  }
         
         
       
         
     })
 }
 function submittedCandidates(){
     
     wsocket.send("submittedStudents");
   
 }
 
 function cancelClick(){
     
            $("#canSess").click( function (){
                
    
     var get = document.getElementById("candidateCan").value;
     if(get == null){
            new PNotify({
                                    title: 'Cancel Session',
                                text: 'Select a valid candidate',
                                type: 'error'
                            });
                            
                            $("#canSess").removeEventListener("click");
                            
         
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
     
                   new PNotify({
                                    title: 'Cancel Session',
                                text: get +' session cancelled',
                                type: 'success'
                            });
               
                            
           return;   
                         

 } // end try
 catch ( exception )
 {
 console.log(exception);
 } // end catch
 
     function parse(){
         
     }
                
            })
           
 }
 
 function totalCandid(){
     $("#totC").click( function (){
         
         $("#next").show("slow");

      var c = document.getElementById("scheduled").innerHTML;
  var int = parseInt(c);
  if(int == 0){
       new PNotify({
                                title: 'Registered Candidates',
                                text: 'No registered Candidate',
                                type: 'error'
                            });
        return;
  }
   
    
       
   
   var text ='<!DOCTYPE html> <html> <head>    <script src="jscustom/registeredStudents.js" type="text/javascript"></script> </head> <body>'
      +'     <div class="span6">'
                    +'      <div>'
            +'        <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">'
                      +'               <div class="input-group">'
                          +'               <input type="search" id="filters" class="form-control" placeholder="Search for...">'
                            +'             <span class="input-group-btn">'
                             +'    <button id="clickeds" class="btn btn-default" type="button">Search</button>'
                            +' </span>'
                             +'        </div>'
                             +'    </div>'
                     
                            
                      +'    </div>'
                      +'    <div class="clear"></div>'
                      +'    <div id="examStudentHolder" class="vertical-scroll">'
                           +'   <table class="table table-striped responsive-utilities jambo_table">' 
                           +'       <thead>'
                              +'        <tr class="class="headings"">'
                                +'          <th>S/N</th>'
                                  +'        <th>Name</th>'
                            +'             <th style="">Subject</th>'
                                  +'        <th>Session State</th>'
                                   +'       <th>Student Number</th>'
                                   +'       <th>Actions</th>'
                                  +'    </tr>'
                                +' </thead>'
                             +'     <tbody  class="" id="tableBodys">'
                               
                                   
                                    
                            +'      </tbody>'
                          +'    </table>'
                     
                     

                 +'     </div>'
          +'     <div>'
           +' <div class="btn-group" data-toggle="buttons">'
 +' <div class="btn-group" data-toggle="buttons">'
                                            
                                   +'           <div class="btn-group" id="totalPg">'
                                  
                                      +'        </div>'
                                 +'         </div>'
   +'     </div>'
                  +'    <!--stats-->'
                   
 +' </body>'
 +' </html>';
  
    
   
   
 
  
    
    
    $("#totB").html(text);
    
    $("#next").hide();
    $("#totS").modal();
    
    $("#totS").click(function(e){
        
        e.stopPropagation();
        
    })
         
     })
    
 }
 
 function submitCandid(){
       
     $("#submitC").click( function (){
         
           var c = document.getElementById("submitted").innerHTML;
  var int = parseInt(c);
  if(int == 0){
     new PNotify({
                                title: 'Submitted Candidate',
                                text: 'No submitted Candidate',
                                type: 'error'
                                
                            });
                            return;
      return;
  }
   
         submittedCandidates();
     })
 }
 
 function sendExam(){
     
            
             
            
            $("#sendExam").click(function (){
                  var sub = document.getElementById("subjectId").value;
            var type = document.getElementById("typeId").value;
            
            if(type !== null && type.length === 0){
                new PNotify({
                                title: 'No type seected',
                                text: 'Select a Question type',
                                type: 'error'
                                
                            });
                            return;
            }
             if(sub !== null && sub.length <= 0){
                new PNotify({
                                title: 'No subject selected',
                                text: 'Please Type a question name ',
                                type: 'error'
                            });
                            return;
            }
            
             localStorage.setItem("ExamSet",sub);
             localStorage.setItem("ExamType",type);
            window.location.assign(sessionStorage.getItem("URL")+"/StsTestingjava/CreateExam.html");
            })
           
 }
 
function presentC(){
      
        $("#presentClicked").click(function (){
            
   var c = document.getElementById("present").innerHTML;
  var int = parseInt(c);
  if(int == 0){
        new PNotify({
                                title: 'active candidates',
                                text: 'No active candidate',
                                type: 'error'
                            });
      return;
  }
  
    wsocket.send("presentStudentsmethod");
            
        })
 }
 
 function canInc(){
     
            $("#canIncrease").click( function (){
                
                  var sub= document.getElementById("candidateTime").value;
              var time = document.getElementById("studentTime").value;
                 
               if(time !=0 && time != null){
                   
                     if(time.toString().indexOf("-") != -1){
         
             new PNotify({
                                    title: 'Time Update',
                                text: sub+ ' time decreased with '+time +' minutes',
                                type: 'success'
                            });   
                     }
            else{
          new PNotify({
                                    title: 'Time Update',
                                text: sub+ ' time increased with '+time +' minutes',
                                type: 'success'
                            });   
                    }
                    
                   
                     sendMatric(sub,time);  
                      $("#canIncrease").removeEventListener("click");
               }
               else{
                   new PNotify({
                                    title: 'Time Update',
                                text: 'Please enter a valid time',
                                type: 'error'
                            });   $("#canIncrease").removeEventListener("click");  return;
               }
    
            })
 }
 
 function examIncrease(){
     $("#examIncrease").click(function (){
                   
           
      var sub= document.getElementById("examTime").value;
      var time = document.getElementById("timeValue").value;
        
      if(time !== 0){
           if(time.toString().indexOf("-") != -1){
            new PNotify({
                                    title: 'Time Update',
                                text: ''+sub+'  decreased with '+time +'  minutes...',
                                type: 'success'
                            });
      }
      else{
              new PNotify({
                                    title: 'Time Update',
                                text: ''+sub+'  increased with '+time +'  minutes...',
                                type: 'success'
                            });
      }  
     
      }
      else{
          new PNotify({
                                    title: 'Time Update',
                                text: 'Please enter a valid time',
                                type: 'error'
                            }); return;
      }
                  send(sub,time);
                  
   //  $("#examIncrease").removeEventListener("click");
                
            })
 }
 
 function reportSheet(){
     
        $("#reportSheet").click(function (e){
            
        

    var requestUrl = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b";

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
 console.log(exception);
 } // end catch
 


    

 
 
 
 function parseLogs( asyncRequest )
 {
   
 // if request has completed successfully, process the response
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object

 var data = JSON.parse(asyncRequest.responseText);
 
  
   var strs = data.split("#split");
               
                 var sep = strs[1].split("##");
                 var count = sep.length;
                 var string="";
                 for(var i = 0; i < count; i++ ){
                     string+="<option value='"+sep[i].split(" ")[0]+"[split]"+sep[i].split(" ")[1]+" "+sep[i].split(" ")[2]+"'>"+sep[i].split(" ")[0]+"&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+sep[i].split(" ")[1]+" &nbsp;&nbsp&nbsp"+sep[i].split(" ")[2]+"&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp "+sep[i].split(" ")[3]+"&nbsp;&nbsp&nbsp "+sep[i].split(" ")[4]+ "</option>";
                 }
  document.getElementById("reports").innerHTML= string;
      //  arrange();
        
      // arranged();
 
         
 // display data on the page
 } // end if
 } //
 
            
            
            
             $("#reportS").modal();
             $("#reports").change(function (e){
                 
                 
                   var requestUrl = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b?sub="+e.target.value;
    
     //+ methodAndArguments;
        
   try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parse(asyncRequest);  //callBack( asyncRequest );
 }, false);
     
    asyncRequest.open( "GET", requestUrl, true );
 asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
 asyncRequest.send(); // send request
 

 } // end try
 catch ( exception )
 {
 alert ( "Request Failed" );
 } // end catch
 


    

 
function parse(asyncRequest){
if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object

 var data = JSON.parse(asyncRequest.responseText);

 
   var subj =  "";
 var amou =    "";
     var split = data.split("#");
   
 //  var ee =document.getElementById("end");
   
       
     var table = document.getElementById("reportBody");
     
     for(var c = 0; c < split.length; c++){
        var splii = split[c].split(",");
        
      for(var i = 0; i < splii.length; i++){
          
          if(i == 0){
           subj = splii[i];   
          //  ee.innerHTML = "View "+splii[i]+" Details";
          }
          if(i == 3){
            amou = splii[i];  
          }
          if(i == 1){
        
          table.innerHTML = splii[i];
          }
          
          
      }
     }
                                       
    table.innerHTML += '<tr><td></td><td></td><td></td><td> <a href="'+sessionStorage.getItem("URL")+'/AAAACLIENT/PdfFormat?subject='+subj+'&date='+amou+'"  class="btn btn-success">Print '+ subj+'</a> &nbsp;<a href="'+sessionStorage.getItem("URL")+'/AAAACLIENT/PdfFormat?subject='+subj+'&date='+amou+'" data-hint="Print" class="btn btn-default">Analyze '+ subj+'</a> </td></tr>';
    
    
  
     //arrange();
}
}
             })
             
        }) 
 }
 
 function vStudents(){
      
        $("#viewStudents").click(function(e){
        
         $("#next").show("slow");
        var requestUrl =  sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b";
    
     
    
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
 console.log( exception);
 } // end catch
 

        
        function parseLogs( asyncRequest )
 {
   
 // if request has completed successfully, process the response
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object
$("#next").hide("slow");
 var data = JSON.parse(asyncRequest.responseText);
 
 
     var table = document.getElementById("studentTable");
     
     
     var sec = data.split("#");
     
     
     
     
     
   
     
     var addUp;
 
    var lengths = sec.length;
       
       //var remainder = ;
      var remainder= Math.floor(lengths / 10);
      var nums = 1;
      var stri = "";
      for(var ii = 0; ii <= remainder; ii++){
          stri+='<button class="btn jol btn-info" type="button">'+(ii + 1)+'</button>'
      }
       $("#studentPg").html(stri);
       $(".jol").click(function (e){
              $(".jol").removeClass("active");
              
       //var remainder = ;
     // var remainder= Math.floor(lengths / 10);
           var addUp;
           
           
                 nums =   parseInt(e.target.innerHTML);
                 
                  
                   var val = nums * 10;
                var c = val - 10;
            if(c== 0){
                c=1;
            }
                 for( c; c < val; c++){
        
        
      var ids="";   
      var detail="";
        if(sec[c] === undefined){
            break;
        }
       var split = sec[c].split(",");
       //split is the current detail 
      
     var join = "";
   
   
     
     
       for( var i = 0; i < split.length; i++){
           //index values
           if(i == 0){
              
               join+="<td>"+c+"</td>";
               
              
            //  totalS++;
               
           }
           
        
           
           ids+=split[i]+",";
           
           if(i == 3){
             //detail = split[i];
             
           }
           
        
           
         join+="<td>"+split[i]+"</td>"; 
       }
   
         join+="<td> <a href='ViewStudentProfile.html?matric="+split[3]+"' ><i class='fa fa-user'></i> </a> "+"</td>"; 
       
      // join+= "<td> <a href='#' title='Delete student and all details' onclick='deleted("+detail+");' data-hint='Delete Students' class='fg-darkRed'><i id='"+ids+"' class='icon-cancel'></i></a>&nbsp;<a title='View student profile' href='ViewStudentProfile.html'data-hint='Delete Students' class='fg-darkGreen'><i id='"+ids+"' class='icon-eye'></i></a></td>";
 
        
         
     var addition ="<tr>";
  
     addition+=join;
      addition+="</tr>";
    
     // totalStudents.push(addition+"*split");
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
     
     
      
           
       })
       
        
     
        var val = nums * 10;
     for( var c = nums; c < val; c++){
        
        
      var ids="";   
      var detail="";
       var split = sec[c].split(",");
       //split is the current detail 
  
     var join = "";
   
   
     
     
       for( var i = 0; i < split.length; i++){
           //index values
           if(i == 0){
              
               join+="<td>"+c+"</td>";
               
               
            //  totalS++;
               
           }
           
         
           
           ids+=split[i]+",";
           
           if(i == 3){
             //detail = split[i];
             
           }
           
        
           
         join+="<td>"+split[i]+"</td>"; 
       }
   
         join+="<td> <a href='ViewStudentProfile.html?matric="+split[3]+"' ><i class='fa fa-user'></i> </a> "+"</td>"; 
       
       
      // join+= "<td> <a href='#' title='Delete student and all details' onclick='deleted("+detail+");' data-hint='Delete Students' class='fg-darkRed'><i id='"+ids+"' class='icon-cancel'></i></a>&nbsp;<a title='View student profile' href='ViewStudentProfile.html'data-hint='Delete Students' class='fg-darkGreen'><i id='"+ids+"' class='icon-eye'></i></a></td>";
 
       
         
     var addition ="<tr>";
  
     addition+=join;
      addition+="</tr>";
    
     // totalStudents.push(addition+"*split");
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
 }
        
        
            $("#vS").modal();
        })
        
 }
 function subRegStud(){
     
         $("#rS").click(function(e){
           //e.preventDefault();
               if (window.File && window.FileReader && window.FileList && window.Blob) {
 
} else {
 new PNotify({
                                title: 'File error',
                                text: 'Your browser doesnt support recent file uploads',
                                type: 'error'
                            });
}
           
          e.stopPropagation();
          
          
          
      
        })
        
        
          $("#submitS").click(function (){
              
             
     var firstName = document.getElementById("firstName").value;
   var  lastName = document.getElementById("lastName").value;
   var  middle = document.getElementById("middleName").value;
   var  gen = document.getElementById("genderM").value;
   var gend = document.getElementById("genderF").value;
   var   email = document.getElementById("email").value;
    
    if(firstName === null || firstName.length === 0){
      new PNotify({
                                title: 'First Name Error',
                                text: 'Fill in first name',
                                type: 'error'
                            }); return;
                           
 }
     if(lastName === null || lastName.length === 0){
       new PNotify({
                                title: 'Last Name Error',
                                text: 'Fill in last name',
                                type: 'error'
                            }); return;
                           
 }
 
   if(middle === null || middle.length === 0){
                       new PNotify({
                                title: 'Middle Name Error',
                                text: 'Fill in middle name',
                                type: 'error'
                            }); return;
 }
 
 
     if(email === null || email.length === 0){
                            new PNotify({
                                title: 'Email',
                                text: 'Fill in a valid email',
                                type: 'error'
                            }); 
                            return;
 }
 
                
     if(gen === null || gend.length === 0){
     new PNotify({
                                title: 'Gender error',
                                text: 'Select gender',
                                type: 'error'
                            }); return;
 }
 
     document.getElementById("url").value = sessionStorage.getItem("URL")+"/StsTestingjava/OngoingExams.html";
   
                    document.getElementById("formStudent").action = getAction();
                 
                   document.getElementById("formStudent").submit();
                   return;
                    
                   
                  
                function getAction(){
   
    
                return sessionStorage.getItem("URL")+"/AAAACLIENT/FormServlet";
    
}
      
 
 
 
              
          })
 }
 
 function regStud(){
       
        $("#regStudent").click(function(e){
        
          document.getElementById('fClick').addEventListener('change', handleFileSelect, false);
        
        
             function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
            
            document.getElementById("iClick").src = e.target.result;
            
          // Render thumbnail.
          //var span = document.createElement('span');
          //span.innerHTML = ['<img class="thumb" src="', e.target.result,
           //                 '" title="', escape(theFile.name), '"/>'].join('');
         // document.getElementById('list').insertBefore(span, null);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }

        
        
            $("#rS").modal();document.getElementById("institution").value = localStorage.getItem("Institution");
        })
        
 }
 
 function aExam(){
      
        $("#addExam").click(function(e){
           
                
    try
 {
     var requestUrl = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/schedule/examination/exams?status=1";

   
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseData(asyncRequest);  //callBack( asyncRequest );
 }, false);
     
    asyncRequest.open( "GET", requestUrl, true );
    
// asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );

 asyncRequest.send(); // send request
 

 } // end try
 catch ( exception )
 {
console.log(exception);
 } // end catch
 

  


function parseData( asyncRequest ){
   
 // if request has completed successfully, process the response
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
  
  
  
  var data = JSON.parse(asyncRequest.responseText);
  
 var add= data.split(",");
 
 var examinationStart = localStorage.getItem("CurrentExams");
              
 examinationStart+= localStorage.getItem("CurrentExamination");
 
   if(localStorage.getItem("CurrentExamination") == null){
      
  }
  
  
  var compute ="";
  for( var c = 0; c < add.length; c++){
   
     if(examinationStart.toString().indexOf(add[c]) == -1){
  compute+= "<option value='"+add[c]+"'>"+add[c]+"</option>" ;  
    
     }
     
     document.getElementById("examTag").innerHTML = compute;
   
     
 }
  
  
  
 }
 
 
 }
           
           $("#sendForm").click(function(){
               
      
     var subject = document.getElementById("examTag").value;
      var scheduleDate = document.getElementById("dateexam").value;
      var duration = document.getElementById("duration").value;
   
     var time = document.getElementById("time").value;
     var feedback = document.getElementById("feedBack").value;
      var amo = document.getElementById("amount").value;
      
       if(subject === null || subject.length === 0){
  new PNotify({
                                title: 'Subject Error',
                                text: 'Select a subject',
                                type: 'error'
                            }); return;
                           
 }
 if(duration === null || duration.length === 0){
    new PNotify({
                                title: 'Duration Error',
                                text: 'Enter a valid duration',
                                type: 'error'
                            });return;
 }
 
 
 if(time === null || time.length === 0){
    new PNotify({
                                title: 'Time Error',
                                text: 'Enter a valid time',
                                type: 'error'
                            });return;
 }
 
 
    if(scheduleDate === null ||scheduleDate.length === 0){
    new PNotify({
                                title: 'Date Error!',
                                text: 'Enter a valid Date e.g  31/01/1999',
                                type: 'error'
                            });return;
 }
 
 if(amo === null || amo.length === 0){
    new PNotify({
                                title: 'Amount error!',
                                text: 'Enter the amount of questions\n you want posted to candidates',
                                type: 'error'
                            }); return;
 }
 
 
    if(feedback=== null || feedback.length === 0){
     new PNotify({
                                title: 'Feed Back Error!',
                                text: 'Enter a feedback.',
                                type: 'error'
                            });;
                            return;
 }
    
  
  
     var subject = document.getElementById("examTag").value;
    var scheduleDate = document.getElementById("dateexam").value;
    var duration = document.getElementById("duration").value;
    var feedback = document.getElementById("feedBack").value;
    var amo = document.getElementById("amount").value;
     var time = document.getElementById("time").value;
     
     
       
     
    
    var requestUrl = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/activeExam/table/insert/test/query/inquery?question="+subject+"&scheduleDate="+scheduleDate+"&time="+time+":00&duration="+duration+"&feedback="+feedback+"&status=33&amount="+amo; //+"?matric="+matricNumber;
   
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
 
 
 
 

 } // end try
 catch ( exception )
 {
 console.log(exception);
 
 } // end catch
 

       function parseLog( asyncRequest )
 {
   
  
   
 // if request has completed successfully, process the response
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
      var data = JSON.parse(asyncRequest.responseText);
      if(data.indexOf("true") !== -1 ){
          
          var d = data.split("inserted");
          new PNotify({
                                title: 'Exam added',
                                text: d[0]+' was scheduled',
                                type: 'success'
                            });
      }
      localStorage.setItem("ScheduleExam","false");
                 
                 $("#closeM").trigger("click");
                 

  }
 }
    
              
           })
           
             
           
           $("#aE").modal();
           
           
            
        })
 }
 
 function signIn(){
   $("#signIn").click(function (){
      wsocket.send("<h><h><h>");
       
   })
     
    
 }
 function arrangeOff(){
     try{
        totalActiveSubjects = [];
        signIn();
        examIncrease();
    cancelClick();
    editProfile();
    totalCandid();
    submitCandid();
    sendExam();
    presentC();
    canInc();
    reportSheet();
    vStudents();
    subRegStud();
    regStud();
    aExam();
     
      
     $("#menu_Open").click(function (){
         
         $("#menu_toggle").trigger("click");
          
     });
      
     
   
     
        
        $("#cE").click( function (e){
            e.stopPropagation();
           
        })
        
        $("#createExams").click(function (){
             
            document.getElementById("user").value = localStorage.getItem("user");
            
            $("#cE").modal();
        })
        
       
        
     
        
        $("#sE").click(function(e){
             //e.preventDefault();
            e.stopPropagation();
            
        })
          $("#cS").click(function(e){
             //e.preventDefault();
            e.stopPropagation();
            
            
        })
        $("#eE").click(function(e){
             //e.preventDefault();
             
             
            e.stopPropagation();
            
            
        })
        $("#showEdit").click(function(e){
          
            $("#sE").modal();
        })
        
        
        
        
        
    $("#editExam").click(function(e){
          
            $("#eE").modal();
        })
         $("#cancelSession").click(function(e){
          
            $("#cS").modal();
        })
        
         $("#reportS").click(function (e){
             e.stopPropagation();
         })
        
       
     
     
     $("#vS").click(function(e){
           //e.preventDefault();
          e.stopPropagation();
        })
        
        
       
        
           $("#aE").click(function(e){
               //e.preventDefault();
            e.stopPropagation();
        })
        
    //  document.getElementById("onGoing").addEventListener("click",reArrange,false);
      //document.getElementById("regStudents").addEventListener("click",registered,false);
      //document.getElementById("activePresent").addEventListener("click",requestPresent,false);
      //document.getElementById("activeSubmit").addEventListener("click",requestSubmited,false);
      //document.getElementById("createAccount").addEventListener("click",createAccountForm,false);
      //document.getElementById("editAccount").addEventListener("click",editAccountForm,false);
      //document.getElementById("butt").addEventListener("click",clics,false);
        // document.getElementById("but").addEventListener("click",clic,false);
      
      
      
      


    //document.getElementById("filter").addEventListener("keydown",keydowns,false);
      
  var table = document.getElementById("tableBody");
    
      if(str  === null)
        window.location.assign("index.html");
      
     var sec = str.split("#");
      
      
     
   
      
  var examT = document.getElementById("examTime");
     
   
     var tableAdd;
     
     var addUp;
  var lengths = sec.length;
  
  // fixing current subjects
          for(var cc = 0; cc < lengths; cc++){
              var splittt = sec[cc].split(",");
               
              totalActiveSubjects.push(splittt[0]);
       
           examT.innerHTML += "<option  value="+splittt[0]+">"+splittt[0]+"</option>";
           
         }
            localStorage.setItem("CurrentExams",totalActiveSubjects);
     
       
       //var remainder = ;
      var remainder= Math.floor(lengths / 5);
      var nums = 1;
      var stri = "";
      for(var ii = 0; ii <= remainder; ii++){
          stri+='<button class="btn jol btn-info" id="pg'+ii+'" type="button">'+(ii + 1)+'</button>'
          
      }
      document.getElementById("examPg").innerHTML = stri;
      
      
       $(".jol").click(function (e){
                $(".jol").removeClass("active");
           
       //var remainder = ;
     // var remainder= Math.floor(lengths / 10);
           var addUp;
           
           
                 nums =   parseInt(e.target.innerHTML);
                 
                  
                   var val = nums * 5;
                var c = val - 5;
            if(c== 0){
                c=1;
            }
             
                 for( c; c < val; c++){
         if(sec[c] === undefined){
            break;
        }
             
               var split = sec[c].split(",");
       
        
     
     var join = "";
   
     
     
     var sp = split.length;
       for( var i = 0; i < sp; i++){
           
           
           
           
           
       //    var exams = new exam(split[0],split[1],split[2],split[3],split[4]);
           
           
          
         //  var pp =JSON.stringify(exams);
           
           //examination.push(pp);
          
            
            
           if(i == 0){
              
               join+="<td>"+c+"</td>";
              
          //   examT.innerHTML += "<option  value="+split[i]+">"+split[i]+"</option>";
                 
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
            
            
           // totalCandidates +=addd;
            
             localStorage.setItem(ids+"Candidates",split[i]); 
          }
          
          
          if(i == 4){
           localStorage.setItem(ids+"Duration",split[i]);
                // continue; 
          }
         join+="<td>"+split[i]+"</td>"; 
       } 
      
       
  // join+= '<td class="a-center"> <a title="View '+ids+'" " href="OpenedExam.html"  data-hint="View Exam Details"    > <i  id="'+ids+'"  data-hint="View Exam Details"  ></i></a></td>';
   join +='<td>     <a id="'+ids+'..." class="btn btn-primary send to open " title="View '+ids+'" " href="#"  data-hint="View Exam Details"    > <i  id="'+ids+'" class="fa fa-arrow-right"  data-hint="View Exam Details"  ></i></a>   <a id="'+ids+'___" class="btn btn-danger unregister " title="Unregister '+ids+'" " href="#"  data-hint="Unregister"    > <i  id="'+ids+'***" class="fa fa-remove unregister"  data-hint="Unregister exam"  ></i></a>  </td>';
     var addition ="<tr>";
    
     addition+=join;
      addition+="</tr>";
       addUp+=addition;
   
         //totalOngoing.push(addition+"*split");
         
       
       
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
 
  
  
     
  document.getElementById("totalExams").innerHTML = sec.length - 1;
      
     
                 
       })
      
       
      
     var ids="";
     var val = nums * 5;
     for( var c = nums; c < val; c++){
        
        
        
       var split = sec[c].split(",");
       
        
     
     var join = "";
   
     
     
     var sp = split.length;
       for( var i = 0; i < sp; i++){
           
           
           
           
           
           var exams = new exam(split[0],split[1],split[2],split[3],split[4]);
           
           
          
           var pp =JSON.stringify(exams);
           
           examination.push(pp);
          
            
            
           if(i == 0){
              
               join+="<td>"+c+"</td>";
              
             examT.innerHTML += "<option  value="+split[i]+">"+split[i]+"</option>";
                 
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
            
            
           // totalCandidates +=addd;
            
             localStorage.setItem(ids+"Candidates",split[i]); 
          }
          
          
          if(i == 4){
           localStorage.setItem(ids+"Duration",split[i]);
                // continue; 
          }
         join+="<td>"+split[i]+"</td>"; 
       } 
      
       
  // join+= '<td class="a-center"> <a title="View '+ids+'" " href="OpenedExam.html"  data-hint="View Exam Details"    > <i  id="'+ids+'"  data-hint="View Exam Details"  ></i></a></td>';
  join +='<td>     <a id="'+ids+'..." class="btn btn-primary send to open " title="View '+ids+'" " href="#"  data-hint="View Exam Details"    > <i  id="'+ids+'" class="fa fa-arrow-right"  data-hint="View Exam Details"  ></i></a>   <a id="'+ids+'___" class="btn btn-danger unregister " title="Unregister '+ids+'" " href="#"  data-hint="Unregister"    > <i  id="'+ids+'***" class="fa fa-remove unregister"  data-hint="Unregister exam"  ></i></a>  </td>';
      var addition ="<tr>";
   
     addition+=join;
      addition+="</tr>";
       addUp+=addition;
   
         //totalOngoing.push(addition+"*split");
         
       
       
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
 
  
  
     
  document.getElementById("totalExams").innerHTML = sec.length - 1;
   $("#dataHide").hide("slow");    
  $("#next").hide("slow");
     
     /*
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
     */
       localStorage.setItem("RegStudents",totalActiveSubjects);
      
     }
     catch(exc){
         console.log(exc);
     }
       

 }
  
   
 
 function arrange(){
 
 
 //alert("be Alert");
     
      totalActiveSubjects = [];
      
    //  document.getElementById("onGoing").addEventListener("click",reArrange,false);
      //document.getElementById("regStudents").addEventListener("click",registered,false);
      //document.getElementById("activePresent").addEventListener("click",requestPresent,false);
      //document.getElementById("activeSubmit").addEventListener("click",requestSubmited,false);
      //document.getElementById("createAccount").addEventListener("click",createAccountForm,false);
      //document.getElementById("editAccount").addEventListener("click",editAccountForm,false);
      //document.getElementById("butt").addEventListener("click",clics,false);
        // document.getElementById("but").addEventListener("click",clic,false);
      
      
      
      


    //document.getElementById("filter").addEventListener("keydown",keydowns,false);
      
     //var table = document.getElementById("tableBody");
     
     var sec = str.split("#");
     
 
    // alert(sec);
     
      
     
     //
     
     var tableAdd;
     
     var addUp;
 
     var ids="i know";
     var g = sec.length;
     
     for( var c = 1; c < g; c++){
     
        
        
       var split = sec[c].split(",");
       
        
     
  totalActiveSubjects.push(split[0]);
  
       
     var join = "";
   
     
     
     var sp = split.length;
       for( var i = 0; i < sp; i++){
           
           
           
           
           
           var exams = new exam(split[0],split[1],split[2],split[3],split[4]);
           
           
          
           var pp =JSON.stringify(exams);
           
           examination.push(pp);
          
            
            
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
             
          //    var addd = parseInt(split[i]);
            
            
           //  totalCandidates +=addd;
            
             localStorage.setItem(ids+"Candidates",split[i]); 
          }
          
          
          if(i == 4){
           localStorage.setItem(ids+"Duration",split[i]);
                 continue; 
          }
          // join+="<td>"+split[i]+"</td>"; 
       } 
      
        
    //join+= '<td> <a title="View '+ids+'" " href="OpenedExam.html"  data-hint="View Exam Details"  data-hint-position="top" class="fg-darkGreen" > <i  id="'+ids+'" class="icon-eye" data-hint="View Exam Details"  ></i></a></td>';
    /*
     var addition ="<tr>";
   
     addition+=join;
      addition+="</tr>";
       addUp+=addition;
   
         totalOngoing.push(addition+"*split");
         
       
        */
         
     }
     
  /*
  
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
      
  
      
 

 
 */
 
     
   
     
 }
 
 var condition = false;
  try{
 angular.module('myApp', []).controller('ongoingCtrl', function($scope) {
   
  $scope.data = examination;
  $scope.orderByMe = function(x) {
    $scope.myOrderBy = x;
  }
});
  }
  catch(err){
      condition = true;
      console.log(err); 
  }
 
 
 
 
 
 
 function  arrangeSideBars(){
        
         
   
     if(localStorage.getItem("studentNumbers")){
         
          var items = localStorage.getItem("studentNumbers");
         
          var spliff = items.split(",");
          var addUps ="";
          for( var cc = 0; cc < spliff.length; cc++){
              
        addUps+=    "<option value='"+spliff[cc]+"'>"+spliff[cc]+" </option>"; 
          }
            
             
            document.getElementById("candidateTime").innerHTML = addUps;
            document.getElementById("candidateCan").innerHTML = addUps;
            
           
      
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
 
 var wsocket;
 
 function connect(){
    
    

wsocket = new WebSocket("ws://"+location.host+"/AAAACLIENT/endpoint?Administrator="+localStorage.getItem("user"));






wsocket.onmessage = onMessage;
wsocket.onerror = onError;

}

function onError(e){
  console.log(e)  ;
}

function totalSubmittedStudentsMethod(){
    
    var text ='<!DOCTYPE html> <html> <head>    <script src="jscustom/totalSubmitedStudents.js" type="text/javascript"></script> </head> <body>'
      +'     <div class="span6">'
                    +'      <div>'
                      +'        <input type="search" id="filterSearchs" placeholder="Filter by name/student number"/><button id="clickedSearchs" ><i class="icon-search"></i></button>&nbsp;'
                           
                      +'    </div>'
                      +'    <div class="clear"></div>'
                      +'    <div id="examStudentHolder" class="vertical-scroll">'
                           +'   <table class="table table-striped responsive-utilities jambo_table">'
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
  
     
   
    $("#subBody").html(text);
    
 $("#subs").modal();
 
 $("#subs").click(function(){
     e.stopPropagation();
     
 })
 
    
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
                           +'   <table class="table table-striped responsive-utilities jambo_table">'
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
      
      
        $("#pres").modal();
        
        
        //  totalPresentActive();
        
        
    
     
    
   
    
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

if(entity >= 0){ 
    document.getElementById("attendance").innerHTML =  entity+"%";
  
}

else{
   document.getElementById("attendance").innerHTML = "0 %";
  
}

 

}


if(arraypv.indexOf("allStudents:") != - 1){
   
  var sep = evt.data.toString().split(":");
  localStorage.setItem("studentNumbers",sep[1]);
  var arr = sep[1].split(",").length ;
 $("#scheduled").html(arr);
 
  
  console.log("all students");
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
      
      
       if(e.target.className === "fa fa-arrow-right"){
          
       var second = e.target.id;
        localStorage.setItem("ExamName",second);
        window.location.assign("OpenedExam.html");
    }
     if(e.target.className.indexOf("unregister") !== -1){
          if(!confirm("Are you sure you want to unregister "+e.target.id.split("***")[0]))
              return;
           $.ajax({

            url: sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/student/course/information?status=8&subjects="+e.target.id.toString().split("***")[0], 
            type: 'GET',
            success: function(response) {
                console.log(response);
        
            },
            error: function(error) {
              
                console.log(error);
            }
        });
     
         return;
        }
    
       
   }
   
   
   if(e.target.className.indexOf("send to open ") !== -1){
        var second = e.target.id;
        
       localStorage.setItem("ExamName",second.split("...")[0]);
       window.location.assign("OpenedExam.html");
        
   }
   
    if(e.target.className.indexOf("unregister") !== -1){
        if(!confirm("Are you sure you want to unregister "+e.target.id.split("___")[0]))
              return;
           $.ajax({

            url: sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/student/course/information?status=8&subjects="+e.target.id.toString().split("__")[0], 
            type: 'GET',
            success: function(response) {
                console.log(response);
        
            },
            error: function(error) {
              
                console.log(error);
                
            }
        });
     }
   
  
   
   
   
   
  
}


function getAction(){
    return "";
}

function ver(){
 
 
 
       //document.getElementById("image").src = "http://"+localStorage.getItem("Ip")+":8080/AAAACLIENT/ImageRetriever?image=images";
    var now = new Date();
    //alert(now.getDate() +" "+(now.getMonth() +1)+" "+now.getFullYear());
//document.getElementById("dateScheduled").innerHTML = "Date : "+now.getDate()+"-"+(now.getMonth() +1)+"-"+now.getFullYear(); 
  
    if( localStorage.getItem("status")){
        var stat = localStorage.getItem("status");
        if(stat == "true"){
        
        str = localStorage.getItem("OnGoingExams");
    //    connect();
      //  arrange();
        //    arrangeSideBars();
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







function matric(number){
   this.name = number;
   
   
}

function exam(subject,std,stt,candidates,duration){
    
    this.subject =subject,
      this.std = std,
       this.stt = stt,
         this.candidates = candidates,
          this.duration = duration;
}

