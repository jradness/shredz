var app = angular.module('shredz.profile', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/profile', {
      controller: 'profileCtrl',
      templateUrl: 'views/profile/profile.tpl.html'
    })
});


app.controller('profileCtrl', function ($scope) {
  $scope.create = '/profile';
});
