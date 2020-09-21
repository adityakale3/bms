// Get Token Files
const fs = require("fs");
var path = "./authAPI/loginToken.txt";

// Get Token from Auth File
let getToken = () => {
  return new Promise(function (resolve, reject) {
    if (fs.existsSync(path)) {
      if (fs.readFileSync(path, { encoding: "utf8", flag: "r" }) == "") {
        resolve({ err: true, msg: "No Data" });
      } else {
        resolve({
          err: false,
          msg: fs.readFileSync(path, { encoding: "utf8", flag: "r" }),
        });
      }
    } else {
      reject({ err: true, msg: "File Not Found" });
    }
  });
};

// Set Token in Auth File
let setToken = (tokenData) => {
  if (fs.existsSync(path)) {
    fs.unlinkSync(path);

    try {
      fs.writeFileSync(path, tokenData);
      return true;
    } catch (err) {
      return false;
    }
  } else {
    try {
      fs.writeFileSync(path, tokenData);
      return true;
    } catch (err) {
      return false;
    }
  }
};

let delToken = () => {
  if (fs.existsSync(path)) {
    fs.unlinkSync(path);
    return true;
  } else {
    return true;
  }
};

module.exports = {
  getToken,
  setToken,
  delToken,
};
