const electron = require('electron');

electron.app.whenReady().then(() => {

  const win = new electron.BrowserWindow({
    width: 300,
    height: 600,
  });

  win.loadFile('./index.html');

});
