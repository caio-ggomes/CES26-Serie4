// server.js

const express = require('express')
        , app = express()
        , path = require('path')
        , multer = require('multer')
        , fs = require('fs');

// cria uma instancia de middleware configurada

const storage = multer.diskStorage({
    destination: function(request, file, cb){
        cb(null, 'uploads/');
    },
    filename: function(request, file, cb){
        cb(null, file.originalname);
    }
});

const upload = multer({storage});

app.get('/', 
    function(request, response){
        response.sendFile(__dirname + '/' + 'index.htm');
    }
);

app.use(express.static('public'));

// rota indicada no atributo action do formulario
app.post('/file_upload', upload.single('file'), 
    function(request, response){
        response.send('<h2>Upload realizado com sucesso!</h2>');
    }
);

app.get('/soccer_logos', 
    function(request, response){
        response.send("<img src='"+request.query.logo+".png'>");
    }
);

app.post("/titles", (req, res) => {
    fs.readFile(__dirname + '/titles.json', 'utf-8', function(error, data){
        data = JSON.parse(data);
        console.log(data);
        res.status(200).end("<p>"+JSON.stringify(data)+"</p>");
    })
});

var server = app.listen(8081, 
    function () {
        var host = server.address().address;
        var port = server.address().port;
        console.log("Example app listening at http://%s:%s", host, port);
    }
);
