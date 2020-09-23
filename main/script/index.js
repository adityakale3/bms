var ping = require("jjg-ping");

// Change theme
function changeTheme() {
  console.log(document.body.classList.contains("theme-dark"));
  if (document.body.classList.contains("theme-dark")) {
    document.body.classList.remove("theme-dark");
  } else {
    document.body.classList.add("theme-dark");
  }
}

// Check internet
var internetStatus = 0;
var internet = document.getElementById("internet");
var internetClass = document.getElementById("internetClass");
var pingElement = document.getElementById("ping");
const checkInternet = () => {
  if (navigator.onLine) {
    internetStatus = 1;
    internet.innerHTML = "<b>Online</b>";
    if (internetClass.classList.contains("bg-info")) {
      internetClass.classList.remove("bg-info");
      internetClass.classList.add("bg-success");
    } else if (internetClass.classList.contains("bg-danger")) {
      internetClass.classList.remove("bg-danger");
      internetClass.classList.add("bg-success");
    } else if (internetClass.classList.contains("bg-success")) {
    }
  } else {
    internetStatus = 0;
    internet.innerHTML = "<b>Offline</b>";
    if (internetClass.classList.contains("bg-info")) {
      internetClass.classList.remove("bg-info");
      internetClass.classList.add("bg-danger");
    } else if (internetClass.classList.contains("bg-success")) {
      internetClass.classList.remove("bg-success");
      internetClass.classList.add("bg-danger");
    } else if (internetClass.classList.contains("bg-danger")) {
    }
  }
};
window.addEventListener("online", checkInternet);
window.addEventListener("offline", checkInternet);
checkInternet();

//Ping
setInterval(checkPing, 15000);

function checkPing() {
  ping.system.ping("www.google.com", function (latency, status) {
    if (status) {
      // Host is reachable/up. Latency should have a value.
      console.log("Google is reachable (" + latency + " ms ping).");
      if (latency < 150) {
        pingElement.innerHTML = `<b id="pingColor"><i class="icon-wifi s-18"></i> ${latency} ms 👍</b>`;
        document.getElementById("pingColor").style.color = "#00FF00";
      } else if (latency >= 150 && latency <= 300) {
        pingElement.innerHTML = `<b id="pingColor"><i class="icon-wifi s-18"></i> ${latency} ms</b>`;
        document.getElementById("pingColor").style.color = "#ffa500";
      } else if (latency > 300) {
        pingElement.innerHTML = `<b id="pingColor"><i class="icon-wifi s-18"></i> ${latency} ms</b>`;
        document.getElementById("pingColor").style.color = "#ff0000";
      }
    } else {
      // Host is down. Latency should be 0.
      console.log("Google is unreachable.");
      pingElement.innerHTML = `<b style="color:red"><i class="icon-wifi s-18"></i> Bad Connectivity</b>`;
    }
  });
}

checkPing();
// Function to give status of internet
const checkNetStatus = () => {
  if (navigator.onLine) {
    return true;
    checkPing();
  } else {
    return false;
    checkPing();
  }
};
