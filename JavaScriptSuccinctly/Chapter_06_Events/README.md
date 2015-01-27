It is important to keep in mind that you can declare as many custom ready() events as you
would like. You are not limited to attaching a single .ready() event to the document. The
ready() events are executed in the order that they are included.


Notes:
Passing the jQuery function, a function—e.g. jQuery(funciton(){//code here})—is a
shortcut for jQuery(document).ready().