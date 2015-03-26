'use strict';

describe('GNAs - Loading diferent GNA modules Scenario from navbar', function() {

	beforeEach(function() {
		browser.get('/');
	});
	
	it('should load correctly the modules when clicking at the topnavbar links ', function() {

		// topnavbar directive is present 
		var topnavbar = element(by.tagName('topnavbar'));
		expect(topnavbar.isDisplayed()).toBe(true);
		var nav = topnavbar.element(by.id('navbar'));
		expect(nav.isDisplayed()).toBe(true);
		
		// At start, manual  module is the one active'
		// 1 Checking URL
		expect(browser.getCurrentUrl()).toContain('/manual');
		// 2 Checking NAVBAR link as ACTIVE
		var manualModuleLink = element.all(by.css('.navbar-custom li')).get(0);
		expect(manualModuleLink.element(by.css('.active')).isPresent()).toBe(true);
		// 3 Checking that the module is actually PRESENT AT THE CONTENT

		///////////// CLICK TO UILogic  ///////////
		var UILogicModuleLink = element.all(by.css('.navbar-custom li')).get(1);
		UILogicModuleLink.click();
		browser.sleep(1000);
		// 1 Checking URL
		expect(browser.getCurrentUrl()).toContain('/uilogic');
		// 2 Checking NAVBAR link as ACTIVE
		expect(UILogicModuleLink.element(by.css('.active')).isPresent()).toBe(true);
		// 3 Checking that the module is actually PRESENT AT THE CONTENT

		///////////// CLICK TO Directive  ///////////
		var directiveModuleLink = element.all(by.css('.navbar-custom li')).get(2);
		directiveModuleLink.click();
		browser.sleep(1000);
		// 1 Checking URL
		expect(browser.getCurrentUrl()).toContain('/directive');
		// 2 Checking NAVBAR link as ACTIVE
		expect(directiveModuleLink.element(by.css('.active')).isPresent()).toBe(true);
		// 3 Checking that the module is actually PRESENT AT THE CONTENT

		///////////// CLICK TO Service  ///////////
		var serviceModuleLink = element.all(by.css('.navbar-custom li')).get(3);
		serviceModuleLink.click();
		browser.sleep(1000);
		// 1 Checking URL
		expect(browser.getCurrentUrl()).toContain('/service');
		// 2 Checking NAVBAR link as ACTIVE
		expect(serviceModuleLink.element(by.css('.active')).isPresent()).toBe(true);
		// 3 Checking that the module is actually PRESENT AT THE CONTENT

		///////////// CLICK TO Api  ///////////
		var apiModuleLink = element.all(by.css('.navbar-custom li')).get(4);
		apiModuleLink.click();
		browser.sleep(1000);
		// 1 Checking URL
		expect(browser.getCurrentUrl()).toContain('/api');
		// 2 Checking NAVBAR link as ACTIVE
		expect(apiModuleLink.element(by.css('.active')).isPresent()).toBe(true);
		// 3 Checking that the module is actually PRESENT AT THE CONTENT
	});

});

