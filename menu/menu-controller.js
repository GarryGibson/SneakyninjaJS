/**
 * Created by garry.gibson on 03/12/14.
 */
var myApp = angular.module('blogApp');


myApp.controller('MenuController', ['$scope','$location', function($scope,$location) {


    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };


}]);