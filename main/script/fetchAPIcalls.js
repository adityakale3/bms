const axios = require("axios");

let loginVerify = (empcode, password) => {
  return new Promise(function (resolve, reject) {
    const headers = {
      "Content-Type": "application/json",
      special: "Aditya",
    };

    const data = {
      empcode,
      password,
    };
    axios
      .post("http://localhost:3000/api/login", data, {
        headers: headers,
      })
      .then((response) => {
        resolve(response.data);
        // .then((response) => response.json())
      })
      .catch((error) => {
        reject(error);
      });
  });
};

let loginVerify2 = (empcode, password) => {
  return new Promise(function (resolve, reject) {
    const headers = {
      "Content-Type": "application/json",
      special: "Aditya",
    };

    const data = {
      empcode,
      password,
    };
    axios
      .post("http://localhost:3000/api/login", data, {
        headers: headers,
      })
      .then((response) => {
        resolve(response.data);
        // .then((response) => response.json())
      })
      .catch((error) => {
        reject(error);
      });
  });
};
module.exports = {
  loginVerify,
  loginVerify2,
};
