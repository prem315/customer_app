var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider

	.when('/', {
		controller: 'customerController',
		templateUrl: 'app/views/customers.html'
	})

	.when('/orders/:customerId', {
		controller: 'ordersController',
		templateUrl: 'app/views/orders.html'
	})

	.otherwise({ redirectTo: '/' });
})