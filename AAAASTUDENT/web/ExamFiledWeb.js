/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

 var ids = [];
 var counter = 0;
 var optionSet = "";

 var allQuestions = [];
var allAnswers = [];
var question ="";
var answer= "";
var matrixAdder = "";
var matrixChecker = [];



var request =sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/admin/set/password";
function start(){
    document.getElementById("assessment").innerHTML = localStorage.getItem("assessment");


                ele = document.getElementById('questions');
   document.getElementById("enterQuestion").addEventListener("click",post,false);
     document.getElementById("tQuestions").addEventListener("click",allQuestionsMethod,false);
    document.getElementById("fileInput").addEventListener("change",valueChange,false);
    
      document.getElementById("applyRow").addEventListener("click",arrangeTable,false);
      document.getElementById("getImage").addEventListener("click",background,false);
      document.getElementById("sendQuestion").addEventListener("click",sendQuestions,false);

optionSet = document.getElementById("optionSetter");
 counter =  localStorage.getItem("option");
 
    switchStatements( localStorage.getItem("type"));
    
    
    getQuestionData();
}

var imageQuest = [];
var answerImage = [];
function sendQuestions(){
   
  var questionAdder =  document.getElementById("imageQuestion").value;
    if(questionAdder == ""){
 
        smallDialog("Please set a question","no question set");
              return;
    }
    
     var row =  document.getElementById("row").value;
  var column =  document.getElementById("column").value;
  
    var string = "#question "+questionAdder +"**"+ table+"**"+answerIma.toString();
  // imageQuest.push(string);
    allQuestions.push(string);
    answerIma ="";
  
  
    smallDialog(string,"question");
    
  
}

function background(){
  var f =  document.getElementById("fileImage").value;
    
    var img = new Image();
   var check = f.split(".jpg");
    img.src= sessionStorage.getItem("URL")+"/AAAACLIENT/ImageRetriever?image="+check[0];
  
   
    document.getElementById("tableBody").setAttribute("style","background-image: url('"+img.src+"'); background-repeat:no-repeat; background-size:cover;");
    
}

var table= "";
function arrangeTable(){
   
  var row =  document.getElementById("row").value;
  var column =  document.getElementById("column").value;
  
 var tabss = document.getElementById("tableBody");
 var strings = "";
 var td= "";
var counter  = 0;
 
 for(var c = 0; c < column; c++){
     td="";
     for(var i = 0; i < row; i++){
         counter++;
       td+="<td  style='border-right: 1px solid black; border-left: 1px solid black; border-top: 1px solid black; border-bottom: 1px solid black;' id='box"+(counter)+"'><sup>"+counter+"</sup></td>";  
     }
     
     strings+="<tr>"+td+"</tr>";
     
 }
 
 
 tabss.innerHTML = strings;
 table = document.getElementById("multimedia").innerHTML;
}


