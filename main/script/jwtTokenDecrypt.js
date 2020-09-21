const jwt = require("jsonwebtoken");

const validateToken = async () => {
  // Validate Token user with input Value
  return new Promise((resolve, reject) => {
    tokenReadWrite
      .getToken()
      .then((token) => jwt.verify(token.msg, "Adityasecret"))
      .then((decryptData) => {
        resolve(decryptData);
      });
  });
};

module.exports = { validateToken };
