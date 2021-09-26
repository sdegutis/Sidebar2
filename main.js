const electron = require('electron');
const path = require('path');

electron.app.whenReady().then(() => {

  require('dotenv').config({ path: path.join(__dirname, '.env') });

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
  // win.webContents.toggleDevTools();
  win.setMenu(null);

});
