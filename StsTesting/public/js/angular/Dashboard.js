/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



 
 var app = angular.module('myApp', ['ngSanitize']);
 app.controller('dashboardCtrl', function($scope,$http) {
     
      $scope.sendLink = function (){
           window.location.assign("Upload.html");
      };
      var url = sessionStorage.getItem("URL")+"";
    
   $http({
        method : "GET",
        url : url+"/Dashboard?user="+sessionStorage.getItem("user")
    }).then(function mySucces(response) {
       
       $scope.username = sessionStorage.getItem("user");
      // var data = JSON.stringify(response.data.documents);//(response.data);
       var docslength = response.data.documents.length;
        var string = "";
       for(var docs = 0; docs < docslength; docs++ ){
                        var d = new Date();
                        var presentDate = d.getDate()+"/" +d.getMonth()+"/"+d.getFullYear();
                        function parseDates(str) {
                            var mdy = str.split('/')
                        
                            return ""+mdy[1]+"/"+ mdy[0]+"/"+ mdy[2];
                                           }
                 
                        var date1 = new Date(parseDates(response.data.documents[docs].date));
                        var date2 = new Date(parseDates(presentDate));
                        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
                 
                  console.log(response.data.documents[docs].videokey.replace(sessionStorage.getItem("user"),""));
                 string+=  '<div class="col-md-4">'
                    
                    +'<div class="box box-widget widget-user">'
                       +' '
                        +'<div class="widget-user-header ">'
                          +'  <a href="VideoPlay.html?video='+response.data.documents[docs].videokey.replace(sessionStorage.getItem("user"),"")+'"> <h3 class="white widget-user-username">'+response.data.documents[docs].datastored.title+'</h3></a>'
                            +'<h5 class="widget-user-desc">'+response.data.documents[docs].datastored.message+'</h5>'
                            +'<h6 class="widget-user-desc">Active '+diffDays+' days ago </h6>'
                        +'</div>'
                        +'<div class="widget-user-image">'
                           +' <img class="img-circle" src="libs/dist/img/user1-128x128.jpg" alt="User Avatar">'
                      +'  </div>'
                       +' <div class="box-footer">'
                            +'<div class="row">'
                                +'<div class="col-sm-4 border-right">'
                                    +'<div class="description-block">'
                                        +'<h5 class="description-header">0</h5>'
                                        +'<span class="description-text">VIEWS</span>'
                                    +'</div><!-- /.description-block -->'
                               +' </div><!-- /.col -->'
                               +' <div class="col-sm-4 border-right">'
                                    +'<div class="description-block">'
                                        +'<h5 class="description-header">0</h5>'
                                        +'<span class="description-text">LIKES</span>'
                                    +'</div><!-- /.description-block -->'
                                +'</div>'
                                +'<div class="col-sm-4 border-right">'
                                   +' <div class="description-block">'
                                       +' <h5 class="description-header">0</h5>'
                                        +'<span class="description-text">Comments</span>'
                                   +' </div>'
                               +' </div>'
                            +'</div>'
                        +'</div>'
                               +' </div>'
                       +' </div>'
               +' </div>'
                       
           
       }
       
     //   $scope.myHtml = string;
     document.getElementById("classBody").innerHTML = string;
       
    }, function myError(response) {
       
         
    });
 });
                 
                 
             
             
     

