var app = angular.module('shredz.login', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/login', {
            controller: 'loginCtrl',
            templateUrl: 'views/login/login.tpl.html'
        });
});

app.controller('loginCtrl', function ($scope, authService, $location) {

    $scope.username = "";
    $scope.password = "";

    $scope.loginBtnClicked = function () {
        authService.login($scope.username, $scope.password).then(onLogin, failedLogin);
    };

    var onLogin = function (data) {
        $location.path('/feed');
        console.log(data);
    };

    var failedLogin = function (err) {
        console.log(err);
    };
});
