/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function start(){
    
     var url = document.URL;
   
 var type = url.split("=");
    

 

    var matric = localStorage.getItem("matric");
   
   
    localStorage.setItem("eType",type[1]);
  
   document.getElementById("sendButton").addEventListener("click",chat,false);
      
     
    document.getElementById("name").innerHTML = localStorage.getItem("lastName") + "  &nbsp;"+localStorage.getItem("firstName");
      document.getElementById("nameTag").innerHTML = localStorage.getItem("lastName") + "  &nbsp;"+localStorage.getItem("firstName");
   
   var inst = localStorage.getItem("institution");
  
   
    
     
   
   var requestUrl = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/student/dashboard/information/data?type="+type[1]+"&matric="+matric+"&institution="+inst;
   
   
   
   
   
   
   
  
   
  
    try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseDatas(asyncRequest);  //callBack( asyncRequest );
 }, false);
     
     
    asyncRequest.open( "GET", requestUrl, true );
 asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
 asyncRequest.send(); // send request
 

 } // end try
 catch ( exception )
 {
 alert ( "Request Failed" );
 } // end catch
  



    
    
    
    document.getElementById("waec").addEventListener("click",waecData,false);
    
    document.getElementById("neco").addEventListener("click",necoData,false);
    
    
    document.getElementById("jamb").addEventListener("click",jambData,false);
    
    
    document.getElementById("post").addEventListener("click",postData,false);
    
    
    
}

function chat(){
    //alert(document.getElementById("box").value);
    
  /*  document.getElementById("chat-box").innerHTML += '<div class="item">'
                   + '<img src="dist/img/user2-160x160.jpg" alt="user image" class="offline">'
                  + ' <p class="message">'
                     + '<a href="#" class="name">'
                    +   ' <small class="text-muted pull-right"><i class="fa fa-clock-o"></i> 5:30</small>' +localStorage.getItem("lastName") +  ''+localStorage.getItem("firstName")
                     
                    + '  </a>'
                      + document.getElementById("box").value+''
               
                   + ' </p>'
                 + ' </div>'; */
          
     send(document.getElementById("box").value);
      
       
     
     document.getElementById("box").value = "";
      
      
      
}


function parseDatas(asyncRequest){
 
  if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object


 //var data = JSON.parse(asyncRequest.responseText);

 var datas = JSON.parse(asyncRequest.responseText);
 
  
   
  var data = datas.split("&");
  
 var split = data[0].split("#");
   var labels = [];
    
 var build = "";
 for(var c = 1; c < split.length; c++){
      var str = "bg-red";
   
    if(c == 1){
        str= "bg-red";
        
    }
      if(c == 2){
         str= "bg-yellow";
    }
     if(c == 3){
         str= "bg-blue";
    }
      if(c == 4){
         str= "bg-green";
    }
      if(c == 5){
         str= "bg-pink";
    }
       
        
        if(c == 6){
         str= "bg-brown";
    }
      if(c == 7){
        str= "bg-aqua"; 
    }
    
       if(c == 8){
        
           str= "bg-white"; 
    }
    
      if(c == 9){
           str= "bg-black"; 
    }
    
    
     if(c == 10){
        
    }
    
      if(c == 11){
        
    }
    
      if(c == 12){
        
    }
    
      if(c == 13){
        
    }
    
     if(c == 14){
        
    }
    
      if(c == 15){
        
    }
    
      if(c == 16){
        
    }
       if(c == 17){
        
    }
    
      if(c == 18){
        
    }
    
      if(c == 19){
        
    }
    
      if(c == 20){
        
         
    }
   
        
            build+= '  <div class="col-md-3 col-sm-6 col-xs-12"><div class="info-box"> <span class="info-box-icon '+str+'"><i class="ion ion-ios-gear-outline"></i></span>  <div class="info-box-content"> <span class="" style="font-size:small"><a style="font-size:small" href="studentSection.html?exam='+split[c]+'" >'+split[c]+'</a></span> <span class="info-box-number">90<small>%</small></span>  <span style="font-size:small"><a href="studentSection.html?exam='+split[c]+'"> proceed to exam </a> </span> </div><!-- /.info-box-content --></div><!-- /.info-box --></div>';
             
              
       labels.push(split[c]);
       
            
      
      
            
     
     
 }
    document.getElementById("subjectArranger").innerHTML = build;
    
     
     attempts(data[1]);
     
        
    barchart(labels);
   
      ranks(data[2]);
      
      
      var splitD = data[3].split(",");
      piechart(splitD);
         
          
           leadingPeople(data[4]);
          
         barcharts(data[5]);
      
      
          
        connect();
         
         
        
         
 }
}



