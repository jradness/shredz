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
  $scope.feeds = [];
  $scope.newComment = {};

  feedService.getPosts(function (posts) {
    $scope.feeds = posts;
  }, function (err) {

  });

  $scope.trustUrl = function (url) {
    return $sce.trustAsResourceUrl(url);
  };

  //    $scope.statusPostButton = function ($scope) {
  //        $scope.statusArray.push($scope.statusPost[index])
  //    }
  function incrementIndex() {
    index += 1;
  }



  $scope.postCommentButton = function (post) {
    $scope.newComment = {
      username: 'User',
      commentDate: new Date(),
      comment: post.newComment.comment
    };

    feedService.makeComment($scope.newComment, function (post) {
      $location.path('/feed');
    }, function (err) {
      //throw up prompt with error
    });
    //post.commentArray.push($scope.newComment);
    post.newComment.comment = '';

  }
});