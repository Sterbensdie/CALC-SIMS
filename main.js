const { app, BrowserWindow } = require('electron');
const path = require('path');

app.whenReady().then(() => {
    const win = new BrowserWindow({
        width: 1250,
        height: 850,
        autoHideMenuBar: true, // Menyembunyikan menu bar biar kayak UI Game asli
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    
    // DI SINI KITA NGE-REFER KE HTML KAMU, BROK!
    win.loadFile('calculus_simulator.html'); 
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});