var connection = require("../koneksi");
var mysql = require("mysql");
var md5 = require("md5");
var response = require("../res");
var jwt = require("jsonwebtoken");
var config = require("../config/secret");
var ip = require("ip");
const { connect } = require("../koneksi");

// controller untuk register

exports.registrasi = function (req, res) {
  var post = {
    username: req.body.username,
    email: req.body.email,
    password: md5(req.body.password),
    role: req.body.role,
    tanggal_daftar: new Date(),
  };

  var query = "SELECT email FROM ?? WHERE ??=?";
  var table = ["user", "email", post.email];

  query = mysql.format(query, table);

  connection.query(query, function (error, rows) {
    if (error) {
      console.log(error);
    } else {
      if (rows.length == 0) {
        var query = "INSERT INTO ?? SET ?";
        var table = ["user"];
        query = mysql.format(query, table);
        connection.query(query, post, function (error, rows) {
          if (error) {
            console.log(error);
          } else {
            response.ok("Berhasil menambahkan data user baru", res);
          }
        });
      } else {
        response.ok("Email sudah terdaftar!", res);
      }
    }
  }); 
}


// controller untuk login 

exports.login = function(req, res){
    var post = {
        password: req.body.password,
        email: req.body.email
    }

    // kita buat query
    var query = "SELECT * FROM ?? WHERE ??=? AND ??=?";
    var table = ["user", "password", md5(post.password), "email", post.email];

    query = mysql.format(query, table);

    connection.query(query, function(error, rows){
        if(error){
            console.log(error);
        }else {
            if(rows.length == 1 ){
                var token = jwt.sign({rows}, config.secret, {
                    // 1440 second, this default is 1440 second 25 minutes
                    expiresIn: 1440
                });
                id_user = rows[0].id_user;

                var data = {
                    id_user: id_user,
                    acces_token: token,
                    ip_addres: ip.address()
                }

                var query = "INSERT INTO ?? SET ?";
                var table = ["akses_token"];


                query = mysql.format(query, table);
                connection.query(query, data,  function(error, data, rows){
                    if(error){
                        console.log(error);
                    }else{
                        res.json({
                            success: true,
                            message: 'Token JTW is Success Generating',
                            currUser: data.id_user,
                            token: token
                           
                        });
                    }
                });
            }else {
                res.json({"Error": true, "Message":"Email or Password Wrong!"});
            }   
        }
    });
}

exports.halamanRahasia = function(req,res){
    response.ok("Halaman ini hanya untuk user dengan role = 2", res);
}