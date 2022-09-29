const jwt = require("jsonwebtoken");

const loginRequired = async (req, res, next) => {

 
  const access = jwt.verify(token, process.env.KEY);
  const { id, user_id, admin } = access;
  
  req.id = id;
  req.user_id = user_id;
  req.admin = admin;
  return next();
};

module.exports = { loginRequired };
