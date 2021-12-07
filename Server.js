var express = require('express');
app = express();
port = process.env.PORT || 3000;
mongoose = require('mongoose');
livro = require('./api/Models/LivroModel'); //cria o modelo e carrega ele
bodyParser = require('body-parser');

// mongoose instancia da conexão url
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv Henrique:<Mongo@Db1000>@trabalhofinal.sx77l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var Routes = require('./api/Routes/LivroRoute');
Routes(app);

app.listen(port);