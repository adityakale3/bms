const fs = require("fs");
const axios = require("axios");
const readWriteToken = require("./readWriteToken.js");

var path = "./userData/userData.json";
var token = readWriteToken.getToken().then((getTokenData) => {
  return getTokenData;
});

let verifyCurrentUserData = () => {
  return new Promise(function (resolve, reject) {
    if (fs.existsSync(path)) {
      fs.readFile(path, "utf-8", (err, data) => {
        if (err) {
          reject({ err: true, msg: err });
        }
        JSON.parse(data.empcode).then((dataNew) => {
          resolve({
            err: false,
            msg: { empcode: dataNew.empcode, lastSync: dataNew.dateSync },
          });
        });
      });
    } else {
      reject({ err: true, msg: "FNF" }); // FNF : File Not Found
    }
  });
};

// Check File Status
let checkFileStatus = () => {
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

// Create New File with Basic Data
let createFile = (empcode) => {
  var data = {
    empcode: empcode,
    syncDate: "",
    project_IDs: [],
    projects: [],
    routineTasks: [],
    projectTasks: [],
  };
  if (fs.existsSync(path)) {
    fs.unlinkSync(path);
    try {
      fs.writeFileSync(path, JSON.stringify(data));
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  } else {
    try {
      fs.writeFileSync(path, JSON.stringify(data));
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
};

// Fetch Routine Tasks
let fetchRoutineTask = (empcode) => {
  return new Promise(function (resolve, reject) {
    readWriteToken.getToken().then((getTokenData) => {
      const headers = {
        "Content-Type": "application/json",
        special: "Aditya",
        "x-access-token": getTokenData.msg,
      };

      console.log(headers);

      const data = {
        empcode,
      };

      axios
        .post("http://localhost:3000/api/fetch/fetch_task", data, {
          headers: headers,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

// Fetch Project IDs
let fetchProjectIDs = (empcode) => {
  return new Promise(function (resolve, reject) {
    readWriteToken.getToken().then((getTokenData) => {
      const headers = {
        "Content-Type": "application/json",
        special: "Aditya",
        "x-access-token": getTokenData.msg,
      };

      const data = {
        empcode,
      };
      axios
        .post("http://localhost:3000/api/fetch/fetch_project_ids", data, {
          headers: headers,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

// Fetch Project Details
let fetchProjectDetails = (proID) => {
  return new Promise(function (resolve, reject) {
    readWriteToken.getToken().then((getTokenData) => {
      const headers = {
        "Content-Type": "application/json",
        special: "Aditya",
        "x-access-token": getTokenData.msg,
      };

      const data = {
        empcode,
      };
      axios
        .post(
          `http://localhost:3000/api/fetch/fetch_project_details/${proID}`,
          data,
          {
            headers: headers,
          }
        )
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

// Fetch Project Tasks
let fetchProjectTasks = (empcode) => {
  return new Promise(function (resolve, reject) {
    readWriteToken.getToken().then((getTokenData) => {
      const headers = {
        "Content-Type": "application/json",
        special: "Aditya",
        "x-access-token": getTokenData.msg,
      };

      const data = {
        empcode,
      };
      axios
        .post(`http://localhost:3000/api/fetch/fetch_all_project_tasks`, data, {
          headers: headers,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

module.exports = {
  verifyCurrentUserData,
  checkFileStatus,
  createFile,
  fetchRoutineTask,
  fetchProjectIDs,
  fetchProjectTasks,
  fetchProjectDetails,
};
