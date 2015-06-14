var app = angular.module('shredz.signup', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/signup', {
            controller: 'signupCtrl',
            templateUrl: 'views/signup/signup.tpl.html'
        });
});

app.controller('signupCtrl', function ($scope, authService) {
    $scope.username = "";
    $scope.password = "";
    $scope.confirmPassword = "";

    $scope.signUpBtnClicked = function () {
        authService.createUser($scope.username, $scope.password).then(onSignUp, failedSignup);
    };

    var onSignUp = function (data) {
        console.log(data);
    };

    var failedSignup = function (err) {
        console.log(err);
    };
});
