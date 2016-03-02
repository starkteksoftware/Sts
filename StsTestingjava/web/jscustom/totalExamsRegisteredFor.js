/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */





function arrangeTable(){
       
     var table = document.getElementById("tableBodySystem");
    var student = localStorage.getItem("StudentName");
   var split = student.split(",");

     var sec =  localStorage.getItem(split[3]+"Courses").split("#");
   
     
       var tableAdd;
     
     var addUp;
 
     var ids="i know";
     
     
     for( var c = 1; c < sec.length; c++){
        
        
        
       var split = sec[c].split(",");
       
  
     var join = "";
   
     
     
       for( var i = 0; i < split.length; i++){
           
           if(i == 0){
              
               join+="<td>"+c+"</td>";
               
            ids=split[i];
               
           }
           
          
           
        
           
         join+="<td>"+split[i]+"</td>"; 
       }
      
       
       join+= "<td><a href='#'data-hint='Start Exam' class='fg-darkGreen'><i id='"+ids+"' class='icon-open'></i></a></td>";
 
         
     var addition ="<tr>";
    
     addition+=join;
      addition+="</tr>";
    //  totalStudents.push(addition);
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
     
     
     
     
     
     
     
     
     
     
}arrangeTable();
