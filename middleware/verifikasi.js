const jwt = require("jsonwebtoken");
const config = require("../config/secret");

function verifikasi() {
  return function (req, rest, next) {
    var role = req.body.role;

    var tokenWithBearer = req.headers.authorization;
    
    if (tokenWithBearer) {
      var token = tokenWithBearer.split(' ')[1];

      jwt.verify(token, config.secret, function (error, decoded) {
        if (error) {
          return rest
            .status(401)
            .send({ auth: false, message: "token not register!" });
        } else {
          if (role == 2) {
            req.auth = decoded;
            next();
          } else {
            return rest
              .status(401)
              .send({ auth: false, message: "Failed Autherization !" });
          }
        }
      });
    } else {
      return rest
        .status(401)
        .send({ auth: false, message: "token tiak tersedia!" });
    }
  };
}

module.exports = verifikasi;
