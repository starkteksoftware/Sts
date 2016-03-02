/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function organise(str){
    
    switch(str){
    case "S.R":
       var string = ""; 
       var questions = str.split("#question");
       for(var c = 0; c < questions.length; c++){
           var hash = questions[c].split("#");
           for(var i = 0; i < hash.length; i++){
               if(i == 0){
            string+="<p>"+hash[i]+"<p>";       
               }
               else{
                   if(hash[i].indexOf("option") != - 1){
               string+="<p style='margin-left:40%'><input type='radio' name='jol'/>"+ hash[i].substring(6,hash[i].length) +  "</p>";
                   }else{
                    string+="<p style='margin-left:40%'><input type='radio' checked name='jol'/>"+ hash[i].substring(6,hash[i].length) +  "</p>";
                  
                   }
               }
           }
       }
        document.getElementById("questions").innerHTML = string;
        
        
    break;
    case "M.R":
           var string = ""; 
       var questions = str.split("#question");
       for(var c = 0; c < questions.length; c++){
           var hash = questions[c].split("#");
           for(var i = 0; i < hash.length; i++){
               if(i == 0){
            string+="<p>"+hash[i]+"<p>";       
               }
               else{
                   if(hash[i].indexOf("option") != - 1){
               string+="<p style='margin-left:40%'><input type='checkbox' name='jol'/>"+ hash[i].substring(6,hash[i].length) +  "</p>";
                   }else{
                    string+="<p style='margin-left:40%'><input type='checkbox' checked name='jol'/>"+ hash[i].substring(6,hash[i].length) +  "</p>";
                  
                   }
               }
           }
       }
        document.getElementById("questions").innerHTML = string;
        
    break;
    case "T.F":
         var string = ""; 
       var questions = str.split("#question");
       for(var c = 0; c < questions.length; c++){
           var hash = questions[c].split("#");
           for(var i = 0; i < hash.length; i++){
               if(i == 0){
            string+="<p>"+hash[i]+"<p>";       
               }
               else{
                   if(hash[i].indexOf("option") != - 1){
               string+="<p style='margin-left:40%'><input type='radio' name='jol'/>"+ hash[i].substring(6,hash[i].length) +  "</p>";
                   }else{
                    string+="<p style='margin-left:40%'><input type='radio' checked name='jol'/>"+ hash[i].substring(6,hash[i].length) +  "</p>";
                  
                   }
               }
           }
       }
        document.getElementById("questions").innerHTML = string;
        
        
    break;
    case "B.G":
            var string = ""; 
       var questions = str.split("#question");
       for(var c = 0; c < questions.length; c++){
           var hash = questions[c].split("<");
           
           string += "<p>"+hash[0]+"</p>";
          var hashs = hash[1].split(",");
                for(var i = 0; i < hashs.length; i++){
              //seperate at , and draw _ where hash is 
           }
       }
    break;
    case "F.B":
    break;
    case "E.S":
    break;
    case "L.S":
    break;
    case "S.M":
    break;
    case "M.X":
    break;
    case "S.D":
    break;
    case "M.D":
    break;
    case "P.T":
    break;
    case "A.T":
    break;
    case "T.T":
    break;
    
    
    
    
    
    
    
    
    
    
    
    
    }
    
    
}