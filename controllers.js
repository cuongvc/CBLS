var myController = function($scope){
	var app = angular.module('myApp', []);
	app.controller('customersCtrl', function($scope) {
      $scope.slots = [{day : 'sang t2'}, {day : 'sang t2'},{day : 'sang t2'},{day : 'sang t2'},{day : 'sang t2'},{day : 'sang t2'}]
      $scope.course = {info : {id : 1, name : 'Toi uu hoa to hop'}}
	});
}