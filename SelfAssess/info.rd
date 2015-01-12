................hasLayout Property.................

It’s an internal component of the Windows Internet Explorer rendering engine.

In Internet Explorer, an element is either responsible for sizing and arranging its own contents, or relies on a parent element to size and arrange its contents.

In order to accommodate these two different concepts, the rendering engine makes use of a property called hasLayout that can have the values true or false for the element concerned. We say an element gains a layout or has a layout when the hasLayout property has the value true.

When an element has a layout, it is responsible for sizing and positioning itself and possibly any descendant elements. In simple terms, this means that the element takes more care of itself and its contents, instead of relying on an ancestor element to do all the work. Therefore, some elements will have a layout by default, though the majority do not.

Elements that are responsible for arranging their own contents will have a layout by default, and include the following (this list is not exhaustive):

body and html (in standards mode)
table, tr, th, td
img
hr
input, button, file, select, textarea, fieldset
marquee
frameset, frame, iframe
objects, applets, embed


The main reasons Microsoft gives for the fact that not all elements have a layout by default are “performance and simplicity.” If all elements had a layout by default, a detrimental effect on performance and memory usage would result.


............Zoom:1....................

in IE, some elements have no layout - which results in huge PITA in designing - so there are many non-intrusive ways to give them 'layout'. zoom: 1 is one of them.


