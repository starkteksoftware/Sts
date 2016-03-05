/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var realText = "";
var sendToServer = true;
var questionS = "";
var update = false;



    

function start(){
    
     try{

    $("#test").modal();
    
   var user = localStorage.getItem("user");
   var exam = localStorage.getItem("ExamSet");
   if(user == null || exam == null)
     window.location.assign("index.html");
 
   
   
  
  
  
 $("#name").html(user);
    
      $("#nameB").html(user);
      
      
      document.getElementById("smallImage").src = sessionStorage.getItem("URL")+"/AAAACLIENT/ImageRetriever?image="+user;
  
  document.getElementById("fullImage").src = sessionStorage.getItem("URL")+"/AAAACLIENT/ImageRetriever?image="+user;
  
  
  $("#fileTab").click(function (){
        filesHelper();
  });
  
  
  
  $("#calc").click(function (){
      $("#calculator").modal();
  })
  
  $("#lockScreen").click(function (e){
      e.stopPropagation();
      
      $("#screenLock").click(function (){
          
          window.location.assign("LockScreen.html");
           
      })
      
  })
   
  $("#lock").click( function (){
      
      $("#lockScreen").modal();
  })
  
  $("#fullS").click(function (){
      
      $("#menu_toggle").trigger("click");
      
  })
  
  $("#logout2").click(function (){
      $("#logout").trigger("click");
      
  })
  $("#logout").click(function (){
      
      localStorage.clear();
       window.location.assign("index.html");
      
      
  })
       
    $("#examColumn").html(localStorage.getItem("ExamSet"));
     
    $("#newExam").click( function (e){
        e.stopPropagation();
        
        $("#examCreate").click( function (){
            var sub = document.getElementById("subjectId").value;
            var type = document.getElementById("typeId").value;
            
            if( sub == null || sub.length <=1){
              new PNotify({
                                title: 'Subject Error',
                                text: 'Type in a valid subject name',
                                
                                type: 'error'
                            }); return;    
            }
             
            
            $("#closeBox").trigger("click");
              localStorage.setItem("ExamSet",sub) ;
       localStorage.setItem("ExamType",type);
         $("#examColumn").html(localStorage.getItem("ExamSet"));
       clear();
      
      
        })
    })
    
    $("#newExams").click( function (){
        
        document.getElementById("user").value = localStorage.getItem("user");
        
        
          $("#newExam").modal();
    })
    
    
    
    $("#upload").click(function(e){
       
        e.stopPropagation();
       
    
    $("#publish").click( function (){
        
        
       
        
            previewForm();
           
       var question = questionS;
       
       if(!sendToServer)
         return;
     
       
       var table = realText;
     
       
       var subjectName= localStorage.getItem("ExamSet") ;
      var type = localStorage.getItem("ExamType");
      
      
      var author =  localStorage.getItem("user");
      
  document.getElementById("subject").value = subjectName;
   document.getElementById("author").value = author;
    document.getElementById("typeSrver").value = type;
     document.getElementById("question").value = questionS;
      document.getElementById("table").value = realText;
       document.getElementById("url").value = sessionStorage.getItem("URL")+"StsTestingjava/CreateExam.html?q=Published";
       document.getElementById("update").value = update;
           document.getElementById("formSubject").action = getAction();
               
                 function getAction(){
    
    
                return sessionStorage.getItem("URL")+"/AAAACLIENT/QuetionSetter";
                
    
}
               document.getElementById("formSubject").submit();
        return;
          try
          
 {
     
    
    var  requestUrl = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/admin/set/password?status=11&subject="+subjectName+"&author="+author+"&type="+type+"&question="+questionS.toString();//'&table='+realText;
      
   
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseLogs(asyncRequest);  //callBack( asyncRequest );
 }, false);
     
    asyncRequest.open( "POST", requestUrl, true );
 asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
 asyncRequest.send(); // send request
 

 } // end try
 catch ( exception )
 {
 console.log ( exception);
 
 } // end catch
 


    

 
 
 
 function parseLogs( asyncRequest )
 {
   
 // if request has completed successfully, process the response
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object

 var data = JSON.parse(asyncRequest.responseText);
 
 
         new PNotify({
                                title: 'Question Published',
                                text: 'Successfully published to the database',
                                
                                type: 'success'
                            }); 
 }
 }
      
      
      
    })
    
    
    })
        
    
    
    
    
    $("#uploadQuestion").click( function (){
        
         if(localStorage.getItem("ExamSet") !== null ){
       document.getElementById("subjectName").value =" "+ localStorage.getItem("ExamSet") ;
    document.getElementById("type").value =" "+ localStorage.getItem("ExamType");
      document.getElementById("authorName").value =" "+ localStorage.getItem("user");
    }
    else{
        new PNotify({
                                title: 'Exam Publish',
                                text: 'Exam name not valid',
                                type: 'error'
                            }); return;
                           
    }
        
        
        $("#upload").modal();
        
    })
    
    
    
    
    
    
    
 $("#addExams").click(function (){
     
      
         
          $("#aE").click(function(e){
               //e.preventDefault();
            e.stopPropagation();
        })
         
         
         
                      
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
  
   
  
  $("#aE").modal();
  
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
                                type: 'warning'
                            }); return;
                           
 }
 if(duration === null || duration.length === 0){
    new PNotify({
                                title: 'Duration Error',
                                text: 'Enter a valid duration',
                                type: 'warning'
                            });return;
 }
 
 
 if(time === null || time.length === 0){
    new PNotify({
                                title: 'Time Error',
                                text: 'Enter a valid time',
                                type: 'warning'
                            });return;
 }
 
 
    if(scheduleDate === null ||scheduleDate.length === 0){
    new PNotify({
                                title: 'Date Error!',
                                text: 'Enter a valid Date e.g  31/01/1999',
                                type: 'warning'
                            });return;
 }
 
 if(amo === null || amo.length === 0){
    new PNotify({
                                title: 'Amount error!',
                                text: 'Enter the amount of questions\n you want posted to candidates',
                                type: 'warning'
                            }); return;
 }
 
 
    if(feedback=== null || feedback.length === 0){
     new PNotify({
                                title: 'Feed Back Error!',
                                text: 'Enter a feedback.',
                                type: 'warning'
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
           
             
           
           
           
           
        
         
     
     
     
 })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    $("#getQuestions").click( function (){
        
        $("#test").modal();
        
        try{
        var request = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/admin/set/password";
     
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseLogss(asyncRequest);  //callBack( asyncRequest );
 }, false);
    asyncRequest.open( "GET",request, true );
 asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
 asyncRequest.send(); // send request
 
        }
        catch(exception){
            console.log(exception);
            
        }



function parseLogss(asyncRequest){

 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 ){
 // convert the JSON string to an Object

  var data = JSON.parse(asyncRequest.responseText);
  
   var beginning = data.split("[begin]");
   var begLength = beginning.length;
   var table = document.getElementById("examTableBody");
   var saveExamsArray = [];
   var remainder= Math.floor(begLength/ 5);
   
    
   var stri = "";
      for(var ii = 0; ii <= remainder; ii++){
          stri+='<button class="btn jol btn-info" type="button">'+(ii + 1)+'</button>'
         }
            $("#examPg").html(stri);
            
            $(".jol").click( function (e){
                $(".jol").removeClass("active");
                 
                 
                  
                   var val = parseInt(e.target.innerHTML) *5;
                   var tempTable = "";
                   var c = val - 5;
                    if(c== 0)
                        c=1;
                    
                     for( c; c < val; c++){
                          if(beginning[c] === undefined)
                                break;
                            
                     
  
    
             var split = beginning[c].split("[middle]");
               split[0];  //usually the subject;
                split[1];  //usually the question
             
                 split[2];  //usually the date
                split[3];  //usually the author
                  split[4]; // ususally type
                var store = new storeExams(split[0],split[1],split[2],split[3],split[4]);
                 saveExamsArray[c] = store;
               
                tempTable +="<tr><td>"+c+"</td>   <td>"+split[0]+"</td>  <td>"+split[2]+"</td>  <td>"+split[3]+"</td>  <td>"+split[4]+"</td>  <td><a class='btn'> <i id='"+c+"' class='fa fa-edit'></i></a> <a class='btn'> <i class='fa fa-remove'></i> </a></td></tr>"
               
                 
                  }
                                   table.innerHTML = tempTable;
        
                    
                      
        $(".fa-edit").click(function(e){
       
               update = true;
               localStorage.setItem("ExamType",saveExamsArray[e.target.id].type);
                localStorage.setItem("ExamSet",saveExamsArray[e.target.id].examName)
                 $("#examColumn").html(localStorage.getItem("ExamSet"));
                 var data = saveExamsArray[e.target.id].questions;
         
            
          if(saveExamsArray[e.target.id].type <= "2"){
            data   = search('#option ','<input type="radio" />');
            data =search('#answer ','<input checked="checked" type="radio" />');
            data =search('#question ','<hr />');
         
    
            }
            
             
               if(saveExamsArray[e.target.id].type == "3"){
         
          data   = search('#option ','<input type="checkbox" />');
          data =search('#answer ','<input checked="checked" type="checkbox" />');
           data =search('#question ','<hr />');
            
       
            }
             if(saveExamsArray[e.target.id].type == "7"){
            data   = search('#option ','<input type="radio" />');
            data =search('#answer ','<input checked="checked" type="radio" />');
            data =search('#question ','<hr />');
         
    
            }
             
          
            var editorElement = CKEDITOR.instances.editor;
     		editorElement.setData(
				data
			);
                  $("#closeView").trigger("click");    
         
         
         function search(search,replacement){
          var target = data;
     
        return target.split(search).join(replacement);
    }
           
             
          
        })
             
                
            })
            
        
        
         var tempTable = "";
  
        for( var c = 1; c < 5; c++){
           var split = beginning[c].split("[middle]");
               split[0];  //usually the subject;
               split[1];  //usually the question
             
                split[2];  //usually the date
                split[3];  //usually the author
                 split[4]; // ususally type
                var store = new storeExams(split[0],split[1],split[2],split[3],split[4]);
                 saveExamsArray[c] = store;
               
                tempTable +="<tr><td>"+c+"</td>   <td>"+split[0]+"</td>  <td>"+split[2]+"</td>  <td>"+split[3]+"</td>  <td>"+split[4]+"</td>  <td><a class='btn'> <i id='"+c+"' class='fa fa-edit'></i></a> <a class='btn'> <i class='fa fa-remove'></i> </a></td></tr>"
               
                  
                
        }
        
        table.innerHTML = tempTable;
       
        
        $(".fa-edit").click(function(e){
         //   alert(  saveExamsArray[e.target.id].questions);
         
               update = true;
               localStorage.setItem("ExamType",saveExamsArray[e.target.id].type);
                localStorage.setItem("ExamSet",saveExamsArray[e.target.id].examName)
                 $("#examColumn").html(localStorage.getItem("ExamSet"));
                 var data = saveExamsArray[e.target.id].questions;
         
            
          if(saveExamsArray[e.target.id].type <= "2"){
            data   = search('#option ','<input type="radio" />');
            data =search('#answer ','<input checked="checked" type="radio" />');
            data =search('#question ','<hr />');
         
    
            }
            
             
               if(saveExamsArray[e.target.id].type == "3"){
         
          data   = search('#option ','<input type="checkbox" />');
          data =search('#answer ','<input checked="checked" type="checkbox" />');
           data =search('#question ','<hr />');
            
       
            }
             
                if(saveExamsArray[e.target.id].type == "7"){
            data   = search('#option ','<input type="radio" />');
            data =search('#answer ','<input checked="checked" type="radio" />');
            data =search('#question ','<hr />');
         
    
            }
          
            var editorElement = CKEDITOR.instances.editor;
     		editorElement.setData(
				data
			);
                  $("#closeView").trigger("click");    
         
         
         function search(search,replacement){
          var target = data;
     
        return target.split(search).join(replacement);
    }
            
        })
        
     
     $("#closeMode").trigger("click");
     
 
$("#exams").modal();


 }
 }
 
 
 
 
 
 
 
 
 
       
 
 
 
 
 function storeExams(examName,questions,date,author,type){
     this.examName = examName,
     this.questions = questions,
     this.date = date,
     this.author = author,
     this.type = type;
     
 }

    })
    
    
   $("#closeMode").trigger("click");
     }
     catch(exc){
         console.log(exc);
     }

}


