/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


 var lastNumber = 0;
            var textNumber = 0;
              var highlight = false;
            function yes(){
                
                ele = document.getElementById('questions');
            }
            var ele;
            
            
            
          function singleResponse(str) {
              
              
         var quest =  ele;
         var strings = "";
        var splitted = str.split("#question");
        
        for(var c = 0; c < splitted.length; c++){
           var sep = splitted[c].split("#");
           textNumber = sep.length;
           for(var i = 0; i < sep.length; i++){
               if(i == 0){
                   if(c > 0)
                  strings +=  "<div>("+(c)+")."+ ""+sep[i]+"<div>";
               }
               else{
                   if(sep[i].indexOf("answer") != -1){
                     var strs=    sep[i].substring(6,sep[i].length);
                  strings += "&nbsp;<div> <input type='radio' checked /> "+strs+"<div>";  
                       
                   }
                   else{
               var strs=    sep[i].substring(6,sep[i].length);
                  strings += "&nbsp;<div> <input type='radio'/> "+strs+"<div>";  
                   }
               }
           }
           strings+="<div style='border-top: 2px solid red;'></div>";
        }
            quest.innerHTML = strings;  
          }
          
          function multipleResponse(str) {
         var quest =  ele;
        
        
           var strings = "";
        var splitted = str.split("#question");
        
        for(var c = 0; c < splitted.length; c++){
           var sep = splitted[c].split("#");
           textNumber = sep.length;
           for(var i = 0; i < sep.length; i++){
               if(i == 0){
                  if(c > 0)
                strings +=  "<div>("+(c)+")."+ ""+sep[i]+"<div>";
                //  strings += "<div>"+sep[i]+"<div>";
               }
               else{
                   if(sep[i].indexOf("answer") != -1){
                     var strs=    sep[i].substring(6,sep[i].length);
                  strings += "&nbsp;<div> <input type='checkbox' checked /> "+strs+"<div>";   
                 // strings += "<div> <input type='checkbox'/> "+sep[i]+"<div>";  
               }
                else{
               var strs=    sep[i].substring(6,sep[i].length);
                  strings += "&nbsp;<div> <input type='checkbox'/> "+strs+"<div>";  
                   }
           }
        }
        }
            quest.innerHTML = strings;  
          }
          
          var numberAdder = 0;
          function fillInTheBlank(str){
                  var quest =  ele;
                  
        var strings= "<div>("+(++numberAdder)+")."+ ""+str+"<div>";
        
       
            quest.innerHTML += strings; 
            
            numberAdder = numberAdder++;
            
          }
          
          
             var numberAdders = 0;
          function essay(str){
              
                  var quest =  ele;
                  
        var strings= "<div>("+(++numberAdders)+")."+ ""+str+"<div>";
        
       
       
            quest.innerHTML += strings; 
            
            numberAdders = numberAdders++;
            
          }
          function result(str){
                var quest =  ele;
                  quest.innerHTML = str;
                  
                  
          }
          function essayEdit(str){
              
               var quest =  ele;
               var strings = "";
          var splitted = str.split("#question ");    
          for(var c = 1;  c< splitted.length;  c++){
              
          strings+="<div>("+(c )+")."+splitted[c]+"</div>"; 
          
          
          
          }
          quest.innerHTML = strings;
          
          
          
          }
        
          function matrix(str){
              
                 
             var quest =  ele;
             var strings =  str;    
             
                 quest.innerHTML += strings; 
               
                 
          }
          
          function surveyMatrix(str){
                    
             var quest =  ele;
             var strings =  str;    
             
                 quest.innerHTML += strings; 
               
          }
          
          
          function getInnerHTML(){
              
            return ele.innerHTML;
          }
          
          function questionDumpRadio(){
              
         var eles = ele;
        var spl = eles.innerHTML.split(").");
            var length = spl.length;
              eles.innerHTML +="<div>("+length+").</div>";
          }
          
    
          function optionDumpRadio(){
             var eles = ele;
             eles.innerHTML +="&nbsp;<div> <input type='radio'/> </div>";
          }
           
          function answerDumpRadio(){
              var eles = ele;
             eles.innerHTML +="&nbsp;<div> <input type='radio' checked /> </div>";
             
          }
          
              function optionDumpCheck(){
             var eles = ele;
             eles.innerHTML +="&nbsp;<div> <input type='checkbox'/> </div>";
          }
           
          function answerDumpCheck(){
              var eles = ele;
             eles.innerHTML +="&nbsp;<div> <input type='checkbox' checked /> </div>";
             
          }
          
          function optionDumpTrueOrFalse(){
                var eles = ele;
             eles.innerHTML +="&nbsp;<div> <input type='radio'/>True </div><div> <input type='radio'/>False </div>";
          }
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          var clipboard ="";
function unhighlight(){
    
  var eles =  ele;
                               
 var spli = eles.innerHTML.split('<span style="background-color:grey">');
 var strings ="";
 
 for(var c = 0; c < spli.length; c++){
     strings+=spli[c];
     
 }
 var finaString = "";

 
 var splitted = strings.split("</span>");
 
  
 for(var e = 0; e < splitted.length; e++){
     finaString+=splitted[e];
 }
 
 
    eles.innerHTML = finaString;
    
   
    highlight = false;
}
            
            
          function formatDoc() {
  
  
}  


