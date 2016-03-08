/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function multipleAnswer(questions){
    
    
    var showQ = document.getElementById("questionSet");
     var question = questions.split("#question");
     var paginateDiv = document.getElementById("pagination");
     var addPagination ="";
     var questionCount = 0;
     
     
     var pageNumberReference = document.getElementById("questionNumber");
   
    for(var c = 0; c < question.length; c++){
             var presentAnswer = new answer((c),"",[])
             totalAnswers.push(presentAnswer);
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
          if(totalAnswers[questionCount].answer !== 0){
              
              
                  var equal = false;
               for(var l in totalAnswers[questionCount].answer){
                   
                 //  alert(" "+totalAnswers[questionCount].answer[l] +" is equal to "+i);
              if(i == totalAnswers[questionCount].answer[l]) 
                 equal = true;
             continue;
                }
                
               if(equal)
                      keepOptions +='<tr><td> <input name="starksMultiple" type="checkbox" id="'+i+'" checked class="starksMultiple"/>  </td>    <td id="'+i+'.." class="starktech"> '+presentQuestion[i].substring(6,presentQuestion[i].length)+ '</td></tr>';
                else
                  keepOptions +='<tr><td> <input name="starksMultiple" type="checkbox" id="'+i+'"  class="starksMultiple"/>  </td>    <td id="'+i+'.." class="starktech"> '+presentQuestion[i].substring(6,presentQuestion[i].length)+ '</td></tr>';
              
                
          }//if the question has not been answered
         
            else{
                     keepOptions +='<tr><td> <input name="starksMultiple" type="checkbox" id="'+i+'"  class="starksMultiple"/>  </td>    <td id="'+i+'.." class="starktech"> '+presentQuestion[i].substring(6,presentQuestion[i].length)+ '</td></tr>';
          }
         
      }
      
      document.getElementById("options").innerHTML = keepOptions;
      $("#questionsSet").html(presentQuestion[0]);
        
     
      
    })
    
    
    $("#next").click(function(){
        
          if(questionCount == (question.length - 2)){
            $("#postExam").show();
            
          }
          
        
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
           if(totalAnswers[questionCount].answer !== 0){
              
              
                  var equal = false;
               for(var l in totalAnswers[questionCount].answer){
                   
                 //  alert(" "+totalAnswers[questionCount].answer[l] +" is equal to "+i);
              if(i == totalAnswers[questionCount].answer[l]) 
                 equal = true;
             continue;
                }
                
               if(equal)
                      keepOptions +='<tr><td> <input name="starksMultiple" type="checkbox" id="'+i+'" checked class="starksMultiple"/>  </td>    <td id="'+i+'.." class="starktech"> '+presentQuestion[i].substring(6,presentQuestion[i].length)+ '</td></tr>';
                else
                  keepOptions +='<tr><td> <input name="starksMultiple" type="checkbox" id="'+i+'"  class="starksMultiple"/>  </td>    <td id="'+i+'.." class="starktech"> '+presentQuestion[i].substring(6,presentQuestion[i].length)+ '</td></tr>';
              
                
          } //if the question has not been answered
           
            
            else{
                
                     keepOptions +='<tr><td>  <input name="starksMultiple" type="checkbox" id="'+i+'" style=""  class="starksMultiple"/>  </td>    <td id="'+i+'.." class="starktech"> '+presentQuestion[i].substring(6,presentQuestion[i].length)+ '</td></tr>';
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
          
           
           if(totalAnswers[questionCount].answer !== 0){
              
              
                  var equal = false;
               for(var l in totalAnswers[questionCount].answer){
                   
                 //  alert(" "+totalAnswers[questionCount].answer[l] +" is equal to "+i);
              if(i == totalAnswers[questionCount].answer[l]) 
                 equal = true;
             continue;
                }
                
               if(equal)
                      keepOptions +='<tr><td> <input name="starksMultiple" type="checkbox" id="'+i+'" checked class="starksMultiple"/>  </td>    <td id="'+i+'.." class="starktech"> '+presentQuestion[i].substring(6,presentQuestion[i].length)+ '</td></tr>';
                else
                  keepOptions +='<tr><td> <input name="starksMultiple" type="checkbox" id="'+i+'"  class="starksMultiple"/>  </td>    <td id="'+i+'.." class="starktech"> '+presentQuestion[i].substring(6,presentQuestion[i].length)+ '</td></tr>';
              
                
          } //if the question has not been answered
         
            else{
                     keepOptions +='<tr><td> <input name="starksMultiple" type="checkbox" id="'+i+'"  class="starksMultiple"/>  </td>    <td id="'+i+'.." class="starktech"> '+presentQuestion[i].substring(6,presentQuestion[i].length)+ '</td></tr>';
          }
         
      }
       
      document.getElementById("options").innerHTML = keepOptions;
      $("#questionsSet").html(presentQuestion[0]);
       
    });
    
    
    
     
    
    
