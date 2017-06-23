const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

/*fijando el puerto, si ya hay un puerto
establecido, se lo asigno a la variable
'port', sino, se asigna el puerto 3000
a la variable 'port'*/
app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//rutas
require('./routes/index')(app);

app.listen(app.get('port'), () => {
   console.log(`servidor en puerto ${app.get('port')}`)
})
