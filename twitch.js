$(function() {

    const allStreamUrl = 'https://api.twitch.tv/kraken/streams/?client_id=0vq0ks45nlz5gv55gd937j5cb4lqah';
    const searchTerm = document.getElementById("search-bar").value;

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
                document.getElementById('row' + i).appendChild(createInnerDiv);
                counter += 1;
            }
        }
    }


    createGrid();
    $(".col").click(function() {
        alert('this box is working');
    });


    $("#search-bar").keyup(function(event){
        if (event.keyCode === 13) {
            $("#search-button").click();
    }
    });


    $("#search-button").click(function() {

        let streamUrl = 'https://api.twitch.tv/kraken/streams/?client_id=0vq0ks45nlz5gv55gd937j5cb4lqah&game=' + searchTerm;
        //If the input field is blank, the output is 25 random streams.
        if (searchTerm === "") {
            $.getJSON(allStreamUrl, function(data) {
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
