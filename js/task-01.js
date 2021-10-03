'use strict';

let categories = '';
let elementsNum = 0;

const liItems = document.querySelector('#categories').children.length;
const ItemsByClass = document.querySelectorAll('li.item');

console.log(`Number of categories: ${liItems}`);

ItemsByClass.forEach(element => {
  categories = element.firstElementChild.textContent
  elementsNum = element.querySelectorAll('li').length;
  const category = `Category: ${categories}`;
  const elements = `Elements: ${elementsNum}`;

  console.log(category);
  console.log(elements);
});
