/* Our App is an Angular Module */
var gnaWithService = angular.module('gnaWithService', []);  

/* Creating a new directive for aur app */  
gnaWithService.directive('gna', function($interval, gnaService) {
  return {
    restrict: 'E',
    template:  ' <div id="gna-container"> ' +
               '   <h3> GNA con servicio con MOD {{mod}} e intervalo de tiempo {{interval}} ms</h3> ' +
               '   Por favor pulsa "GNA": ' +
               '   <button type="submit" class="btn btn-default" ng-click="generateRandomNumber()">Generar Numero Aleatorio</button> ' +
               '   <div id="display"> ' +
               '     <div id="random-number"> ' +
               '       <h3> El numero aleatorio generado es: {{randomNumber}} </h3> ' +
               '     </div> ' +
               '   </div> ' +
               ' </div> ',
    link: function (scope, element, attrs) {
      scope.mod = attrs.mod;
      scope.interval = attrs.interval;
      scope.generateRandomNumber = function() {
        $interval(function() {
          scope.randomNumber = gnaService.getRandomNumber(attrs.mod);
        }, scope.interval);
      };      
    }
  };
});

/* Creating a new service for aur app */  
gnaWithService.factory('gnaService', function() {
  return {
    getRandomNumber: function (mod) {
      return Math.floor((Math.random() * mod) + 1);
    }  
  };
});


    