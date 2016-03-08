/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function start(){
     try{
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
  });
  
  $("#lockscreen").click(function (){
      
  });
  
  $("#fullScreen").click(function (){
      $("#menu_toggle").trigger("click");
  });
  
  var getStudent = document.URL.split("?matric=");
  document.getElementById("proPic").src = sessionStorage.getItem("URL")+"/AAAACLIENT/ImageRetriever?image="+getStudent[1];
    getReport(getStudent[1]);
    
 
  
    }
    catch(exc){
       console.log(exc) 
    }
   
}


function getReport (matric){
    
    var login = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/student/course/information?status=5";
    var requestUrl = login+"&matric="+matric;
    
     
      
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
 alert ( "Request Failed" );
 } // end catch
 
 function parseLogs( asyncRequest )
 {
   
 // if request has completed successfully, process the response
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object
 var data = JSON.parse(asyncRequest.responseText);
 $("#nextload").hide("slow");
 
 //alert(data);
 try{
            var sendData = data.split("***#");
            setCandidateData(sendData[0].split("#")[1]);
         total =   barchart(sendData[1],sendData[2]);
            overview(sendData[1].split("***")[1],sendData[1].split("***")[2],total);
        }
        catch(exc){
            console.log(exc);
        }
 }
 }
 
 }
 
 function overview(complete,passrate,total){
    
     
       var percentage = (parseInt((total -complete)) * 100)/ parseInt(total);
       
   
   var passpercent = (passrate * 100 )/parseInt(total);
       var dough = [
                {
                    value: 15,
                    color: "#26B22B",
                    label: "Complete"
                },
                {
                    value: 35,
                    color: "#FF0000",
                    label: "Absent"
                },
                {
                    value: 40,
                    color: "#87ff67",
                    label: "Present"
                }
            
     ];
   
      var doughnut = [
                {
                    value: parseInt(percentage),
                    color: "#26B99A",
                    label: "Complete"
                },
                {
                    value: parseInt(100 -percentage),
                    color: "#FF0000",
                    label: "Incomplete"
                }];
     
           var myDoughnut = new Chart(document.getElementById("canvas1i3").getContext("2d")).Doughnut(doughnut);
     
     
     var doughnutDatas = [
                {
                    value: parseInt((100 - passpercent)),
                    color: "#FF0000",
                    label: "Failed"
                },
                {
                    value: parseInt(passpercent),
                    color: "#16a716",
                    label: "Passed"
                }]
            
            var myDoughnut = new Chart(document.getElementById("canvas1i2").getContext("2d")).Doughnut(doughnutDatas);
     
    
            var myDoughnut = new Chart(document.getElementById("canvas1i").getContext("2d")).Doughnut(dough);
           
 }
 
 
 function setCandidateData(data){
     var canData = data.split(",");
     document.getElementById("candidateId").innerHTML = canData[0] +" "+canData[1];
     document.getElementById("candidateEmail").innerHTML = canData[2];
     document.getElementById("candidateStatus").innerHTML = canData[3];
     
     
 }
 
 function bardataclass(period,value){
     this.period = period,
     this.grade = value;
     
 }
 
 function barchart(data,secondData){
      var addUp = "";
      var perform ="";
      var ranker ="";
      barDataArray = [];
      var resplit = data.split("#");
      for(var value = 0; value < resplit.length; value++){
          var bardata = resplit[value].split(",");
         
          var bars = new bardataclass(bardata[0],bardata[1]);
          barDataArray.push(bars);
          
          var month = "jan"
          if(bardata[3].split("-")[1] == 1){
              month = "Jan";
          }
          if(bardata[3].split("-")[1] == 2){
              month = "Feb";
          }
          if(bardata[3].split("-")[1] == 3){
              month = "Mar";
          }
          if(bardata[3].split("-")[1] == 4){
              month = "Apr";
          }
          if(bardata[3].split("-")[1] == 5){
              month = "May";
          }
          if(bardata[3].split("-")[1] == 6){
              month = "Jun";
          }
          if(bardata[3].split("-")[1] == 7){
              month = "Jul";
          }
          if(bardata[3].split("-")[1] == 8){
              month = "Aug";
          }
          if(bardata[3].split("-")[1] == 9){
              month = "Sep";
          }
          if(bardata[3].split("-")[1] == 10){
              month = "Oct";
          }
          if(bardata[3].split("-")[1] == 11){
              month = "Nov";
          }
          if(bardata[3].split("-")[1] == 12){
              month = "Dec";
          }
          
          var com = false;
          if(bardata[4] == 1){
              com = true;
          }
          
          if(value < 5){
               
  var text ='<li><a id="'+bardata[0]+'::exam" title="view '+bardata[0]+'"  class="showboard " href="javascript:;"><i id="'+bardata[0]+'::exams" class="fa fa-external-link"></i></a>'
          +'<div class="message_date">'
          +'<h3 class="date text-info">'+bardata[3].split("-")[2]+'</h3>'
          +'<p class="month">'+month+'</p><h4 class="date text-info">'+bardata[3].split("-")[0]+'</h4>'
          +'</div>'
          +'<div class="message_wrapper">'
          +'<h4 class="heading adejobi btn btn-sm" id="'+bardata[0]+'::ex" >'+bardata[0]+'</h4>'
          +' <blockquote class="message"> score : '+bardata[1]+'  time left: '+bardata[2]+'  completed :'+com+' </blockquote>'
          +'<br />'
          +'<p class="url">'
          +'<span class="fs1 text-info" aria-hidden="true" data-icon=""></span>'
          +'<a href="#"><i class="fa fa-paperclip"></i> Download script . pdf </a></p></div></li>';
          
          addUp+=text;
          
           
           if(bardata[1] >= 41 && bardata[1] <= 49 ){
             
        perform+=' <li> <p>'+bardata[0]+'</p>'
                 +'<div class="progress progress_sm">'
                 +'<div class="progress-bar bg-orange" role="progressbar" data-transitiongoal="100" style="width:'+bardata[1]+'%"></div> </div></li>';
       
                 ranker +=  '<tr><td>'+(value + 1)+'</td> <td>'+bardata[0]+'</td><td>'+secondData.split("#")[value].split("*")[1]+'</td><td class="hidden-phone">'+bardata[1]+'</td><td class="vertical-align-mid">'
                   +'<div class="progress"><div class="progress-bar progress-bar-warning" style="width:'+bardata[1]+'%"></div></div></td>'
                  +'</tr>';
         
             }
         
          if(bardata[1] <= 40 ){
        perform+=' <li> <p>'+bardata[0]+'</p>'
                 +'<div class="progress progress_sm">'
                 +'<div class="progress-bar bg-red" role="progressbar" data-transitiongoal="100" style="width:'+bardata[1]+'%"></div> </div></li>';
        ranker +='<tr><td>'+(value + 1)+'</td> <td>'+bardata[0]+'</td><td>'+secondData.split("#")[value].split("*")[1]+'</td><td class="hidden-phone">'+bardata[1]+'</td><td class="vertical-align-mid">'
                  +'<div class="progress"><div class="progress-bar progress-bar-danger" style="width:'+bardata[1]+'%"></div></div></td>'
                  +'</tr>';
         
             }
     
       if(bardata[1] >= 50 && bardata[1] <= 69 ){
           
        perform+=' <li> <p>'+bardata[0]+'</p>'
                 +'<div class="progress progress_sm">'
                 +'<div class="progress-bar bg-blue" role="progressbar" data-transitiongoal="100" style="width:'+bardata[1]+'%"></div> </div></li>';
        ranker +='<tr><td>'+(value + 1)+'</td> <td>'+bardata[0]+'</td><td>'+secondData.split("#")[value].split("*")[1]+'</td><td class="hidden-phone">'+bardata[1]+'</td><td class="vertical-align-mid">'
                 +'<div class="progress"><div class="progress-bar progress-bar-info" style="width:'+bardata[1]+'%"></div></div></td>'
                 +'</tr>';
         
             }
     
       if(bardata[1] >= 70){
        perform+=' <li> <p>'+bardata[0]+'</p>'
                 +'<div class="progress progress_sm">'
                 +'<div class="progress-bar bg-green" role="progressbar" data-transitiongoal="100" style="width:'+bardata[1]+'%"></div> </div></li>';
        
          ranker +=  '<tr><td>'+(value + 1)+'</td> <td>'+bardata[0]+'</td><td>'+secondData.split("#")[value].split("*")[1]+'</td><td class="hidden-phone">'+bardata[1]+'</td><td class="vertical-align-mid">'
                    +'<div class="progress"><div class="progress-bar progress-bar-success" style="width:'+bardata[1]+'%"></div></div></td>'
                  +'</tr>';
              
             }
     
       
       
         
      }
      }
      
     
      document.getElementById("recentActivitiy").innerHTML = addUp;
     
      document.getElementById("performance").innerHTML = perform;
      document.getElementById("ranks").innerHTML = ranker;
      $(".showboard").click(function (e){
         
          getExamData(e.target.id.split("::")[0]);
        
      });
      $(".adejobi").click(function (e){
          getExamData(e.target.id.split("::")[0]);
        
      });
     
       Morris.Bar({
                element: 'graph_bar',
                data: barDataArray,
                xkey: 'period',
               
                hideHover: 'auto',
                barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB','#3674DB','#26B99A', '#34495E', '#ACADAC', '#3498DB','#3674DB','#26B99A', '#34495E', '#ACADAC', '#3498DB','#3674DB'],
                ykeys: ['grade', 'sorned'],
                labels: ['grade', 'SORN'],
                xLabelAngle: 60
            });
            return barDataArray.length ;
 }
 
 
 
 function getExamData(exam){
     
    
    var login = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/student/course/information?status=6";
    var requestUrl = login+"&subjects="+exam;
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
 console.log ( exception);
 } // end catch
 
 function parse( asyncRequest )
 {
  // if request has completed successfully, process the response
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object
 var data = JSON.parse(asyncRequest.responseText);
 
 
            table(data);
 $("#myModalLabel").html("Leader Board");
 $("#vStudent").modal();
 //alert(data);
 
   
 }
 }
 
 }
 
 function linker(e){
   
     
 }
 
 
 function table(str){
     var table = document.getElementById("lead");
     var sec = str.split("#");
     var length = sec.length;
     var remainder= Math.floor(length / 10);
     var nums = 1;
     var stri = "";
    
     for(var ii = 0; ii <= remainder; ii++){
          stri+='<button class="btn adew btn-info" id="pg'+ii+'" type="button">'+(ii + 1)+'</button>';
      }
       
      $("#leadPg").html(stri);
       $(".adew").click(function (e){
           $(".adew").removeClass("active");
           
           
              var addUp = "";
              nums =   parseInt(e.target.innerHTML);
                 
                  
                   var val = nums * 10;
                var c = val - 10;
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
               
               var splitted = split[0].split(" ");
          ids= splitted[0]+","+splitted[1]+","+split[2]+","+split[3]+","+split[1];
           
            }
          join+="<td>"+split[i]+"</td>"; 
         
       }
         join+="<td> <img src=' "+sessionStorage.getItem('URL')+"/AAAACLIENT/ImageRetriever?image="+split[0]+"' width='30px' height='30px' class='img-circle ' /></td>";
       
    
          
      
     var addition ="<tr>";
    
     addition+=join;
      addition+="</tr>";
    
   
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
       
      });
      
        
      
      
     
     
     
     
     
     var tableAdd;
     var addUp = "";
 
     var ids="i know";
     var vp = "";
    
     
     sec = str.split("#");
     
      var val = nums * 10;
     for( var c = nums; c < val; c++){
     
      try{
          //or turn to 1
     var split = sec[c].split(",");
 }
 
 catch(exc){
                    continue;
 }
     var join = "";
     for( var i = 0; i < split.length; i++){
         if(i == 0){
              
            join+="<td>"+c+"</td>";
            vp =  split[0]+","+split[1]+","+split[2]+","+split[3]+","+split[1];
        
        }
           
           
           if(i == 3){
               ids=split[i];
           }
           
          
           
        
           
         join+="<td>"+split[i]+"</td>"; 
       }
   
       
        
         join+="<td> <img src=' "+sessionStorage.getItem('URL')+"/AAAACLIENT/ImageRetriever?image="+split[0]+"' width='30px' height='30px' class='img-circle ' /></td>";
       
         
     var addition ="<tr>";
    
     addition+=join;
      addition+="</tr>";
       
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
window.addEventListener("load",start,false);
