const jwt = require('jsonwebtoken');
// import dotenv

const generateJWT = (user) => {
      return jwt.sign(user, process.env.SECRETRPRIVATEKEY, { expiresIn: '4h' });
}
