'use strict';

module.exports = function(app){
    const { json } = require('body-parser');
    var jsonku = require('./controller');

    app.route('/')
    .get(jsonku.index);

    // tampilkan data

    app.route('/tampil')
    .get(jsonku.tampilkanSemuaDataMahasiswa);

    // tampilkan data by id 
    app.route('/tampil/:id')
    .get(jsonku.tampilkanId);


    // tambah data
    app.route('/tambah')
    .post(jsonku.tambahMahasiswa);

    // update data
    app.route('/update')
    .put(jsonku.updateMahasiswa);

    // hapus data
    app.route('/delete')
    .delete(jsonku.hapusMahasiswa);

    // nested

    app.route('/group')
    .get(jsonku.tampilGroup);
};
