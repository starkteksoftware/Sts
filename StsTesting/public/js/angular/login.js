var app = angular.module('myApp', []);
 app.controller('loginCtrl', function($scope,$http) {
       var URL = location.protocol +"//"+ location.host;
       sessionStorage.setItem("URL",URL);
       localStorage.setItem("URL",URL);
       $scope.showme = false;
       var url = sessionStorage.getItem("URL")+"";
    
       $scope.mouseIn = function(){
         
       };  
       
        $scope.subForm = function (){
        if( $scope.myForm.$valid){
            
               
             
         $http({
        method : "GET",
        url : url+"/Login?email="+$scope.emailUser+"&password="+$scope.password
         }).then(function mySucces(response) {
       
       var data = JSON.stringify(response.data);//(response.data);
       
         $scope.success = response.data.message;
         document.getElementById("error").setAttribute("style","color:green");
         if(response.data.message === 'Log in Success'){
         sessionStorage.setItem("user",response.data.username);
         window.location.assign("Dashboard.html");
         }else{
          document.getElementById("error").setAttribute("style","color:red");
         }
        
        
       
    }, function myError(response) {
        //$scope.myWelcome = response.statusText;
         alert(response);
         
    });
                 
                 
             }
    } ;
    
     $scope.keypressed = function (e){
         
         if(e.keyCode === 13){
         if($scope.myForm.$valid){
         $http({
        method : "GET",
        url : url
    }).then(function mySucces(response) {
        $scope.myWelcome = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
                 
                 
             }else{
              //   show the invalid error
                 
                  
                 
             }
         }
     };
     
 });