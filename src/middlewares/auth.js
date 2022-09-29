const jwt = require("jsonwebtoken");

const loginRequired = async (req, res, next) => {
  const accessToken = req.headers.authorization;

  if (!accessToken) throw new BaseError("DO_NOT_HAVE_TOKEN", 401)

  const payload = jwt.verify(accessToken, process.env.KEY)
  
  req.id = payload.id
  req.isAdmin = payload.isAdmin

  return next();
};

const hasAdminPermission = async (req, res, next) => {
  if (req.isAdmin === true) next()
  
  throw new BaseError("HAS_NO_PERMISSION")
}

module.exports = { loginRequired, hasAdminPermission };
