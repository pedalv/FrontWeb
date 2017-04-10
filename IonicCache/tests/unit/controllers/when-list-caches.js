'use strict';

describe('when show a cache list options', function () {
	beforeEach(module(
		'ionic',
		'cache.controllers'));
	var cachelistCtrl;
	beforeEach(inject(function($rootScope, $controller){
		var scope = $rootScope.$new();
		cachelistCtrl = $controller('cachelistCtrl', {$scope: scope});
	}));

	it('should a list with caching options', function(){
		expect(cachelistCtrl.lists).toBeDefined();
		expect(cachelistCtrl.lists.length).toBe(4);
		expect(cachelistCtrl.lists[0].title).toBe('Local Storage');
		expect(cachelistCtrl.lists[0].id).toBe('local');		
	});

});