var myApp = angular.module('blogApp');


myApp.controller('AboutController', ['$scope','LocalAboutData','AboutData', function($scope,LocalAboutData,AboutData) {



    $scope.articles = LocalAboutData.nodes;


    $scope.getAboutData = function getAboutData(){
        AboutData.searchAbout($scope.query, function (error, data) {
            if (!error) {
                $scope.aboutjson = data.nodes;
                //console.log(data.nodes);
            }
        });

    }


}]);