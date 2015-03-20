describe('content', function() {
  
  var elm, scope;

  beforeEach(function (){

    module('daniboomerangDirectives');
    module('duScroll');
    module('htmlTemplates');
  
    inject(function($rootScope, $compile) {
      elm = angular.element('<content></content>');
      scope = $rootScope;
      $compile(elm)(scope);
      scope.$digest();
    });
  });

  it('should containt its sections', function() {   
    var content = elm.find('content');
    var whoIAm = elm.find('about');
    expect(whoIAm.length).toBe(1);
    var whatILike = elm.find('loving');
    expect(whatILike.length).toBe(1);
    var whatIveDone = elm.find('work');
    expect(whatIveDone.length).toBe(1);
    var whatIveLearnt = elm.find('contact');
    expect(whatIveLearnt.length).toBe(1);
  });
});