function getQuestionData(){
       
   
   
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


function parseLogss(asyncRequest){

 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object

var data = JSON.parse(asyncRequest.responseText);





var attach = "";
  var startSplit = data.split("[begin]");
  for(var c = 1; c < startSplit.length; c++){
      var midSplit = startSplit[c].split("[middle]");
      var id = "";
      
      for(var i = 0; i < midSplit.length; i++){
           if(i== 0){
            attach+= ' <li>    <a class="dropdown-toggle"  ><i class="icon-folder fg-yellow"></i>'+midSplit[i]+'</a>   <ul class="dropdown-menu" data-show="hover" data-role="dropdown" >   ';
        
                    attach+='  <li><a  id="'+midSplit[i]+'" > <i class="icon-copy fg-cobalt" id="'+midSplit[i]+'"></i>Edit</a></li>'
    +'<li><a   id="'+midSplit[i]+'"  ><i class="icon-remove fg-red"></i>Delete</a></li>'
    +'<li><a   id="'+midSplit[i]+'"  ><i class="icon-redo fg-brown"></i>Rename</a></li>'

        +'<li class="divider"></li>'
+'<li><a href="#"><i class="icon-floppy fg-cobalt"></i>Save</a></li>'
+'<li><a href="#"><i class="icon-upload-2 fg-green"></i>Publish</a></li>'
+'<li class="divider"></li>'
+'<li><a href="#"><i class="icon-link fg-cobalt"></i>Switch Question</a></li>'
+'<li><a href="#"><i class="icon-link-2 fg-green"></i>Parse Question </a></li>'
+'<li><a href="#"><i class="icon-cancel fg-red"></i>Sublink 3</a></li></ul></li>';

          
          
                }
          
          if(i == 1){
            
            
              localStorage.setItem(midSplit[0],midSplit[i]);
              
              var splitQuestion = midSplit[i].split("#question");
             
              
              for(var ii = 0; ii < splitQuestion.length; ii++){
                  
                  var splitOptAns = splitQuestion[ii].split("#");
                  for(var cc = 0; cc < splitOptAns.length; cc++){
                      if(cc == 0){
                 //   attach+='<li class="divider"></li>   <li><a href="#"> <i class="icon-arrow-right fg-cobalt"></i>'+splitOptAns[cc]+'</a></li>  ';      
                    
                            }
                      else{
                              
            
                //      attach+=' <li><a href="#"> <i class="icon-checkmark fg-green"></i>'+splitOptAns[cc].substring(6,splitOptAns[cc].length)+'</a></li> ';    
                      }
                  }
                  
              }
          }
      }
      attach+='</li>';
      
  }
  
 
  
  
  
document.getElementById("arrangeQ").innerHTML = attach;


 }
}
function questionArrange(){
     var string = "<div style='overflow:visible'><ul>";
     for(var c = 0; c < allQuestions.length; c++){
         var seperateAtQuestion = allQuestions[c].split("question");
         
         var seperateatHash = seperateAtQuestion[1].split("#");
         for(var i = 0; i < seperateatHash.length; i++){
             if(i == 0){
        string+="<li>("+(c+1)+")."+seperateatHash[i]+"<i class='icon-help fg-yellow'></i> </li>";         
             }
             else{
                 if(seperateatHash[i].indexOf("answer") != -1){
               string+="<li>"+seperateatHash[i].substring(6,seperateatHash[i].length)+"<i class='icon-checkmark fg-green'></i></li>";      
                 }
                 else{
                       string+="<li>"+seperateatHash[i].substring(6,seperateatHash[i].length)+"<i class='icon-cancel-2 fg-red'></i></li>";      
                }
                }
         }
     }
     string+="</ul></div> ";
     messageBox(string,"question");
}

function allQuestionsMethod(){
    questionArrange();
    return;
    var string = "<ol>";
    for(var c = 0; c < allQuestions.length; c++){
    var splitter = allQuestions[c].split("#question");
    
    for(var i = 0; i < splitter.length; i++){
    
        var splitt = splitter[i].split("#");    
        
        
        for(var ii = 0; ii < splitt.length; ii++){
            if(ii ==0 ){
           string+="<li>"+splitt[ii]+"<ol>";     
            }
            else{
        string+="<li>"+ splitt[i].substring(6,splitt[ii].length)+"</li>";
            }
        }
         string+="</ol></li>";
    }
    }
     string+="</ol>";
     
     
    
}

