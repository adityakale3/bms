// Get session Files
var session = require("electron").remote.session;
var ses = session.fromPartition("persist:name");

function setCookie(data, name) {
  var expiration = new Date();
  var hour = expiration.getHours();
  hour = hour + 6;
  expiration.setHours(hour);
  ses.cookies.set(
    {
      url: BaseURL, //the url of the cookie.
      name: name, // a name to identify it.
      value: data, // the value that you want to save
      expirationDate: expiration.getTime(),
    },
    function (error) {
      /*console.log(error);*/
    }
  );
}

function getCookie(name) {
  var value = {
    name: name, // the request must have this format to search the cookie.
  };
  ses.cookies.get(value, function (error, cookies) {
    console.log(cookies[0].value); // the value saved on the cookie
    return cookies[0].value;
  });
}
