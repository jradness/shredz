var app = angular.module('shredz.feed');

app.service('feedService', function ($sce) {

  this.statusPosts = [
    {
      userPic: 'http://skateparkoftampa.com/spot/headshots/2696.jpg',
      username: 'JRadness',
      uploadDate: new Date(2015, 3, 15),
      title: "This guy is DA BOSS!",
      mediaUrl: "https://www.youtube.com/embed/z57lfGPjGbI",
      type: 'video',
      //            mediaUrl: 'https://s-media-cache-ak0.pinimg.com/236x/d2/47/54/d24754f0d697dcfaffee4b72bc220290.jpg',
      description: '"SO AMAZING!!"',
      commentArray: [
        {
          text: 'this is so funny',
          user_id: '321CBA98',
          commentDate: new Date(2015, 1, 14)
             },
        {
          text: '...so sick!',
          user_id: '3RD12345',
          commentDate: new Date(2015, 5, 10)
             }
         ]
    },
    {
      userPic: 'http://skateparkoftampa.com/spot/headshots/2696.jpg',
      username: 'JRadness',
      uploadDate: new Date(2015, 3, 15),
      title: "This guy is DA BOSS!",
      mediaUrl: "http://www.sanantonio.gov/Parksandrec/images/skateboardPaltoPaltoR.jpg",
      type: 'img',
      //            mediaUrl: 'https://s-media-cache-ak0.pinimg.com/236x/d2/47/54/d24754f0d697dcfaffee4b72bc220290.jpg',
      description: '"SO AMAZING!!"',
      commentArray: [
        {
          text: 'booo',
          user_id: '321CBA98',
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
