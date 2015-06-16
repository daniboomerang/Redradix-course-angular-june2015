/* A module for directives */
var gnaApiDirectives = angular.module('gnaApiDirectives', ['gnaApiServices']);	

/* Creating a new directive */	
gnaApiDirectives.directive('gnaApi', function($interval, gnaApiService) {
  return {
    restrict: 'E',
    scope: {},
    template: ' <div id="gna-container"> ' + 
              ' <h3> GNA Servicio API Externo con MOD {{mod}} e intervalo de tiempo {{interval}} ms</h3> ' +
              '  <button type="submit" class="btn btn-default" ng-click="generateRandomNumber()">Generar Numero Aleatorio</button> ' +
              '  <div id="display"> ' +
              '   <div id="random-number"> ' +
              '    <h3> El numero aleatorio generado es: {{randomNumber}} </h3> ' +
              '   </div> ' +
              '  </div> ' +
              ' </div> ',
    link: function (scope, element, attrs) {
      scope.$on(gnaApiService.subscriptionEvent(), function($event, randomNumber){scope.randomNumber = randomNumber;});
      scope.mod = attrs.mod;
      scope.interval = attrs.interval;
      scope.generateRandomNumber = function() {
        $interval(function() {
          gnaApiService.startService(attrs.mod);
        }, scope.interval);
      };      
    }
  };
});

gnaApiDirectives.directive('externalApi', function() {
  return {
    restrict: 'E',
    templateUrl: 'modules/api/views/external-api.html'
  };
});