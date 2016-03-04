/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var showDown = false;
var presentQuestions = 0;
var presentNumbers = 0;
var totalAnswers = [];
var showresult = true;
var minutesLeft = 0;
var secondsLeft = 0;
var hoursleft = 0;
var paginationTracker = [];



function start(){
       document.getElementById("courseReg").addEventListener("click",courseRegisterFire,false);
            document.getElementById("showProfile").addEventListener("click",showP,false);
            document.getElementById("editP").addEventListener("click",showP,false);
            var data =  localStorage.getItem("detail");
            
            
 
 
 
 
     if(data.indexOf("null") !== -1){
         alert("Please contact administrator");
    window.location.assign("candidateLog.html");
    
     }

           $("#name").html(data.split("#")[1].split(",")[0]+" "+data.split("#")[1].split(",")[1]);
           $("#pName").html(data.split("#")[1].split(",")[0]+" "+data.split("#")[1].split(",")[1]);
    
           document.getElementById("smallImage").src = sessionStorage.getItem("URL")+"/AAAACLIENT/ImageRetriever?image="+localStorage.getItem("user");
  
           document.getElementById("fullImage").src = sessionStorage.getItem("URL")+"/AAAACLIENT/ImageRetriever?image="+localStorage.getItem("user");
   
           $("#lock").click(function(e){
     
                        showDown = !showDown;
            })
            
            $("#fullImage").click(function (){
                showP();
                
            })
            
            $("#closeCourse").click(function (e){
               
               // subjectsRegister = [];
               
                
            })
            
            $("#startNewTest").click(function (){
                window.location.assign("SectionPage.html");
                
            });
             $("#startNewTests").click(function (){
                $("#viewP").trigger("click");
                
            });
            
            document.getElementById("viewP").href = "ViewStudentProfile.html?matric="+localStorage.getItem("user");
            
   
// $("#pop").modal();

configureHandlers();
 
 $("#lockScreen").click(function (){
     
     window.location.assign("LockScreenCandidate.html");
      
 })
 
  
 
 $("#fullS").click(function (){
     $("#menu_toggle").trigger('click');
     
 })
 $("#logout2").click(function (){
     $("#logout").trigger('click');
 })
 
  $("#logout").click(function (){
      
       localStorage.clear();
       sessionStorage.clear();
       
      window.location.assign("candidateLog.html");
      
  })
 

if(data.indexOf("session active") != -1){
    alert("session active ");
    
   
    return;
}



if( data === "false"){
    window.alert("please you have not registered");
     return;
    
    
}





    parseValue(data);
}

function parseValue(data){
   
 // if request has completed successfully, process the response
 
 // convert the JSON string to an Object

         
    var splif = data.split("#");
    var spliffed = splif[1];
    var sect = spliffed.split(",");
  var  details = "&Last="+sect[0]+"&first="+sect[1]+"&matric="+sect[4];
  
 var cc = localStorage.getItem("user");
 
    var requestUrl = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b"+"?id="+cc;
     
    
    
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
 console.log(exception);
 
 } // end catch
 

function parseLog( asyncRequest )
 {
   
 // if request has completed successfully, process the response
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object

 var data = JSON.parse(asyncRequest.responseText);
 
       //var str = data;
       $("#nextload").hide("slow");
       
       if(data == "Server not started"){
           alert("Server not started, please contact administrator");
           return;
       }
        
        
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
   
          join+="<td> <a href='#startExamination' id='"+split[0]+"' ><i class='fa fa-key' id='"+split[0]+"' title='start "+split[0]+"' ></i> </a> "+"</td>"; 
       
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
     
     $(".fa-key").click(function (e){
         
       localStorage.setItem("activeExam",e.target.id);
            $("#det").html("Proceed to  "+e.target.id+" ?");
          $("#startExamPop").modal();
          $("#start").click(function (){
              setExam(e);;
          });
        // setExam(e);
         });
      
           
       });
      
        var val = nums * 10;
     for( var c = nums; c < val; c++){
       
      var ids="";   
    
      try{
          //or turn to 1
     var split = sec[c].split(",");
 }
 catch(exc){
                    continue;
 }
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
     
           join+="<td> <a href='#startExamination'  ><i class='fa fa-key' id='"+split[0]+"' title='start "+split[0]+"' ></i> </a> "+"</td>"; 
      
       
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
     
         
         
      
      $(".fa-key").click(function (e){
         localStorage.setItem("activeExam",e.target.id);
            $("#det").html("Proceed to  "+e.target.id+" ?")
          $("#startExamPop").modal();
          $("#start").click(function (){
              setExam(e);;
          })
        //  
         })
       
      // callpopulator();
        
 // display data on the page
 } // end if
 } //
 

 // display data on the page
 } ///end method
 
 




 
