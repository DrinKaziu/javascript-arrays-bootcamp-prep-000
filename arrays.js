var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, element) {
  [element, ...array];
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
}

function addElementToEndOfArray (array, element) {
  [...array, element];
}

function destructivelyAddElementToEndOfArray (arr, el) {
  arr.push(el);
}

function accessElementInArray (arr, idx) {
  arr[idx];
}

function destructivelyRemoveElementFromBeginningOfArray (arr) {
  arr.shift();
}

function removeElementFromBeginningOfArray (arr) {
  arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray (arr) {
  arr.pop();
}

function removeElementFromEndOfArray (arr) {
  arr.slice(0, arr.length - 1);
}
