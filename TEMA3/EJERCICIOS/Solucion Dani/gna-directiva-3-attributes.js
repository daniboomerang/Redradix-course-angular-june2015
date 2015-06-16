/* Our App is an Angular Module */
var gnaAsDirective = angular.module('gnaAsDirective', []);  

/* Creating a new directive for aur app */  
gnaAsDirective.directive('gna', function($interval) {
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
      function generateRandomNumber (){return Math.floor((Math.random() * attrs.mod) + 1)}
      scope.mod = attrs.mod;
      scope.interval = attrs.interval;
      scope.randomNumber;
      scope.generateRandomNumber = function() {
        $interval(function() {
          scope.randomNumber = generateRandomNumber();
        }, scope.interval);
      };         
    }
  };
});