function singleAnswer(questions){
    
    var showQ = document.getElementById("questionSet");
     var question = questions.split("#question");
     var paginateDiv = document.getElementById("pagination");
     var addPagination ="";
     var questionCount = 0;
     
     
     var pageNumberReference = document.getElementById("questionNumber");
   
    for(var c = 0; c < question.length; c++){
             totalAnswers.push(0);
             if(c !== (question.length - 1))
           addPagination+= ' <button class="btn btn-info dimejiandbabajide" id="'+(c+1)+'." type="button">'+(c+1)+'</button>';
     
    }
    
    paginateDiv.innerHTML = addPagination;
    
    $("#totalQuestion").html(question.length - 1);
    
  
     
    
    
    
     $("#status").fadeIn("slow");
     $("#questionpan").fadeIn("slow");
    
    
    $(".dimejiandbabajide").click( function (e){
          questionCount = e.target.innerHTML;
    pageNumberReference.innerHTML = questionCount;
    presentNumbers = questionCount;
     
     
      var presentQuestion = question[questionCount].split("#");
          presentQuestions = presentQuestion[0];
      var length = presentQuestion.length;
      var keepOptions = "";
      
      for(var i = 1; i < length; i++){
          
           // If the question has been answered
           if(totalAnswers[questionCount] !== 0){
              if(i == totalAnswers[questionCount].answer) 
                    keepOptions +='<tr><td> <input name="starks" type="radio" id="'+i+'" checked class="starks"/>  </td>    <td> '+presentQuestion[i].substring(6,presentQuestion[i].length)+ '</td></tr>';
              else  keepOptions +='<tr><td> <input name="starks" type="radio" id="'+i+'"  class="starks"/>  </td>    <td> '+presentQuestion[i].substring(6,presentQuestion[i].length)+ '</td></tr>';
             
          } //if the question has not been answered
         
            else{
                     keepOptions +='<tr><td> <input name="starks" type="radio" id="'+i+'"  class="starks"/>  </td>    <td> '+presentQuestion[i].substring(6,presentQuestion[i].length)+ '</td></tr>';
          }
         
      }
      
      document.getElementById("options").innerHTML = keepOptions;
      $("#questionsSet").html(presentQuestion[0]);
        
     
      
    })
    
    
    $("#next").click(function(){
        
         if(questionCount == (question.length - 1)){
              
        $("#postExam").show();
        
        
        return;
            }
            
            questionCount++;
           
     pageNumberReference.innerHTML = questionCount;
     
     presentNumbers = questionCount;
     
     
      var presentQuestion = question[questionCount].split("#");
          presentQuestions = presentQuestion[0];
      var length = presentQuestion.length;
      var keepOptions = "";
    
      for(var i = 1; i < length; i++){
          
           // If the question has been answered
           if(totalAnswers[questionCount] !== 0){
              if(i == totalAnswers[questionCount].answer) 
                  keepOptions +='<tr><td> <input name="starks" type="radio" id="'+i+'" checked class="starks"/>  </td>    <td> '+presentQuestion[i].substring(6,presentQuestion[i].length)+ '</td></tr>';
              else  keepOptions +='<tr><td> <input name="starks" type="radio" id="'+i+'"  class="starks"/>  </td>    <td> '+presentQuestion[i].substring(6,presentQuestion[i].length)+ '</td></tr>';
             
          } //if the question has not been answered
           
            
            else{
                     keepOptions +='<tr><td>  <input name="starks" type="radio" id="'+i+'" style=""  class="starks"/>  </td>    <td> '+presentQuestion[i].substring(6,presentQuestion[i].length)+ '</td></tr>';
          }
          
      }
      
      document.getElementById("options").innerHTML = keepOptions;
      $("#questionsSet").html(presentQuestion[0]);
        
     
        
    })
    
      $("#next").trigger("click");
    
    
    $("#previous").click( function (){
        
          if(questionCount == 1){
        alert("Trigger you cannot go back")
        return;
            }
            
            questionCount--;
            presentNumbers = questionCount;
                     
     pageNumberReference.innerHTML = questionCount;
    var presentQuestion = question[questionCount].split("#");
    presentQuestions = presentQuestion[0];
      var length = presentQuestion.length;
      var keepOptions = "";
      
    for(var i = 1; i < length; i++){
          
           // If the question has been answered
           if(totalAnswers[questionCount] !== 0){
              if(i == totalAnswers[questionCount].answer) 
                   
                    keepOptions +='<tr><td> <input name="starks" type="radio" id="'+i+'" checked class="starks"/>  </td>    <td> '+presentQuestion[i].substring(6,presentQuestion[i].length)+ '</td></tr>';
              else  keepOptions +='<tr><td> <input name="starks" type="radio" id="'+i+'"  class="starks"/>  </td>    <td> '+presentQuestion[i].substring(6,presentQuestion[i].length)+ '</td></tr>';
             
          } //if the question has not been answered
         
            else{
                     keepOptions +='<tr><td> <input name="starks" type="radio" id="'+i+'"  class="starks"/>  </td>    <td> '+presentQuestion[i].substring(6,presentQuestion[i].length)+ '</td></tr>';
          }
         
      }
      
      document.getElementById("options").innerHTML = keepOptions;
      $("#questionsSet").html(presentQuestion[0]);
       
    });
    
    
    
     
    
    
$("#postExam").click(function (e){
        
        e.stopPropagation();
        $("#startExaminationS").hide();
        showTabs();
        
 if(showresult){
            var percentage = 0;
            var string = "";
            var complete = true;
            
    
    for (var c = 1; c < question.length; c++){
        var answer = false;
        var presentAnswer = 0;
        
        var split = question[c].split("#");
        for(var i = 0; i < split.length; i++){
            if(i == 0){
                if( totalAnswers[c].answer !== undefined && totalAnswers[c].answer !== 0 ){
                            
                    answer = true;
                    presentAnswer = totalAnswers[c].answer;
                }
                else{
                    complete = false;
                }
            string +='<div style="border-top:2px solid blue; margin-top:30px;"></div><p style="color:blue;">('+c+').<b>'+split[i]+'</b></p>';
        
            }
            else{
                if(answer){
                    if(i == presentAnswer){
                        if(split[i].indexOf("option") != -1){
                            string += "  <p style=' background-color:red;'><input type='radio' checked  id='"+i+"' class='margin5'/>"+split[i].substring(6,split[i].length)+"</p> ";
                        }
                        else{
                            ++percentage;
                            string += "  <p style=' background-color:green;'><input type='radio' checked  id='"+i+"' class='margin5'/>"+split[i].substring(6,split[i].length)+"</p> ";                         
               
                        }
                    }
                    else{
                        if(split[i].indexOf("option") != -1){
                             string += "  <p ><input type='radio'   id='"+i+"' class='margin5'/>"+split[i].substring(6,split[i].length)+"</p> ";                         
                        }
                        else{
                            string += "  <p style='background-color:green;'><input type='radio'   id='"+i+"' class='margin5'/>"+split[i].substring(6,split[i].length)+"</p> "; 
                        }
                    }
                }
                else{
                   
                    if(split[i].indexOf("option") != -1) {
                        string += "  <p style=' '><input type='radio'   id='"+i+"' class='margin5'/>"+split[i].substring(6,split[i].length)+"</p> ";                         
                     }
                    else{
                       string += "  <p style=' background-color:green;'><input type='radio' checked  id='"+i+"' class='margin5'/>"+split[i].substring(6,split[i].length)+"</p> ";                         
                     }
                }
            }
            
        }
        
        
    }
    
    
    
    
    var realNumber =  (percentage * 100) / (question.length -1);
    var st = "<p>Your percentage is "+realNumber +" % !!! ";
    var body = document.getElementById("resultsheet");
    body.innerHTML += st;
    body.innerHTML += string;
    
   $("#resultShow").modal();
     
    var login = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/student/exam/start/section/exam";
    var requestUrl = login+"?matric="+localStorage.getItem("user")+"&exam="+localStorage.getItem("activeExam")+"&type="+localStorage.getItem("eType")+"&status=result"+"&time="+hoursleft+":"+minutesLeft+":"+secondsLeft+"&score="+realNumber+"&attempt=1&complete="+complete;
    
    alert(requestUrl);
   
    try
        {
         var asyncRequest = new XMLHttpRequest(); 
         asyncRequest.addEventListener("readystatechange",
         function() { 
             parseLog(asyncRequest);
         }, false);
         asyncRequest.open( "GET", requestUrl, true );
         asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
         asyncRequest.send();
        } 
        catch ( exception ){
            console.log ( exception);
        }
        
        function parseLog( asyncRequest ){
                if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 ){
                    var data = JSON.parse(asyncRequest.responseText);
                    var split = data.split(":");
                    document.getElementById("rank").innerHTML = "you ranked "+split[1] +" position in "+localStorage.getItem("activeExam") +" \n "+"You are ranked "+split[2]+" in the overall subject ranking ";
                 
                
                }
         }
 
   
      
       
       
         
        }
        
    });
    
    
}



