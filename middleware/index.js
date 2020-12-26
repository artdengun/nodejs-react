var express = require('express');
var auth    = require('../middleware/auth');
const verifikasi = require('./verifikasi');
var router  = express.Router();

// kita daftarkan menu registrasi di menu js kita
router.post('/api/v1/register', auth.registrasi);

// register url login
router.post('/api/v1/login', auth.login);

// alamat verifikasi yang perlu otorisasi
router.get('/api/v1/rahasia', verifikasi(), auth.halamanRahasia);


module.exports = router;