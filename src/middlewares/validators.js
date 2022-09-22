const validateNickname = (nickname) => {
  const nicknameRegex =
    /^(?=.*[A-Za-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣])(?=.{2,})/;

  if (!nicknameRegex.test(nickname)) {
    const error = new Error("INVALID_NICKNAME");
    error.statusCode = 400;

    throw error;
  }
};

const validateId = (id) => {
  const idRegex = /^(?=.*[A-Za-z0-9])(?=.{5,})/;

  if (!idRegex.test(id)) {
    const error = new Error("INVALID_ID");
    error.statusCode = 400;

    throw error;
  }
};

const validatePassword = (password) => {
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})/;

  if (!passwordRegex.test(password)) {
    const error = new Error("INVALID_PASSWORD");
    error.statusCode = 400;

    throw error;
  }
};

module.exports = {
  validateNickname,
  validateId,
  validatePassword,
};
