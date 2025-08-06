const jwt = require('jsonwebtoken');
const generatetoken = (user) =>{
    return jwt.sign({user},process.env.jwt);  //token generation process JWT
}

module.exports = generatetoken;

