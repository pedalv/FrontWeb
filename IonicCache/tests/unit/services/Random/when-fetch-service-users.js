'use strict';

describe('when fetch service random users', function () {
	beforeEach(module('cache.services'));
	var userList = {};
	var result = {};
	var userListToReturn = [
		{
			"gender":"female",
			"name": {
				"title":"mrs",
				"first":"özsu",
				"last":"arslanoğlu"
			},
			"location": {
				"street":"9395 fatih sultan mehmet cd",
				"city":"kayseri",
				"state":"çorum",
				"postcode":76375
			},
			"email":"özsu.arslanoğlu@example.com",
			"login": {
				"username":"greenbird899",
				"password":"cheese1",
				"salt":"AgfFrOSU",
				"md5":"be92732ef10cd2401c02016579dabdc2",
				"sha1":"38785eb4db86d7365547d32f2c367be19bff0623",
				"sha256":"fb0e73c1ff389e6b02872c7e1c4aa53fdda5ed2ce17073221459019996105883"
			},
			"registered":1434793699,
			"dob":675109151,
			"phone":"(993)-293-5545",
			"cell":"(313)-658-3901",
			"id": {
				"name":"",
				"value":null
			},
			"picture": {
				"large":"https://randomuser.me/api/portraits/women/96.jpg",
				"medium":"https://randomuser.me/api/portraits/med/women/96.jpg",
				"thumbnail":"https://randomuser.me/api/portraits/thumb/women/96.jpg"
			},
			"nat":"TR"
		},
		{
			"gender":"female",
			"name": {
				"title":"mrs",
				"first":"carolina",
				"last":"crespo"
			},
			"location": {
				"street":"6048 calle del barquillo",
				"city":"jerez de la frontera",
				"state":"castilla y león",
				"postcode":40576
			},
			"email":"carolina.crespo@example.com",
			"login": {
				"username":"whitetiger940",
				"password":"nopass",
				"salt":"rdsEr0SL",
				"md5":"40eae6bdd306dda3e552690c61258e44",
				"sha1":"e486accbba92beaf1d89ac009538cbe2ef6c057f",
				"sha256":"96313a656d7a2f85e8bcf8c57ef7d87e498f62a0500832c7a613f7b0d26dd2b8"
			},
			"registered":1010577086,
			"dob":1051304131,
			"phone":"916-704-534",
			"cell":"610-025-165",
			"id": {
				"name":"DNI",
				"value":"33538109-W"
			},
			"picture": {
				"large":"https://randomuser.me/api/portraits/women/56.jpg",
				"medium":"https://randomuser.me/api/portraits/med/women/56.jpg",
				"thumbnail":"https://randomuser.me/api/portraits/thumb/women/56.jpg"
			},
			"nat":"ES"
		}
	];

	beforeEach(inject(function(usersService, $httpBackend){
		$httpBackend.expectGET("https://randomuser.me/api/?results=10")
			.respond(userListToReturn);		
		$httpBackend.flush();
	}));

	it('http is called', inject(function($httpBackend){
		$httpBackend.verifyNoOutstandingExpectation();
	}));
	
});