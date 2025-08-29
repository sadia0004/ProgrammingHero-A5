Selectors
getElementById: This method is used to select a single element based on its distinct id and return one element object.
getElementsByClassName: Returns a live HTMLCollection of all the elements whose class name is given.
querySelector: Returns the first element that matches a given CSS-selector.
querySelectorAll: Chooses all elements that match a given CSS selector and gives a fixed NodeList.

Element Creation:Can make the element with document.createElement() and you place it into the DOM with such functions as parentNode.appendChild().

Event Propagation:Bubbling An event on a child element is propagated to its parent and other ancestors in the tree of the document.
Event Delegation is a pattern which capitalizes upon bubbling by adding one event listener to a parent element to handle all the events of that parent element and all sub-event listeners added after the event.

Event Methods: preventDefault() prevents the default operation of a given event by the browser (e.g., a form could be submitted or a link could be clicked).
stopPropagation() prevents an event from bubbling up the DOM tree to parent elements.