function leadingPeople(data){
    
    
    var str = '';
     var splits = data.split(",");
     for(var i = 0; i < splits.length; i++){
         
      var sep = splits[i].split("=");
       var space = sep[0].split(" ");
      
                     str+= '<li>'
                     + '    <img src="dist/img/user1-128x128.jpg" alt="User Image">'
                        + '  <a class="users-list-name" href="#">'+space[1]+'</a>'
                       + '  <span class="users-list-date">'+ sep[1]+'%</span>'
                      + ' </li>';
               
                
               
      
     }
     
     document.getElementById("leaderUse").innerHTML = str;
     
      
}

function leadingSubjects(){
    
     
}

 function barcharts(data){
   
    
      
    
    var datas = data.split(",");
    var labels = [];
    var scores = [];
    
    for(var i = 0; i < datas.length - 1; i++){
        
        var sep = datas[i].split("=");
     
         labels.push(sep[0]);
         
          
        scores.push(sep[1]);
        
         
    }
       
       
    
  
         var areaChartData = {
          labels: labels,
            
          datasets: [
            {
             
              fillColor: "rgba(210, 214, 222, 1)",
              strokeColor: "rgba(210, 214, 222, 1)",
              pointColor: "rgba(210, 214, 222, 1)",
              pointStrokeColor: "#c1c7d1",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: scores
              
                
            }
        
          ]
        };
        
        
       
         
         var barChartCanvas = document.getElementById("barChart").getContext("2d");
            
        var barChart = new Chart(barChartCanvas);
        var barChartData = areaChartData;
        barChartData.datasets[0].fillColor = "#00a65a";
        barChartData.datasets[0].strokeColor = "#00a65a";
        barChartData.datasets[0].pointColor = "#00a65a";
        
        var barChartOptions = {
          //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
          scaleBeginAtZero: true,
          //Boolean - Whether grid lines are shown across the chart
          scaleShowGridLines: true,
          //String - Colour of the grid lines
          scaleGridLineColor: "rgba(0,0,0,.05)",
          //Number - Width of the grid lines
          scaleGridLineWidth: 1,
          //Boolean - Whether to show horizontal lines (except X axis)
          scaleShowHorizontalLines: true,
          //Boolean - Whether to show vertical lines (except Y axis)
          scaleShowVerticalLines: true,
          //Boolean - If there is a stroke on each bar
          barShowStroke: true,
          //Number - Pixel width of the bar stroke
          barStrokeWidth: 2,
          //Number - Spacing between each of the X value sets
          barValueSpacing: 5,
          //Number - Spacing between data sets within X values
          barDatasetSpacing: 1,
          //String - A legend template
          legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
          //Boolean - whether to make the chart responsive
          responsive: true,
          maintainAspectRatio: true
        };

        barChartOptions.datasetFill = false;
        
        
        barChart.Bar(barChartData, barChartOptions);
          
    
}

