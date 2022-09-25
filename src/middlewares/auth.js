const jwt = require("jsonwebtoken");

const accessToken = async (req, res, next) => {
  try {
    console.log("============",req.body,req.headers,"============================================")
      const token = req.headers.authorization;
      const access = jwt.verify(token, process.env.KEY)
      const {id,user_id,adminTF} = access
      req.id = id
      req.user_id = user_id
      req.admin = adminTF
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
