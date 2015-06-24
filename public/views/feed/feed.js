var app = angular.module('shredz.feed', ['ngRoute', 'shredz.feed.feedStatus']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/feed', {
      controller: 'feedCtrl',
      templateUrl: 'views/feed/feed.tpl.html'
    })
    //  GoogleMapApiProvider.configure({
    //    china: true
    //  });
});


app.controller('feedCtrl', function ($scope, feedService, $sce) {
  $scope.feed = '/feed';
  $scope.feeds = feedService.getPosts();

  $scope.trustUrl = function (url) {
    return $sce.trustAsResourceUrl(url);
  };

  //    $scope.statusPostButton = function ($scope) {
  //        $scope.statusArray.push($scope.statusPost[index])
  //    }
});
