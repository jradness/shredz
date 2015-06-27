var app = angular.module('shredz.profile', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/profile', {
      controller: 'profileCtrl',
      templateUrl: 'views/profile/profile.tpl.html'
    })
});


app.controller('profileCtrl', function ($scope, feedService, $sce) {
  $scope.create = '/profile';
  $scope.feeds = feedService.getPosts();
  $scope.newComment = {};
  $scope.showUserShredz = true;

  //  $scope.trustUrl = function (url) {
  //    return $sce.trustAsResourceUrl(url);
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

    console.log(post.commentArray);
    post.commentArray.push($scope.newComment);
    post.newComment.comment = '';



  }
});









//
//    app.controller('feedCtrl', function ($scope, feedService, $sce) {
//        $scope.feed = '/feed';
//        $scope.feeds = feedService.getPosts();
//        $scope.newComment = {};
//
//        $scope.trustUrl = function (url) {
//          return $sce.trustAsResourceUrl(url);
//        };