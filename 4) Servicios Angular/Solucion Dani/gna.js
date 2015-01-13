/* Our App is an Angular Module */
var gnaWithService = angular.module('gnaWithService', []);  

/* Creating a new directive for aur app */  
gnaWithService.directive('gna', function($interval, gnaService) {
  return {
    restrict: 'E',
    template:  ' <div id="gna-container" class="container"> ' +
               '   <h3> GNA Como directiva de Dani con MOD {{mod}} e intervalo de tiempo {{interval}} ms</h3> ' +
               '   Por favor pulsa "GNA": ' +
               '   <button type="submit" class="btn btn-default" ng-click="generateRandomNumber()">Generar Numero Aleatorio</button> ' +
               '   <div id="display"> ' +
               '     <div id="random-number"> ' +
               '       <h3> El numero aleatorio generado es: {{randomNumber}} </h3> ' +
               '     </div> ' +
               '   </div> ' +
               ' </div> ',
    link: function (scope, element, attrs) {
      scope.$on(gnaService.subscriptionEvent(), function($event, randomNumber){ scope.randomNumber = randomNumber;});
      scope.mod = attrs.mod;
      scope.interval = attrs.interval;
      scope.generateRandomNumber = function() {
        var stop;
        // Don't start a new geeration if we are already running GNA
        if ( angular.isDefined(stop) ) return;
        stop = $interval(function() {
          gnaService.startService(attrs.mod);
        }, scope.interval);
      };      
    }
  };
});

/* Creating a new service for aur app */  
gnaWithService.factory('gnaService', function($rootScope) {

  var SUBSCRIPTION = "event:newRandomNumber";

  return {
    subscriptionEvent: function () {
      return SUBSCRIPTION;
    },
    startService: function (mod) {
      function generateRandomNumber (mod){return Math.floor((Math.random() * mod) + 1)}
      $rootScope.$broadcast(SUBSCRIPTION, generateRandomNumber(mod));
    }
  };
});


    