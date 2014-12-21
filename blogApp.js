var myApp = angular.module('blogApp',['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider.when('/', {

			templateUrl: 'homepage/home.html'

		})
			.when('/about', {
				templateUrl: 'about/about.html'
			});
		$routeProvider.otherwise({
			redirectTo: '/'
		});

	});


