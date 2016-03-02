/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var logins = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b";
var last;
var first;
var middle;
var gender;
var matric;
var formerValue;

function start(){


 var requestUrl = logins+"?LastName="+last+"&FirstName="+first+"&MiddleName="+middle+"&Gender="+gender+"&matric="+matric+"&StudentNumber="+formerValue;
      //+ methodAndArguments;
        
  
    
   try
 {
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
 alert ( "Request Failed" );
 } // end catch
 


    

 
 }
 
 function parseLogs( asyncRequest )
 {
   
 // if request has completed successfully, process the response
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object
var data =JSON.parse(asyncRequest.responseText);
document.getElementById("textData").setAttribute("style","color:green");
document.getElementById("textData").innerHTML = data+" click on the link to advance &nbsp;<a href='Students.html'><i class='icon-arrow-right'></i></a>";
 document.getElementById("formsSubmit").submit();
 // display data on the page
 } // end if
 } //
 
 
 function order(){
        var url = document.referrer;


document.getElementById("backButton").href= url;
  var student = localStorage.getItem("StudentName");
    
     var split = student.split(",");
      
      document.getElementById("explanation").innerHTML = split[0] +" "+split[1];
    formerValue = split[3];
     document.getElementById("image").src = sessionStorage.getItem("URL")+"/AAAACLIENT/ImageRetriever?image="+split[3];
    


document.getElementById("pageTitle").innerHTML ="&nbsp;STS|&nbsp;"+split[1]+" "+split[0];
document.getElementById("url").value =  sessionStorage.getItem("URL")+"/AAAASTUDENT/EditStudentProfile.html";

 document.getElementById("formsSubmit").action = getAction();
    
      document.getElementById("studentNo").value = split[3];
         document.getElementById("fName").value = split[0];
            document.getElementById("lName").value = split[1];
               document.getElementById("mName").value = split[2];
                  document.getElementById("gender").value = split[4];
                  
                  document.getElementById("viewStudents").addEventListener("click",viewStudents,false);
           
                  
                   document.getElementById("totalStudents").innerHTML = localStorage.getItem("TotalStudents");
     
      document.getElementById("save").addEventListener("click",saved,false);
     
 }
 
 function saved(){
   
     
  matric =    document.getElementById("studentNo").value;
  first =       document.getElementById("fName").value;
  last =      document.getElementById("lName").value;
    middle =     document.getElementById("mName").value;
         gender =  document.getElementById("gender").value;
         
           var errorText = document.getElementById("error");
      errorText.innerHTML = "";
   
         errorText.setAttribute("style","color:red");
            document.getElementById("studentNo").setAttribute("style","border-style:solid; border-color:grey");
               document.getElementById("lName").setAttribute("style","border-style:solid; border-color:grey");
                 document.getElementById("fName").setAttribute("style","border-style:solid; border-color:grey");
                   document.getElementById("mName").setAttribute("style","border-style:solid; border-color:grey");
               document.getElementById("gender").setAttribute("style","border-style:solid; border-color:grey");
          
         if(matric === null || matric.length < 1){
             document.getElementById("studentNo").setAttribute("style","border-style:dotted; border-color:red");
            errorText.innerHTML ="Please fill all candidate details";
         }
            if(last === null || last.length < 1){
                   document.getElementById("lName").setAttribute("style","border-style:dotted; border-color:red");
          
             errorText.innerHTML ="Please fill all candidate details"; 
         }
         
         if(first  === null || first.length < 1){
                document.getElementById("fName").setAttribute("style","border-style:dotted; border-color:red");
          
               errorText.innerHTML ="Please fill all candidate details"; 
         }
         
         if(middle === null || middle.length < 1){
                document.getElementById("mName").setAttribute("style","border-style:dotted; border-color:red");
          
               errorText.innerHTML ="Please fill all candidate details";
         }
         
         if(gender === null || gender.length < 1){
                document.getElementById("gender").setAttribute("style","border-style:dotted; border-color:red");
          
                errorText.innerHTML ="Please fill all candidate details";
         }
         
        var text = errorText.innerHTML;
        
        if(text.toString().length > 3){
            return;
        }
         
         start();
         
 }
 
 function getAction(){
     return sessionStorage.getItem("URL")+"/AAAACLIENT/FormServlet";
     
 }
 
 function con(e){
  //  window.alert("you have clicked me");
    
    e.preventDefault();
}

function viewStudents(){
      var text ='<!DOCTYPE html> <html> <head>    <script src="arrangeStudents.js" type="text/javascript"></script> </head> <body>'
      +'     <div class="span6">'
                    +'      <div>'
                      +'        <input type="search" id="filters" placeholder="Filter by name/student number"/><button id="clickeds" ><i class="icon-search"></i></button>&nbsp;'
                           
                      +'    </div>'
                      +'    <div class="clear"></div>'
                      +'    <div id="examStudentHolder" class="vertical-scroll">'
                           +'   <table class="table hovered">'
                           +'       <thead>'
                              +'        <tr class="warning fg-white">'
                                +'          <th>S/N</th>'
                                  +'        <th>Last Name</th>'
                            +'             <th>First Name</th>'
                                  +'        <th>Middle Name</th>'
                                   +'       <th>Student Number</th>'
                                   +'       <th>Gender</th>'
                               +'       <th>Actions</th>'
                                  +'    </tr>'
                                +' </thead>'
                             +'     <tbody class="hovered" id="tableBodySES">'
                               
                                   
                                    
                            +'      </tbody>'
                          +'    </table>'
                     

                 +'     </div>'
                  +'    <!--stats-->'
                   
 +' </body>'
 +' </html>';
  
    
   
   
 
    messageBox(text,"Candidates");
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


window.addEventListener("contextmenu",con,false);

window.addEventListener("load",order,false);

