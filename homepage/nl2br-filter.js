/**
 * Created by garry.gibson on 02/12/14.
 */

var myApp = angular.module('blogApp');



myApp.filter('nl2br', function ($sce) {
    return function (text) {
        return text ? $sce.trustAsHtml(text.replace(/\n/g, '<br/>')) : '';

    };
});