describe('navbar', function() {
  
	var elm, scope;

	beforeEach(function (){

		module('daniboomerangDirectives');
		module('htmlTemplates');

		inject(function($injector, $compile) {

	 		$rootScope = $injector.get('$rootScope');	   
			elm = angular.element('<topnavbar></topnavbar>');
			scope = $rootScope;
			$compile(elm)(scope);
			scope.$digest();

			// Spying on the broadcasting to test if we listen the events correctly
	        spyOn($rootScope, '$broadcast').andCallThrough();
		});
	});
  
    it('should be listening "event:activeArea" and act accordingly', function (){ 
		
    	/* If Cover, it must contract */
    	var area = 'Cover'; 
		$rootScope.$broadcast('event:activeArea', area);
		expect($rootScope.$broadcast).toHaveBeenCalledWith('event:activeArea', area);
		var header = elm.find('header');
		expect(header.length).toBe(1);
		expect(header.hasClass('expand')).toBe(false);

    	/* If something different to cover, cover it must expand */
		area = 'SomethingElse'; 
		$rootScope.$broadcast('event:activeArea', area);
		expect($rootScope.$broadcast).toHaveBeenCalledWith('event:activeArea', area);
		header = elm.find('header.expand.navbar-fixed-top');
		expect(header.length).toBe(1);
    });	

    it('should be listening "event:inactiveArea" and expand', function (){

		/* If About, it must expand and the section active */
		area = 'About';
		$rootScope.$broadcast('event:activeArea', area);
		expect($rootScope.$broadcast).toHaveBeenCalledWith('event:activeArea', area);
		var whoIAmLink = elm.find('#about-link');
		expect(whoIAmLink.length).toBe(1);
		expect(whoIAmLink.hasClass('active')).toBe(true);
        var whoIAmIcon = elm.find('#about-icon');
      	expect(whoIAmIcon.length).toBe(1);
      	expect(whoIAmIcon.hasClass('faa-spin')).toBe(true);

      	/* If Waht I like, it must expand and the section active */
		area = 'Loving';
		$rootScope.$broadcast('event:activeArea', area);
		expect($rootScope.$broadcast).toHaveBeenCalledWith('event:activeArea', area);
		var whatILikeLink = elm.find('#loving-link');
		expect(whatILikeLink.length).toBe(1);
		expect(whatILikeLink.hasClass('active')).toBe(true);
        var whatILikeIcon = elm.find('#loving-icon');
      	expect(whatILikeIcon.length).toBe(1);
      	expect(whatILikeIcon.hasClass('faa-pulse')).toBe(true);
    });	
});