function multipleAnswerArray(answers){
    
    
    this.answers = answers.sort(answers);
    
}
 
 function configureHandlers(){
     
     
     $("#regExam").click( function (){
         
         
          $("#registerPop").click(function (e){
              e.stopPropagation();
              
          })
         
        // alert(localStorage.getItem("name"));
           var requestUrl = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/student/course/information?status=2&matric="+localStorage.getItem("user");
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
  


 

function parseData(asyncRequest){
 
  if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
      
 // convert the JSON string to an Object


 //var data = JSON.parse(asyncRequest.responseText);

 var data = JSON.parse(asyncRequest.responseText);
 
 
     
      var clicked = [];
     
       var table = document.getElementById("coursesTable");
       var sec = data.split("#");
       var length = sec.length;
       var remainder= Math.floor(length / 5);
       var nums = 1;
       var stri = "";
       for(var ii = 0; ii <= remainder; ii++){
          stri+='<button class="btn adewale btn-info" id="pg'+ii+'" type="button">'+(ii + 1)+'</button>'
      }
      $("#courseCount").html("Total Available course : "+(length-1));
      
      $("#coursesPg").html(stri);
      
     
      for(var c = 0;  c < paginationTracker.length; c++){
          document.getElementById(paginationTracker[c]).className = document.getElementById(paginationTracker[c]).className + " red";
      }
        $(".adewale").click(function (e){
            $(".adewale").removeClass("active");
            
            localStorage.setItem("pgclicked",e.target.id);
            
           
              var val = parseInt(e.target.innerHTML) * 5;
                   var tempTable = "";
                   var c = val - 5;
                    if(c== 0)
                        c=1;
                    
                     for( c; c < val; c++){
                          if(sec[c] === undefined)
                                break;
                            
                   
       var split = sec[c].split(",");
                      
                       
       if(subjectsRegister.indexOf(split[0]) != -1){
         if(split[0] === subjectsRegister[subjectsRegister.indexOf(split[0])]){
             console.log("equality")
                tempTable+="<tr><td>"+c+"</td><td>"+split[0]+"</td><td>"+split[1]+"</td><td>"+split[2]+"</td><td>"+split[3]+"</td><td><input type='checkbox' id='"+split[0]+"' class='icheckbox_flat-green' checked=''  /></td></tr> ";
  
                    }
       }
       else{
      tempTable+="<tr><td>"+c+"</td><td>"+split[0]+"</td><td>"+split[1]+"</td><td>"+split[2]+"</td><td>"+split[3]+"</td><td><input type='checkbox' id='"+split[0]+"' class='icheckbox_flat-green'  /></td></tr> ";
  }
   
                }
         
   
     
     table.innerHTML = tempTable;
     
     $(".icheckbox_flat-green").click(function (e){
         
         if(paginationTracker.indexOf(localStorage.getItem("pgclicked")) === -1)
             paginationTracker.push(localStorage.getItem("pgclicked"));
      
       document.getElementById(localStorage.getItem("pgclicked")).className = document.getElementById(localStorage.getItem("pgclicked")).className +" red";
       
        
        var loopThrough = subjectsRegister.toString().split(",");
        for(var i = 0; i < loopThrough.length; i++){
            if(loopThrough[i] == e.target.id){
                subjectsRegister.splice(i,1);
        if(subjectsRegister.length == 0){
           document.getElementById("courseReg").className = document.getElementById("courseReg").className + " disabled";
         //     document.getElementById("topSubmit").className = document.getElementById("topSubmit").className + " disabled";
            }
                return;
            }
        }
          subjectsRegister.push(e.target.id);
       
       
         if(subjectsRegister.length > 0){
            
           document.getElementById("courseReg").className = document.getElementById("courseReg").className.replace(" disabled","");
                 
        
        }
    } )
    
      
      })
      
      
      var join = "";
      var val = nums * 5;
     for( var c = nums; c < val; c++){

       var split = sec[c].split(",");
       
     // join+="<tr><td>"+c+"</td><td>"+split[0]+"</td><td>"+split[1]+"</td><td>"+split[2]+"</td><td>"+split[3]+"</td><td><input type='checkbox' id='"+split[0]+"' class='icheckbox_flat-green'  /></td></tr> ";
         if(subjectsRegister.indexOf(split[0]) != -1){
         if(split[0] === subjectsRegister[subjectsRegister.indexOf(split[0])]){
             console.log("equality")
              join+="<tr><td>"+c+"</td><td>"+split[0]+"</td><td>"+split[1]+"</td><td>"+split[2]+"</td><td>"+split[3]+"</td><td><input type='checkbox' id='"+split[0]+"' class='icheckbox_flat-green' checked=''  /></td></tr> ";
  
                    }
       }
       else{
      join+="<tr><td>"+c+"</td><td>"+split[0]+"</td><td>"+split[1]+"</td><td>"+split[2]+"</td><td>"+split[3]+"</td><td><input type='checkbox' id='"+split[0]+"' class='icheckbox_flat-green'  /></td></tr> ";
  }
        
        }
         
   
    
     
     table.innerHTML = join;
    
 $(".icheckbox_flat-green").click(function (e){
       if(paginationTracker.indexOf("pg0") === -1)
             paginationTracker.push("lpg0");
         
      var loopThrough = subjectsRegister.toString().split(",");
       document.getElementById("pg0").className = document.getElementById("pg0").className +" red";
       
        for(var i = 0; i < loopThrough.length; i++){
            if(loopThrough[i] == e.target.id){
                subjectsRegister.splice(i,1);
        if(subjectsRegister.length == 0){
           document.getElementById("courseReg").className =  document.getElementById("courseReg").className + " disabled";
         //     document.getElementById("topSubmit").className = document.getElementById("topSubmit").className + " disabled";
            }
                return;
            }
        }
          subjectsRegister.push(e.target.id);
       
       
         if(subjectsRegister.length > 0){
            
           document.getElementById("courseReg").className = document.getElementById("courseReg").className.replace(" disabled","");
                 
        
        }
    
         
 })
  
  $("#registerPop").modal();
    }
}
         
         
       
          
     })
 }
  
       var subjectsRegister = [];
 
 
 
 
   
