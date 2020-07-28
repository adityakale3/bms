const {app, BrowserWindow} = require('electron');

let win;
let splash

app.on('ready', () => {
  // create main browser window
  win = new BrowserWindow({
      titleBarStyle: 'hidden',
      width: 800,
      height: 600,
      show: false, // don't show the main window
     webPreferences : {
         nodeIntegration : true
     }
  });

  // create a new `splash`-Window 
  splash = new BrowserWindow({width: 810, height: 610, transparent: true, frame: false, alwaysOnTop: true});
  splash.loadURL(`file://${__dirname}/splash/splash.html`);
  win.loadURL(`file://${__dirname}/main/home.html`);
  // if main window is ready to show, then destroy the splash window and show up the main window
  win.once('ready-to-show', () => {
      setTimeout(() => {
        splash.destroy();
        win.show();
      }, 1000);
  });
});