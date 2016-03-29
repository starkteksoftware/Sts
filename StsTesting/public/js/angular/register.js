/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
  
  

 var app = angular.module('myApp', []);
 app.controller('validateCtrl', function($scope,$http) {
    
  
   $scope.showme = false;
   $scope.wrongPassword = false;
    var url = sessionStorage.getItem("URL")+"";
    
     $scope.mouseIn = function(){
         
     };  
      
    $scope.subForm = function (){
        if( $scope.myForm.$valid){
             $scope.wrongPassword = false;
            if($scope.password !== $scope.repassword){
                $scope.wrongPassword = true;
                return;
                
            }
                
            
         $http({
        method : "POST",
        url : url+"/CreateAccount?fullName="+$scope.fullName+"&email="+$scope.emailUser+"&password="+$scope.password
    }).then(function mySucces(response) {
        
       var data = JSON.stringify(response.data);//(response.data);
       
        $scope.success = response.data.message;
        
        
       
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