function clic(e){
   
     
      if(e.target.className == "starks"){
          
         var presentAnswer = new answer(presentQuestions,presentNumbers,e.target.id);
         totalAnswers[presentNumbers] = presentAnswer;
         document.getElementById(presentNumbers+".").className = document.getElementById(presentNumbers+".").className+" red";
      
      }
      
      
    
    
    
}

function courseRegisterFire(){
    
     var requestUrl = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/student/course/information/?status=1&subjects="+subjectsRegister+"&matric="+localStorage.getItem("user");
   
 
    try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseDatasP(asyncRequest);  //callBack( asyncRequest );
 }, false);
     
     
    asyncRequest.open( "GET", requestUrl, true );
 asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
 asyncRequest.send(); // send request
 

 } // end try
 catch ( exception )
 {
 alert ( "Request Failed" );
 } // end catch
  
      function parseDatasP(asyncRequest){
 
  if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object

var data = JSON.parse(asyncRequest.responseText);//  .parse(asyncRequest.responseText);

      
  if(data.indexOf("Succesfully") !== -1){
      var string = "";
            document.getElementById("courseReg").className = document.getElementById("courseReg").className + " disabled";
      if(subjectsRegister.indexOf(",") != -1){
         var sep = subjectsRegister.split(",");
         for(var i = 0; i < sep.length; i++)
          string+="<p>"+sep[i]+"</p>"; 
       $("#content").html("You have successfully registered \n "+string);
      
     
      }
        $("#content").html("You have successfully registered \n <p>"+subjectsRegister+"</p>");
     
      $("#complete").modal();
      subjectsRegister = [];
                parseValue();
  }
  else{
      alert("Something went wrong with your course registration");
  }
          }
          
          
      }
  }
  
