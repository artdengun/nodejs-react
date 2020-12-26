const express = require('express');
const bodyParser = require('body-parser');
// kita tambahkan morgan
var morgan = require('morgan')

const app = express();



// parser applicaton/json
// ini untuk koneksi database
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));


// kita panggil routes
var routes  = require('./routes');
routes(app);

// daftar menu dari routes middlware dari index
app.use('/auth', require('./middleware'));


app.listen(3000, () => {
        console.log("Server started on port");
});