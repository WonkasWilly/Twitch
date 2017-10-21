$(function() {

    //This creates the main display/grid that holds all the data from the Twitch API.
    function createGrid() {
        var counter = 0;
        for (let i=0; i < 5; i++) {
            var createDiv = document.createElement('div');
            createDiv.setAttribute('class', 'row');
            createDiv.setAttribute('id', 'row' + i);
            document.getElementById('streamer-container').appendChild(createDiv);
            for (let x=0; x < 4; x++) {
                var createInnerDiv = document.createElement('div');
                createInnerDiv.setAttribute('class', 'col card');
                createInnerDiv.setAttribute('id', 'col' + counter.toString());
                document.getElementById('row' + i).appendChild(createInnerDiv);
                counter += 1;
            }
        }
    }

    createGrid();


    $("#search-bar").keyup(function(event){
        if (event.keyCode === 13) {
            $("#search-button").click();
    }
    });


    $("#search-button").click(function() {

        const searchTerm = document.getElementById("search-bar").value;
        let streamUrl = 'https://api.twitch.tv/kraken/streams/?client_id=0vq0ks45nlz5gv55gd937j5cb4lqah&game=' + searchTerm;
        let allStreamUrl = 'https://api.twitch.tv/kraken/streams/?client_id=0vq0ks45nlz5gv55gd937j5cb4lqah';
        //If the input field is blank, the output is 25 random streams.
        if (searchTerm === "") {
            $.getJSON(allStreamUrl, function(data) {
                console.log(allStreamUrl);
                alert('Please type in the game you want to stream.');
            })
        }
        //Outputs 20 streams based on the input data
        else {
            $.getJSON(streamUrl, function(data) {
                createGrid();
            });
        }
    })

});