function switchStatements(caseS){
    
    var set = new arrange();
    
    switch(caseS){
      case "S.R":
         
      set.radio(counter);
           
      break;
      
      case "M.R":
       
       set.checkBox(counter);
       break;
       
       
       case "T.F":
           set.trueOrFale();
        break;
        
        case "B.G":  set.blankGaps();
        break;
        
        case "F.B": set.fillInTheBlanks(counter);
        break;
        
        case "L.S" : set.linkertScale();
            
        break;
        
         case "M.X":  set.matrix(counter);
         break;
         
         case "S.M": set.singleMatching(counter);
         break;
         
         case "S.D":
         break;
         
         case "P.T": set.personalityTest(counter);
         break;
         
         case "T.T": set.timer(counter);
         break;
         
         case "A.T": set.advancedTest(counter);
         break;
         
          case "E.S": set.essay();
         break;
         
        default:
        
        break;
    }
}


 function arrange(web){
   
   
    this.radio = function(count){
   var string = "";
   
   
   
   for(var c = 0; c < count; c++){
   string+='  <tr>   <td><input type="radio" name="jol" id="'+(c+1)+'" data-transform="input-control"  /></td>  <td><textarea id="text'+(c+1)+'" rows="1" cols="40"></textarea></td> </tr>';
    
       
         ids[c] = c+1;
       ids[c + 6] = "text"+(c+1);
        }
        
       
    optionSet.innerHTML = string;
    };
    
    this.checkBox = function(count){
      var string = "";
   
   for(var c = 0; c < count; c++){
   string+='  <tr>   <td><input type="checkbox" id="'+(c+1)+'" data-transform="input-control" data-transform-type="switch" /></td>  <td><textarea id="text'+(c+1)+'" rows="1" cols="40"></textarea></td> </tr>';
          ids[c] = c+1;
       ids[c + 6] = "text"+(c+1);
    
        
        }    
   
   optionSet.innerHTML = string;
    };
    
    this.trueOrFale = function(){
            var string = "";
   
      string+='  <tr>   <td><input type="radio" name="jol" id="1"  data-transform="input-control"  /></td>  <td>True</td> </tr>';
   string+='  <tr>   <td><input type="radio" name="jol" id="2"  data-transform="input-control"  /></td>  <td>False</td> </tr>';
     optionSet.innerHTML = string;
    };
    
    this.blankGaps = function (){
        var string ="";
         string+='  <tr>   <td><span>Answer:</span><textarea id="answerGap" rows="1" cols="28"></textarea></td> </td>  <td><pan>Option:</span><textarea id="gaps" rows="1" cols="28"></textarea></td> </tr>'; 
           optionSet.innerHTML = string;
    };
    
    
    this.fillInTheBlanks = function(count){
        var string="";
        document.getElementById("questArrange").setAttribute("style","display:block");
      var main =  document.getElementById("questArrange");
      document.getElementById("questView").setAttribute("style","display:none;");
        var queSetter ="";
          for(var c = 0; c < count; c++){
 queSetter +=' <textarea id="'+(c+1)+'" rows="1" cols="60"></textarea>';
            string+='  <tr>   <td></td>  <td><textarea id="text'+(c+1)+'" rows="1" cols="40"></textarea></td> </tr>';
          ids[c] = c+1;
       ids[c + 6] = "text"+(c+1);
    
        
        }    
   
   optionSet.innerHTML = string;
    main.innerHTML = queSetter;
    
    };
    
    this.linkertScale = function(){
         var string="";  
         
          string+='  <tr>   <td><input type="radio" name="jol" id="1" data-transform="input-control"  />Strong Agree</td>  <td></td> </tr>';
          string+='  <tr>   <td><input type="radio" name="jol" id="2" data-transform="input-control"  />Agree</td>  <td></td> </tr>';
          string+='  <tr>   <td><input type="radio" name="jol" id="3" data-transform="input-control"  />Neutral</td>  <td></td> </tr>';
          string+='  <tr>   <td><input type="radio" name="jol" id="4" data-transform="input-control"  />Disagree</td>  <td></td> </tr>';
          string+='  <tr>   <td><input type="radio" name="jol" id="5" data-transform="input-control"  />Strongly Disagree</td>  <td></td> </tr>';
         
       
         ids[0] = 1;  ids[1] = 2; ids[2]=3; ids[3]=4; ids[4]=5;
         
            optionSet.innerHTML = string;

    };
    
    this.matrix = function(count){
             var string="";  
            
               for(var c = 0; c < count; c++){
   string+='  <tr>   <td><textarea id="texts'+(c+1)+'" rows="1" cols="30"></textarea></td>  <td><input type="radio" id="'+(c+1)+'" data-transform="input-control" data-transform-type="switch" /></td> <td><textarea id="text'+(c+1)+'" rows="1" cols="30"></textarea></td> </tr>';
          ids[c] = c+1;
       ids[c + 6] = "text"+(c+1);
        ids[c + 12] ="texts"+(c+1);
        
        }    
  
   
   optionSet.innerHTML = string;
    };
    
    this.singleMatching = function(count){
            var string="";  
            
        for(var c = 0; c < count; c++){
   string+='  <tr>   <td><input type="radio" name="jol" id="'+(c+1)+'" data-transform="input-control"  /></td>  <td><textarea id="text'+(c+1)+'" rows="1" cols="40"></textarea></td> </tr>';
    
       
         ids[c] = c+1;
       ids[c + 6] = "text"+(c+1);
        }
        
       
    optionSet.innerHTML = string;
    };
    
  
   this.personalityTest = function(count){
       
     
       var string= "";
        for(var c = 0; c < count; c+=2){
   string+='  <tr>   <td ><textarea id="text'+(c+1)+'" rows="1" cols="34"></textarea></td> <td><textarea id="text'+(c+2)+'" rows="1" cols="34"></textarea></td> </tr>';
    
       
     
       ids[c + 6] = "text"+(c+1);
         ids[(c + 6 + 1)] = "text"+(c+2);
        }
        string+='<tr style="height:30px; border-bottom: 1px solid blue;"><td></td><td></td></tr>';
     string+='<tr >   <td>  <textarea id="leftExample" rows="1" cols="34"></textarea></td><td> <textarea id="rightExample" rows="1" cols="34"></textarea></td>   </tr>';
       
    optionSet.innerHTML = string;
       
       
   };

 this.timer = function(count){
        var string = "";
   
   
   
   for(var c = 0; c < count; c++){
   string+='  <tr>    <td><input type="radio" name="jol" id="'+(c+1)+'" data-transform="input-control"  /><textarea id="text'+(c+1)+'" rows="1" cols="40"></textarea></td> </tr>';
    
       
         ids[c] = c+1;
       ids[c + 6] = "text"+(c+1);
        }
        
        
        string+="<tr><td><span>Time:</span><input type='number' style='width:40px' id='timing'/></td></tr>";
        
       
    optionSet.innerHTML = string;
   };
    
    
    this.advancedTest = function(count){
             var string = "";
   
   
   
   for(var c = 0; c < count; c++){
   string+='  <tr>    <td><input type="radio" name="jol" id="'+(c+1)+'" data-transform="input-control"  /><textarea id="text'+(c+1)+'" rows="1" cols="40"></textarea></td> </tr>';
    
       
         ids[c] = c+1;
       ids[c + 6] = "text"+(c+1);
        }
        
        
        string+="<tr><td><span>Level:</span><input type='number' style='width:40px' id='level'/></td> </tr>";
        
       
    optionSet.innerHTML = string;
    };
    
    this.essay = function(){
      var string ="";  
        optionSet.innerHTML = string;
    };
}


