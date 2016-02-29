myApp.controller('ordersController', function($scope, $routeParams, customerFactory){

	var customerId = $routeParams.customerId;
	$scope.customer = null;

	function init(){
		$scope.customer = customerFactory.getCustomer(customerId);
	}

	init();

})