function cl (e){
   e.stopPropagation();
   
   
 /*
   alert($("div.editor").val)
    alert($("div#editor").html())
    
   var v = CKEDITOR.instances.editor; //editable.innerHTML;
   //
   //
   //big_info.getData();
   console.log(v);
    alert($(".cke_editable.cke_editable_themed.cke_contents_ltr.cke_show_borders").innerHTML);
   
   alert(CKEDITOR.instances.editor.editable.innerHTML)
   
   */
   
   
  // alert(localStorage.getItem())
  
    if(e.target.className == "cke_button_icon cke_button__save_icon"){
    
        
        
         var data = CKEDITOR.instances.editor.getData();
         var movememt = data;
         var pagination = "";
      
         var parse = data.split("<hr />");
         var length = parse.length;
           
       
       
        if(localStorage.getItem("ExamType") <= 2){
           for(var c = 0; c < length; c++){
             pagination += '<button class="btn dims id="'+c+'" btn-info" type="button">'+(c + 1)+'</button>'
   if(parse[c].indexOf('<input type="radio" />') !== -1  && parse[c].indexOf('<input checked="checked" type="radio" />') !== -1 ){
              }
             else{
                   if(update){
                    
                 if(c == "0")
                   continue;
                       }
                 sendToServer = false;
                 
                 
                    var  error = "<p></p> "+parse[c ];
                     $("#error").html("Error setting question at number "+(c + 1));
                    
                       $("#questionPanel").html(error +" <p>No answer or option");
                   
                      $("#questionShow").modal();
                       $("#questionShow").click( function (e){
                       e.stopPropagation();
                 })
                   return;
             }
      
            }
          data  = search('<input type="radio" />','#option ');
           data =search('<input checked="checked" type="radio" />','#answer ');
           data =search('<hr />','#question ');
         
         
        }
       
       
         if(localStorage.getItem("ExamType") == 3){
        for(var c = 0; c < length; c++){
             pagination += '<button class="btn dims btn-info" id="'+c+'" type="button">'+(c + 1)+'</button>';
   if(parse[c].indexOf('<input type="checkbox" />') !== -1  && parse[c].indexOf('<input checked="checked" type="checkbox" />') !== -1 ){
                 
             }
             else{
                   if(update){
                    
                 if(c == "0")
                   continue;
                       }
                 sendToServer = false;
                   var  error = "<p></p> "+parse[c ];
                    $("#error").html("Error setting question at number "+(c + 1) );
                    
                       $("#questionPanel").html(error +" <p>No answer or option");
                   
                      $("#questionShow").modal();
                       $("#questionShow").click( function (e){
                       e.stopPropagation();
                       
                  
                       
                 })
                   return;
             }
      
            }
      
          
          data   = search('<input type="checkbox" />','#option ');
          data =search('<input checked="checked" type="checkbox" />','#answer ');
           data =search('<hr />','#question ');
          
       
        }
        
        if(localStorage.getItem("ExamType") == 4){
            
              for(var c = 0; c < length; c++){
             pagination += '<button class="btn dims btn-info" id="'+c+'" type="button">'+(c + 1)+'</button>';
               var split = parse[c].split("<input type='type' ");
                for(var i = 0; i < split.length; i++){
                   if(split[i].indexOf('value') !== -1){
                 
                  }
             else{
                   if(update){
                    
                 if(c == "0")
                   continue;
                       }
                 sendToServer = false;
                   var  error = "<p></p> "+parse[c ];
                    $("#error").html("Error setting question at number "+(c + 1) );
                    
                       $("#questionPanel").html(error +" <p>No answer or option");
                   
                      $("#questionShow").modal();
                       $("#questionShow").click( function (e){
                       e.stopPropagation();
                       
                  
                       
                 })
                   return;
                 
                    }   
                }
              
            
        }
        }
        
        
         if(localStorage.getItem("ExamType") == 5){
            
              for(var c = 0; c < length; c++){
             pagination += '<button class="btn dims btn-info" id="'+c+'" type="button">'+(c + 1)+'</button>';
              if(parse[c].indexOf("<u>") !== -1){
                  
                }
             else{
                   if(update){
                    
                 if(c == "0")
                   continue;
                       }
                 sendToServer = false;
                   var  error = "<p></p> "+parse[c ];
                    $("#error").html("Error setting question at number "+c  );
                    
                       $("#questionPanel").html(error +" <p>No answer or option");
                   
                      $("#questionShow").modal();
                       $("#questionShow").click( function (e){
                       e.stopPropagation();
                       
                  
                       
                 })
                   return;
                 
                    }   
                }
              
            
        } 
        
        
         if(localStorage.getItem("ExamType") == 6){
            
              for(var c = 0; c < length; c++){
             pagination += '<button class="btn dims btn-info" id="'+c+'" type="button">'+(c + 1)+'</button>';
             
                }
              
            
        } 
        
         
        if(localStorage.getItem("ExamType") == 7){
           for(var c = 0; c < length; c++){
             pagination += '<button class="btn dims id="'+c+'" btn-info" type="button">'+(c + 1)+'</button>'
   if(parse[c].indexOf('<input type="radio" />') !== -1  && parse[c].indexOf('<input checked="checked" type="radio" />') !== -1 ){
              }
             else{
                   if(update){
                    
                 if(c == "0")
                   continue;
                       }
                 sendToServer = false;
                 
                 
                    var  error = "<p></p> "+parse[c ];
                     $("#error").html("Error setting question at number "+(c + 1));
                    
                       $("#questionPanel").html(error +" <p>No answer or option");
                   
                      $("#questionShow").modal();
                       $("#questionShow").click( function (e){
                       e.stopPropagation();
                 })
                   return;
             }
      
            }
          data  = search('<input type="radio" />','#option ');
           data =search('<input checked="checked" type="radio" />','#answer ');
           data =search('<hr />','#question ');
         
         
        }
         
        
         
        
        
        
       
               if(!update)
        questionS = "#question "+data;
    else{
             questionS = data;
         
           }
           
            
           $("#qPg").html(pagination);
           $("#ques").html(movememt.split("<hr />")[0]);
                $(".dims").click( function (e){
                             $(".dims").removeClass("active");
                             
                            
                               $("#ques").html(movememt.split("<hr />")[parseInt(e.target.id)]);
                       })
                       
           
           $("#previewExam").modal();
           $("#previewExam").click(function (){
               e.stopPropagation();
                
           })
         
       
       
    function search(search,replacement){
     var target = data;
     
     return target.split(search).join(replacement);

           }
    }
    
    
    
}


