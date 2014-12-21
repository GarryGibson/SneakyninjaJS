var myApp = angular.module('blogApp');

	myApp.directive('blogPost',['nl2brFilter',function(nl2br){
	
	return {
		restrict: 'E',
		templateUrl:'./homepage/blog-post.html'
		
	};
	
}]);