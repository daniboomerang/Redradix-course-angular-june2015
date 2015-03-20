describe('parallaxImage', function() {
  
  var elm, scope;

  beforeEach(function (){

    module('daniboomerangDirectives');
    inject(function($rootScope, $compile) {
      //'<div parallax-background parallax-ratio="0.3" class="parallax-image-section {{parallaxBackground}}"></div>';
      elm = angular.element(
        '<parallax-image parallax-css="bookshell-parallax-background"></parallax-image>' +
        '<parallax-image parallax-css="bookshell-parallax-background"></parallax-image>' +
        '<parallax-image parallax-css="desk-parallax-background"></parallax-image>' +
        '<parallax-image parallax-css="floor-parallax-background"></parallax-image>'
      );
      scope = $rootScope;
      $compile(elm)(scope);
      scope.$digest();
    });
  });
  
  it('should have the parallax-image-setion with its bound css', function() {   
      var renderedBookshellParallax = elm.find('div.bookshell-parallax-background.parallax-image-section');
      expect(renderedBookshellParallax.length).toBe(2);
      var renderedDeskParallax = elm.find('div.desk-parallax-background.parallax-image-section');
      expect(renderedDeskParallax.length).toBe(1);
      var renderedFloorParallax = elm.find('div.floor-parallax-background.parallax-image-section');
      expect(renderedFloorParallax.length).toBe(1);
  });

});