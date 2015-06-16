/* Our App is an Angular Module */
var gnaAsDirective = angular.module('gnaAsDirective', []);  

/* Creating a new controler for aur app */  
gnaAsDirective.controller('gnaAsDirectiveCtrl', function ($scope, $interval){
  
  function generateRandomNumber (){return Math.floor((Math.random() * 10) + 1)}
  $scope.randomNumber;
  $scope.generateRandomNumber = function() {
    $interval(function() {
      $scope.randomNumber = generateRandomNumber();
    }, 1000);
  };

/* Crea tu directiva aqui */

});


    








    