var app = angular.module('shredz.feed');

app.service('feedService', function () {
    this.statusPosts = {
        id_ABC12378: {
            uploadDate: new Date(2015, 3, 15),
            title: "I got wrecked by halfpipe here.",
            mediaUrl: 'https://s-media-cache-ak0.pinimg.com/236x/d2/47/54/d24754f0d697dcfaffee4b72bc220290.jpg',
            description: 'Hate this video',
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
        }
    };

});
