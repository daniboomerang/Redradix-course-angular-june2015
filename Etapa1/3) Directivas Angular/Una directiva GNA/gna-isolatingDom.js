/* Our App is an Angular Module */
var GNAApp = angular.module('GNAApp', []);	

/* Creating a new controler for aur app */  
GNAApp.controller('GNACtrl', function ($scope, $interval){
  
  function generateRandomNumber (){return Math.floor((Math.random() * 10) + 1)}
    $scope.randomNumber;
    $scope.generateRandomNumber = function() {
      var stop;
      // Don't start a new geeration if we are already running GNA
      if ( angular.isDefined(stop) ) return;
      stop = $interval(function() {
        $scope.randomNumber = generateRandomNumber();
      }, 1000);
    };        
    
});

/* Creating a new directive for aur app */	
GNAApp.directive('gnaTemplate', function() {
  return {
    restrict: 'E',
    template: ' <div id="gna-container" class="container" ng-controller="GNACtrl"> ' + 
              '  <h1> GNA Programado </h1> ' +
              '  Por favor pulsa "GNA": ' +
              '  <button type="submit" class="btn btn-default" ng-click="generateRandomNumber()">GNA</button> ' +
              '  <div id="display"> ' +
              '   <div id="random-number"> ' +
              '    <h1> El numero aleatorio generado es: {{randomNumber}} </h1> ' +
              '   </div> ' +
              '  </div> ' +
              ' </div> '
  };
});




    