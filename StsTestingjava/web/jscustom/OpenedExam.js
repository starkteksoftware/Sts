/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function studentRegistration(){
    
     $("#studR").click(function(e){
            e.stopPropagation();
      
       });
     $("#studReg").click(function(){
         
         var text ='<!DOCTYPE html> <html> <head>    <script src="jscustom/registerExamStudent.js"  type="text/javascript"></script> </head> <body>'
                 +'     <div class="span6">'
                 +'      <div>'
                 +'      <input type="search" id="filter" placeholder="Filter by name/student number"/><button id="clicked" ><i class="icon-search"></i></button>&nbsp;'
                 +'    </div>'
                 +'    <div class="clear"></div>'
                 +'    <div id="examStudentHolder" class="vertical-scroll">'
                 +'   <table class="table striped bordered">'
                 +'     <thead>'
                 +'     <tr class="success fg-white">'
                 +'     <th>S/N</th>'
                 +'        <th>Name</th>'
                 +'        <th>First Name</th>'
                 +'        <th>Middle Name</th>'
                 +'       <th>Gender</th>'
                 +'      <th>Matric</th>'
                 +'       <th>Actions</th>'
                 +'       </tr>' 
                 +'     <tbody class="hovered" id="regTable">'
                 +'      </tbody>'
                 +'    </table>'
                 +'     </div>'
                 +'    <!--stats-->'
                 +' </body>'
                 +' </html>';
         
         
         $("#reg_exam").html(text);
         $("#studR").modal();
        });
 
    
}
function unregisterStudents(){
     $("#unregR").click(function(e){
      e.stopPropagation();
      
     });
 
 
    $("#unRegCan").click(function(){
         var text ='<!DOCTYPE html> <html> <head>    <script src="jscustom/UnregisterCandidates.js"  type="text/javascript"></script> </head> <body>'
                 +'     <div class="span6">'
                 +'      <div>'
                 +'      <input type="search" id="filter" placeholder="Filter by name/student number"/><button id="clicked" ><i class="icon-search"></i></button>&nbsp;'
                 +'    </div>'
                 +'    <div class="clear"></div>'
                 +'    <div id="examStudentHolder" class="vertical-scroll">'
                 +'   <table class="table striped bordered">'
                 +'     <thead>'
                 +'     <tr class="success fg-white">'
                 +'     <th>S/N</th>'
                 +'        <th>Name</th>'
                 +'        <th>Middle Name</th>'
                 +'        <th>Gender</th>'
                 +'       <th>Student Number</th>'
                 +'       <th>Actions</th>'
                 +'       </tr>' 
                 +'     <tbody class="hovered" id="tableBodyUnreg">'
                 +'      </tbody>'
                 +'    </table>'
                 +'     </div>'
                 +'    <!--stats-->'
                 +' </body>'
                 +' </html>';
         
       $("#unregister_can").html(text);
       $("#unregR").modal();
     
     });
 
    
}

function startExam(){
    $("#examSt").click(function(e){
        e.stopPropagation();
      
    });
 
 
   $("#startExam").click(function(){
          var ex = localStorage.getItem("ExamName");
            var schedule = localStorage.getItem(ex+"Time");
            var duration = localStorage.getItem(ex+"Duration");
            var regStudents = localStorage.getItem(ex+"Candidates");
            localStorage.setItem("ReportExam",ex);
            
            document.getElementById("duration_time").value = duration;
            document.getElementById("candidates_time").value= regStudents.split(",").length - 1;
            document.getElementById("start_time").value= schedule;
     $("#examSt").modal();
   });
}

function endExam(){
    $("#eExam").click(function(e){
            e.stopPropagation();
      
    });
 
 
    $("#edExam").click(function(){
            $("#eExam").modal();
    });
 
}

function stopExam(){
      $("#sExam").click(function(e){
            e.stopPropagation();
      
       });
       $("#stopExam").click(function(){
           
         
          
            $("#sExam").modal();
       });
    
}

