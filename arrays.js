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
  return arr.push(el);
}

function accessElementInArray (arr, idx) {
  return arr[idx];
}

function destructivelyRemoveElementFromBeginningOfArray (arr) {
  return arr.shift();
}

function removeElementFromBeginningOfArray (arr) {
  return arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray (arr) {
  return arr.pop();
}

function removeElementFromEndOfArray (arr) {
  return arr.slice(0, arr.length - 1);
}
