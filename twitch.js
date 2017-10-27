$(function() {

    const allStreamUrl = 'https://api.twitch.tv/kraken/streams/?client_id=0vq0ks45nlz5gv55gd937j5cb4lqah';
    const test = document.getElementsByClassName('col');

// When the page first loads, 25 random streams get uploaded.
    $.getJSON(allStreamUrl, function(data) {
        for (let a = 0; a < test.length; a++) {
            let imgUrl = data.streams[a].preview.medium;
            let imgTag = document.createElement('img');
            let streamerUrl = data.streams[a].channel.url;
            imgTag.setAttribute('src', imgUrl);
            test[a].append(imgTag);
            let createAnchor = document.createElement('a');
            createAnchor.setAttribute('href', streamerUrl);
            createAnchor.setAttribute('target', '_blank');
            let imgSelector = document.querySelector("img[src='" + imgUrl + "']");
            imgSelector.parentNode.insertBefore(createAnchor, imgSelector);
            createAnchor.appendChild(imgSelector);
        }

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
// If the input is left blank, you'll get an alert.
      if   (searchTerm === '') {
            alert('Don\'t forget to type in the game you want to watch!');
        }
// This gives you 25 streams of the stream of your choice.
        else {
            $.getJSON(streamUrl, function(data) {
                $('.col').empty();
                let searchTerm = document.getElementById("search-bar").value;
                let streamUrl = 'https://api.twitch.tv/kraken/streams/?client_id=0vq0ks45nlz5gv55gd937j5cb4lqah&game=' + searchTerm;
                for (let a = 0; a < test.length; a++) {
                    let imgUrl = data.streams[a].preview.medium;
                    let imgTag = document.createElement('img');
                    let streamerUrl = data.streams[a].channel.url;
                    imgTag.setAttribute('src', imgUrl);
                    test[a].append(imgTag);
                    let createAnchor = document.createElement('a');
                    createAnchor.setAttribute('href', streamerUrl);
                    createAnchor.setAttribute('target', '_blank');
                    let imgSelector = document.querySelector("img[src='" + imgUrl + "']");
                    imgSelector.parentNode.insertBefore(createAnchor, imgSelector);
                    createAnchor.appendChild(imgSelector);
                }
            });
    }

    })

});
