function showToast(textToShow, typeOfToast, timeToShow) {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add text to display to element
  x.innerHTML = textToShow;

  x.className = typeOfToast;

  // Add the "show" class to DIV
  x.className = "show";

  // After x seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
    x.className = x.className.replace(typeOfToast, "");
  }, timeToShow);
}
