'use strict';

describe('when localStorage cache', function () {
	beforeEach(module(
		'ionic',
		'cache.controllers'));
	var localCtrl;
	beforeEach(inject(function($rootScope, $controller){
		var scope = $rootScope.$new();
		localCtrl = $controller('localCtrl', {$scope: scope});
	}));

	it('should be bigger than 0 the number of hits', function(){
		expect(localCtrl.hits).toBeGreaterThan(0);
		//localStorage: when browser is close keeps number of hits
	});

});	