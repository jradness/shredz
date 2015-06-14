var app = angular.module('shredz.feed',['ngRoute', 'shredz.feed.feedStatus']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/feed', {
            controller: 'feedCtrl',
            templateUrl: 'views/feed/feed.tpl.html'
        })
});


app.controller('feedCtrl', function($scope, feedService) {
    $scope.feed = '/feed';
    $scope.feeds = feedService.statusPosts;


//    $scope.statusPostButton = function ($scope) {
//        $scope.statusArray.push($scope.statusPost[index])
//    }
});




