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