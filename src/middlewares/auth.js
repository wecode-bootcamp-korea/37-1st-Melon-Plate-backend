const jwt = require("jsonwebtoken");

const loginRequired = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const access = jwt.verify(token, process.env.JWT_KEY);
    const { id, adminTF } = access;

    req.id = id;
    req.admin = adminTF;

    return next();
  } 
  catch (err) {
    return res
      .status(err.statusCode || 400)
      .json({ message: "DO_NOT_HAVE_TOKEN" });
  }
};

module.exports = { loginRequired };
