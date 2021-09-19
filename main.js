const electron = require('electron');
require('dotenv').config({ path: 'electron-builder.env' });

electron.app.whenReady().then(() => {

  const win = new electron.BrowserWindow({
    width: 300,
    height: 600,
  });

  win.loadFile('./index.html', {
    query: {
      openWeather_apikey: process.env.OPENWEATHER_APIKEY,
      openWeather_query: process.env.OPENWEATHER_QUERY,
    }
  });
  win.setMenu(null);

});
