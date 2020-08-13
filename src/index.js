const express = require('express');
const morgan = require('morgan');
const app = express();

//Settings and port validation
app.set('port', process.env.PORT || 8000);
app.set('json spaces', 2)

//Middlewares - Data support
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.use('/api/inicio', require('./routes/inicio'));
app.use('/api/users', require('./routes/users'));

//Starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});