function viewCandidates(){
    
       var text ='<!DOCTYPE html> <html> <head>    <script src="jscustom/ExamStudents.js"  type="text/javascript"></script> </head> <body>'
                 +'     <div class="span6">'
                 +'      <div>'
                 +'      <input type="search" id="filter" placeholder="Filter by name/student number"/><button id="clicked" ><i class="icon-search"></i></button>&nbsp;'
                 +'    </div>'
                 +'    <div class="clear"></div>'
                 +'    <div id="examStudentHolder" class="vertical-scroll">'
                 +'   <table class="table striped bordered">'
                 +'     <thead>'
                 +'     <tr class="success fg-white">'
                 +'     <th>S/N</th>'
                 +'        <th>Name</th>'
                 +'        <th>Middle Name</th>'
                 +'        <th>Gender</th>'
                 +'       <th>Student Number</th>'
                 +'       <th>Actions</th>'
                 +'       </tr>' 
                 +'     <tbody class="hovered" id="tableBody">'
                 +'      </tbody>'
                 +'    </table>'
                 +'     </div>'
                 +'    <!--stats-->'
                 +' </body>'
                 +' </html>';
         
         $("#view_candidates").html(text);
         $("#candidatesModal").modal();
      
      
      
}

function addLocalStorage(){
    
    
}
function getReport (){
    
    var login = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/student/course/information?status=4";
    var requestUrl = login+"&subjects="+localStorage.getItem("ExamName");
    
     
      
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
 alert(data);
 
 var getdata = data.split("***");
            barchart(getdata[0]);
            leaderBoard(getdata[1],getdata[2],getdata[3]);
            
 }
 }
    
    
}

function leaderBoard(str,complete,pass){
    var addUp="";
    var seperate = str.split("#");
    for (var c  = 1; c < seperate.length; c++){
    var sep = seperate[c].split(",");
         addUp +='   <li class="media event"><a class="pull-left  profile_pic"><img width="60px" height="60px" src="'+sessionStorage.getItem("URL")+"/AAAACLIENT/ImageRetriever?image="+sep[0]+'" class="border-aero img-circle profile_thumb " style="" /></a>'
                   +'<div class="media-body"><a class="title" href="ViewStudentProfile.html?'+sep[0]+'">'+sep[0]+'</a><p><strong><span> </span>'+sep[1]+'%</strong> <span> </span>'+sep[2]+'</p>'
                   +' <p> <small>'+c+'</small> </p></div></li>';
       }
       
       $("#leaders").html(addUp);
       
       
      
    var length =   localStorage.getItem(localStorage.getItem("ExamName")+"Candidates");
  
   var percentage = (complete * 100)/ parseInt(length);
   
   var passpercent = (pass * 100 )/parseInt(length);
   
      var doughnut = [
                {
                    value: percentage,
                    color: "#455C73",
                    label: "Incomplete"
                },
                {
                    value: (100 - percentage),
                    color: "#3498DB",
                    label: "Complete"
                }];
    
     var myDoughnut = new Chart(document.getElementById("canvas1i3").getContext("2d")).Doughnut(doughnut);
     
     
     var doughnutDatas = [
                {
                    value: (100 - passpercent),
                    color: "#455C73",
                    label: "Failed"
                },
                {
                    value: passpercent,
                    color: "#3498DB",
                    label: "Passed"
                }]
            
            var myDoughnut = new Chart(document.getElementById("canvas1i2").getContext("2d")).Doughnut(doughnutDatas);
     
    
       
}

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
  
   
   
  $("#logout").click(function (){
      localStorage.clear();
     
      
        window.location.assign("index.html");
  })
  $("#logout2").click(function (){
      localStorage.clear();
     
      
        window.location.assign("index.html");
  })
   
  
       
       studentRegistration();
       unregisterStudents();
       startExam();
       endExam();
       stopExam();
       getReport();
       
       
       document.getElementById("viewCandidates").addEventListener("click",viewCandidates,false);
 
  
 
 
 
 
 
 
 
 
     
}
 


