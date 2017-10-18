$(function() {
    var streamerId =
    var streamURL = 'https://api.twitch.tv/kraken/streams/' + streamerId + '?client_id=0vq0ks45nlz5gv55gd937j5cb4lqah';


    $.getJSON('https://api.twitch.tv/kraken/streams/?client_id=0vq0ks45nlz5gv55gd937j5cb4lqah', function(data) {
        console.log(data);
    });
});
