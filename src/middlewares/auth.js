const jwt = require("jsonwebtoken");

const loginRequired = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    console.error("토큰이 없거나 잘못되었습니다");
    return res
      .status(err.statusCode || 400)
      .json({ message: "DO_NOT_HAVE_TOKEN" });
  }
  const access = jwt.verify(token, process.env.KEY);
  const { id, user_id, admin } = access;
  
  req.id = id;
  req.user_id = user_id;
  req.admin = admin;
  return next();
};


module.exports = {loginRequired};
