$(function() {
    const allStreamUrl = 'https://api.twitch.tv/kraken/streams/?client_id=0vq0ks45nlz5gv55gd937j5cb4lqah';

// When the page first loads, 25 random streams get uploaded.
    $.getJSON(allStreamUrl, function(data) {
        var test = document.getElementsByClassName('col');
        for (let a = 0; a < test.length; a++) {
            let imgUrl = data.streams[a].preview.medium;
            let imgTag = document.createElement('img');
            let streamerUrl = data.streams[a].channel.url;
            imgTag.setAttribute('src', imgUrl);
            test[a].append(imgTag);
            test[a].addEventListener('click', function() {
                window.open(streamerUrl);
            })
        };
    });



// This allows the enter key to do the same function as clicking
    $("#search-bar").keyup(function(event){
        if (event.keyCode === 13) {
            $("#search-button").click();
    }
    });

// This give the input button a click event handler.
    $("#search-button").click(function() {
        let searchTerm = document.getElementById("search-bar").value;
        let streamUrl = 'https://api.twitch.tv/kraken/streams/?client_id=0vq0ks45nlz5gv55gd937j5cb4lqah&game=' + searchTerm;

        if (searchTerm === '') {
            alert('Don\'t forget to type in the game you want to watch!');
        }
        else {
            searchTerm = document.getElementById("search-bar").value;
            console.log(streamUrl);
        }

    })

});
