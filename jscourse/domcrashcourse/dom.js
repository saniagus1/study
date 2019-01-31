// // EXAMINE THE DOCUMENT OBJECT //

// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// GET ELEMENT BY ID//
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// // console.log(headerTitle);
// // headerTitle.textContent = 'Hello'; Include Hiiden object
// // headerTitle.innerText = 'Goodbye';
// // headerTitle.innerHTML = '<h3>Hai</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hellothere';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Error
// // items.style.backgroundColor = '#f4f4f4';

// for (var i=0; i<items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hellothere';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Error
// // items.style.backgroundColor = '#f4f4f4';

// for (var i=0; i<li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERY SELECTOR
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'Send';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'blue';


//  QUERY SELECTORALL
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Helai';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// console.log(odd);

// for(var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
// }


// TRAVERSING THE DOM
var itemList = document.querySelector('#items');
// parent node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';

// parent node
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';


//child nodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// first child (whitespace detected)
// console.log(itemList.firstChild);

// first element child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hei Dude';

// last child (whitespace detected)
// console.log(itemList.lastChild);

 // last element child
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hei Dude';

//nextsibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// previous sibling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

//Create Element

// Create a div
var newDiv = document.createElement('div');

// addclass
newDiv.className = 'hello';

// add id
newDiv.id = 'hello1';

//add atribute
newDiv.setAttribute('title', 'Hello Div');

//Create text node
var newDivText = document.createTextNode('Hello World');

//Add Text to Div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);