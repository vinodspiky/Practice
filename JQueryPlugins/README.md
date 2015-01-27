............................................
$( "a" ).css( "color", "red" );

 Whenever you use the $ function to select elements, it returns a jQuery object. This object contains all of the methods you've been using (.css(), .click(), etc.) and all of the elements that fit your selector.

  The jQuery object gets these methods from the <strong>$.fn</strong>object. This object contains all of the jQuery object methods, and if we want to write our own methods, it will need to contain those as well


  <strong>Basic Plugin Authoring</strong>


  Let's say we want to create a plugin that makes text within a set of retrieved elements green. All we have to do is add a function called greenify to $.fn and it will be available just like any other jQuery object method.


$.fn.greenify = function() {
    this.css( "color", "green" );
};
 
$( "a" ).greenify(); // Makes all the links green.


Notice that to use .css(), another method, we use this, not $( this ). This is because our greenify function is a part of the same object as .css().


to DO chaining

$.fn.greenify = function() {
    this.css( "color", "green" );
    return this;//returning this..is keypoint here
}
 
$( "a" ).greenify().addClass( "greenified" );



<strong>Protecting the $ Alias and Adding Scope</strong>

Using Immediately Invoked Function Expression


(function ( $ ) {
 
    $.fn.greenify = function() {
        this.css( "color", "green" );
        return this;
    };
 
}( jQuery ));






Your typical jQuery object will contain references to any number of DOM elements, and that's why jQuery objects are often referred to as collections. If you want to do any manipulating with specific elements (e.g. getting a data attribute, calculating specific positions) then you need to use .each() to loop through the elements.


$.fn.myNewPlugin = function() {
 
    return this.each(function() {
        // Do something to each element here.
    });
 
};




