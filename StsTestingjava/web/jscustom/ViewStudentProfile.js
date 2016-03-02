/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function start(){
     var user = localStorage.getItem("user");
      var session = sessionStorage.getItem("URL");
      if(user == null || session == null){
          window.location.assign("index.html");
        }

    $("#pName").html(user);
    $("#name").html(user);
  document.getElementById("smallImage").src = sessionStorage.getItem("URL")+"/AAAACLIENT/ImageRetriever?image="+user;
  
  document.getElementById("fullImage").src = sessionStorage.getItem("URL")+"/AAAACLIENT/ImageRetriever?image="+user;
  
  var getStudent = document.URL.split("?");
  document.getElementById("proPic").src = sessionStorage.getItem("URL")+"/AAAACLIENT/ImageRetriever?image="+getStudent[1];
    getReport(getStudent[1]);
    
 
  
   
   
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
 //alert(data);
 
            var sendData = data.split("***#");
            setCandidateData(sendData[0].split("#")[1]);
         total =   barchart(sendData[1],sendData[2]);
            overview(sendData[1].split("***")[1],sendData[1].split("***")[2],total);
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
                    value: parseInt(100 -percentage)+1,
                    color: "#FF0000",
                    label: "Incomplete"
                }];
     
           var myDoughnut = new Chart(document.getElementById("canvas1i3").getContext("2d")).Doughnut(doughnut);
     
     
     var doughnutDatas = [
                {
                    value: parseInt((100 - passpercent)+1),
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
               
  var text ='<li><a id="'+bardata[0]+'" title="view '+bardata[0]+'" class="showboard" href="javascript:;"><i class="fa fa-external-link"></i></a>'
          +'<div class="message_date">'
          +'<h3 class="date text-info">'+bardata[3].split("-")[2]+'</h3>'
          +'<p class="month">'+month+'</p><h4 class="date text-info">'+bardata[3].split("-")[0]+'</h4>'
          +'</div>'
          +'<div class="message_wrapper">'
          +'<h4 class="heading">'+bardata[0]+'</h4>'
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
       Morris.Bar({
                element: 'graph_bar',
                data: barDataArray,
                xkey: 'period',
               
                hideHover: 'auto',
                barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
                ykeys: ['grade', 'sorned'],
                labels: ['grade', 'SORN'],
                xLabelAngle: 60
            });
            return barDataArray.length ;
 }
 
 
window.addEventListener("load",start,false);