window.addEventListener("load",start,false);

 $(document).ready(function () {

            var cb = function (start, end, label) {
                console.log(start.toISOString(), end.toISOString(), label);
                $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
                //alert("Callback has fired: [" + start.format('MMMM D, YYYY') + " to " + end.format('MMMM D, YYYY') + ", label = " + label + "]");
            }

            var optionSet1 = {
                startDate: moment().subtract(29, 'days'),
                endDate: moment(),
                minDate: '01/01/2012',
                maxDate: '12/31/2015',
                dateLimit: {
                    days: 60
                },
                showDropdowns: true,
                showWeekNumbers: true,
                timePicker: false,
                timePickerIncrement: 1,
                timePicker12Hour: true,
                ranges: {
                    'Today': [moment(), moment()],
                    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                },
                opens: 'left',
                buttonClasses: ['btn btn-default'],
                applyClass: 'btn-small btn-primary',
                cancelClass: 'btn-small',
                format: 'MM/DD/YYYY',
                separator: ' to ',
                locale: {
                    applyLabel: 'Submit',
                    cancelLabel: 'Clear',
                    fromLabel: 'From',
                    toLabel: 'To',
                    customRangeLabel: 'Custom',
                    daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    firstDay: 1
                }
            };
            $('#reportrange span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
            $('#reportrange').daterangepicker(optionSet1, cb);
            $('#reportrange').on('show.daterangepicker', function () {
                console.log("show event fired");
            });
            $('#reportrange').on('hide.daterangepicker', function () {
                console.log("hide event fired");
            });
            $('#reportrange').on('apply.daterangepicker', function (ev, picker) {
                console.log("apply event fired, start/end dates are " + picker.startDate.format('MMMM D, YYYY') + " to " + picker.endDate.format('MMMM D, YYYY'));
            });
            $('#reportrange').on('cancel.daterangepicker', function (ev, picker) {
                console.log("cancel event fired");
            });
            $('#options1').click(function () {
                $('#reportrange').data('daterangepicker').setOptions(optionSet1, cb);
            });
            $('#options2').click(function () {
                $('#reportrange').data('daterangepicker').setOptions(optionSet2, cb);
            });
            $('#destroy').click(function () {
                $('#reportrange').data('daterangepicker').remove();
            });
        });
        
        
         $('document').ready(function () {
            
             
             $(".sparkline_one").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 4, 5, 6, 3, 5, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6], {
                type: 'bar',
                height: '125',
                barWidth: 13,
                colorMap: {
                    '7': '#a1a1a1'
                },
                barSpacing: 2,
                barColor: '#26B99A'
            });

            $(".sparkline11").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3], {
                type: 'bar',
                height: '40',
                barWidth: 8,
                colorMap: {
                    '7': '#a1a1a1'
                },
                barSpacing: 2,
                barColor: '#26B99A'
            });

            $(".sparkline22").sparkline([2, 4, 3, 4, 7, 5, 4, 3, 5, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6], {
                type: 'line',
                height: '40',
                width: '200',
                lineColor: '#26B99A',
                fillColor: '#ffffff',
                lineWidth: 3,
                spotColor: '#34495E',
                minSpotColor: '#34495E'
            });

            var doughnutData = [
                {
                    value: 30,
                    color: "#455C73"
                },
                {
                    value: 30,
                    color: "#9B59B6"
                },
                {
                    value: 60,
                    color: "#BDC3C7"
                },
                {
                    value: 100,
                    color: "#26B99A"
                },
                {
                    value: 120,
                    color: "#3498DB"
                }
        ];
            var myDoughnut = new Chart(document.getElementById("canvas1i").getContext("2d")).Doughnut(doughnutData);
           
            
        });
        
        
          //define chart clolors ( you maybe add more colors if you want or flot will add it automatic )
        var chartColours = ['#96CA59', '#3F97EB', '#72c380', '#6f7a8a', '#f7cb38', '#5a8022', '#2c7282'];

        //generate random number for charts
        randNum = function () {
            return (Math.floor(Math.random() * (1 + 40 - 20))) + 20;
        }

        $(function () {
            var d1 = [];
            //var d2 = [];

            //here we generate data for chart
            for (var i = 0; i < 30; i++) {
                d1.push([new Date(Date.today().add(i).days()).getTime(), randNum() + i + i + 10]);
                //    d2.push([new Date(Date.today().add(i).days()).getTime(), randNum()]);
            }

            var chartMinDate = d1[0][0]; //first day
            var chartMaxDate = d1[20][0]; //last day

            var tickSize = [1, "day"];
            var tformat = "%d/%m/%y";
            
           
            

            //graph options
            var options = {
                grid: {
                    show: true,
                    aboveData: true,
                    color: "#3f3f3f",
                    labelMargin: 10,
                    axisMargin: 0,
                    borderWidth: 0,
                    borderColor: null,
                    minBorderMargin: 5,
                    clickable: true,
                    hoverable: true,
                    autoHighlight: true,
                    mouseActiveRadius: 100
                },
                series: {
                    lines: {
                        show: true,
                        fill: true,
                        lineWidth: 2,
                        steps: false
                    },
                    points: {
                        show: true,
                        radius: 4.5,
                        symbol: "circle",
                        lineWidth: 3.0
                    }
                },
                legend: {
                    position: "ne",
                    margin: [0, -25],
                    noColumns: 0,
                    labelBoxBorderColor: null,
                    labelFormatter: function (label, series) {
                        // just add some space to labes
                        return label + '&nbsp;&nbsp;';
                    },
                    width: 40,
                    height: 1
                },
                colors: chartColours,
                shadowSize: 0,
                tooltip: true, //activate tooltip
                tooltipOpts: {
                    content: "%s: %y.0",
                    xDateFormat: "%d/%m",
                    shifts: {
                        x: -30,
                        y: -50
                    },
                    defaultTheme: false
                },
                yaxis: {
                    min: 0
                },
                xaxis: {
                    mode: "time",
                    minTickSize: tickSize,
                    timeformat: tformat,
                    min: chartMinDate,
                    max: chartMaxDate
                }
            };
            
            
            
            var plot = $.plot($("#placeholder33x"), [{
                label: "Email Sent",
                data: d1,
                lines: {
                    fillColor: "rgba(150, 202, 89, 0.12)"
                }, //#96CA59 rgba(150, 202, 89, 0.42)
                points: {
                    fillColor: "#fff"
                }
            }], options);
        });
        

   function barchart(strs){
   
    var salesChartCanvas = document.getElementById("salesChart").getContext("2d");
     
     
   var data=  strs.split("#");
    
           
          
  // This will get the first returned node in the jQuery collection.
  var salesChart = new Chart(salesChartCanvas);

   
    
      
 
  var salesChartData = {
    labels: ["2014","2015","2016"],
     
    datasets: [ {
       
        fillColor: "#ffffff",
        strokeColor: "#96CA59",
        pointColor: "rgb(255,255,255)",
        pointStrokeColor: "#b1b7d1",
        pointHighlightFill: "#bbb",
        pointHighlightStroke: "rgb(255,255,255)",
        data: [49, 50, 60, 81, 50, 50,50, 60, 81, 50, 50, 50, 40,45]
      }
    ]
  };
      salesChartData.datasets[0].data =data;
      
      
 
  var salesChartOptions = {
    //Boolean - If we should show the scale at all
    showScale: true,
    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines: true,
    
     label: "Candidates progress",
    //String - Colour of the grid lines
    scaleGridLineColor: "rgba(0,0,0,.05)",
    //Number - Width of the grid lines
    scaleGridLineWidth: 1,
    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,
    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,
    //Boolean - Whether the line is curved between points
    bezierCurve: false,
    //Number - Tension of the bezier curve between points
    bezierCurveTension: 0,
    //Boolean - Whether to show a dot for each point
    pointDot: true,
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