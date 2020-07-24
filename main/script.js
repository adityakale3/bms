const $ = require('jquery');

var netStatus = document.getElementById('checknet');
var internetStatus = 0;






















//
//  INTERNET CONNECTIVITY
// 
// Check online status
const checkOnlineStatus = () => {
    if(navigator.onLine){
        netStatus.innerHTML = "Online";
        console.log('Online');
        internetStatus = 1;
    }else{
        netStatus.innerHTML = "Offline";
        console.log('Offline');
        internetStatus = 0;
    }
}
// Event Listener for Connectivity
window.addEventListener('online', checkOnlineStatus);
window.addEventListener('offline', checkOnlineStatus);
checkOnlineStatus();

// Function which returns internet status
getInternetStatus = () => {
    if(navigator.onLine){
        return true;
    }else{
        return false;
    }
}