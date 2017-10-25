$(function() {

    const allStreamUrl = 'https://api.twitch.tv/kraken/streams/?client_id=0vq0ks45nlz5gv55gd937j5cb4lqah';
    const searchTerm = document.getElementById("search-bar").value;

    $.getJSON(allStreamUrl, function(data) {
        console
    });
    var test = document.getElementsByClassName('col');
    for (let a = 0; a < test.length; a++) {
        test[a].addEventListener('click', function() {
            window.open('https://www.google.com');
        })
    };






// This allows the enter key to do the same function as clicking
    $("#search-bar").keyup(function(event){
        if (event.keyCode === 13) {
            $("#search-button").click();
    }
    });

// This give the input button a click event handler.
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
