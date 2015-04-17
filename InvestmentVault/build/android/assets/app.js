var win = Ti.UI.createWindow();
var webview = Ti.UI.createWebView({
	url: 'portfolio.html'
});
win.add(webview);
win.open();