function previewForm(){
  sendToServer = true;
  var data = CKEDITOR.instances.editor.getData();
     var movememt = data;
     realText = data;
      
       
        if(localStorage.getItem("ExamType") <= 2){
         
            var pagination = "";
         var value = "";
         
         var parse = data.split("<hr />");
         var length = parse.length;
         for(var c = 0; c < length; c++){
             pagination += '<button class="btn dims btn-info" id="'+c+'" type="button">'+(c + 1)+'</button>'
   if(parse[c].indexOf('<input type="radio" />') !== -1  && parse[c].indexOf('<input checked="checked" type="radio" />') !== -1 ){
                
             }
             else{
                   if(update){
                    
                 if(c == "0")
                   continue;
                       }
                 sendToServer = false;
                   var  error = "<p></p> "+parse[c ];
                    $("#error").html("Error setting question at number "+(c + 1)  );
                    
                       $("#questionPanel").html(error +" <p>No answer or option");
                   
                      $("#questionShow").modal();
                       $("#questionShow").click( function (e){
                       e.stopPropagation();
                       
                  
                       
                 })
                   return;
             }
      
            }
      
          
          data   = search('<input type="radio" />','#option ');
          data =search('<input checked="checked" type="radio" />','#answer ');
           data =search('<hr />','#question ');
          
          if(!update)
        questionS = "#question "+data;
    else{
         questionS = data;
         
    }
        
        
        
        
            
           $("#qPg").html(pagination);
           $("#ques").html(movememt.split("<hr />")[0]);
                $(".dims").click( function (e){
                             $(".dims").removeClass("active");
                             
                               $("#ques").html(movememt.split("<hr />")[parseInt(e.target.id)]);
                       })
                       
           
           $("#previewExam").modal();
           $("#previewExam").click(function (){
               e.stopPropagation();
                
           })
           $(".dims").click( function(){
               
                
               
           })
          
        }
        
        
        
        
          if(localStorage.getItem("ExamType") == 3){
         
            var pagination = "";
         var value = "";
         
         var parse = data.split("<hr />");
         var length = parse.length;
         for(var c = 0; c < length; c++){
             pagination += '<button class="btn dims id="'+c+'" btn-info" type="button">'+(c + 1)+'</button>'
   if(parse[c].indexOf('<input type="checkbox" />') !== -1  && parse[c].indexOf('<input checked="checked" type="checkbox" />') !== -1 ){
                
             }
             else{
                   if(update){
                     alert(c);
                 if(c == "0")
                   continue;
                       }
                 sendToServer = false;
                   var  error = "<p></p> "+parse[c ];
                    $("#error").html("Error setting question at number "+(c + 1) );
                    
                       $("#questionPanel").html(error +" <p>No answer or option");
                   
                      $("#questionShow").modal();
                       $("#questionShow").click( function (e){
                       e.stopPropagation();
                       
                  
                       
                 })
                   return;
             }
      
            }
      
          
          data   = search('<input type="checkbox" />','#option ');
          data =search('<input checked="checked" type="checkbox" />','#answer ');
           data =search('<hr />','#question ');
          
          if(!update)
        questionS = "#question "+data;
    else{
         questionS = data;
         
    }
        
        
        
        
            
           $("#qPg").html(pagination);
           $("#ques").html(movememt.split("<hr />")[0]);
                $(".dims").click( function (e){
                             $(".dims").removeClass("active");
                             
                               $("#ques").html(movememt.split("<hr />")[parseInt(e.target.id)]);
                       })
                       
           
           $("#previewExam").modal();
           $("#previewExam").click(function (){
               e.stopPropagation();
                
           })
         
          
        }
        
         
       
       
    function search(search,replacement){
     var target = data;
     
     return target.split(search).join(replacement);

           }
    
    return data;
}


