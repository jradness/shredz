var app = angular.module('shredz.feed.feedStatus', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/feedstatus', {
      controller: 'feedStatusCtrl',
      templateUrl: 'views/feed/feedstatus.tpl.html'
    })
});

app.controller('feedStatusCtrl', function ($scope, feedService, $location, $sce) {
  $scope.feedstatus = '/feedstatus';
  $scope.newStatus = {};

  $scope.clickedAddStatusButton = function () {
    // $scope.statusPost.push($scope.newStatus);
    var videoUrl = shredzValidator($scope.newStatus.mediaUrl);
    var newType = 'img';
    var newUrl = $scope.newStatus.mediaUrl;

    if (videoUrl !== null) {
      console.log('here be cheeeeeze: ' + videoUrl);
      newType = 'video';
      newUrl = videoUrl;
    }

    $scope.newStatus = {
      profilePic: $scope.newStatus.userPic,
      uploadDate: new Date(),
      title: $scope.newStatus.title,
      mediaUrl: newUrl,
      description: $scope.newStatus.description,
      type: newType,
      commentArray: []
    };


    feedService.makePost($scope.newStatus, function (post) {
      $location.path('/feed');
    }, function (err) {
      //throw up prompt with error
    });

    $scope.newStatus = {};

  };

  var shredzValidator = function (mediaUrl) {

    var validProp = function (mediaUrl) {
      if (mediaUrl) {
        return true;
      } else {
        return false;
      }
    };

    var isVideo = function (mediaUrl) {
      var fileExtArray = ['jpg', 'png', 'gif', 'jpeg', 'svg'];
      var fileExtSplit = mediaUrl.split('.');
      var fileExtLength = fileExtSplit.length;
      var fileExtLast = fileExtSplit[fileExtLength - 1];

      if (fileExtArray.indexOf(fileExtLast) !== -1) {
        return false;
      } else {
        return true;
      }
    }

    var validUrl = function (string) {

      if (string.indexOf("youtu") > -1 && string.indexOf("v=") > -1) {

        var index = string.indexOf("v=") + 2;
        var end = string.substr(index);
        string = "https://www.youtube.com/embed/" + end;
        return string;

      } else if ("youtu" && "/") {

        var index = string.lastIndexOf("/") + 1;
        var end = string.substr(index);
        string = "https://www.youtube.com/embed/" + end;

        console.log(string);
        return string;

        return null;
      } else {}

    };

    if (mediaUrl && isVideo(mediaUrl) && validProp(mediaUrl) && validUrl(mediaUrl)) {
      mediaUrl = validUrl(mediaUrl);
      return mediaUrl;
    } else {
      console.log('mediaUrl was invalid');
      return null;
    }

  };



  //    $scope.deleteComment = function (index) {
  //        $scope.commentArray.splice(index, 1);
  //    };
});