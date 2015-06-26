var app = angular.module('shredz.feed');

app.service('feedService', function ($sce) {

  this.statusPosts = [
    {
      userPic: 'http://skateparkoftampa.com/spot/headshots/2696.jpg',
      username: 'JRadness',
      uploadDate: new Date,
      description: 'SO AMAZING!!',
      mediaUrl: "https://www.youtube.com/embed/z57lfGPjGbI",
      type: 'video',
      likebutton: 0,

      commentArray: [
        {
          username: 'Erik',
          comment: 'Holla that man so RAD!!',
          commentDate: new Date(2015, 1, 14)
                 },
        {
          username: 'Arto',
          comment: '...so sick!',
          commentDate: new Date(2015, 5, 10)
                 }
             ]
    },
    {
      userPic: 'http://skateparkoftampa.com/spot/headshots/2696.jpg',
      username: 'JRadness',
      uploadDate: new Date(2015, 3, 15),
      description: 'Nice Trick!!',
      mediaUrl: "http://www.sanantonio.gov/Parksandrec/images/skateboardPaltoPaltoR.jpg",
      type: 'img',

      commentArray: [
        {
          username: 'Mark',
          comment: 'Killer man where was that spot?',
          commentDate: new Date(2015, 1, 14)
              }
            ]
     }
     ];

  this.getPosts = function () {

    for (var x = 0; x < this.statusPosts.count; x++) {
      this.statusPosts[x].mediaUrl = $sce.trustAsResourceUrl(this.statusPosts[x].mediaUrl);
    }

    return this.statusPosts;
  };
});
