'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start({
    productName: 'edis',
    companyName: 'ShanLiTech',
    submitUrl: 'http://localhost:3000',
    autoSubmit: true
});

var mainWindow = null;

app.on('window-all-closed', function () {
	console.log('window-all-closed');
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function () {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });
    mainWindow.loadUrl('file://' + __dirname + '/../browser/index.html');
	mainWindow.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});
