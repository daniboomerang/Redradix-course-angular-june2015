/* Our App is an Angular Module */
var GNAApp = angular.module('GNAApp', []);	

/* Creating a new directive for aur app */	
GNAApp.directive('gna', function($interval) {
  return {
    restrict: 'E',
    scope: {},
    template: ' <div id="gna-container" class="container"> ' + 
              ' <h1> GNA Programado MOD {{mod}}</h1> ' +
              '  Por favor pulsa "GNA": ' +
              '  <button type="submit" class="btn btn-default" ng-click="generateRandomNumber()">GNA</button> ' +
              '  <div id="display"> ' +
              '   <div id="random-number"> ' +
              '    <h1> El numero aleatorio generado es: {{randomNumber}} </h1> ' +
              '   </div> ' +
              '  </div> ' +
              ' </div> ',
    link: function (scope, element, attrs) {
      function generateRandomNumber (){return Math.floor((Math.random() * attrs.mod) + 1)}
      scope.mod = attrs.mod;
      scope.randomNumber;
      scope.generateRandomNumber = function() {
        var stop;
          // Don't start a new geeration if we are already running GNA
          if ( angular.isDefined(stop) ) return;
          stop = $interval(function() {
            scope.randomNumber = generateRandomNumber();
          }, 1000);
      };         
    }
  };
});




    