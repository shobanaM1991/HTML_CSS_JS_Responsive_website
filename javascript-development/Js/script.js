// console.dir(document);
// console.log(document.all);

// Get an element by ID //

/* console.log(document.getElementById('main-header'));

var headerTitle = document.getElementById('main-header');
console.log(headerTitle); */

// Get an elements by classname //

var items = document.getElementsByClassName('list-group-item');
console.log(items[1]);
items[1].textContent='Hello 2';
items[1].style.fontWeight = 'bold';

/* items.style.backgroundColor = 'gray' 
it wont work as we cannot set a value to an array we can loop through it. */

for(var i=0; i < items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4' 
}