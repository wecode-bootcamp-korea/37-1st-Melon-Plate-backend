const jwt = require("jsonwebtoken");

const accessToken = async (req, res, next) => {
  try {
      const token = req.headers.authorization;
      const access = jwt.verify(token, process.env.KEY);
      const user_id = access.userId;
      req.body.user_id = user_id;
      return next();
  } catch (err) {
    console.log("토큰에러")
    return res
      .status(err.statusCode || 400)
      .json({ message: "DO_NOT_HAVE_TOKEN" });
  }
};

module.exports = { accessToken };
