myApp.controller('customerController', function($scope){

	$scope.customers = [
		{joined: '2012-12-4', name: 'Prem', city: 'Ahmedabad', orderTotal: '3'},
		{joined: '2011-12-4', name: 'Gurdeep', city: 'Jammu', orderTotal: '2'},
		{joined: '2013-12-4', name: 'Paras', city: 'Delhi', orderTotal: '5'},
		{joined: '2015-12-4', name: 'Guruji', city: 'Mumbai', orderTotal: '7'}
	];
})