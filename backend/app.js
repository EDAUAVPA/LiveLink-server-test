const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

//app.use('/api/movies', require('./routes/movie'));
//app.use('/api/user', require('./routes/user'));
//app.use('/api/admin', require('./routes/admin'));

app.use(express.static(path.join(__dirname, '/public')));





app.listen(app.get('port'), () => {
    console.log(`Servidor conectado correctamente a http://localhost:${app.get('port')}`)
});