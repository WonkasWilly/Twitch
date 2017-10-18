$(function() {
    $("#search-bar").keyup(function(event){
        if (event.keyCode === 13) {
            $("#search-button").click();
    }
    });


    $("#search-button").click(function() {

        const searchTerm = document.getElementById("search-bar").value;
        let streamUrl = 'https://api.twitch.tv/kraken/streams/?client_id=0vq0ks45nlz5gv55gd937j5cb4lqah&game=' + searchTerm;
        let allStreamUrl = 'https://api.twitch.tv/kraken/streams/?client_id=0vq0ks45nlz5gv55gd937j5cb4lqah';

        if (searchTerm === "") {
            $.getJSON(allStreamUrl, function(data) {
                console.log(allStreamUrl);
            })
        }
        else {
            $.getJSON(streamUrl, function(data) {
                console.log(data);
                console.log(streamUrl);
                
            });
        }
    })

});
