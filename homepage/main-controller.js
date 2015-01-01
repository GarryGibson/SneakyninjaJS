/**
 * Created by garry.gibson on 02/12/14.
 */
var myApp = angular.module('blogApp');


myApp.controller('MainController', ['$scope','LocalData','SneakyData', function($scope,LocalData,SneakyData) {



    $scope.articles = LocalData.nodes;

    $scope.getSneakyData = function getSneakyData(){
        SneakyData.searchSneaky($scope.query, function (error, data) {
            if (!error) {
                $scope.bosh = data;
console.log(data);
            }
        });

	
    }
    
    


}]);
