// Get Token Files
const fs = require("fs");

let getToken = () => {
  if (fs.existsSync("./loginToken.txt")) {
    fs.readFileSync("./loginToken.txt", "utf8", (error, data) => {
      if (error) {
        return "error reading file";
      } else {
        if (data == "") {
          return "No data present";
        } else {
          return data;
        }
      }
    });
  } else {
    return "File not exists";
  }
};

let setToken = (tokenData) => {
  if (fs.existsSync("./loginToken.txt")) {
    fs.unlinkSync("./loginToken.txt");
    fs.writeFileSync("./loginToken.txt", tokenData);
  } else {
    fs.writeFile("./loginToken.txt", tokenData, function (err) {
      if (err) {
        return false;
      } else {
        return true;
      }
    });
  }
};
