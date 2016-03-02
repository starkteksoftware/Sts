/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
//make two of this 

function start(){
    
    if(document.getElementById("button")){
      
    document.getElementById("button").addEventListener("click",clicked,false);
    }
    if(document.getElementById("buttons")){
        
    document.getElementById("buttons").addEventListener("click",clickedIndividualTime,false);
    }
   
   
    
}

function clickedIndividualTime(){
     
     
  var matric = document.getElementById('confirmations').innerHTML;
   var time = document.getElementById('numbers').value;
 
  
    
    
    if(time.indexOf("-") == -1){
           sendMatric(matric,time);
         
            
         document.getElementById("conclusion").innerHTML ="<b> "+ time+" minutes has been successfully added to "+matric+"</b>";
        
        return;
    }
    
    
    sendMatric(matric,time);
          document.getElementById("conclusion").innerHTML="<b> "+ time+" minutes has been successfully subtracted from "+matric+"</b>";
}


function clicked(){
 var val = document.getElementById("number").value; 
 
 var subject = localStorage.getItem("ExamName");
 
    if(val.indexOf("-") == -1){
        
       
        
         send(subject,"+"+val);
         document.getElementById("confirmation").innerHTML ="<b> "+ val+" minutes has been successfully added to "+subject+"</b>";
         
         return;
    }
    send(subject,val);
       document.getElementById("confirmation").innerHTML ="<b> "+ val+" minutes has been successfully subtracted from "+subject+"</b>";
          
    
}

start();