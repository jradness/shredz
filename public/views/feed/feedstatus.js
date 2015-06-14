var app = angular.module('shredz.feed.feedStatus', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/feedstatus', {
            controller: 'feedStatusCtrl',
            templateUrl: 'views/feed/feedstatus.tpl.html'
        })
});

app.controller('feedStatusCtrl', function ($scope, feedService, $location) {
    $scope.feedstatus = '/feedstatus';

    $scope.newStatus = {};

    $scope.clickedAddStatusButton = function () {
        // $scope.statusPost.push($scope.newStatus);
        $scope.newStatus = {
            uploadDate: new Date(),
            title: $scope.newStatus.title,
            mediaUrl: $scope.newStatus.mediaUrl,
            description: $scope.newStatus.description
        };

        feedService.statusPosts['Erik is da boss'] = $scope.newStatus;

        $scope.newStatus = {};
        $location.path('/feed');
    };


    //    $scope.deleteComment = function (index) {
    //        $scope.commentArray.splice(index, 1);
    //    };
});
