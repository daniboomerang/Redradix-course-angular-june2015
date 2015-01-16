/* A module for directives */
var slidesAppDirectives = angular.module('slidesAppDirectives', []);	

slidesAppDirectives.directive('content', function() {
  return {
    restrict: 'E',
    template:   ' <div id="slides-content"> ' +
                '  <div class="container" style="padding-left: 0px !important;"> ' +
                '   <ul> <h3><b>Diapositivas parte 1:</h3>' + 
                '    <li> ' +
                '     <h3> <a href="https://docs.google.com/presentation/d/1n-1gW3IyH7FzIEbJhomi9C1mo4t9X3ZTjW-eyOmRJGg/pub?start=false&loop=false&delayms=15000" target="_blank"> Presentación </a> </h3>' +
                '    </li> ' +
                '    <li> ' +
                '     <h3> <a href="https://docs.google.com/presentation/d/1kiB25xWepWtXGh0HrFyCffxhYq4o60YSBADqVq09uz0/pub?start=false&loop=false&delayms=15000" target="_blank"> Empezando con AngularJS </a> </h3>' +
                '    </li> ' +
                '    <li> ' +
                '     <h3> <a href="https://docs.google.com/presentation/d/1nIykRJihNPBZA-X-dTyrFeG76c_ajMbe6RA7CjcaYqQ/pub?start=false&loop=false&delayms=15000" target="_blank"> Controladores Angular </a> </h3>' +
                '    </li> ' +
                '    <li> ' +
                '     <h3> <a href="https://docs.google.com/presentation/d/14bAe_hw-0ds58aTQ3fIqKTGf5Nnc5dqFyP1hRqTj9ZI/pub?start=false&loop=false&delayms=15000" target="_blank"> Directivas Angular </a> </h3>' +
                '    </li> ' +
                '    <li> ' +
                '     <h3> <a href="https://docs.google.com/presentation/d/1P4wtv4tMzRt9U2ih8WpaYi7zId0fYOavVU1mxwfow3M/pub?start=false&loop=false&delayms=15000" target="_blank"> Servicios Angular & Eventos ($broadcast & $on) </a> </h3>' +
                '   </li> ' +
                '    <li> ' +
                '     <h3> <a href="https://docs.google.com/presentation/d/13q-XCUEnPSplqhLhzaAa9hD-apETnUsfbGboUXd4_rg/pub?start=false&loop=false&delayms=15000" target="_blank"> Servicio Externo ($http) & Angular Seed </a> </h3>' +
                '   </li> ' +
                '  </div> ' +
                ' </div> '
  };
});

slidesAppDirectives.directive('foot', function() {
  return {
    restrict: 'E',
    template: ' <footer class="footer"> ' +
              '  <div class="footer-row"> ' +
              '   <a href="http://www.meetup.com/Redradix-Weekends/events/219715822/" target="_blank" class="logo-redradix"><i class="fa fa-fw icon-logo-redradix"></i></a> ' +
              '   &nbsp;&nbsp; ' +
              '   & ' +
              '   &nbsp;&nbsp; ' +
              '   <a href="https://angularjs.org/" target="_blank" class="logo-angular"><img src="images/logo-angularjs.svg" alt="AngularJS" class="logo-angular"></a> ' +
              '   &nbsp;&nbsp; ' +
              '   & ' +
              '   &nbsp;&nbsp; ' +
              '   <span class="logo-dboom-wrapper"> ' +
              '    <a href="https://github.com/daniboomerang" target="_blank" ng-mouseenter="spinBoomerang = true" ng-mouseleave="spinBoomerang = false" class="dboom-wrapper logo-dboom"> ' +
              '     <i ng-class="{ ' + "'" + 'faa-spin animated ' + "'" + ': spinBoomerang}" class="fa fa-fw fa-lg icon-logo-dboom"></i> ' +
              '    </a> ' +
              '   </span> ' +   
              '  </div> ' + 
              ' </footer> '
  };
});