myApp.controller('ordersController', function($scope, $routeParams){

	/*$scope.sortBy = 'name';
	$scope.reverse = false;*/
	var customerId = $routeParams.customerId;
	$scope.orders = null;

	function init(){
		for(var i=0; i<$scope.customers.length; i++){
			if($scope.customers[i].id === parseInt(customerId)){
				$scope.orders = $scope.customers[i].orders;
				break;
			}
		}
	}

	$scope.customers = [
		{
			id: 1,
			joined: '2012-12-4', 
			name: 'Prem', 
			city: 'Ahmedabad', 
			orderTotal: '9.444',
			orders: [
				{
					id: 1,
					product: 'Shoes',
					total: '9.44'
				}
			]
		},
		{
			id: 2,
			joined: '2013-1-14', 
			name: 'Paras', 
			city: 'Delhi', 
			orderTotal: '18.88',
			orders: [
				{
					id: 1,
					product: 'Ball',
					total: '9.44'
				},
				{
					id: 2,
					product: 'Bat',
					total: '9.44'
				}
			]
		},
		{
			id: 3,
			joined: '2015-4-12', 
			name: 'Gurdeep', 
			city: 'Jammu', 
			orderTotal: '29.34',
			orders: [
				{
					id: 1,
					product: 'Laptop',
					total: '29.34'
				}
			]
		}
	];

	init();

	/*$scope.doSort = function(propName){
		$scope.sortBy = propName;
		$scope.reverse = !$scope.reverse;
	};*/
})