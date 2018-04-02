var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(arr, el) {
  return [...arr, el];
}

function destructivelyAddElementToBeginningOfArray (arr, el) {
  return arr.unshift(el);
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