function piechart(data){
      
     
      
      var str0 = data[0];  var str1 = data[1];  var str2 = data[2];  var str3 = data[3];
       var str4 = data[4];  var str5 = data[5];  var str6 = data[6];  var str7 = data[7];
       
        var str8 = data[8];  var str9 = data[9];  var str10 = data[10];  var str11 = data[11];
       var str12 = data[12];  var str13 = data[13];  var str14 = data[14];  var str15 = data[15];
       
       
       
       var ss = '<li><i class="fa fa-circle-o text-red"></i> '+data[0]+'</li>'
                      + ' <li><i class="fa fa-circle-o text-green"></i> '+data[2]+ '</li>'
                      + ' <li><i class="fa fa-circle-o text-yellow"></i> '+data[4]+ '</li>'
                       + '<li><i class="fa fa-circle-o text-aqua"></i> '+data[6]+ '</li>'
                      + ' <li><i class="fa fa-circle-o text-light-blue"></i> '+data[8]+ '</li>'
                       + ' <li><i class="fa fa-circle-o text-gray"></i>'+data[10]+ '</li>';
                       + ' <li><i class="fa fa-circle-o text-dark-yellow"></i>'+data[12]+ '</li>';
                         + ' <li><i class="fa fa-circle-o text-dark-yellow"></i>'+data[14]+ '</li>';
                          
                           
                            
                      
              
              document.getElementById("legends").innerHTML = ss;
              
              
              
               
       
       
       
      var pieChartCanvas = document.getElementById("pieChart").getContext("2d");
     
       
       
        var pieChart = new Chart(pieChartCanvas);
        var PieData = [
          {
            value: data[1],
            color: "#f56954",
            highlight: "#f56954",
            label: data[0]
          },
          {
            value: data[3],
            color: "#00a65a",
            highlight: "#00a65a",
            label: data[2]
          },
          {
            value: data[5],
            color: "#f39c12",
            highlight: "#f39c12",
            label: data[4]
          },
          {
            value: data[7],
            color: "#00c0ef",
            highlight: "#00c0ef",
            label: data[6]
          },
          {
            value: data[9],
            color: "#3c8dbc",
            highlight: "#3c8dbc",
            label: data[8]
          },
          {
              
            value: data[11],
            color: "#d2d6de",
            highlight: "#d2d6de",
            label: data[10]
          },
           {
              
            value: data[13],
            color: "#ffd2be",
            highlight: "#ffd2be",
            label: data[12]
          },
           {
              
            value: data[15],
            color: "#00a6de",
            highlight: "#00a6de",
            label: data[14]
          } 
        ];
        
       
       
        
        var pieOptions = {
          //Boolean - Whether we should show a stroke on each segment
          segmentShowStroke: true,
          //String - The colour of each segment stroke
          segmentStrokeColor: "#fff",
          //Number - The width of each segment stroke
          segmentStrokeWidth: 2,
          //Number - The percentage of the chart that we cut out of the middle
          percentageInnerCutout: 50, // This is 0 for Pie charts
          //Number - Amount of animation steps
          animationSteps: 100,
          //String - Animation easing effect
          animationEasing: "easeOutBounce",
          //Boolean - Whether we animate the rotation of the Doughnut
          animateRotate: true,
          //Boolean - Whether we animate scaling the Doughnut from the centre
          animateScale: false,
          //Boolean - whether to make the chart responsive to window resizing
          responsive: true,
          // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
          maintainAspectRatio: true,
          //String - A legend template
          legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
        };
        //Create pie or douhnut chart
        // You can switch between pie and douhnut using the method below.
       
     pieChart.Doughnut(PieData, pieOptions);

 
         
}


function ranks(str){
    var strs = '';
    var title = '';
    var data = str.split("#");
    
    for(var c = 0; c < data.length; c++){
        var hash = data[c].split("*");
        
         if(c == 1){
             title = "TOTAL RANKS";
         }
         if(c == 2){
           title = "SCHOOL RANK";  
           
         }
         if(c == 3){
            title = "TOTAL SCHOOL RANK"; 
         }
         if(c == 4){
             title = "TOTAL SUBJECT RANK"; 
             
             
         }
        
         
        if(hash[0].indexOf("0") == 0){
          
       strs+=   ' <div class="col-sm-3 col-xs-6">'
                   +  ' <div class="description-block border-right">'
                     + '  <span class="description-percentage text-yellow"><i class="fa fa-caret-left"></i>'+hash[2]+'</span>'
                    +   ' <h5 class="description-header"><b>'+hash[3]+'</b></h5>'
                     +  ' <span class="description-text">'+title+'</span>'
                   +  ' </div><!-- /.description-block -->'
                  + ' </div>    ';
          
                   
                    
                   
            
        
        }
            
             if(hash[0].indexOf("+") == 0){
                     
         strs+=    ' <div class="col-sm-3 col-xs-6">'
                   + '  <div class="description-block border-right">'
                   + '    <span class="description-percentage text-green"><i class="fa fa-caret-up"></i>'+hash[2]+'</span>'
                    +  '  <h5 class="description-header"><b>'+hash[3]+'</b></h5>'
                  +   '   <span class="description-text">'+title+'</span>'
                 + '    </div><!-- /.description-block -->'
               + '   </div>';
       
             }
                 
                
                 
         
                  if(hash[0].indexOf("-") == 0){
               strs+='      <div class="col-sm-3 col-xs-6">'
                   + ' <div class="description-block">'
                    + '   <span class="description-percentage text-red"><i class="fa fa-caret-down"></i>'+hash[2]+'</span>'
                    +  '  <h5 class="description-header"><b>'+hash[3]+'</b></h5>'
                   +   '  <span class="description-text">'+title+'</span>'
                   +  ' </div><!-- /.description-block -->'
                +  '  </div>  ';
        
         
                  }
    }
    
     
    document.getElementById("rankings").innerHTML = strs;
    
}