function replaceFirst(str){
     
    highlight = true;
      var spli = str.split("#split"); 
       
  var element = ele;
 
  
   if(element.innerHTML.indexOf(spli[0]) !== -1){
  var split = element.innerHTML.split(spli[0]);
  
  var string ="";
  var found = false;
  for(var c = 0; c < split.length; c++){
      
      if(c === (split.length - 1)){
    string+=split[c];
      }
      else{
          
          if(found){
          string+=split[c]+""+spli[0]+"";  
         
          }
          else{
    string+=split[c]+"<span style='background-color:grey'>"+spli[1]+"</span>";  
       found = true;   }
                    }}
    element.innerHTML = string;
    
   }
}


function replace(str){
    
    highlight = true;
      var spli = str.split("#split"); 
       
  var element = ele;
 
  
   if(element.innerHTML.indexOf(spli[0]) !== -1){
  var split = element.innerHTML.split(spli[0]);
  
  var string ="";
  for(var c = 0; c < split.length; c++){
      
      if(c === (split.length - 1)){
    string+=split[c];
      }
      else{
    string+=split[c]+"<span style='background-color:grey'>"+spli[1]+"</span>";  
  }}
    element.innerHTML = string;
    
    
   }
}

function searchI(str){
    highlight = true;
  
  var element = ele;
 

   if( element.innerHTML.toString().ignoreCase.indexOf(str) !== -1){
  var split = element.innerHTML.split(str);
  
  var string ="";
  for(var c = 0; c < split.length; c++){
      
      if(c === (split.length - 1)){
    string+=split[c];
      }
      else{
    string+=split[c]+"<span style='background-color:grey'>"+str+"</span>";  
  }}
    element.innerHTML = string;
    
   }
   
   
}
 // element.innerHTML.toString().ignoreCase
function search(str){
    highlight = true;
  
  var element = ele;
 

   if(element.innerHTML.indexOf(str) !== -1){
  var split = element.innerHTML.split(str);
  
  var string ="";
  for(var c = 0; c < split.length; c++){
      
      if(c === (split.length - 1)){
    string+=split[c];
      }
      else{
    string+=split[c]+"<span style='background-color:grey'>"+str+"</span>";  
  }}
    element.innerHTML = string;
    
   }
   
   
}
var countss =0;

function insertAudios(){
      countss++;
 
          var body =   ele;
          
         
// body.innerHTML +=  "<video src='try.mp4' controls  preload='auto'> </video>";
  body.innerHTML +="<audio controls> <source id='audio' src='' type='audio/mpeg'> </audio>";  
  
}
var counter = 0;
function insertVideo(){
      
   counter++;
 
          var body =  ele;
          
         
// body.innerHTML +=  "<video src='try.mp4' controls  preload='auto'> </video>";
  body.innerHTML +="<video width='100' height='100' controls> <source id='vid' src='' type='video/mp4'> </video>";  
   
}
function insertImage(){
   
   count++;
 
          var body =   ele;
          
         
// body.innerHTML +=  "<video src='try.mp4' controls  preload='auto'> </video>";
  body.innerHTML +="<img src='' height='50' width='50' id='image1'>";  
   
 
}


function giveId(){
    
    var ele = document.getElementById("questions").innerHTML;
    
  
    var splits = ele.split(">");
    
    var pushs = [];
    for(var c = 0; c < splits.length; c++){
     var index = splits[c].indexOf("=",splits[c].length - 5);
  pushs.push(splits[c].substring(index +2,index + 3));
        }
    var ss ="";
   
    for(var i = 0; i < pushs.length - 1; i++){
   ss+=  document.getElementById(pushs[i].trim()).value+"&nbsp;";
 // ss+=pushs[i].trim();
    }
   
    
      
      
     return ss;
}

var copyText="";
function cut(){
  var bb = document.getSelection();
  copyText = bb.toString();
  var newDev=  ele.innerHTML.toString().replace(copyText.toString(),"");
  ele.innerHTML = newDev;
}


function paste(){

  insertTextAtCursor(copyText.toString());
  
}

function insertTextAtCursor(text) {
    var sel, range, html;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            range.insertNode( document.createTextNode(text) );
        }
    } else if (document.selection && document.selection.createRange) {
        document.selection.createRange().text = text;
    }
}


function copy(){
     var bb = document.getSelection();
 copyText = bb.toString();

}
function bold(){
    document.execCommand("bold",false,null);
   
}

function italic(){
    document.execCommand("italic",false,null);
   
}


