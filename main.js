const { app, BrowserWindow, screen } = require('electron');

const createWindow = () => {
  console.log(screen.getAllDisplays())
  let mousePos = screen.getCursorScreenPoint();
        console.log(mousePos);
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: false,
    // fullscreen: true,
    transparent: true,
    frame: false
  });
  // win.setAlwaysOnTop();
  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
});