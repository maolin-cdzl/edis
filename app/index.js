'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

//require('crash-reporter').start({
//    productName: 'edis',
//    companyName: 'ShanLiTech',
//    submitUrl: 'http://localhost:3000',
//    autoSubmit: true
//});


var ipc = require('ipc');

ipc.on('quit',function() {
	app.quit();
});

ipc.on('changeScreenSize',function(e,arg) {
	if( ! mainWindow )
		return;
	if( arg == 'login' ) {
		mainWindow.setSize(1024,768);
	} else {
		var size = require('screen').getPrimaryDisplay().workAreaSize;
		console.log('scree size: ' + size.width + 'x' + size.height);
		mainWindow.setSize(Math.floor(size.width * 3/4),Math.floor(size.height * 3/4));
	}
	mainWindow.center();
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
        width: 1024,
        height: 768,
		center: true,
		'auto-hide-menu-bar': true,
		frame: false,
    });
    mainWindow.loadUrl('file://' + __dirname + '/../browser/index.html');
	mainWindow.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});
