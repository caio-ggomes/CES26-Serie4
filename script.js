$(document).ready(function(){
    $("#titlesButton").click(function(){
        // console.log('oi');
        // var parameters = { search: $(this).val() };
        // $(document).get( '/titles',parameters, function(data) {
        //     $('#titles').html(data);
        // });
        let ajax = new XMLHttpRequest();
        ajax.open('GET', 'http://localhost:8081');
        console.log('oi');
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200) {
                response = {
                    'Corinthians': {
                        'Campeonato Paulista': 30,
                        'Copa do Brasil': 3,
                        'Campeonato Brasileiro': 7,
                        'Copa Sul-Americana': 0,
                        'Libertadores': 1,
                        'Mundial': 2
                    },
                    'Palmeiras': {
                        'Campeonato Paulista': 23,
                        'Copa do Brasil': 3,
                        'Campeonato Brasileiro': 10,
                        'Copa Sul-Americana': 0,
                        'Libertadores': 1,
                        'Mundial': 0
                    },
                    'São Paulo': {
                        'Campeonato Paulista': 21,
                        'Copa do Brasil': 0,
                        'Campeonato Brasileiro': 6,
                        'Copa Sul-Americana': 1,
                        'Libertadores': 3,
                        'Mundial': 3
                    },
                    'Santos': {
                        'Campeonato Paulista': 22,
                        'Copa do Brasil': 1,
                        'Campeonato Brasileiro': 8,
                        'Copa Sul-Americana': 0,
                        'Libertadores': 3,
                        'Mundial': 2
                    },
    
                }
                //document.getElementById('titles').innerHTML = JSON.stringify(response);
                //document.getElementById('titles').innerHTML = 'oiee';
            }
        };
        document.getElementById('titles').innerHTML = 'oiee';
        ajax.send();
    });
});