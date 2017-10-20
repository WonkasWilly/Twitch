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

                var counter = 0;
                for (let i=0; i < 5; i++) {
                    var createDiv = document.createElement("div");
                    createDiv.setAttribute('id', 'row' + i.toString());
                    document.getElementById('streamer-container').appendChild(createDiv);
                    for (let x=0; x < 4; x++) {
                        var createInnerDiv = document.createElement('div');
                        createInnerDiv.setAttribute('class', 'col card');
                        createInnerDiv.setAttribute('id', 'col'+counter.toString());
                        document.getElementById('row' + i.toString()).appendChild(createInnerDiv);
                        counter += 1;
                    }
                }

                
            });
        }
    })

});
