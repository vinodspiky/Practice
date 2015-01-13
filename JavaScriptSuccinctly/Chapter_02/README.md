
see sample33.html in this book.


// Selects all hidden elements
$(':hidden');
// Selects all div elements, then selects only even elements
$('div').filter(':even');



The custom jQuery selector filters :hidden and :visible do not take into account the CSS
visibility property as one might expect. The way jQuery determines if an element is hidden or
visible is if the element consumes any space in the document. To be exact, an element is visible
if its browser-reported offsetWidth or offsetHeight is greater than 0


