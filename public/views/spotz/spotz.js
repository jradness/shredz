var app = angular.module('shredz.spotz', ['ngRoute', 'ngMap']); //, 'uiGmapgoogle-maps'

app.config(function ($routeProvider) { //, GoogleMapApiProviders
    $routeProvider
        .when('/spotz', {
            controller: 'spotzCtrl',
            templateUrl: 'views/spotz/spotz.tpl.html'
        });
    //uiGmapGoogleMapApiProvider.configure({
    //    key: 'your api key',
    // v: '3.17',
    //libraries: 'weather,geometry,visualization'
});
//GoogleMapApiProvider.configure({
//china: true
//});
//});




app.controller('spotzCtrl', function ($scope) {
    $scope.create = '/spotz';
    $scope.map = {
        center: {
            latitude: 45,
            longitude: -73
        },
        zoom: 8
    };
});
