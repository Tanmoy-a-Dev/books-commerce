const jwt = require('jsonwebtoken');

function genrateToken(user) {
  const payload = {
    sub: user.id,
    iat: Date.now(),
  };
  const options = {
    expiresIn: '1h',
  };
  return jwt.sign(payload, process.env.SECRET_KEY, options);
}

function setTokenCookie(res, token) {
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 3600000,
  };
  res.cookie('authenticate', token, cookieOptions);
}

module.exports = { genrateToken, setTokenCookie };
