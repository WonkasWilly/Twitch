$(function() {
    const allStreamUrl = 'https://api.twitch.tv/kraken/streams/?client_id=0vq0ks45nlz5gv55gd937j5cb4lqah';
<<<<<<< HEAD

=======
    var allStreamData;
>>>>>>> f8bd6bc85b8e056b8c04b7ed7ff6df108dcf7bc6
    const searchTerm = document.getElementById("search-bar").value;
    var counter = 0;

<<<<<<< HEAD
    $.getJSON(allStreamUrl, function(data) {
        var test = document.getElementsByClassName('col');
        for (let a = 0; a < test.length; a++) {
            let imgTag = document.createElement('img');
            imgTag.setAttribute('src', 'https://static-cdn.jtvnw.net/previews-ttv/live_user_nl_kripp-640x360.jpg');
            test[a].append(imgTag);
            test[a].addEventListener('click', function() {
                window.open('https://www.google.com');
            })
        };
    });



=======
    //This creates the main display/grid that holds all the data from the Twitch API.
    function createGrid() {
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
    $.getJSON(allStreamUrl, function(data) {
        allStreamData = data;
        console.log(allStreamData);
    });
    console.log(allStreamData);

>>>>>>> f8bd6bc85b8e056b8c04b7ed7ff6df108dcf7bc6


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

            });
        }
    })

});