$("#postExam").click(function (e){
        
        e.stopPropagation();
        $("#startExaminationS").hide();
        
        
 if(showresult){
            var percentage = 0;
            var string = "";
            var complete = true;
            
    
    for (var c = 1; c < question.length; c++){
        var answer = false;
        var presentAnswer = 0;
        var addPercentage = true;
        var split = question[c].split("#");
        for(var i = 0; i < split.length; i++){
            
            if(i == 0){
                if( totalAnswers[c].answer !== undefined && totalAnswers[c].answer !== 0 ){
                            
                    answer = true;
                    presentAnswer = totalAnswers[c].answer;
                    
                }
                else{
                    complete = false;
                    addPercentage = false;
                    
                }
            string +='<div style="border-top:2px solid blue; margin-top:30px;"></div><p style="color:blue;">('+c+').<b>'+split[i]+'</b></p>';
        
            }
            else{
                if(answer){
                    
                       var equal = false;
                       for(var l in totalAnswers[c].answer){
                   
                 //  alert(" "+totalAnswers[questionCount].answer[l] +" is equal to "+i);
                       if(i == totalAnswers[c].answer[l]){ 
                           equal = true;
                         continue;
                            }
                       }
                
                    
                    if( equal){
                        
                       if(split[i].indexOf("option") != -1) {
                        string += "  <p style='background-color:red'><input type='checkbox' checked  id='"+i+"' class='margin5'/>"+split[i].substring(6,split[i].length)+"</p> ";                         
                        addPercentage = false;
                            }
                    else{
                       string += "  <p style=' background-color:green;'><input type='checkbox' checked  id='"+i+"' class='margin5'/>"+split[i].substring(6,split[i].length)+"</p> ";                         
                     }
                     
                 }
                    else{
                             if(split[i].indexOf("option") != -1) {
                        string += "  <p style=' '><input type='checkbox'   id='"+i+"' class='margin5'/>"+split[i].substring(6,split[i].length)+"</p> ";                         
                     }
                    else{
                       string += "  <p style=' background-color:green;'><input type='checkbox'   id='"+i+"' class='margin5'/>"+split[i].substring(6,split[i].length)+"</p> ";                         
                       addPercentage = false;
                            }
                        
                      
                    }
                }
                else{
                   addPercentage = false;
                    if(split[i].indexOf("option") != -1) {
                        string += "  <p style=' '><input type='checkbox'   id='"+i+"' class='margin5'/>"+split[i].substring(6,split[i].length)+"</p> ";                         
                     }
                    else{
                       string += "  <p style=' background-color:green;'><input type='checkbox'   id='"+i+"' class='margin5'/>"+split[i].substring(6,split[i].length)+"</p> ";                         
                     }
                }
            }
            
        }
         
        
        if(addPercentage){
            percentage++;
         }
        
    }
    
    
     
     
    
    var realNumber =  (percentage * 100) / (question.length -1);
    var st = "<p>Your percentage is "+realNumber +" % !!! ";
    var body = document.getElementById("resultsheet");
    
    $("#takeExam").show();
    $("#status").hide();
    $("#subName").html();
    
    
    body.innerHTML = st+ string;
    
   $("#resultShow").modal();
     
    var login = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/student/exam/start/section/exam";
    var requestUrl = login+"?matric="+localStorage.getItem("user")+"&exam="+localStorage.getItem("activeExam")+"&type="+localStorage.getItem("eType")+"&status=result"+"&time="+hoursleft+":"+minutesLeft+":"+secondsLeft+"&score="+realNumber+"&attempt=1&complete="+complete;
    
   // alert(requestUrl);
    
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
