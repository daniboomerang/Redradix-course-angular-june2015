/* A module for directives */  
var gnaWithServiceDirectives = angular.module('gnaWithServiceDirectives', ['gnaWithServiceServices']);  

/* Creating a new directive */  
gnaWithServiceDirectives.directive('gnaDirectiveModuleService', function($interval, gnaService) {
  return {
    restrict: 'E',
    scope: {},
    template:  ' <div id="gna-container"> ' +
               '   <h3> GNA con servicio MOD {{mod}} e intervalo de tiempo {{interval}} ms</h3> ' +
               '   <button type="submit" class="btn btn-default" ng-click="generateRandomNumber()">Generar Numero Aleatorio</button> ' +
               '   <div id="display"> ' +
               '     <div id="random-number"> ' +
               '       <h3> El numero aleatorio generado es: {{randomNumber}} </h3> ' +
               '     </div> ' +
               '   </div> ' +
               ' </div> ',
    link: function (scope, element, attrs) {
      scope.$on(gnaService.subscriptionEvent(), function($event, randomNumber){scope.randomNumber = randomNumber;});
      scope.mod = attrs.mod;
      scope.interval = attrs.interval;
      scope.generateRandomNumber = function() {
        $interval(function() {
          gnaService.startService(attrs.mod);
        }, scope.interval);
      };      
    }
  };
});