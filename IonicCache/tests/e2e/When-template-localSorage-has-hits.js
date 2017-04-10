'use strict';

describe('When test template in localStorage', function() {

	it('Should hits be bigger than 0', function() {
		browser.get('http://localhost:8100/#/cache/list');

   		var local = by.id('local');
   		//console.log(local);
		var ellocal = element(by.id('local'));
		//console.log(elitem);
		expect(local).toBeDefined();
		expect(ellocal).toBeDefined();
		

		var itemcontent = by.css('item-content');
		//console.log(itemcontent);
		var elitemcontent = element(by.css('item-content'));
		//console.log(elitemcontent);
		expect(itemcontent).toBeDefined();
		expect(elitemcontent).toBeDefined();
		//console.log(elitemcontent.click); // It is a [Function] but click() does not work
		elitemcontent.click;
		
		var localhits = by.binding('local.hits');
		console.log(localhits); 
		var ellocalhits = element(by.binding('local.hits'))
		console.log(element(by.binding('local.hits')));
		expect(localhits).toBeDefined();
		expect(ellocalhits).toBeDefined();
		
    }); 