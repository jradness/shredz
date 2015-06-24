var app = angular.module('shredz', ['ngRoute', 'shredz.login', 'shredz.signup', 'shredz.feed', 'shredz.spotz', 'shredz.create', 'shredz.profile']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/login'
    })
    .otherwise({
      redirectTo: '/login'
    });
});
