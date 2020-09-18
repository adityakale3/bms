// Function to give status of internet
const checkNetStatus = () => {
  if (navigator.onLine) {
    return true;
  } else {
    return false;
  }
};
