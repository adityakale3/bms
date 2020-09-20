const fetch = require("node-fetch");
const Headers = fetch.Headers;

let loginVerify = (empcode, password) => {
  return new Promise(function (resolve, reject) {
    var myHeaders = new Headers();
    myHeaders.append("special", "Aditya");
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append(
    //   "x-access-token",
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBjb2RlIjoiMjAwMDUyMTEiLCJuYW1lIjoiQWRpdHlhIFRyeWFtYmFrIEthbGUiLCJiYW5kIjoiNEUiLCJkZXB0IjoiT3BlcmF0aW9ucyIsInN1YmRlcHQiOiJPcGVyYXRpb25zIiwicm8iOiJKYXdsZWthciBTaHJpcGFkIiwiZGVzaWduYXRpb24iOiJPZmZpY2VyIiwicGxhbnRjb2RlIjoiMTE5OSIsImRpdmlzaW9uIjoiUHVuZSIsImlhdCI6MTYwMDYxNTc4MCwiZXhwIjoxNjAwNzAyMTgwfQ.v9bA0OM5F5Z5bTDG2Ufz27epQdExklh5h0etQ1yGmCY"
    // );
    var raw = JSON.stringify({
      empcode,
      password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/api/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = {
  loginVerify,
};
