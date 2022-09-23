const jwt = require("jsonwebtoken");

const accessToken = async (req, res, next) => {
  try {
      const token = req.headers.authorization;
      const access = jwt.verify(token, process.env.KEY)
      const {id,user_id,adminTF} = access
      req.body.id = id
      req.body.user_id = user_id
      req.body.admin = adminTF
      return next();
  } 
  catch (err) {
    console.error("토큰이 없거나 잘못되었습니다")
    return res
      .status(err.statusCode || 400)
      .json({ message: "DO_NOT_HAVE_TOKEN" });
  }
};
module.exports = { accessToken };