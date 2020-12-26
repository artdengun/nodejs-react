var mysql = require('mysql');


// kita buat koneksi database 

const koneksi = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'admin',
        database: 'dbnoderestapi'
});

// kita bikin throwException jika error 

koneksi.connect((jikaError) => {
    if(jikaError) throw jikaError;
    console.log('Mysql Berhasil Terkoneksi');
});

module.exports = koneksi;