function attempts(str){
    
    
    
    
    var splits = str.split("<");
      
        var start = "<p class='text-center'> <strong>Course Attempts</strong> </p> ";
      
    for(var i = 1; i < splits.length; i++){
       
        start+="<div class='progress-group'>";
        
         var furtherSplit = splits[i].indexOf("#");
         if(furtherSplit != -1){
             
             var sector = splits[i].split("#");
             
             
             for(var r = 0; r < sector.length; r++){
                 
                 if( r == (sector.length - 1) ){
                   
              var finalS = sector[r].split(":");
             
                  
                      var style =  Math.round((finalS[1]/9));
                       
                        
                          
                         
       
          if(style == 0){
              style = 1;
              
          }
           
            
          
          
           var digit = finalS[1] * 10;
          
           
           
             var str = "progress-bar-red";
   
    if(i == 1){
        str= "progress-bar-red";
        
    }
     
      if(i == 2){
         
          str= "progress-bar-yellow";
    }
     if(i == 3){
         str= "progress-bar-blue";
    }
      if(i == 4){
         str= "progress-bar-green";
    }
      if(i == 5){
         str= "progress-bar-pink";
          
    }
       
        
        if(i == 6){
         str= "progress-bar-brown";
    }
      if(i == 7){
        str= "progress-bar-aqua"; 
    }
    
       if(i == 8){
        
           str= "progress-bar-white"; 
    }
    
      if(i == 9){
           str= "progress-bar-black"; 
    }
    
    
     if(i == 10){
        
    }
             
            
            
               
              
       
             start+= ' <div class="progress-group">'
                     +  ' <span class="progress-text">'+sector[0]+'</span>'
             
                    + '   <span class="progress-number"><b>'+finalS[1]+'</b> <b>/9</b></span>'
          
                    + '   <div class="progress sm">'
                    + '     <div class="progress-bar '+str+'" style="width:'+digit+'%"> </div>'
                   +  ' </div>'
                   + '  </div>';
              
                     
                       
                 }
             }
             
              var finalS = sector[1].split(":");
             
           //    start+= "<span class='progress-text'>"+sector[0]+"</span><span class='progress-number'><b>"+finalS[1]+"</b> <b>/9</b><span> <div class='progress sm'> <div class='progress-bar progress-bar-aqua' style='width:"+(finalS[1]/9)+"%'> </div></div></div> ";
             
             
            //  alert(start);
               
               
              
        }
         else{
             var sector = splits[i].split(":");
             
           //  start+= "<span class='progress-text'>"+sector[0]+"</span><span class='progress-number'><b>"+sector[1]+"</b><b>/9</b><span> <div class='progress sm'> <div class='progress-bar progress-bar-aqua' style='width:80%'> </div></div></div> ";
  
             
             start+= ' <div class="progress-group">'
                     +  ' <span class="progress-text">'+sector[0]+'</span>'
             
                    + '   <span class="progress-number"><b>'+sector[1]+'</b> <b>/9</b></span>'
          
                    + '   <div class="progress sm">'
                    + '     <div class="progress-bar progress-bar-light-blue" style="width:0%"> </div>'
                   +  ' </div>'
                   + '  </div>';
                
             
             
         }
          
    }
    
     
    
           
    document.getElementById("courses").innerHTML = start;
     
   
    
      
    
}

