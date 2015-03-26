/* A Module for directives */
var gnaAsDirectiveDirecives = angular.module('gnaAsDirectiveDirecives', []);  

/* Creating a new directive */  
gnaAsDirectiveDirecives.directive('gnaDirectiveModuleDirective', function($interval) {
  return {
    restrict: 'E',
    template:  ' <div id="gna-container"> ' +
               '   <h3> GNA como directiva con MOD {{mod}} e intervalo de tiempo {{interval}} ms</h3> ' +
               '   Por favor pulsa "GNA": ' +
               '   <button type="submit" class="btn btn-default" ng-click="generateRandomNumber()">Generar Numero Aleatorio</button> ' +
               '   <div id="display"> ' +
               '     <div id="random-number"> ' +
               '       <h3> El numero aleatorio generado es: {{randomNumber}} </h3> ' +
               '     </div> ' +
               '   </div> ' +
               ' </div> ',
    link: function (scope, element, attrs) {
      
      var gnaContainerId = element.find('#gna-container');
      var randomNumberId = element.find('#random-number');

      function generateRandomNumber (){return Math.floor((Math.random() * attrs.mod) + 1)}
      scope.mod = attrs.mod;
      scope.interval = attrs.interval;
      scope.randomNumber;

      scope.generateRandomNumber = function() {
        $interval(function() {
          scope.randomNumber = generateRandomNumber();
          if (scope.randomNumber % 2 == 0) { gnaContainerId.addClass('alarm'); randomNumberId.addClass('even'); }
          else { gnaContainerId.removeClass('alarm'); randomNumberId.removeClass('even'); }
        }, scope.interval);
      };         
    }
  };
});