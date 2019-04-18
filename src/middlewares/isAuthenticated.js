const jwt = require('jsonwebtoken');

module.exports.isAuthenticated = function (req, res, next) {
  let token = req.cookies.token || 
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token']
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
}