function barchart(str){
    
    
    var salesChartCanvas = document.getElementById("salesChart").getContext("2d");
     
     
   var number = [];
      number.push(10);
       number.push(10);
        number.push(10);
         number.push(10);
          number.push(10);
          
           
          
  // This will get the first returned node in the jQuery collection.
  var salesChart = new Chart(salesChartCanvas);

   
    
      
 
  var salesChartData = {
    labels: str,
     
    datasets: [
      {
      
        fillColor: "rgb(210, 214, 222)",
        strokeColor: "rgb(210, 214, 222)",
        pointColor: "rgb(210, 214, 222)",
        pointStrokeColor: "#c1c7d1",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgb(220,220,220)",
        data: number
         
      },
          
  
      {
       
        fillColor: "rgb(140, 0, 200)",
        strokeColor: "rgb(140, 0, 200)",
        pointColor: "rgb(140, 0, 200)",
        pointStrokeColor: "#b1b7d1",
        pointHighlightFill: "#bbb",
        pointHighlightStroke: "rgb(110,191,0)",
        data: [49, 29, 10, 81, 46, 25, 40,10]
      },
       {
       
        fillColor: "rgb(255, 255, 0)",
        strokeColor: "rgb(255, 0, 0)",
        pointColor: "rgb(255, 0, 0)",
        pointStrokeColor: "#FFFF33",
        pointHighlightFill: "#bbb",
        pointHighlightStroke: "rgb(110,191,0)",
        data: [81, 46, 25, 40,10]
      },
      {
       
        fillColor: "rgb(140, 0, 200)",
        strokeColor: "rgb(140, 0, 200)",
        pointColor: "rgb(140, 0, 200)",
        pointStrokeColor: "#b1b7d1",
        pointHighlightFill: "#bbb",
        pointHighlightStroke: "rgb(110,191,0)",
        data: [16, 67, 46, 15]
         
      },
      {
       
      
        strokeColor: "rgb(255, 0, 255)",
        pointColor: "rgb(140, 0, 200)",
        pointStrokeColor: "#b1b7d1",
        pointHighlightFill: "#bbb",
        pointHighlightStroke: "rgb(110,191,0)",
             data: [21, 87, 16, 67, 46, 15, 27,19]
   
      },
      {
       
        fillColor: "rgba(60,141,188,0.9)",
        strokeColor: "rgba(60,141,188,0.8)",
        pointColor: "#3b8bba",
        pointStrokeColor: "rgba(60,141,188,1)",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(60,141,188,1)",
        data: [80,23,56,87,19,27,89]
      }
    ]
  };
      salesChartData.datasets[0].data =[21, 87, 16, 67, 46, 15, 27,19];
      
  var salesChartOptions = {
    //Boolean - If we should show the scale at all
    showScale: true,
    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines: false,
    //String - Colour of the grid lines
    scaleGridLineColor: "rgba(0,0,0,.05)",
    //Number - Width of the grid lines
    scaleGridLineWidth: 1,
    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,
    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,
    //Boolean - Whether the line is curved between points
    bezierCurve: true,
    //Number - Tension of the bezier curve between points
    bezierCurveTension: 0.3,
    //Boolean - Whether to show a dot for each point
    pointDot: false,
    //Number - Radius of each point dot in pixels
    pointDotRadius: 4,
    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth: 1,
    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius: 20,
    //Boolean - Whether to show a stroke for datasets
    datasetStroke: true,
    //Number - Pixel width of dataset stroke
    datasetStrokeWidth: 2,
    //Boolean - Whether to fill the dataset with a color
    datasetFill: false,
    //String - A legend template
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%=datasets[i].label%></li><%}%></ul>",
    //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: true,
    //Boolean - whether to make the chart responsive to window resizing
    responsive: true
  };

  //Create the line chart
  salesChart.Line(salesChartData, salesChartOptions);

  
 
  
    
}



function waecData(){
   localStorage.setItem("Exam","waec");
   
   
   
}

function necoData(){
   
    localStorage.setItem("Exam","neco");
}

function jambData(){
      localStorage.setItem("Exam","jamb");
   
}

function postData(){
      localStorage.setItem("Exam","post");
      
    
    
}




 var wsocket;


function connect() {
    

  
  
wsocket = new WebSocket("ws://"+location.host+"/AAAACLIENT/endpoint?Dashboard="+localStorage.getItem("lastName")+"&first="+localStorage.getItem("firstName")+"&matric="+localStorage.getItem("matric")); //="+matricNumber+"&time="+mm+"&answers="+totalQuestions+"&subject="+topic);

  
   


wsocket.onmessage = onMessage;


}
function send(message){
    var string = "Chat:"+message+"&broad"+localStorage.getItem("lastName")+"&broad"+localStorage.getItem("firstName")+"&broad"+localStorage.getItem("matric");
    
     
      
       
      
     
      
      
     
    
    wsocket.send(string);
}


function onMessage(evt) {
 
  
   
 if(evt.data.indexOf("broad&#") != -1){
      
       var string = evt.data.split("broad&#");
       
       var sep = string[1].split(":");
        
          document.getElementById("chat-box").innerHTML += '<div class="item">'
                   + '<img src="dist/img/user2-160x160.jpg" alt="user image" class="offline">'
                  + ' <p class="message">'
                     + '<a href="#" class="name">'
                    +   ' <small class="text-muted pull-right"><i class="fa fa-clock-o"></i> 5:30</small>' +sep[1] +  ''+sep[2]
                      
                       
                    + '  </a>'
                      + sep[0]+''
                 
                   
                   + ' </p>'
                 + ' </div>';
          

}
}
window.addEventListener("load",start,false);
