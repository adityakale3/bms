const jwt = require("jsonwebtoken");
let tokenReadWrite = require("./script/readWriteToken.js");

let validate = () => {
  // tokenReadWrite.getToken().then((token) => {
  //   // console.log(token);
  //   // return new Promise((resolve, reject) => {
  //   //   resolve(jwt.verify(token.msg, "Adityasecret"));
  //   // });
  // });

  tokenReadWrite
    .getToken()
    .then((token) => jwt.verify(token.msg, "Adityasecret"))
    .then((decryptData) => {
      console.log(decryptData);
    });
};

// console.log(validate());
// validate().then((data) => {
//   console.log(data);
// });
validate();
