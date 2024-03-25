const { app, BrowserWindow } = require("electron");

app.on("ready", function () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: { nodeIntegration: true, contextIsolation: false },
    });

    win.loadURL(`file://${__dirname}/index.html`);
});