function strikeThrough(){
    
      document.execCommand("strikeThrough",false,null);
   
}
function hiliteColor(){
 
      
      document.execCommand("hiliteColor",false,"red");  
}
function indent(){
    
}

function insertHorizontalRule(){
    
}


function insertOrderedList(){
    document.execCommand("insertOrderedList",false,null);
}

function unorderedList(){
    document.execCommand("insertUnorderedList",false,null);
}

function insertParagraph(){
    document.execCommand("insertParagraph",false,null);
    
}

function underline(){
     document.execCommand("underline",false,null);

}

function justifyCenter(){
  document.execCommand("justifyCenter",false,null);
}

function justifyLeft(){
     document.execCommand("justifyLenter",false,null);

}

function justifyFull(){
    document.execCommand("justifyFull",false,null);
}

function justifyRight(){
     document.execCommand("justifyRight",false,null);

}

function outdent(){
       document.execCommand("outdent",false,null);
}


function subscript(){
     document.execCommand("subscript",false,null);

}

function superscript(){
     document.execCommand("superscript",false,null);

}

function insertorderedList(){
   document.execCommand("insertOrderedList",false,null);
  
}

function insertUnorderedList(){
     document.execCommand("insertUnorderedList",false,null);
  
}

function redo(){
     
}


function fontNameSet(str){
    document.execCommand("fontName",false,str);
}


function fontSize(str){
    document.execCommand("fontSize",false,str);
    
}

function heads(str){
     document.execCommand("heading",false,str);
     
}

function fontColor(str){
   
   document.execCommand("foreColor",false,str);
   
  
 
      
   
}

function dash(){
    ele.innerHTML+='_____________';
  
}




function question(){
 // document.execCommand("insertImage",false,'books.jpg');
 
 document.getElementById("questions").innerHTML +="<img id='image' src='' class='imaged'  /> ";
    
}
function option(){
 //   var body =   document.getElementById("body");
 //body.innerHTML +=  "<video src='try.mp4' controls  preload='auto'> </video>";
    
}

function answer(){
//     var body =   document.getElementById("body");
  //   body.innerHTML += "<audio src='CB.mp3' preload='auto' controls> </audio>";
     
     
     
}
function grade(){
 //    var body =   document.getElementById("body");
   //  body.innerHTML +="<br/>#Grade";
     
     
  
  
}

var count = 0;

function insertTextBox(){
   var eles = ele.innerHTML;
   
  var splits =  eles.split("<input type=");
  
  var id = (splits.length+ 1);
    document.getElementById("questions").innerHTML +="<input type='text' id='"+id+"' />";
    
}

totalMark = [];
function sendResult(){
    
    
    return totalMark.toString();
}

function clicked(ev){
  if(highlight){
      unhighlight();
  }
  
  if(ev.target.tagName ==="IMG"){
      ev.target.setAttribute("style","width:130px; height:90px;");
  }
 
 if(ev.target.tagName ==="BUTTON"){
    
        totalMark.push(ev.target.id);
        totalMark.push(ev.target.innerHTML);
        ev.target.setAttribute("style","display:none");
        
        
 }
  
  if(ev.target.tagName ==="INPUT"){
     
   
            
      if(ev.target.getAttribute("type") ==="radio"){
            if(ev.target.checked){
            ev.target.setAttribute("checked","");
             // ele.innerHTML+="added checked";
              
      }
      else{
            
      ev.target.removeAttribute("checked");
    //  ele.innerHTML+="checked removed";
      }
     }
     
       if(ev.target.getAttribute("type") ==="checkbox"){
            if(ev.target.checked){
            ev.target.setAttribute("checked","");
            //  ele.innerHTML+="added checked";
      }
      else{
            
      ev.target.removeAttribute("checked");
    //  ele.innerHTML+="checked removed";
      }
     }
  }
}

function key(e){
    
    
    var code = (e.keyCode ? e.keyCode : e.which);
    
  if(code > 1){
      empty = true;
  }
 if(code == 13) { //Enter keycode
  
   
 }
 
 
 

 
}


function removeHighlight(){
    if(highlight){
      unhighlight();
  }
}
var empty = false;

function down(e){
      var code = (e.keyCode ? e.keyCode : e.which);
      
      
       
      if(code == 46 || code == 8){
           if(empty === false){
           e.preventDefault();
           return;
           }
       
          var length =ele.innerHTML.length;
        var number =  parseInt(length);
          if(number > 1){
             
           return;
          }
          if(number === 1){
              empty = false;
               ele.innerHTML = "";
                e.preventDefault();
          }
          else{
           
              e.preventDefault();
          }
          
         
      }
}



function  isselected(){
    var selected = document.getSelection();
    var isSelection = selected.toString();
    
    if(isSelection.toString().length > 0)
        return true;
     else return false;
}
//document.addEventListener("keypress",key,false);
//document.addEventListener("click",clickeds,false);
//document.addEventListener("keydown",down,false);
window.addEventListener("load",yes,false);

            
       