function post(){
  var ans = "";
   switch(localStorage.getItem("type")){
       
       
       
       
       
   case "S.R" : var attach = "#question ";
   
   
   attach += document.getElementById("questView").value;
    var Checktrue = false;
    for(var c = 0; c < counter; c++){
   var option =    document.getElementById(ids[c]).checked;
   if(option){
   Checktrue = true;
   attach+="#answer ";
   ans = ids[c];
   }
   else{
      attach+="#option ";  
   }
   var answer =     document.getElementById(ids[c+6]).value;
   if(answer == ""){
   Checktrue = false;
   }
    else{
        attach+=answer;
    }
    
    }
   
    if(!Checktrue){
        
        return;
    }
    
    
    allQuestions.push(attach);
    allAnswers.push(ans);
    
    document.getElementById("questView").value = "";
     switchStatements( localStorage.getItem("type"));
     smallDialog(allQuestions.toString());
    
    break;
    
    case "M.R": var attach = "#question ";
   
   
   attach += document.getElementById("questView").value;
    var Checktrue = false;
    for(var c = 0; c < counter; c++){
   var option =    document.getElementById(ids[c]).checked;
   if(option){
   Checktrue = true;
   attach+="#answer ";
   ans += ids[c];
   }
   else{
      attach+="#option ";  
   }
   var answer =     document.getElementById(ids[c+6]).value;
   if(answer == ""){
   Checktrue = false;
   }
    else{
        attach+=answer;
    }
    
    }
   
    if(!Checktrue){
        
        return;
    }
    
    
    allQuestions.push(attach);
    allAnswers.push(ans);
    
    document.getElementById("questView").value = "";
     switchStatements( localStorage.getItem("type"));
      smallDialog(allQuestions.toString());
    break;
    
    
    case "T.F" :
        var attach = "#question ";
   
   
   attach += document.getElementById("questView").value;
    var Checktrue = false;
  var trueT=  document.getElementById("1").checked;
     var falseT=  document.getElementById("2").checked;
     if(!trueT  && !falseT){
      return;   
     }
     if(trueT){
         attach+="#answer true #option false";
         ans = 1;
     }
     else{
           attach+="#option true #answer false";
           ans = 2;
     }
     
       allQuestions.push(attach);
      allAnswers.push(ans);
    document.getElementById("questView").value = "";
     switchStatements( localStorage.getItem("type"));
     smallDialog(allQuestions.toString());
      break;
      
      case "B.G":  
          var attach = "#question ";
   
   
   
   
   attach += document.getElementById("questView").value;
   var val = document.getElementById("gaps").value;
   var answerG = document.getElementById("answerGap").value;
   
   if(val == ""){
         smallDialog("No option set");
       return;
   }
   
   if(answerG == ""){
         smallDialog("No answer set");
       return;
   }
   var editFaction = val.split("_");
   var finalString = ""; 
   for(var c = 0; c < editFaction.length; c++){
       
       finalString+= editFaction[c]+",#,";
   }
      var question = attach+" "+finalString;
   attach+= "<"+finalString;
 
  
    allQuestions.push(attach+"***"+answerG);
    allAnswers.push(answerG);
    
    
    document.getElementById("questView").value = "";
    document.getElementById("gaps").value = "";
     switchStatements( localStorage.getItem("type"));
      smallDialog(allQuestions +" Answer: "+answerG);
      
      
  break;
  
  case "F.B" :
      var attach = "#question ";
   
   
   var script ="";
   var  answerArray  = [];
   
  var checkTrue = false;
  var checkFalse = false;
    for(var c = 0; c < counter; c++){
   var option =    document.getElementById(ids[c]).value;
  if(option !== ""){
     attach += option; 
     checkTrue = true;
     script+=option;
  }
   var answer =     document.getElementById(ids[c+6]).value;
   
 
  if(answer != ""){
      script+= "("+answer+")";
     attach+="#<"+answer+">#";
    answerArray.push(answer);
    
      checkFalse = true;
      
      
  }
    
    
    
    }
   
    if(!checkTrue || !checkFalse){
       return;
   }
  
    for(var c = 0; c < counter; c++){
        document.getElementById(ids[c]).value = "";
        document.getElementById(ids[c+6]).value = "";
    }
     
    var ans = "";
    for(var i = 0; i < answerArray.length; i++){
          if(i == 0){
                ans+=answerArray[i]+"("+1+")*"; 
          }
             if(i == 1){
                ans+=answerArray[i]+"("+3+")*"; 
          }
            if(i == 2){
                ans+=answerArray[i]+"("+5+")*"; 
          }
            if(i == 3){
                ans+=answerArray[i]+"("+7+")*"; 
          }
          
            if(i == 4){
                ans+=answerArray[i]+"("+9+")*"; 
          }
          
           if(i == 5){
                ans+=answerArray[i]+"("+11+")*"; 
          }
    }
    
       allQuestions.push(attach);
      
       allAnswers.push(ans);
    
     switchStatements( localStorage.getItem("type"));
     smallDialog(script);
     

   break;
   
   case "L.S" :
       var attach = "#question ";
   
   var ans= "";
   attach += document.getElementById("questView").value;
    var Checktrue = false;
    for(var c = 0; c < 5; c++){
   var option =    document.getElementById(ids[c]).checked;
   if(option){
   Checktrue = true;
   switch(c){
    case 0:attach+="#answer Strongly Agree"; ans = 1;
    break;
    case 1:attach+="#answer Agree"; ans = 2;
    break;
    case 2:attach+="#answer Neutral "; ans = 3;
    break;
    case 3:attach+="#answer Disagree"; ans = 4;
    break;
    case 0:attach+="#answer Strongly Disagree"; ans = 5;
    break;
   }
   
   }
   else{
       switch(c){
    case 0:attach+="#option Strongly Agree";
    break;
    case 1:attach+="#option Agree";
    break;
    case 2:attach+="#option Neutral ";
    break;
    case 3:attach+="#option Disagree";
    break;
    case 0:attach+="#option Strongly Disagree";
    break;
   }
   }
   
    
    }
   
    if(!Checktrue){
        
        return;
    }
    
    
    allQuestions.push(attach);
    allAnswers.push(ans);
    
    document.getElementById("questView").value = "";
     switchStatements( localStorage.getItem("type"));
     smallDialog(allQuestions.toString());
    
    
       
   break;
   
   case "M.X":
          var attach = "#question ";
   
   var ans = "";
   attach += document.getElementById("questView").value;
   
      for(var c = 0; c < counter; c++){
          if(document.getElementById(ids[c]).checked){
          attach += "#option "+document.getElementById(ids[c+12]).value +" "+matrixAdder;
      ans+="("+(c+1)+")*"+ document.getElementById(ids[c+12]).value;
          }
      else{
                    smallDialog("Please select all options");
          return;
      }
      }
      
     allQuestions.push(attach);
  
    
    allAnswers.push(ans);
    document.getElementById("questView").value = "";
     switchStatements( localStorage.getItem("type"));
            smallDialog(allQuestions.toString());
    matrixAdder = "";
    
      
 
   break;
   
   case "S.M": 
           var attach = "#question ";
   
   
   
   
   attach += document.getElementById("questView").value;
   var ans= "";
    var Checktrue = false;
    for(var c = 0; c < counter; c++){
   var option =    document.getElementById(ids[c]).checked;
   if(option){
   Checktrue = true;
   attach+="#answer ";
   ans =  document.getElementById(ids[c+6]).value;
   }
   else{
      attach+="#option ";  
   }
   var answer =     document.getElementById(ids[c+6]).value;
   if(answer == ""){
   Checktrue = false;
   }
    else{
        attach+=answer;
    }
    
    }
   
    if(!Checktrue){
        
        return;
    }
    
    
    allQuestions.push(attach);
    allAnswers.push(ans);
    
    document.getElementById("questView").value = "";
     switchStatements( localStorage.getItem("type"));
     smallDialog(allQuestions.toString());
    
   
       break;
       
        case "P.T":
             var attach = "#question ";
   
   
   attach += document.getElementById("questView").value;
    var Checktrue = true;
    for(var c = 0; c < counter; c+=2){


if( document.getElementById(ids[c+6]).value == "" || document.getElementById(ids[(c+6+1)]).value == "" ){
    Checktrue = false;
}
attach += "#option"+    document.getElementById(ids[c+6]).value;
attach += "#option"+    document.getElementById(ids[(c+6+1)]).value;
   
    
    }
   
 
    if( document.getElementById("leftExample").value == "" || document.getElementById("rightExample").value == "" ){
    Checktrue = false;
}


   if(!Checktrue){
        smallDialog("Questions not set properly"); 
        return;
    }
 attach+="#category"+   document.getElementById("leftExample").value;
   attach+="#category"+   document.getElementById("rightExample").value;
     
     
     
    
    allQuestions.push(attach);
    
    document.getElementById("questView").value = "";
     switchStatements( localStorage.getItem("type"));
     smallDialog(allQuestions.toString());
    
        
            break;
            
            
            
                 
   case "T.T" : var attach = "#question ";
   
   
   attach += document.getElementById("questView").value;
   var ans = "";
    var Checktrue = false;
    for(var c = 0; c < counter; c++){
   var option =    document.getElementById(ids[c]).checked;
   if(option){
   Checktrue = true;
   attach+="#answer ";
   ans = ids[c];
   }
   else{
      attach+="#option ";  
   }
   var answer =     document.getElementById(ids[c+6]).value;
   if(answer == ""){
   Checktrue = false;
   }
    else{
        attach+=answer;
    }
    
    }
   
    if(!Checktrue){
        
        return;
    }
    
 var timer =   document.getElementById("timing").value;
    if(timer < 1){
         smallDialog("No timer set"); 
        return;
    }
    
    attach+="#time:"+timer;
    
    allQuestions.push(attach);
    allAnswers.push(ans);
    document.getElementById("questView").value = "";
     switchStatements( localStorage.getItem("type"));
     smallDialog(allQuestions.toString());
    
    break;
    
    
    
     case "A.T" : var attach = "#question ";
   
   var ans = "";
   attach += document.getElementById("questView").value;
    var Checktrue = false;
    for(var c = 0; c < counter; c++){
   var option =    document.getElementById(ids[c]).checked;
   if(option){
   Checktrue = true;
   attach+="#answer ";
   ans = document.getElementById(ids[c]).checked;
   }
   else{
      attach+="#option ";  
   }
   var answer =     document.getElementById(ids[c+6]).value;
   if(answer == ""){
   Checktrue = false;
   }
    else{
        attach+=answer;
    }
    
    }
   
    if(!Checktrue){
        
        return;
    }
    
 var timer =   document.getElementById("level").value;
    if(timer < 1){
         smallDialog("No level set"); 
        return;
    }
    
    attach+="#level:"+timer;
    
    allQuestions.push(attach);
    allAnswers.push(ans);
    
    document.getElementById("questView").value = "";
     switchStatements( localStorage.getItem("type"));
     smallDialog(allQuestions.toString());
    
    break;
}

}



 
function messageBox(htmls,titles)
{
    $.Dialog({
        shadow:true,
        overlay:false,
        draggable:true,
        padding:10,
        width:500,
        flat:true,
        title:titles,
        content:htmls
        
    });
}
 
 
 function valueChange(){
     
     smallDialog("<span>"+document.getElementById("fileInput").value+"</span>","file");
 }
 
 
 function smallDialog(htmls,titles)
{
    $.Dialog({
        shadow:true,
        overlay:false,
        draggable:true,
        padding:10,
        width:400,
        flat:true,
        title:titles,
        content:htmls
        
    });
}


