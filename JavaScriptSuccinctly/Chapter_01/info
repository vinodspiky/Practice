1.The custom ready() event is not entirely needed. If your JavaScript code does not affect the
DOM, you can include it anywhere in the HTML document

2.But Most JavaScript nowadays, especially jQuery code, will involve manipulating the DOM. This
means the DOM has to be fully parsed by the browser in order for you to operate on it.

3.To avoid using the ready() event for code that operates on the DOM, you can simply place
your code in an HTML document before the closing </body> element.

4.Doing so ensures the
DOM is completely loaded, simply because the browser will parse the document from top to
bottom. If you place your JavaScript code in the document after the DOM elements it
manipulates, there is no need to use the ready() event.