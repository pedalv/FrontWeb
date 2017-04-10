'use strict';

describe('when websql cache', function () {
	beforeEach(module(
		'ionic',
		'cache.controllers'));
	var websqlCtrl;
	beforeEach(inject(function($rootScope, $controller){
		var scope = $rootScope.$new();
		websqlCtrl = $controller('websqlCtrl', {$scope: scope});
	}));

	it('should be bigger than 0 the number of hits', function(){
		expect(websqlCtrl.title).toBe("Utvikler navn i SPS");
		expect(websqlCtrl.db).toBeDefined()
		expect(websqlCtrl.msg).toBe("Peoples table created and rows inserted correctly.");
	});

});	