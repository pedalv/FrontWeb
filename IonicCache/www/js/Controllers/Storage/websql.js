angular.module('cache.controllers')

.controller('websqlCtrl', function($scope, $stateParams, $location,  $ionicPopup) {

	var vm = this;
  vm.title = "Utvikler navn i SPS";
	vm.db = -1;
  vm.msg = '';

  function openDB() {
    vm.db = window.openDatabase('mydbpeoples', '1.0', 'Test DB', 2 * 1024 * 1024);  
  }

  function populateDB() {
    vm.db.transaction(function (tx) {
      tx.executeSql('CREATE TABLE IF NOT EXISTS Peoples (id unique, name, position)');
      tx.executeSql('INSERT INTO Peoples (id, name, position) VALUES (1, "Per", "leader utviklingsgruppe")');
      tx.executeSql('INSERT INTO Peoples (id, name, position) VALUES (2, "Yizhak", "Designer")');
      tx.executeSql('INSERT INTO Peoples (id, name, position) VALUES (3, "Cato", "Systemutvikler")');
      tx.executeSql('INSERT INTO Peoples (id, name, position) VALUES (4, "Stein", "Systemutvikler")');
      tx.executeSql('INSERT INTO Peoples (id, name, position) VALUES (5, "Fredrik", "Systemutvikler")');
      tx.executeSql('INSERT INTO Peoples (id, name, position) VALUES (6, "Pedro", "Systemutvikler")');
      vm.msg = '<p>Peoples table created and rows inserted.</p>';
      document.querySelector('#status').innerHTML =  vm.msg;
    })
  }

  function showDBinfo() {
    vm.db.transaction(function (tx) {
      tx.executeSql('SELECT * FROM Peoples', [], function (tx, results) {
        var len = results.rows.length, i;
        vm.msg = "<p>Found rows: " + len + "</p>" +
                 "<p><b>Name</b>, Position</p>";
        document.querySelector('#status').innerHTML +=  vm.msg;
        for (i = 0; i < len; i++){
          vm.msg = "<div class='people'>" +
                   "<b>" + results.rows.item(i).name + "</b>, " + 
                       results.rows.item(i).position + 
                   "</div>";
          document.querySelector('#status').innerHTML +=  vm.msg;
        }
      }, null);
    });
  }

	function initCtrl() {
    try {
      if (!window.openDatabase) {
        $location.path('/');
        // An alert dialog
        var alertPopup = $ionicPopup.alert({
           title:    'Om storage data via WebSQL!',
           template: 'Your browser not supported "window.openDatabase"'
        });
        alertPopup.then(function(res) {
           console.log('Your browser not supported "window.openDatabase"');
        });
      } else {
        openDB();
        populateDB();
        showDBinfo();
        vm.msg = "Peoples table created and rows inserted correctly.";
      }
    } catch(e) {
      console.log(e.message);
    }
  };

  initCtrl();

});