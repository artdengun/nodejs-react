"use strict";

var response = require("./res");
var connection = require("./koneksi");
const { connect } = require("./koneksi");

exports.index = function (req, res) {
  response.ok("REST api berhasil terkoneksi", res);
};

// menampilkan semua data mahasiswa

exports.tampilkanSemuaDataMahasiswa = function (req, res) {
  connection.query("SELECT * FROM mahasiswa", function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// menampilkan semua data mahasiswa by id

exports.tampilkanId = function(req, res){
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', 
    [id], function(error, rows, fields){
    if(error){
        console.log(error);
    }else{
        response.ok(rows, res);
    }
    });
};

// menambahkan data
exports.tambahMahasiswa = function (req, res) {
    var id_mahasiswa    = req.body.id_mahasiswa;
    var nim             = req.body.nim;
    var nama            = req.body.nama;
    var jurusan         = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (id_mahasiswa, nim, nama, jurusan) VALUES(?,?,?,?)', 
    [id_mahasiswa,nim,nama,jurusan], function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Berhasil Menambahkan Data!", res);
        }
    });
};

// update data

exports.updateMahasiswa = function (req, res){
    var id_mahasiswa    = req.body.id_mahasiswa;
    var nim             = req.body.nim;
    var nama            = req.body.nama;
    var jurusan         = req.body.jurusan;

    connection.query('UPDATE mahasiswa SET nim=?,nama=?,jurusan=? WHERE id_mahasiswa=?', 
    [nim, nama, jurusan, id_mahasiswa], 
    function(error, rows, fields) {
        if(error){
            console.log(error);
        }else{
            response.ok("Data Berhasil Terupdate", res);
        }
    });
};

// menghapus data berdasarkan id 
exports.hapusMahasiswa = function (req, res){
    var id_mahasiswa = req.body.id_mahasiswa;

    connection.query('DELETE FROM mahasiswa WHERE id_mahasiswa=?', [id_mahasiswa], 
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res);
        }
    });
};


// menampilkan matakuliah group

exports.tampilGroup  = function(req, res){

    connection.query('SELECT mahasiswa.id_mahasiswa, mahasiswa.nim, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks FROM krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_mahasiswa = mahasiswa.id_mahasiswa AND krs.id_matakuliah = matakuliah.id_matakuliah ORDER BY mahasiswa.id_mahasiswa', 
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.okenested(rows, res);
        }
    });
};