function showP(){
    
    var requestUrl = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/student/course/information?status=3&matric="+localStorage.getItem("user");
    
     
    
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
 console.log(exception);
 
 } // end catch
 

function parseLog( asyncRequest )
 {
   
 // if request has completed successfully, process the response
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object

 var data = JSON.parse(asyncRequest.responseText);
 var datas = data.split("#");
         var seperate = datas[1].split(",");

       $("#firstNameF").val(seperate[0]);
       $("#lastNameF").val(seperate[1]);
        $("#email2").val(seperate[5]);
        
          
        if(seperate[3] != "null" )
        $("#middleNameF").val(seperate[2]);
       
         if(seperate[6] != "null")
        $("#contact").val(seperate[6]);
    
         if(seperate[3] !== "null")
         $("#matric").val(seperate[3]);
        
       
    
         if(seperate[7] != "null")
        $("#address").val(seperate[7]);
        
           if(seperate[9] !== "null")
         $("#address2").val(seperate[9]);
     
       
         if(seperate[8] != "null")
        $("#contact2").val(seperate[8]);
    
    
         if(seperate[10] != "null")
      $("#comment").val(seperate[10]);
  
    
     //
     
     
    if(seperate[4] == "M")
       $("#gender1").trigger("click");
    else
        $("#gender2").trigger("click");
       
  
   document.getElementById("sClick").src = sessionStorage.getItem("URL")+"/AAAACLIENT/ImageRetriever?image="+localStorage.getItem("user");
 
      
           
         
        
 $("#profile").modal();
 
 
 
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
   
 }
 }
    
    
    
} 