function messageBoxes(htmls,titles)
{
    $.Dialog({
        shadow:true,
        overlay:false,
        draggable:true,
        padding:10,
        width:620,
        flat:true,
        title:titles,
        content:htmls
        
    });
}
 var answerIma ="";
 function sending(){
   answerIma += lastid+",";
 }
 var lastid= "";
 function clicked(e){
   
   if(e.target.tagName === "TD"){
    
    
    //   alert(document.getElementById(e.target.id).getAttribute("style"));
      //   document.getElementById(e.target.id).setAttribute("style","background-color:whitesmoke");
   lastid = e.target.id;
         var string ="<div><span>"+e.target.id+"</span></div><div><span><button onClick='sending();'>Accept</button> </span></div>";
         smallDialog(string,"answers");
      
         //answerImage.push(e.target.id);
       return;
   }
   
   
   if(e.target.id.indexOf("_") !== -1){
       
      
       var code = 0;  
         if(e.target.innerHTML.indexOf("Edit") != -1){
             code = 1;
         }
         
          if(e.target.innerHTML.indexOf("Rename") != -1){
              code = 2;
         }
         
          if(e.target.innerHTML.indexOf("Delete") != -1){
           code = 3;
           
         }
         var send = new handleSide(e.target.id);
           switch(code){
           case 1:  send.edit();
           break;
           case 2:alert("rename");
           break;
           case 3:alert("delete");
           break;
               default:
        
        break;
     }
           }
           
           
           if(e.target.tagName === "INPUT"){
          
         if(e.target.type === "radio"){
           if( localStorage.getItem("type") === "M.X"){
              
             
              if(!document.getElementById("text"+e.target.id).value == ""){
              
               if(matrixAdder.indexOf(document.getElementById("text"+e.target.id).value) != -1){
                  
                  for(var c = 0; c < matrixChecker.length; c++){
                   if(document.getElementById("text"+e.target.id).value == matrixChecker[c]){
                            smallDialog("These option has been selected before","");
                   return;
                   }   
                  }
                   
               }
                      
                     matrixAdder +="#"+document.getElementById("text"+e.target.id).value;
                          
                          matrixChecker.push(document.getElementById("text"+e.target.id).value);
              
              }
           }
             
         }
           }
         
   }
   
   
   function handleSide(id){
       
       this.edit = function(){
          
            editt(id);
       },
               this.rename  = function(){
           
               };
       
       
   }
    
 
 function editt(id){
   
     var arrange = localStorage.getItem(id).split("#question");
    
     var attach = '<div id="designer" class="carousel " style="height:250px"  data-role="carousel"  >';
   
     for(var c = 1; c < arrange.length; c++){
       
         var arrangeOption = arrange[c].split("#");
         var str = "";
         for(var i = 0; i < arrangeOption.length; i++){
             
             if(i == 0){
              
              
                 str+='<p> '+ arrangeOption[i]+'</p>';
            //   document.getElementById("t"+c).innerHTML = '<p> '+ arrangeOption[i]+'</p>';
             }
             else
                 {
                     str+='<p> <input type="radio"/> '+arrangeOption[i].substring(6,arrangeOption[i].length)+'</p>';
                  document.getElementById("t"+c).innerHTML = str;
             }
         }
       
     }
     
  
 
var idSplit= id.split("_");

 
 var real = idSplit[idSplit.length - 1].split(".jols");
 alert(real[0]);
   switch(real[0]){
    case "S.R":  singleResponse(localStorage.getItem(id)) ;// singleResponse(localStorage.getItem(id));
    break;
    case "M.R": multipleResponse(localStorage.getItem(id));
    break;
    case "F.B": fillInTheBlank(localStorage.getItem(id));
    break;
    case "L.S": singleResponse(localStorage.getItem(id));
    break;
    case "B.G": 
    break;
    case "A.E":
    break;
      case "S.M": surveyMatrix(localStorage.getItem(id));
      break;
    case "D.D":
    break;
     case "T.F":  singleResponse(localStorage.getItem(id)) ;
    break;
   }
 
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 /* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


 
 
 
 
 
 
window.addEventListener("load",start,false);
document.addEventListener("click",clicked,false);