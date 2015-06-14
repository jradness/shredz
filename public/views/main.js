var app = angular.module('shredz', ['ngRoute', 'shredz.login', 'shredz.signup', 'shredz.feed']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/login'
        })
        .otherwise({
            redirectTo: '/login'
        });
});
