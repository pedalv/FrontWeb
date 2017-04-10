angular.module('cache.services')
	.factory('usersService', [
		'$http',
		'$log',
		'$q',
		function($http, $log, $q) {

			var url = 'https://randomuser.me/api/?results=10';	

		    // option 1 - start
		    var getOption1 = function(onSucess){
				return $http.get(url)
						.then(function(response) {
							//console.log(response.data.results);
							onSucess(response.data.results);
				}, onError);
			};

			var onError = function () {
		        $log.error("** FEIL IN URL: "+ url +" **");
		    };
		    // option 1 - end

			//option 2 - start
			var deferred = $q.defer();
			var loaded = false;
			var usersList = {};

			function load (onSucess) {
                return deferred.promise;
            };

            function loadUsers() {
                if (loaded) {
                    deferred.resolve("Allready loaded");
                    return;
                };
                
                $http.get(url)
                	.then(function(response) {
                		//console.log(response.data.results);
                    	usersList = response.data.results;
                    	loaded = true;
                    	deferred.resolve("Loaded");                    	
                }, onError);
            };

            function getOption2(){
				if (!loaded) {
                    return deferred.promise
                    		.then(function () {
                        		return getOption2();
                    });
                }

                return usersList;
            }

            loadUsers();
            //option 2 - end

			return {
				getUsersOp1: getOption1,
				load: load,
				getUsersOp2: getOption2
			}
	}]);	


/*
https://docs.angularjs.org/api/ng/service/$http
	$http.get(url, config).then(successCallback, errorCallback);
	$http.post(url, data, config).then(successCallback, errorCallback);
	$http.head
	$http.put
	$http.delete
	$http.jsonp
	$http.patch
*/