function updateCandidate(){
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
        // var initials = $("#initials").val();
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
         var comment = $("#comment").val();
         
         
            if(email === null || email.length <=0 || email.indexOf("@") === -1 || email.indexOf("@") === -1){
              new PNotify({
                                title: 'Profile Error',
                                text: 'Invalid Email',
                                
                                type: 'error'
                            });
      return;
         }
         
   var requestUrl = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/student/register?status=1&comment="+comment+"&firstName="+firstName+"&email="+email+"&lastName="+lastName+"&middleName="+middleName+"&matric="+localStorage.getItem("user")+"&gender="+gender+"&mobileNumber="+contact+"&address="+address+"&address2="+address2+"&number2="+contact2;
 
                        
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
 
 
  if(data.indexOf("Update Successfull") !== -1){
  
               document.getElementById("urlP").value=   sessionStorage.getItem("URL")+"/StsTestingjava/SectionPage.html";
               document.getElementById("nameP").value = localStorage.getItem("user");
               document.getElementById("formTutor").action = getAction();
               
                 function getAction(){
   
    
                return sessionStorage.getItem("URL")+"/AAAACLIENT/FormServlet";
    
}
               document.getElementById("formTutor").submit();
               
   

      }
  }
  else{
       new PNotify({
                                title: 'Update Admin',
                                text: 'Update admin not successful',
                                type: 'error'
                            });
                            return;
  }
  }
}

