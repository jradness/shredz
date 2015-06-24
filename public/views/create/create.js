var app = angular.module('shredz.create', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/create', {
      controller: 'createCtrl',
      templateUrl: 'views/create/create.tpl.html'
    })
});


app.controller('createCtrl', function ($scope) {
  $scope.create = '/create';

//  $scope.clearSearch = function () {
//    $scope.searchAll = '';
//  };
});
