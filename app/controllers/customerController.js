myApp.controller('customerController', function($scope, customerFactory){

	$scope.sortBy = 'name';
	$scope.reverse = false;

	var customers = [];

	function init(){
		$scope.customers = customerFactory.getCustomers();
	}

	init();

	$scope.doSort = function(propName){
		$scope.sortBy = propName;
		$scope.reverse = !$scope.reverse;
	};
})