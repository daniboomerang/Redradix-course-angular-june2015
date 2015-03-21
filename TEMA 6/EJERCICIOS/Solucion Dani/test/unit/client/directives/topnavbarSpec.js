describe('topnavbar', function() {
  
	var elm, scope;

	beforeEach(function (){

		module('ngRoute');
		module('gnasDirectives');
		module('htmlTemplates');

		inject(function($injector, $compile) {
			$rootScope = $injector.get('$rootScope');
			elm = angular.element('<topnavbar></topnavbar>');
			scope = $rootScope.$new();
			$compile(elm)(scope);
			scope.$digest();

			// Spying on the broadcasting to test if we listen the events correctly
	        spyOn($rootScope, '$broadcast').andCallThrough();
		});
	});
  
	it('should render correctly the navbar links', function() {   
	    var moduleOneIdLink = elm.find('#module-one-idLink');
	    expect(moduleOneIdLink.length).toBe(1);
	    var moduleTwoIdLink = elm.find('#module-two-idLink');
	    expect(moduleTwoIdLink.length).toBe(1);
	    var moduleThreeIdLink = elm.find('#module-three-idLink');
	    expect(moduleThreeIdLink.length).toBe(1);
	    var moduleFourIdLink = elm.find('#module-four-idLink');
	    expect(moduleFourIdLink.length).toBe(1);
	    var moduleFiveIdLink = elm.find('#module-five-idLink');
	    expect(moduleFiveIdLink.length).toBe(1);
	  });

    it('should be listening "$routeChangeSuccess" and manipulate the DOM accordingly', function (){ 
		
		var $$route, currentURLMockedPath, previousURLMockedPath, originalPath;
		
    	// When Manual
    	var moduleOneIdLink = elm.find('#module-one-idLink');
    	$$route = {originalPath: '/manual'};
		currentURLMockedPath = {$$route: $$route}; 
		$$route = {originalPath: '/service'};
		previousURLMockedPath = {$$route: $$route}; 
		$rootScope.$broadcast('$routeChangeSuccess', currentURLMockedPath, previousURLMockedPath);
		expect($rootScope.$broadcast).toHaveBeenCalledWith('$routeChangeSuccess', currentURLMockedPath, previousURLMockedPath);
		expect(moduleOneIdLink.hasClass('active')).toBe(true);

		// When UILogic
    	var moduleTwoIdLink = elm.find('#module-two-idLink');
    	$$route = {originalPath: '/uilogic'};
		currentURLMockedPath = {$$route: $$route}; 
		$$route = {originalPath: '/manual'};
		previousURLMockedPath = {$$route: $$route}; 
		$rootScope.$broadcast('$routeChangeSuccess', currentURLMockedPath, previousURLMockedPath);
		expect($rootScope.$broadcast).toHaveBeenCalledWith('$routeChangeSuccess', currentURLMockedPath, previousURLMockedPath);
		expect(moduleOneIdLink.hasClass('active')).toBe(false);
		expect(moduleTwoIdLink.hasClass('active')).toBe(true);

		// When Directive
    	var moduleThreeIdLink = elm.find('#module-three-idLink');
    	$$route = {originalPath: '/directive'};
		currentURLMockedPath = {$$route: $$route}; 
		$$route = {originalPath: '/uilogic'};
		previousURLMockedPath = {$$route: $$route}; 
		$rootScope.$broadcast('$routeChangeSuccess', currentURLMockedPath, previousURLMockedPath);
		expect($rootScope.$broadcast).toHaveBeenCalledWith('$routeChangeSuccess', currentURLMockedPath, previousURLMockedPath);
		expect(moduleTwoIdLink.hasClass('active')).toBe(false);
		expect(moduleThreeIdLink.hasClass('active')).toBe(true);

		// When Service
    	var moduleFourIdLink = elm.find('#module-four-idLink');
    	$$route = {originalPath: '/service'};
		currentURLMockedPath = {$$route: $$route}; 
		$$route = {originalPath: '/directive'};
		previousURLMockedPath = {$$route: $$route}; 
		$rootScope.$broadcast('$routeChangeSuccess', currentURLMockedPath, previousURLMockedPath);
		expect($rootScope.$broadcast).toHaveBeenCalledWith('$routeChangeSuccess', currentURLMockedPath, previousURLMockedPath);
		expect(moduleThreeIdLink.hasClass('active')).toBe(false);
		expect(moduleFourIdLink.hasClass('active')).toBe(true);

		// When API
    	var moduleFiveIdLink = elm.find('#module-five-idLink');
    	$$route = {originalPath: '/api'};
		currentURLMockedPath = {$$route: $$route}; 
		$$route = {originalPath: '/service'};
		previousURLMockedPath = {$$route: $$route}; 
		$rootScope.$broadcast('$routeChangeSuccess', currentURLMockedPath, previousURLMockedPath);
		expect($rootScope.$broadcast).toHaveBeenCalledWith('$routeChangeSuccess', currentURLMockedPath, previousURLMockedPath);
		expect(moduleFourIdLink.hasClass('active')).toBe(false);
		expect(moduleFiveIdLink.hasClass('active')).toBe(true);
    });	
});