function clear(){
      var editorElement = CKEDITOR.instances.editor;
           
		// :(((
		
			editorElement.setData(
				
			);
}

function filesHelper(){
   $("#showFiles").click(function (){
       
         $("#test").modal();
   
       $("#uploadedData").html(showLog());
       
       
       function showLog(){
     var text ='<!DOCTYPE html> <html> <head>    <script src="jscustom/ServerData.js" type="text/javascript"></script> </head> <body>'
      +'     <div class="span6">'
                    +'      <div>'
            +'<form id="forms" method="POST" enctype="multipart/form-data">'
               +'        <input type="file" class="" id="files" placeholder="upload file to server" name="file"/> <input type="button" class="btn btn-success left" value="Post File" onClick="uploadData();" id="uploadeFile"/>  &nbsp;'
                           +'</form>'
                   
                      +'    </div>'
                      +'    <div class="clear"></div>'
                      +'    <div id="examStudentHolder" class="vertical-scrolls">'
                           +'   <table class="table striped bordered">'
                           +'       <thead>'
                              +'        <tr class="success fg-white">'
                                +'          <th>S/N</th>'
                                  +'        <th>File</th>'
                            +'             <th>Size</th>'
                                  +'        <th>Date Created</th>'
                                //   +'       <th>Admin </th>'
                                   +'       <th>Actions</th>'
                                  +'    </tr>'
                                +' </thead>'
                             +'     <tbody class="hovered" id="tableBodying">'
                               
                                   
                                    
                            +'      </tbody>'
                          +'    </table>'
                       +'     <div>'
           +' <div class="btn-group" data-toggle="buttons">'
 +' <div class="btn-group" data-toggle="buttons">'
                                            
                                   +'           <div class="btn-group" id="serverPg">'
                                  
                                      +'        </div>'
                                 +'         </div>'
   +'     </div>'

                 +'     </div>'
                  +'    <!--stats-->'
                   
 +' </body>'
 +' </html>';
  
    
   
   
    
  return text;
}
       
       
   })
   
   
   
   
   
   
   
   $("#showFiles").trigger("click");
   
   
   
   $("#showMultiple").click(function (){
       
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
          // Render thumbnail.
          var span = document.createElement('span');
          span.innerHTML = ['<img class="thumb" style=" height: 75px; border: 1px solid #000;   margin: 10px 5px 0 0;" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
                        
          document.getElementById('list').insertBefore(span, null);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }

  document.getElementById('filesMultiple').addEventListener('change', handleFileSelect, false);
        
   })
   
    
    
    $("#singleFile").click(function (){
 var reader;
  var progress = document.querySelector('.percent');

  function abortRead() {
    reader.abort();
  }

  function errorHandler(evt) {
    switch(evt.target.error.code) {
      case evt.target.error.NOT_FOUND_ERR:
        alert('File Not Found!');
        break;
      case evt.target.error.NOT_READABLE_ERR:
        alert('File is not readable');
        break;
      case evt.target.error.ABORT_ERR:
        break; // noop
      default:
        alert('An error occurred reading this file.');
    };
  }

  function updateProgress(evt) {
    // evt is an ProgressEvent.
    if (evt.lengthComputable) {
      var percentLoaded = Math.round((evt.loaded / evt.total) * 100);
      // Increase the progress bar length.
      if (percentLoaded < 100) {
        progress.style.width = percentLoaded + '%';
        progress.textContent = percentLoaded + '%';
      }
    }
  }

  function handleFileSelect(evt) {
    // Reset progress indicator on new file selection.
    progress.style.width = '0%';
    progress.textContent = '0%';

    reader = new FileReader();
    reader.onerror = errorHandler;
    reader.onprogress = updateProgress;
    reader.onabort = function(e) {
      alert('File read cancelled');
    };
    reader.onloadstart = function(e) {
       
    //  document.getElementById('progress_bar').className = ' loading';
      
    };
    reader.onload = function(e) {
      // Ensure that the progress bar displays 100% at the end.
      progress.style.width = '100%';
      progress.textContent = '100%';
      setTimeout("document.getElementById('progress_bar').className='';", 2000);
    }

    // Read in the image file as a binary string.
    reader.readAsBinaryString(evt.target.files[0]);
  }

  document.getElementById('fileSingle').addEventListener('change', handleFileSelect, false);
        
        
    })
    
    
    
    
    $("#dragAndDrop").click( function (){
        
         function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files; // FileList object.

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                  '</li>');
    }
    document.getElementById('lister').innerHTML = '<ul>' + output.join('') + '</ul>';
  }

  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }

  // Setup the dnd listeners.
  var dropZone = document.getElementById('drop_zone');
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('drop', handleFileSelect, false);
         
   
   
    })
    
   
   
   
}
window.addEventListener("load",start,false);
document.addEventListener("click",cl,false);