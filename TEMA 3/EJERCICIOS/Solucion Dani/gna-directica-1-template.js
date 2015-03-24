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

});

/* Creating a new directive for aur app */	
gnaAsDirective.directive('gna', function() {
  return {
    restrict: 'E',
    template:  ' <div id="gna-container" ng-controller="gnaAsDirectiveCtrl"> ' +
               '   <h3> GNA como Directiva</h3> ' +
               '   Por favor pulsa "GNA": ' +
               '   <button type="submit" class="btn btn-default" ng-click="generateRandomNumber()">Generar Numero Aleatorio</button> ' +
               '   <div id="display"> ' +
               '     <div id="random-number"> ' +
               '       <h3> El numero aleatorio generado es: {{randomNumber}} </h3> ' +
               '     </div> ' +
               '   </div> ' +
               ' </div> '
  };
});