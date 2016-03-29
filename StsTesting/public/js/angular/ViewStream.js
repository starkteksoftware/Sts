/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
function start(){
    try{
     var requestUrl = sessionStorage.getItem("URL")+"/StreamItem";
  
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
    asyncRequest.addEventListener("readystatechange",
    function() { 
            parseLog(asyncRequest);  //callBack( asyncRequest );
    }, false);
     
    asyncRequest.open( "GET", requestUrl, true );
    asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
    asyncRequest.send();
     }
     catch(err){
         console.log(err)
     }
  
}


function parseLog(asyncRequest){
    if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
           {
           var data = JSON.parse(asyncRequest.responseText);
           alert(data);
           console.log(data);
           var docslength = data.length;
        var string = "";
       for(var docs = 0; docs < docslength; docs++ ){
           string+=  '<div class="col-md-4">'
                    
                    +'<div class="box box-widget widget-user">'
                       +' '
                        +'<div class="widget-user-header ">'
                          +'  <a href="ViewActiveStream.html?channel='+data[docs].id+'"> <h3 class="white widget-user-username">'+data[docs].title+'</h3></a>'
                            +'<h5 class="widget-user-desc">'+data[docs].message+'</h5>'
                            +'<h6 class="widget-user-desc">Active  </h6>'
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
           document.getElementById("classBody").innerHTML = string;
      
       }
       }



 var app = angular.module('myApp', []);
 app.controller('viewCtrl', function($scope,$http) {
     
 });

window.addEventListener("load",start,false);