function setExam(e){
    
     
          var requestUrl = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/name?question="+e.target.id;

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
 catch ( exception ){
 console.log(exception);
 } // end catch
 
 
function parseData( asyncRequest ){
   
 // if request has completed successfully, process the response
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 ){
 // convert the JSON string to an Object

     $("#lock").click(function(e){
     
    $("#regExam").fadeOut("slow");
    $("#editP").fadeOut("slow");
    $("#viewP").fadeOut("slow");
    
      
 })
    if(showDown){
   $("#regExam").fadeOut("slow");
    $("#editP").fadeOut("slow");
    $("#viewP").fadeOut("slow");
    }
    
      $("#fullS").fadeOut("slow");
    $("#lockScreen").fadeOut("slow");
      $("#logout").fadeOut("slow");
    $("#logout2").fadeOut("slow");
      $("#showProfile").fadeOut("slow");
       $("#setting").fadeOut("slow");
 $("#menu_toggle").trigger("click");
 //document.getElementById("image").src = sessionStorage.getItem("URL")+"/AAAACLIENT/ImageRetriever?image="+matricNumber;
 
 
  

 var data = JSON.parse(asyncRequest.responseText);
       
        
          $("#tabHide").hide();
          $("#studentPg").hide();
    
          $("#startExaminationS").show();
    
   
       
        
     var str = data.question.toString();
     var type = data.questionType;
     localStorage.setItem("eType",type);
     document.getElementById("subName").innerHTML = localStorage.getItem("activeExam");
     
    
   if(type === "1"){
       
   }
  
   if(type === "2"){
                singleAnswer(str);
   }
  
 
  var time = new Number(data.questionTime);
  
  var click = true;
  var minutes;
   var hour;
 var checkTimeStart = 0;
 var minute = 0;
 var hours = 0;
 var seconds = 60;
 
 if(time > 60){
   minutes = 325 % 60;
  
   hour = 325 / 60;
  
 }
 else{
     minutes = time;
     hour = 0;
 }
 
 
var hrId = document.getElementById("hour");
var minId = document.getElementById("minute");
var secId = document.getElementById("seconds");
 
 function showRemaining(){
 
  if(checkTimeStart >= 1){
        
    }
    else{
        minute = minutes;
        hours = hour;
        
    }
    
    checkTimeStart = 1;
    seconds--;
   
   
  
       $("#hblink").fadeOut("slow");
         $("#mblink").fadeOut("slow");
         
         if( (hours === 0) && (minute <= 5)){
              $("#timeblink").fadeOut("slow");
               $("#timeblink").fadeIn("slow");
         }
   
     if((seconds === 0) && (minute > 0)){
      minute--;
      if(minute < 10){
          minId.innerHTML = "0"+minute; 
      }
      else{
        minId.innerHTML = minute;  
      } 
      
     
      secId.innerHTML = seconds;
      
     seconds = 59;
     
    
   }
   
   if( (minute === 0) && (hours > 0)){
       
       hours--;
       hrId.innerHTML = hours;
       minute = 59;
       minId.innerHTML = minute;
   }
   
   
   if((minute <= 0) && (hours <= 0)  && (seconds <= 0)){
       
       // exam ended
       if( click){
            $("#postExam").trigger("click");
            cancelLogin();
         }
       
        click = false;
        
       
   }

   
   else{
       
       
       
       if(minute < 10){
          minId.innerHTML = "0"+minute; 
      }
      else{
        minId.innerHTML = minute;  
      } 
      if(seconds < 10){
           secId.innerHTML = "0"+seconds;
      }
      else{
      secId.innerHTML = seconds;
      }
        
   }
      $("#hblink").fadeIn("slow");
            $("#mblink").fadeIn("slow");
            
            
            minutesLeft = minute;
            secondsLeft = seconds;
            hoursleft = hours;
 
    
 
 }
 var timer = setInterval(showRemaining,1000);
 }
 
}
          
      
    
}


 function ClickResponse(exam,handler){
     
 }
 
 
 function answer(question,number,answers){
     this.question = question;
     this.number = number;
     this.answer = answers;
 }
 
 
 function cancelLogin(){
    var removeId= sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b?id="+localStorage.getItem("user")+"&course="+localStorage.getItem("activeExam");
    
    var requestUrl = removeId;
      
    try{
        var asyncRequest = new XMLHttpRequest();
        asyncRequest.addEventListener("readystatechange",
        function() {
            parseDatas(asyncRequest); 
        }, false);
        asyncRequest.open( "GET", requestUrl, true );
        asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
        asyncRequest.send(); 
 

       } // end try
    catch ( exception ){
        console.log(exception);
        } // end catch
 


function parseDatas(asyncRequest){

}


}


function showTabs(){
    presentQuestions = 0;
    presentNumbers = 0;
    totalAnswers = [];

    minutesLeft = 0;
   secondsLeft = 0;
    hoursleft = 0;
    $("#nextload").show("slow");
     var data =  localStorage.getItem("detail");
            parseValue(data);
            
            $("#tabHide").show();
          $("#studentPg").show();
            
}
 window.addEventListener("load",start,false);
 
 
window.addEventListener("click",clic,false);