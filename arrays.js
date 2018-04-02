var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  return array.unshift(element);
}

function addElementToEndOfArray (arr, el) {
  return [el, ...arr];
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
